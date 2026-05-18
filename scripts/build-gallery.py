#!/usr/bin/env python3
"""Scan Gallery/ (or gallery/) and write gallery-data for offline + server use."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JSON_OUTPUT_NAMES = ("gallery-data.json",)
JS_OUTPUT = ROOT / "js" / "gallery-data.js"

IMAGE_EXT = {".jpg", ".jpeg", ".png", ".webp", ".gif"}
COVER_NAMES = {"cover", "coverphoto", "thumbnail", "album-cover"}

HINDI_NAMES: dict[str, str] = {
    "NewsPaper": "समाचार पत्र",
    "Rally": "रैली एवं जनसभा",
    "Saaf Safai": "स्वच्छता अभियान",
    "Samna Samaro": "सम्मान समारोह",
    "Tree Plantation": "वृक्षारोपण",
    "Others": "अन्य कार्यक्रम",
}


def find_gallery_dir() -> Path | None:
    for name in ("Gallery", "gallery"):
        path = ROOT / name
        if path.is_dir():
            return path
    return None


def natural_key(path: Path) -> list:
    parts = re.split(r"(\d+)", path.stem.lower())
    return [int(p) if p.isdigit() else p for p in parts]


def slugify(name: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")


def pick_cover(images: list[Path]) -> Path:
    for img in images:
        if img.stem.lower() in COVER_NAMES:
            return img
    return images[0]


def rel_url(path: Path) -> str:
    return path.relative_to(ROOT).as_posix()


def build() -> dict:
    gallery_dir = find_gallery_dir()
    albums = []

    if gallery_dir is None:
        return {"generatedAt": None, "initialVisible": 6, "albums": []}

    for folder in sorted(gallery_dir.iterdir(), key=lambda p: p.name.lower()):
        if not folder.is_dir() or folder.name.startswith("."):
            continue

        images = sorted(
            [f for f in folder.iterdir() if f.is_file() and f.suffix.lower() in IMAGE_EXT],
            key=natural_key,
        )
        if not images:
            continue

        cover = pick_cover(images)
        folder_name = folder.name
        albums.append(
            {
                "id": slugify(folder_name),
                "folder": folder_name,
                "name": folder_name,
                "nameHi": HINDI_NAMES.get(folder_name, folder_name),
                "nameEn": folder_name,
                "cover": rel_url(cover),
                "images": [rel_url(img) for img in images],
                "count": len(images),
            }
        )

    from datetime import datetime, timezone

    return {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "initialVisible": min(6, len(albums)) if albums else 6,
        "albums": albums,
    }


def write_js(data: dict) -> None:
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    JS_OUTPUT.write_text(
        "/* Auto-generated — run: python scripts/build-gallery.py */\n"
        f"window.GALLERY_DATA = {payload};\n",
        encoding="utf-8",
    )


def main() -> None:
    data = build()
    gallery_dir = find_gallery_dir()

    if gallery_dir:
        for name in JSON_OUTPUT_NAMES:
            out = gallery_dir / name
            out.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"Wrote {out}")

    write_js(data)
    print(f"Wrote {JS_OUTPUT} ({len(data['albums'])} albums)")


if __name__ == "__main__":
    main()
