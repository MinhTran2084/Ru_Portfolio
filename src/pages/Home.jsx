import { Link } from 'react-router-dom'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <>
      <section>
        <h1>Ru</h1>
        <p>One or two lines about who she is and what she makes.</p>
        <Link to="/projects">View projects</Link>
      </section>

      <section>
        <h2>Featured</h2>
        {featured.length === 0 && <p>No projects yet.</p>}
        <div className="project-grid">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  )
}