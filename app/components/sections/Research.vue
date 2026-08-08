<script setup lang="ts">
import { researchInterests } from '~/data/misc'
</script>

<template>
  <section id="research">
    <div class="section-header"><h2>Research Interests</h2></div>
    <p class="section-intro">
      As a Research Assistant at the Intelligent Information Systems Laboratory under supervision of
      <a href="https://scholar.google.com/citations?user=E-QpN74AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Dr. Azadeh Shakery</a>
      and
      <a href="https://yyaghoobzadeh.github.io/" target="_blank" rel="noopener noreferrer">Dr. Yadollah Yaghoobzadeh</a>, I focus on:
    </p>
    <ul class="content-list">
      <li v-for="item in researchInterests" :key="item">{{ item }}</li>
    </ul>
  </section>
</template>
