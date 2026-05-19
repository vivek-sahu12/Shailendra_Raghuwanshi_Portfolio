/**
 * ============================================
 * SHAILENDRA PATEL POLITICAL PORTFOLIO
 * Premium Gallery System
 * ============================================
 */
const galleryAlbums = {

  "Media Coverage": [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
    "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg",
    "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
    "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
    "31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg",
    "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
    "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg",
    "46.jpg", "47.jpg", "48.jpg", "49.jpg", "50.jpg",
    "51.jpg", "52.jpg"
  ],

  "Tree Plantation Drive": [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg"
  ],

  "Public Rally Events": [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg",
    "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg",
    "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg",
    "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg",
    "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg",
    "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg",
    "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg", "35.jpeg",
    "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", "40.jpeg",
    "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg", "45.jpeg",
    "46.jpeg", "47.jpeg", "48.jpeg", "49.jpeg", "50.jpeg",
    "51.jpeg", "52.jpeg", "53.jpeg", "54.jpeg", "55.jpeg",
    "56.jpeg", "57.jpeg", "58.jpeg", "59.jpeg", "60.jpeg",
    "61.jpeg", "62.jpeg", "63.jpeg", "64.jpeg", "65.jpeg",
    "66.jpeg"
  ],


  "Social & Public Activities": [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg",
    "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg",
    "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg",
    "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg",
    "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg",
    "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg", "30.jpeg",
    "31.jpeg", "32.jpeg", "33.jpeg", "34.jpeg", "35.jpeg",
    "36.jpeg", "37.jpeg", "38.jpeg", "39.jpeg", "40.jpeg",
    "41.jpeg", "42.jpeg", "43.jpeg", "44.jpeg", "45.jpeg",
    "46.jpeg", "47.jpeg", "48.jpeg", "49.jpeg"
  ],

  "Self": [
    "1.png",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"

  ],

  "Videos": [
    "1.mp4",
    "2.mp4"
  ],




  "Cleanliness Campaign": [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg"
  ],

  "Community Distribution Program": [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg"
  ],

  "Others": [
    "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg",
    "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpeg",
    "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg",
    "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg", "20.jpeg",
    "21.jpeg", "22.jpeg", "23.jpeg", "24.jpeg", "25.jpeg",
    "26.jpeg", "27.jpeg", "28.jpeg", "29.jpeg"]

};

