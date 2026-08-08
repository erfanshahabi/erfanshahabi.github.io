<script setup lang="ts">
import { projects } from '~/data/projects'
</script>

<template>
  <section id="projects">
    <div class="section-header"><h2>Selected Projects</h2></div>
    <div class="project-list">
      <a v-for="p in projects" :key="p.url" :href="p.url" target="_blank" class="project-item">
        <span class="project-title">{{ p.title }}</span>
        <i class="fas fa-external-link-alt project-link"></i>
      </a>
    </div>
  </section>
</template>
