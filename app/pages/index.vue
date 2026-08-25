<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <SectionsAbout />
  <SectionsEducation />
  <!-- <SectionsPublications /> hidden for now -->
  <SectionsResearch />
  <SectionsExperiences />
  <SectionsTeaching />
  <SectionsProjects />
  <!-- <SectionsCourses /> hidden for now -->
  <SectionsSkills />
  <SectionsHonors />
  <SectionsInterests />
  <footer>
    <p>© {{ year }} Erfan Shahabi. All rights reserved.</p>
  </footer>
</template>
