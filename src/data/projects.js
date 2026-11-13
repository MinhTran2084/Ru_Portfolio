// Reads every folder in src/projects/ automatically.
// An image whose name starts with "cover" is the thumbnail.

const infos = import.meta.glob('../projects/*/info.json', {
  eager: true,
  import: 'default',
})

const imgs = import.meta.glob(
  '../projects/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
)

const projects = Object.entries(infos).map(([path, info]) => {
  const slug = path.split('/')[2]
  const folder = `../projects/${slug}/`

  const files = Object.entries(imgs)
    .filter(([p]) => p.startsWith(folder))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))

  const coverEntry = files.find(([p]) =>
    p.split('/').pop().toLowerCase().startsWith('cover')
  )
  const images = files
    .filter(([p]) => p !== coverEntry?.[0])
    .map(([, url]) => url)

  return {
    slug,
    ...info,
    // Lowercase so "Digital" and "digital" count as one tag.
    tags: [...new Set((info.tags ?? []).map((t) => String(t).trim().toLowerCase()))],
    cover: coverEntry ? coverEntry[1] : images[0],
    images,
  }
})

// Display form of a tag: "character-design" -> "Character design".
// Use it wherever a tag is shown; filtering uses the raw tag.
export function formatTag(tag) {
  const text = tag.replace(/-/g, ' ')
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export default projects