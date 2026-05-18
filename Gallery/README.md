# Photo gallery folders

Use a folder named **Gallery** or **gallery** in the project root.

Each **subfolder** is one album (event name = folder name):

```
Gallery/
  Rally/
    1.jpeg
    2.jpeg
    cover.jpg   ← optional; otherwise first image is the cover
```

After adding or removing folders/photos, run:

```bash
python scripts/build-gallery.py
```

This updates `js/gallery-data.js` so the site works when you open `index.html` directly (no Live Server needed).
