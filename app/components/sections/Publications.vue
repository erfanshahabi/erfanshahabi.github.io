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
        <a v-if="pub.link" :href="pub.link" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt" style="font-size:0.75rem; margin-left:4px;"></i></a>
      </div>
      <div class="pub-authors" v-html="pub.authorsHtml"></div>
    </div>
  </section>
</template>
