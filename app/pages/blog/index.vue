<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-list', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
  <section>
    <div class="section-header"><h2>Blog</h2></div>
    <div v-if="posts && posts.length" class="blog-list">
      <NuxtLink v-for="post in posts" :key="post.path" :to="post.path" class="blog-card">
        <div class="blog-card-title">{{ post.title }}</div>
        <div v-if="post.date" class="blog-card-date">{{ post.date }}</div>
      </NuxtLink>
    </div>
    <p v-else class="blog-empty">No posts yet — check back soon.</p>
  </section>
</template>
