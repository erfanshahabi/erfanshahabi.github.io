export interface TeachingEntry {
  title: string
  level: string
  metaHtml: string
  contentHtml: string
}

export const teaching: TeachingEntry[] = [
  {
    title: 'Teaching Assistant — Natural Language Processing',
    level: '(Graduate)',
    metaHtml: `<a href="https://nlp-ut.github.io" target="_blank" rel="noopener noreferrer">Course Website</a> • Instructor: <a href="https://scholar.google.com/citations?user=m5tCFEoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Heshaam Faili</a> • ECE @ University of Tehran • Sep 2025 – Present`,
    contentHtml: `
      <p>Designed TravelBot assignment: a conversational travel assistant using ReAct architecture and LangGraph for flight search, hotel booking, and trip planning.</p>
      <p>Implemented RAG pipeline for retrieving destination information and generating personalized travel recommendations.</p>
      <p>Led workshops mentoring students on LangChain and LangGraph frameworks for building agent-based systems.</p>
    `
  },
  {
    title: 'Teaching Assistant — Intelligent Information Retrieval',
    level: '(Graduate)',
    metaHtml: `<a href="https://iir-ut.github.io" target="_blank" rel="noopener noreferrer">Course Website</a> • Instructor: <a href="https://scholar.google.com/citations?user=E-QpN74AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Azadeh Shakery</a> • ECE @ University of Tehran • Sep 2025 – Present`,
    contentHtml: `
      <p>Designed assignments on conversational search, RAG systems, and multi-agent architectures.</p>
      <p>Led technical workshops on LLMs in IR, covering LangChain, LangGraph, and ReAct patterns.</p>
      <p>Guided students in implementing practical retrieval systems using state-of-the-art language models.</p>
    `
  },
  {
    title: 'Teaching Assistant — Advanced Data Mining',
    level: '(Graduate)',
    metaHtml: `Instructor: <a href="https://scholar.google.com/citations?user=E-QpN74AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Azadeh Shakery</a> • ECE @ University of Tehran • Feb 2026 – Present`,
    contentHtml: `
      <p>Designed GNN-based assignment on academic network analysis, where students predict paper authorship and inter-paper relationships using graph neural networks.</p>
      <p>Conducted hands-on workshops on GNN architectures and their applications in network data mining.</p>
    `
  },
  {
    title: 'Teaching Assistant — Natural Language Processing',
    level: '(Graduate)',
    metaHtml: `Instructor: <a href="https://yyaghoobzadeh.github.io/" target="_blank" rel="noopener noreferrer">Dr. Yadollah Yaghoobzadeh</a> • ECE @ University of Tehran • Feb 2026 – Present`,
    contentHtml: `
      <p>Designed and managed a financial advisory chatbot assignment, guiding students in building domain-specific conversational agents using LLMs.</p>
      <p>Led workshops on fine-tuning and prompt engineering for task-specific NLP applications.</p>
    `
  }
]
