<template>
  <div>
    <h3 class="text-purple-900 p-4 text-xl font-normal">Live Orders</h3>
    <div class="flex justify-between items-center">
    <div
      
      class="flex items-center justify-center p-4 w-80 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 "
    >
    <div class="px-2">
    <font-awesome-icon :icon="['fas','shopping-bag']" class="text-yellow-500 h-8 w-8"/>
    </div>
      <div class="">
      <h5
        class="mb-1 text-2xl font-bold tracking-tight text-gray-900"
      >
        50
      </h5>
      <p class="font-normal text-black  text-xl">
        Orders
      </p>
      </div>
    </div>
    <div
      
      class="flex items-center justify-center p-4 w-80 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 "
    >
    <div class="px-2">
    <font-awesome-icon :icon="['fas','calendar']" class="text-yellow-500 h-8 w-8"/>
    </div>
      <div class="">
      <h5
        class="mb-1 text-2xl font-bold tracking-tight text-gray-900"
      >
        30
      </h5>
      <p class="font-normal text-black  text-xl">
        Tota Pending Orders
      </p>
      </div>
    </div>
    <div
      
      class="flex items-center justify-center p-4 w-80 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 "
    >
    <div class="px-2">
    <font-awesome-icon :icon="['fas','truck']" class="text-yellow-500 h-8 w-8"/>
    </div>
      <div class="">
      <h5
        class="mb-1 text-2xl font-bold tracking-tight text-gray-900"
      >
        26
      </h5>
      <p class="font-normal text-black  text-xl">
        Total Dispatch
      </p>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
