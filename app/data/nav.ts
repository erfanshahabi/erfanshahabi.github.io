export interface NavItem {
  id: string
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About Me', href: '/#about' },
  { id: 'education', label: 'Education', href: '/#education' },
  { id: 'publications', label: 'Publications', href: '/#publications' },
  { id: 'research', label: 'Research', href: '/#research' },
  { id: 'experiences', label: 'Experiences', href: '/#experiences' },
  { id: 'teaching', label: 'Teaching', href: '/#teaching' },
  { id: 'projects', label: 'Projects', href: '/#projects' },
  // { id: 'courses', label: 'Courses', href: '/#courses' }, // hidden for now
  { id: 'skills', label: 'Skills', href: '/#skills' },
  { id: 'honors', label: 'Honors and Awards', href: '/#honors' },
  { id: 'interests', label: 'Interests', href: '/#interests' }
  // { id: 'blog', label: 'Blog', href: '/blog' } // hidden for now
]
