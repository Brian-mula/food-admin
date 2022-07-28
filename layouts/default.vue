<template>
  <div class="flex">
    <div class="sticky top-0 h-screen">
    <Sidebar1/>
    </div>
    <div class="pt-2 w-full px-4 bg-purple-100">
    <div class="">
    <top-nav/>
    </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar1 from '~~/components/sidebar.vue';</script>

<style lang="scss" scoped></style>
