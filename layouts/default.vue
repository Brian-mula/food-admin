<template>
  <div class="flex">
    <div class="">
    <Sidebar1/>
    </div>
    <div class="pt-2 w-full px-4 bg-purple-100">
    <div>
    <top-nav/>
    </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar1 from '~~/components/sidebar.vue';</script>

<style lang="scss" scoped></style>
