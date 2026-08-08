export interface EducationEntry {
  degree: string
  meta: string
  contentHtml: string
}

export const education: EducationEntry[] = [
  {
    degree: 'M.Sc. in Information Technology Engineering',
    meta: 'University of Tehran, Tehran, Iran • Sep 2024 – Present',
    contentHtml: `
      <p><strong>Supervisors:</strong> <a href="https://scholar.google.com/citations?user=E-QpN74AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Azadeh Shakery</a>, <a href="https://yyaghoobzadeh.github.io/" target="_blank" rel="noopener noreferrer">Dr. Yadollah Yaghoobzadeh</a></p>
      <p><strong>GPA:</strong> 4.0 / 4.0 (17.76 / 20)</p>
      <p><strong>Thesis:</strong> An Investigation and Enhancement of Strategic Behavior of Large Language Models in Social Context</p>
    `
  },
  {
    degree: 'B.Sc. in Industrial Engineering',
    meta: 'Islamic Azad University, Science and Research Branch • Sep 2019 – Aug 2023',
    contentHtml: `
      <p><strong>Supervisor:</strong> Dr. Abbas Saghaei</p>
      <p><strong>GPA:</strong> 4.0 / 4.0 (18.07 / 20)</p>
      <p><strong>Thesis:</strong> Used Car Price Prediction Using Machine Learning Methods</p>
    `
  }
]
