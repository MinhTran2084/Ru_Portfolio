import { Link, useParams } from 'react-router-dom'
import projects from '../data/projects'

// Only shows the fields a project actually has.
export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <p>
        Project not found. <Link to="/projects">Back to projects</Link>
      </p>
    )
  }

  return (
    <article>
      <Link to="/projects">Back to projects</Link>
      <h1>{project.title}</h1>

      <dl>
        {project.type && (<><dt>Type</dt><dd>{project.type}</dd></>)}
        {project.year && (<><dt>Year</dt><dd>{project.year}</dd></>)}
        {project.role && (<><dt>Role</dt><dd>{project.role}</dd></>)}
        {project.tools?.length > 0 && (
          <><dt>Tools</dt><dd>{project.tools.join(', ')}</dd></>
        )}
        {project.tags?.length > 0 && (
          <><dt>Tags</dt><dd>{project.tags.join(', ')}</dd></>
        )}
      </dl>

      {project.brief && (<><h2>Brief</h2><p>{project.brief}</p></>)}
      {project.description && (<><h2>Description</h2><p>{project.description}</p></>)}

      <div className="project-images">
        {project.images.map((url) => (
          <img key={url} src={url} alt={project.title} loading="lazy" />
        ))}
      </div>
    </article>
  )
}