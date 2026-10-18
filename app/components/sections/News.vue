<script setup lang="ts">
import { news } from '~/data/news'
</script>

<template>
  <section id="news">
    <div class="section-header"><h2>News</h2></div>
    <ul class="news-list">
      <li v-for="item in news" :key="item.html" class="news-item">
        <span class="news-date">{{ item.date }}</span>
        <span class="news-text" v-html="item.html"></span>
      </li>
    </ul>
  </section>
</template>
