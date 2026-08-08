<script setup lang="ts">
import { courses } from '~/data/courses'
</script>

<template>
  <section id="courses">
    <div class="section-header"><h2>Courses</h2></div>
    <div v-for="c in courses" :key="c.title" class="timeline-item">
      <h3>{{ c.title }}</h3>
      <p class="timeline-meta">{{ c.meta }}</p>
      <div class="timeline-content"><p>{{ c.description }}</p></div>
    </div>
  </section>
</template>
