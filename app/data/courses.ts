export interface CourseEntry {
  title: string
  meta: string
  description: string
}

export const courses: CourseEntry[] = [
  {
    title: 'Natural Language Processing',
    meta: 'University of Tehran • Dr. Hesham Faili',
    description: 'Progressed from fundamental NLP concepts to advanced techniques. Implemented a chatbot using tool-use strategies, APIs, Transformers, Hugging Face, Langchain, Langgraph, and agents.'
  },
  {
    title: 'Large Language Models',
    meta: 'University of Tehran • Dr. MJ Dousti, Dr. Y Yaghoob Zadeh',
    description: 'Developed strong skills working with LLMs through practical projects. Extensive experience with APIs, Transformers, Hugging Face, Langchain, Langgraph, and agents.'
  },
  {
    title: 'Intelligent Information Retrieval',
    meta: 'University of Tehran • Dr. Azadeh Shakery',
    description: 'Studied ad-hoc retrieval methods, embeddings, BERT models, and LLMs in retrieval-augmented generation (RAG) systems.'
  },
  {
    title: 'Advanced Data Mining',
    meta: 'University of Tehran • Dr. Azadeh Shakery',
    description: 'Covered data fundamentals, data cubes, classification, clustering, and deep learning applications on real-world datasets.'
  },
  {
    title: 'Social Networks',
    meta: 'University of Tehran • Dr. Masoud Asadpour',
    description: 'Studied graph theory, centrality measures, and community detection with applications to real-world network data.'
  }
]
