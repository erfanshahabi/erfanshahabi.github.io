<script setup lang="ts">
import { interests } from '~/data/misc'
</script>

<template>
  <section id="interests">
    <div class="section-header"><h2>Interests</h2></div>
    <ul class="content-list">
      <li v-for="i in interests" :key="i">{{ i }}</li>
    </ul>
  </section>
</template>
