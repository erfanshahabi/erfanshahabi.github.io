<script setup lang="ts">
const route = useRoute()
const siteUrl = 'https://erfanshahabi.com'

useHead({
  link: [
    { rel: 'canonical', href: () => `${siteUrl}${route.path}` }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
