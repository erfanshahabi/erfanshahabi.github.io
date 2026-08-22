export interface ExperienceEntry {
  title: string
  metaHtml: string
  contentHtml: string
}

export const experiences: ExperienceEntry[] = [
  {
    title: 'Researcher',
    metaHtml: `<a href="https://ut-iislab.github.io/" target="_blank" rel="noopener noreferrer">Intelligent Information Systems Lab</a> • ECE @ University of Tehran • Sep 2024 – Present`,
    contentHtml: `
      <p><strong>Supervisors:</strong> <a href="https://scholar.google.com/citations?user=E-QpN74AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Azadeh Shakery</a>, <a href="https://yyaghoobzadeh.github.io/" target="_blank" rel="noopener noreferrer">Dr. Yadollah Yaghoobzadeh</a></p>
      <p><strong>Research Area:</strong> Strategic Behavior and Social Reasoning of LLMs</p>
    `
  },
  {
    title: 'AI Engineer',
    metaHtml: `<a href="https://emofid.com" target="_blank" rel="noopener noreferrer">Mofid Stock Brokerage</a> • Tehran, Iran • Feb 2026 – Jul 2026`,
    contentHtml: `<p>Developing AI-powered financial tools leveraging LLMs and information retrieval techniques.</p>`
  }
]
