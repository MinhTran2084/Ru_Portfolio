import { Link, useParams } from 'react-router-dom'
import projects, { formatTag } from '../data/projects'

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

  const hasTools = project.tools?.length > 0
  const hasMeta = project.type || project.role || hasTools || project.year
  // If there is no cover.* file, the loader uses the first image as the cover,
  // so leave it out here to avoid showing it twice.
  const otherImages = project.images.filter((url) => url !== project.cover)

  return (
    <article>
      <Link to="/projects">Back to projects</Link>
      <h1>{project.title}</h1>

      {project.tags?.length > 0 && (
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{formatTag(tag)}</li>
          ))}
        </ul>
      )}

      {project.cover && (
        <img className="project-cover" src={project.cover} alt={project.title} />
      )}

      {hasMeta && (
        <dl className="project-meta">
          {project.type && (<div><dt>Type</dt><dd>{project.type}</dd></div>)}
          {project.role && (<div><dt>Role</dt><dd>{project.role}</dd></div>)}
          {hasTools && (<div><dt>Tools</dt><dd>{project.tools.join(', ')}</dd></div>)}
          {project.year && (<div><dt>Year</dt><dd>{project.year}</dd></div>)}
        </dl>
      )}

      {project.brief && (<><h2>Brief</h2><p>{project.brief}</p></>)}
      {project.description && (<><h2>Description</h2><p>{project.description}</p></>)}

      {otherImages.length > 0 && (
        <div className="project-images">
          {otherImages.map((url) => (
            <img key={url} src={url} alt={project.title} loading="lazy" />
          ))}
        </div>
      )}
    </article>
  )
}