<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}
</script>

<template>
  <section>
    <NuxtLink to="/blog" class="back-link">← Back to Blog</NuxtLink>
    <div class="section-header"><h2>{{ post.title }}</h2></div>
    <ContentRenderer :value="post" class="prose" />
  </section>
</template>
