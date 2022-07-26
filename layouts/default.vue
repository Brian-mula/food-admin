<template>
  <div class="flex">
    <div class="">
    <Sidebar1/>
    </div>
    <div class="">
      <slot />
    </div>
  </div>
</template>

<script setup>
import Sidebar1 from '~~/components/sidebar.vue';</script>

<style lang="scss" scoped></style>
