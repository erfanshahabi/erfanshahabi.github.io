<script setup lang="ts">
import { education } from '~/data/education'
</script>

<template>
  <section id="education">
    <div class="section-header"><h2>Education</h2></div>
    <div v-for="edu in education" :key="edu.degree" class="timeline-item">
      <h3>{{ edu.degree }}</h3>
      <p class="timeline-meta">{{ edu.meta }}</p>
      <div class="timeline-content" v-html="edu.contentHtml"></div>
    </div>
  </section>
</template>
