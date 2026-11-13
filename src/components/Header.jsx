import { Link, NavLink } from 'react-router-dom'

function scrollToContact() {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  return (
    <header className="site-header">
      <Link to="/">Ru</Link>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <button type="button" onClick={scrollToContact}>Contact</button>
      </nav>
    </header>
  )
}