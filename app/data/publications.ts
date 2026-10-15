export interface PublicationEntry {
  title: string
  venueHtml: string
  arxiv: string
  authorsHtml: string
}

export const publications: PublicationEntry[] = [
  {
    title: 'SimInter: Evidence-Grounded User Simulation with Interview-Based Profile Enrichment for Conversational Recommender Systems',
    venueHtml: 'Under Review at <strong>NAACL 2027 Conference</strong> <span style="font-size:0.85em;">(recommended for Findings in ARR May 2026 cycle)</span>',
    arxiv: '2610.18308',
    authorsHtml: '<strong>E Shahabi</strong>*, A Roshandel*, MS Sadeghi, A Shakery &nbsp;(*equal contribution, ordered randomly)'
  },
  {
    title: 'PerSo: Investigating Facets of LLMs’ Social Intelligence in Real-World Persuasion Scenarios',
    venueHtml: 'Under Review at <strong>NAACL 2027 Conference</strong>',
    arxiv: '2610.20548',
    authorsHtml: 'A Zamani*, S Esfahanian*, <strong>E Shahabi</strong>, MT Pilehvar, A Shakery, Y Yaghoobzadeh &nbsp;(*equal contribution, ordered randomly)'
  }
]
