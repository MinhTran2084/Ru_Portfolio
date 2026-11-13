import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="project-card">
      {project.cover && (
        <img src={project.cover} alt={project.title} loading="lazy" />
      )}
      <h3>{project.title}</h3>
      {project.type && <p>{project.type}</p>}
    </Link>
  )
}