import { useState } from 'react'
import projects, { formatTag } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [tag, setTag] = useState('all')

  const allTags = [...new Set(projects.flatMap((p) => p.tags ?? []))].sort()

  const shown =
    tag === 'all'
      ? projects
      : projects.filter((p) => (p.tags ?? []).includes(tag))

  return (
    <section>
      <h1>Projects</h1>

      <div className="filters">
        <label>
          Filter  {' '}
          <select value={tag} onChange={(e) => setTag(e.target.value)}>
            <option value="all">All</option>
            {allTags.map((t) => (
              <option key={t} value={t}>
                {formatTag(t)}
              </option>
            ))}
          </select>
        </label>
      </div>

      {shown.length === 0 && <p>No projects match.</p>}
      <div className="project-grid">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}