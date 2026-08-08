<script setup lang="ts">
const sidebarOpen = useSidebarOpen()
const activeSection = useActiveSection()

useHead({
  bodyAttrs: {
    class: computed(() => (sidebarOpen.value ? 'no-scroll' : ''))
  }
})

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

onMounted(() => {
  let rafId: number | null = null

  function setActiveSection() {
    const sections = Array.from(document.querySelectorAll('main section[id]')) as HTMLElement[]
    if (!sections.length) return
    const scrollPosition = window.scrollY + 120
    let current = sections[0].id
    for (const section of sections) {
      if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
        current = section.id
      }
    }
    if (window.scrollY < 100) current = sections[0].id
    activeSection.value = current
  }

  function syncNavScroll() {
    setActiveSection()
    const nav = document.querySelector('.nav') as HTMLElement | null
    if (!nav || window.innerWidth <= 991) return
    const pageScrollable = document.documentElement.scrollHeight - window.innerHeight
    const navScrollable = nav.scrollHeight - nav.clientHeight
    if (pageScrollable <= 0 || navScrollable <= 0) return
    nav.scrollTo({ top: (window.scrollY / pageScrollable) * navScrollable, behavior: 'auto' })
  }

  function onScroll() {
    if (rafId) cancelAnimationFrame(rafId)
    rafId = requestAnimationFrame(syncNavScroll)
  }

  window.addEventListener('scroll', onScroll, { passive: true })
  setActiveSection()

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    if (rafId) cancelAnimationFrame(rafId)
  })
})
</script>

<template>
  <button class="mobile-toggle" aria-label="Toggle navigation" @click="toggleSidebar">
    <i class="fas fa-bars"></i>
  </button>
  <div class="container">
    <div class="layout">
      <LayoutSidebar />
      <main class="main-content">
        <slot />
      </main>
    </div>
  </div>
</template>