(function () {
  'use strict';

  // Constants

  const albumTranslations = {
    "Media Coverage": "मीडिया कवरेज",
    "Public Rally Events": "जनसभा एवं रैली",
    "Cleanliness Campaign": "स्वच्छता अभियान",
    "Community Distribution Program": "सामुदायिक वितरण कार्यक्रम",
    "Tree Plantation Drive": "वृक्षारोपण अभियान",
    "Social & Public Activities": "सामाजिक एवं जन कार्य",
    "Others": "अन्य",
    "Videos": "वीडियो",
    "Self": "स्वयं"
  };

  const albumFolderNames = {
    "Media Coverage": "media-coverage",
    "Public Rally Events": "public-rally-events",
    "Cleanliness Campaign": "cleanliness-campaign",
    "Community Distribution Program": "community-distribution-program",
    "Tree Plantation Drive": "tree-plantation-drive",
    "Social & Public Activities": "social-and-public-activities",
    "Others": "others",
    "Videos": "videos",
    "Self": "self"
  };

  const ALBUMS_PER_PAGE = 6;
  let isExpanded = false;

  // DOM Elements
  const albumsGrid = document.getElementById('albumsGrid');
  const albumsGridMore = document.getElementById('albumsGridMore');
  const viewMoreWrap = document.getElementById('galleryViewMoreWrap');
  const viewMoreBtn = document.getElementById('viewMoreAlbumsBtn');
  const galleryEmpty = document.getElementById('galleryEmpty');
  const galleryLoading = document.getElementById('galleryLoading');

  // Album View DOM
  const albumView = document.getElementById('albumView');
  const albumViewBack = document.getElementById('albumViewBack');
  const albumViewTitle = document.getElementById('albumViewTitle');
  const albumViewCount = document.getElementById('albumViewCount');
  const albumPhotos = document.getElementById('albumPhotos');

  // Lightbox DOM
  const lightbox = document.getElementById('lightbox');
  // Removed const lightboxImg from here since it gets replaced dynamically
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const lightboxCaption = document.getElementById('lightboxCaption');

  let currentAlbumKey = null;
  let currentMediaIndex = 0;
  let currentAlbumMedia = [];
  let allAlbumKeys = [];
  let albumsRendered = 0;

  // Hide loading
  if (galleryLoading) galleryLoading.style.display = 'none';

  // Handle popstate for back button
  window.addEventListener('popstate', function (e) {
    const hash = window.location.hash;

    if (hash === '#album') {
      // We are at album level. Close lightbox if it's open.
      if (lightbox.classList.contains('active')) {
        closeLightbox(true);
      }
    } else if (hash === '#lightbox') {
      // At lightbox level, do nothing.
    } else {
      // Hash is empty or different. Close both.
      if (lightbox.classList.contains('active')) {
        closeLightbox(true);
      }
      if (albumView.classList.contains('active')) {
        closeAlbum(true);
      }
    }
  });

  function initGallery() {
    const albumKeys = Object.keys(galleryAlbums);

    if (albumKeys.length === 0) {
      if (galleryEmpty) galleryEmpty.removeAttribute('hidden');
      return;
    }

    renderAlbums(albumKeys);

    if (albumKeys.length > ALBUMS_PER_PAGE) {
      viewMoreWrap.removeAttribute('hidden');
      viewMoreBtn.addEventListener('click', toggleMoreAlbums);
    }

    albumViewBack.addEventListener('click', () => closeAlbum(false));

    // Lightbox events
    lightboxClose.addEventListener('click', () => closeLightbox(false));
    lightboxPrev.addEventListener('click', showPrevMedia);
    lightboxNext.addEventListener('click', showNextMedia);

    // Keyboard and Swipe
    document.addEventListener('keydown', handleLightboxKeydown);
    initSwipe();
  }

  function getMediaPath(albumName, filename) {
    // Get clean web-safe folder name without spaces or special characters
    const folderName = albumFolderNames[albumName] || albumName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const encodedFile = encodeURIComponent(filename);
    const path = `Gallery/${folderName}/${encodedFile}`;
    // Debugging: Log generated path
    console.log("Generated path:", path);
    return path;
  }

  function isVideo(filename) {
    return filename.toLowerCase().endsWith('.mp4');
  }

  function createAlbumCard(albumName, mediaList) {
    const coverFile = mediaList.length > 0 ? mediaList[0] : null;
    const count = mediaList.length;
    const coverPath = coverFile ? getMediaPath(albumName, coverFile) : '';

    const card = document.createElement('div');
    card.className = 'album-card animate-on-scroll';
    card.setAttribute('data-animation', 'scaleIn');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    let coverHtml = '';
    if (coverFile && !isVideo(coverFile)) {
      // Implement Thumbnail Fallback
      const folderName = albumFolderNames[albumName] || albumName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const thumbFile = coverFile.substring(0, coverFile.lastIndexOf('.')) + '.webp';
      const thumbPath = `Gallery/${folderName}/thumbnails/${encodeURIComponent(thumbFile)}`;

      coverHtml = `<img src="${thumbPath}" alt="${albumName}" class="album-cover-img" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='${coverPath}';">`;
    } else if (coverFile && isVideo(coverFile)) {
      // Load only video metadata/first frame
      coverHtml = `<video src="${coverPath}#t=0.1" class="album-cover-img" muted playsinline preload="metadata"></video>`;
    }

    card.innerHTML = `
      <div class="album-card-cover">
        ${coverHtml}
        <div class="album-card-overlay"></div>
        <div class="album-card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
      </div>
      <div class="album-card-body">
        <h3 class="album-card-title" data-en="${albumName}" data-hi="${albumTranslations[albumName] || albumName}">${document.documentElement.lang === 'en' ? albumName : (albumTranslations[albumName] || albumName)}</h3>
        <!-- <span class="album-card-meta">${count} Photos/Videos</span> -->
      </div>
    `;

    card.addEventListener('click', () => openAlbum(albumName, mediaList));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAlbum(albumName, mediaList);
      }
    });

    return card;
  }

  function renderNextAlbums(count, targetGrid) {
    const keysToRender = allAlbumKeys.slice(albumsRendered, albumsRendered + count);

    keysToRender.forEach((key, index) => {
      const card = createAlbumCard(key, galleryAlbums[key]);
      const delay = (index % 3) * 0.1;
      card.style.animationDelay = `${delay}s`;
      targetGrid.appendChild(card);

      if (window.IntersectionObserver) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(card);
      } else {
        card.classList.add('animated');
      }
    });

    albumsRendered += keysToRender.length;
  }

  function renderAlbums(albumKeys) {
    allAlbumKeys = albumKeys;
    albumsGrid.innerHTML = '';
    albumsGridMore.innerHTML = '';
    albumsRendered = 0;

    // Initially load only ALBUMS_PER_PAGE
    renderNextAlbums(ALBUMS_PER_PAGE, albumsGrid);
  }

  function toggleMoreAlbums() {
    isExpanded = !isExpanded;
    const isHi = document.documentElement.lang === 'hi';
    const btnSpan = viewMoreBtn.querySelector('span');

    if (isExpanded) {
      // Lazy load remaining albums on demand
      if (albumsRendered < allAlbumKeys.length) {
        renderNextAlbums(allAlbumKeys.length - albumsRendered, albumsGridMore);
      }

      albumsGridMore.classList.add('is-visible');
      albumsGridMore.setAttribute('aria-hidden', 'false');
      viewMoreBtn.classList.add('is-expanded');
      btnSpan.setAttribute('data-hi', 'कम दिखाएं');
      btnSpan.setAttribute('data-en', 'View less');
      btnSpan.textContent = isHi ? 'कम दिखाएं' : 'View less';
    } else {
      albumsGridMore.classList.remove('is-visible');
      albumsGridMore.setAttribute('aria-hidden', 'true');
      viewMoreBtn.classList.remove('is-expanded');
      btnSpan.setAttribute('data-hi', 'और एल्बम देखें');
      btnSpan.setAttribute('data-en', 'View more albums');
      btnSpan.textContent = isHi ? 'और एल्बम देखें' : 'View more albums';

      // Scroll back up to gallery start smoothly
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    }
  }

  function openAlbum(albumName, mediaList) {
    currentAlbumKey = albumName;
    currentAlbumMedia = mediaList;

    // Push history state
    history.pushState({ modal: 'album' }, '', '#album');

    const isHi = document.documentElement.lang === 'hi';

    // Breadcrumb style title
    const translatedAlbumName = isHi ? (albumTranslations[albumName] || albumName) : albumName;
    albumViewTitle.innerHTML = `<span class="album-breadcrumb">
      <span class="hi-text">${isHi ? 'मुखपृष्ठ' : 'Home'}</span> > 
      <span class="hi-text">${isHi ? 'गैलरी' : 'Gallery'}</span> > 
      <span class="current" data-en="${albumName}" data-hi="${albumTranslations[albumName] || albumName}">${translatedAlbumName}</span>
    </span>`;

    albumPhotos.innerHTML = '';

    mediaList.forEach((filename, index) => {
      const path = getMediaPath(albumName, filename);
      const isVid = isVideo(filename);

      const el = document.createElement('div');
      el.className = 'album-photo';
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', `View media ${index + 1}`);

      if (isVid) {
        el.innerHTML = `
          <video src="${path}#t=0.1" class="lazy" muted playsinline preload="metadata" onerror="console.error('Failed to load video at:', this.src);"></video>
          <div class="video-indicator">
            <svg viewBox="0 0 24 24" fill="white" width="32" height="32"><path d="M8 5v14l11-7z"/></svg>
          </div>`;
      } else {
        const folderName = albumFolderNames[albumName] || albumName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const thumbFile = filename.substring(0, filename.lastIndexOf('.')) + '.webp';
        const thumbPath = `Gallery/${folderName}/thumbnails/${encodeURIComponent(thumbFile)}`;

        el.innerHTML = `<img src="${thumbPath}" alt="Photo ${index + 1}" loading="lazy" decoding="async" onerror="this.onerror=null; this.src='${path}';">`;
      }

      // Add Download Button
      const safeAlbumName = albumName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const downloadFilename = `${safeAlbumName}-${index + 1}${filename.substring(filename.lastIndexOf('.'))}`;

      const downloadBtn = document.createElement('a');
      downloadBtn.className = 'download-btn';
      downloadBtn.href = path;
      downloadBtn.download = downloadFilename;
      downloadBtn.title = 'Download';
      downloadBtn.setAttribute('aria-label', 'Download');
      downloadBtn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
      `;
      downloadBtn.addEventListener('click', (e) => e.stopPropagation());
      el.appendChild(downloadBtn);

      el.addEventListener('click', () => openLightbox(index));
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
      albumPhotos.appendChild(el);
    });

    albumView.classList.add('active');
    albumView.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeAlbum(fromPopState = false) {
    albumView.classList.remove('active');
    albumView.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    currentAlbumKey = null;
    currentAlbumMedia = [];

    // Cleanup video to stop background playback
    const videos = albumPhotos.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0;
      video.removeAttribute('src'); // Force unload
      video.load();
    });

    albumPhotos.innerHTML = ''; // Clear memory

    if (fromPopState !== true && window.location.hash === '#album') {
      history.back();
    }
  }

  // Lightbox functionality
  function openLightbox(index) {
    currentMediaIndex = index;
    history.pushState({ modal: 'lightbox' }, '', '#lightbox');
    updateLightboxMedia();
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox(fromPopState = false) {
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');

    // Stop video completely
    const currentMedia = document.getElementById('lightboxImg');
    if (currentMedia && currentMedia.tagName === 'VIDEO') {
      currentMedia.pause();
      currentMedia.currentTime = 0;
      currentMedia.removeAttribute('src');
      currentMedia.load();
    }

    // Remove element completely
    const contentBox = document.querySelector('.lightbox-content');
    contentBox.innerHTML = '';

    if (fromPopState !== true && window.location.hash === '#lightbox') {
      history.back();
    }
  }

  function showNextMedia() {
    if (currentMediaIndex < currentAlbumMedia.length - 1) {
      currentMediaIndex++;
      updateLightboxMedia();
    } else {
      // Loop back
      currentMediaIndex = 0;
      updateLightboxMedia();
    }
  }

  function showPrevMedia() {
    if (currentMediaIndex > 0) {
      currentMediaIndex--;
      updateLightboxMedia();
    } else {
      // Loop to end
      currentMediaIndex = currentAlbumMedia.length - 1;
      updateLightboxMedia();
    }
  }

  function updateLightboxMedia() {
    const filename = currentAlbumMedia[currentMediaIndex];
    const path = getMediaPath(currentAlbumKey, filename);
    const isVid = isVideo(filename);

    // Add updating class for transition
    const contentBox = document.querySelector('.lightbox-content');

    contentBox.innerHTML = ''; // Clear previous
    let mediaEl;

    if (isVid) {
      mediaEl = document.createElement('video');
      mediaEl.src = path;
      mediaEl.controls = true;
      mediaEl.autoplay = true;
      mediaEl.playsInline = true;
    } else {
      mediaEl = document.createElement('img');
      mediaEl.src = path;
      mediaEl.onerror = function () {
        console.error('Missing lightbox file:', this.src);
        // Fallback for lightbox image
        this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">📁</text></svg>';
      };
    }

    mediaEl.className = 'lightbox-img';
    mediaEl.id = 'lightboxImg';

    // Update Lightbox Download Link
    const lbDownload = document.getElementById('lightboxDownload');
    if (lbDownload) {
      const safeAlbumName = currentAlbumKey.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      lbDownload.href = path;
      lbDownload.download = `${safeAlbumName}-${currentMediaIndex + 1}${filename.substring(filename.lastIndexOf('.'))}`;
    }

    // Trigger reflow for animation
    mediaEl.classList.add('updating');
    contentBox.appendChild(mediaEl);

    requestAnimationFrame(() => {
      mediaEl.classList.remove('updating');
    });

    // lightboxCaption.textContent = `${currentMediaIndex + 1} / ${currentAlbumMedia.length}`;
  }

  function handleLightboxKeydown(e) {
    if (!lightbox.classList.contains('active')) {
      if (albumView.classList.contains('active') && e.key === 'Escape') {
        closeAlbum();
      }
      return;
    }

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextMedia();
    if (e.key === 'ArrowLeft') showPrevMedia();
  }

  // Simple Swipe detection for lightbox
  function initSwipe() {
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) showNextMedia(); // Swipe left
      if (touchEndX > touchStartX + swipeThreshold) showPrevMedia(); // Swipe right
    }
  }

  // Init

  window.Gallery = {
    onLanguageChange: function () {
      if (currentAlbumKey) {
        const isHi = document.documentElement.lang === 'hi';
        const translatedAlbumName = isHi ? (albumTranslations[currentAlbumKey] || currentAlbumKey) : currentAlbumKey;
        const albumViewTitle = document.getElementById('albumViewTitle');
        if (albumViewTitle) {
          albumViewTitle.innerHTML = `<span class="album-breadcrumb">
                <span class="hi-text">${isHi ? 'मुखपृष्ठ' : 'Home'}</span> > 
                <span class="hi-text">${isHi ? 'गैलरी' : 'Gallery'}</span> > 
                <span class="current" data-en="${currentAlbumKey}" data-hi="${albumTranslations[currentAlbumKey] || currentAlbumKey}">${translatedAlbumName}</span>
              </span>`;
        }
      }
    }
  };
  document.addEventListener('DOMContentLoaded', initGallery);


})();
