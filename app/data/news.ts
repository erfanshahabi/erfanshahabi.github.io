export interface NewsEntry {
  date: string
  html: string
}

export const news: NewsEntry[] = [
  {
    date: 'Oct 2026',
    html: `Our paper “<strong>SimInter</strong>: Evidence-Grounded User Simulation with Interview-Based Profile Enrichment for Conversational Recommender Systems” has been submitted to <strong>NAACL 2027</strong> and is currently under review. The preprint is available on <a href="https://arxiv.org/abs/2610.18308" target="_blank" rel="noopener noreferrer">arXiv:2610.18308</a>.`
  },
  {
    date: 'Oct 2026',
    html: `Our paper “<strong>PerSo</strong>: Investigating Facets of LLMs’ Social Intelligence in Real-World Persuasion Scenarios” has been submitted to <strong>NAACL 2027</strong> and is currently under review. The preprint is available on <a href="https://arxiv.org/abs/2610.20548" target="_blank" rel="noopener noreferrer">arXiv:2610.20548</a>.`
  }
]
