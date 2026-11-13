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
    cover: coverEntry ? coverEntry[1] : images[0],
    images,
  }
})

export default projects