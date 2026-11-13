import { Link } from 'react-router-dom'
import { formatTag } from '../data/projects'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      {project.cover && (
        <img src={project.cover} alt={project.title} loading="lazy" />
      )}
      <h3>{project.title}</h3>
      {project.tags?.length > 0 && (
        <ul className="tags">
          {project.tags.map((tag) => (
            <li key={tag}>{formatTag(tag)}</li>
          ))}
        </ul>
      )}
    </Link>
  )
}