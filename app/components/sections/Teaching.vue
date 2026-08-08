<script setup lang="ts">
import { teaching } from '~/data/teaching'
</script>

<template>
  <section id="teaching">
    <div class="section-header"><h2>Teaching Experience</h2></div>
    <div v-for="item in teaching" :key="item.title + item.metaHtml" class="timeline-item">
      <h3>{{ item.title }} <span style="font-weight:400; font-size:0.9rem;">{{ item.level }}</span></h3>
      <p class="timeline-meta" v-html="item.metaHtml"></p>
      <div class="timeline-content" v-html="item.contentHtml"></div>
    </div>
  </section>
</template>
