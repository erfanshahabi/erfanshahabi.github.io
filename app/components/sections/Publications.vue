<script setup lang="ts">
import { publications } from '~/data/publications'
</script>

<template>
  <section id="publications">
    <div class="section-header"><h2>Publications</h2></div>
    <div v-for="pub in publications" :key="pub.title" class="pub-item">
      <div class="pub-title">{{ pub.title }}</div>
      <div class="pub-venue">
        <span v-html="pub.venueHtml"></span>
        <span class="pub-sep">|</span>
        <a :href="`https://arxiv.org/abs/${pub.arxiv}`" target="_blank" rel="noopener noreferrer" class="pub-arxiv">arXiv:{{ pub.arxiv }}</a>
      </div>
      <div class="pub-authors" v-html="pub.authorsHtml"></div>
    </div>
  </section>
</template>
