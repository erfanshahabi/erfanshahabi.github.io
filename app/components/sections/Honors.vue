<script setup lang="ts">
import { honors } from '~/data/misc'
</script>

<template>
  <section id="honors">
    <div class="section-header"><h2>Honors &amp; Awards</h2></div>
    <ul class="content-list">
      <li v-for="h in honors" :key="h">{{ h }}</li>
    </ul>
  </section>
</template>
