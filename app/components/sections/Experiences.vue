<script setup lang="ts">
import { experiences } from '~/data/experiences'
</script>

<template>
  <section id="experiences">
    <div class="section-header"><h2>Experiences</h2></div>
    <div v-for="exp in experiences" :key="exp.title + exp.metaHtml" class="timeline-item">
      <h3>{{ exp.title }}</h3>
      <p class="timeline-meta" v-html="exp.metaHtml"></p>
      <div class="timeline-content" v-html="exp.contentHtml"></div>
    </div>
  </section>
</template>
