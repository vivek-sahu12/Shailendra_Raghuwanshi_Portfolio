with open('js/gallery.js', 'r', encoding='utf-8') as f:
    content = f.read()

translations = """
const albumTranslations = {
  "Media Coverage": "मीडिया कवरेज",
  "Public Rally Events": "जनसभा एवं रैली",
  "Cleanliness Campaign": "स्वच्छता अभियान",
  "Community Distribution Program": "सामुदायिक वितरण कार्यक्रम",
  "Tree Plantation Drive": "वृक्षारोपण अभियान",
  "Social & Public Activities": "सामाजिक एवं जन कार्य"
};
"""

content = content.replace('const ALBUMS_PER_PAGE = 6;', translations + '\n  const ALBUMS_PER_PAGE = 6;')

replace_old = '<h3 class="album-card-title">${albumName}</h3>'
replace_new = '<h3 class="album-card-title" data-en="${albumName}" data-hi="${albumTranslations[albumName] || albumName}">${document.documentElement.lang === \'en\' ? albumName : (albumTranslations[albumName] || albumName)}</h3>'

content = content.replace(replace_old, replace_new)

with open('js/gallery.js', 'w', encoding='utf-8') as f:
    f.write(content)
