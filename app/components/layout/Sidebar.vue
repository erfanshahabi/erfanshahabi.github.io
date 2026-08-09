<script setup lang="ts">
import { navItems } from '~/data/nav'

const sidebarOpen = useSidebarOpen()
const activeSection = useActiveSection()
const route = useRoute()

function closeSidebarOnMobile() {
  sidebarOpen.value = false
}

function isActive(item: (typeof navItems)[number]) {
  if (item.id === 'blog') return route.path.startsWith('/blog')
  return route.path === '/' && activeSection.value === item.id
}
</script>

<template>
  <aside class="sidebar" :class="{ active: sidebarOpen }">
    <div class="profile">
      <img src="/erfan_shahabi.jpg" alt="Erfan Shahabi" class="profile-img">
      <h1 class="profile-name">Erfan Shahabi</h1>
      <p class="profile-title">NLP/LLMs Researcher</p>
      <div class="social-links">
        <a href="https://www.linkedin.com/in/erfan-shahabi-2b6374202/" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/erfanshahabi" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/erfshahabi" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
      </div>
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <a href="mailto:ErfanShahabi@outlook.com">ErfanShahabi@outlook.com</a>
        </div>
      </div>
      <a href="/Erfan_Shahabi_cv.pdf" download class="btn-download">Download CV</a>
    </div>
    <nav class="nav">
      <NuxtLink
        v-for="item in navItems"
        :key="item.id"
        :to="item.href"
        :class="{ active: isActive(item) }"
        @click="closeSidebarOnMobile"
      >{{ item.label }}</NuxtLink>
    </nav>
  </aside>
</template>
