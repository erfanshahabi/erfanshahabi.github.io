export interface PublicationEntry {
  title: string
  venueHtml: string
  link: string
  authorsHtml: string
}

export const publications: PublicationEntry[] = [
  {
    title: 'AuDiPE: Behavior-Grounded User Simulation via Audited Dialogue-based Profile Enrichment for Conversational Recommender Systems',
    venueHtml: 'Under Review at <strong>EACL 2027 Main Conference</strong> <span style="font-size:0.85em;">(recommended for Findings in ARR May 2026 cycle)</span>',
    link: 'https://2027.eacl.org/',
    authorsHtml: 'A Roshandel*, <strong>E Shahabi</strong>*, MS Sadeghi, A Shakery &nbsp;(*equal contribution, ordered randomly)'
  },
  {
    title: 'PerSo: Evaluating Social Intelligence of LLMs using Real-World Persuasion Scenarios',
    venueHtml: 'Under Review at <strong>EACL 2027 Main Conference</strong>',
    link: 'https://2027.eacl.org/',
    authorsHtml: 'A Zamani, S Esfahanian, <strong>E Shahabi</strong>, MT Pilehvar, A Shakery, Y Yaghoobzadeh'
  }
]
