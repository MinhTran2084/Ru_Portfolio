import './App.css'

// Finds every image in the folder automatically
const images = import.meta.glob(
  './assets/artworks/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
)

const artworks = Object.entries(images)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, url]) => {
    const name = path.split('/').pop().replace(/\.[^.]+$/, '')
    const title = name.replace(/^\d+[-_]/, '').replace(/[-_]/g, ' ')
    return { id: path, title, url }
  })

function App() {
  return (
    <>
      <header className="site-header">
        <h1>Ru</h1>
        <p>Portfolio</p>
      </header>

      <main className="gallery">
        {artworks.length === 0 && <p>No artworks yet.</p>}
        {artworks.map((art) => (
          <figure key={art.id} className="piece">
            <img src={art.url} alt={art.title} loading="lazy" />
            <figcaption>{art.title}</figcaption>
          </figure>
        ))}
      </main>
    </>
  )
}

export default App