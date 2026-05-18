with open('js/gallery.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_code = """    albumViewTitle.innerHTML = `<span class="album-breadcrumb">
      <span class="hi-text">${isHi ? 'मुखपृष्ठ' : 'Home'}</span> > 
      <span class="hi-text">${isHi ? 'गैलरी' : 'Gallery'}</span> > 
      <span class="current">${albumName}</span>
    </span>`;"""

new_code = """    const translatedAlbumName = isHi ? (albumTranslations[albumName] || albumName) : albumName;
    albumViewTitle.innerHTML = `<span class="album-breadcrumb">
      <span class="hi-text">${isHi ? 'मुखपृष्ठ' : 'Home'}</span> > 
      <span class="hi-text">${isHi ? 'गैलरी' : 'Gallery'}</span> > 
      <span class="current" data-en="${albumName}" data-hi="${albumTranslations[albumName] || albumName}">${translatedAlbumName}</span>
    </span>`;"""

content = content.replace(old_code, new_code)

with open('js/gallery.js', 'w', encoding='utf-8') as f:
    f.write(content)
