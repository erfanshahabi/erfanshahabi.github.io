<script setup lang="ts">
import { skills } from '~/data/skills'
</script>

<template>
  <section id="skills">
    <div class="section-header"><h2>Skills &amp; Expertise</h2></div>
    <div class="skills-grid">
      <div v-for="s in skills" :key="s.label" class="skill-item">
        <div class="skill-label">{{ s.label }}</div>
        <div class="skill-content">{{ s.content }}</div>
      </div>
    </div>
  </section>
</template>
