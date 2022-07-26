<template>
    <div>
        <div class="w-60 h-screen">
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 ">
        <ul class="space-y-2">
        <nuxt-link to="/" class="flex items-center pl-2.5 mb-5">
         <img src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146__340.png" class="mr-3 h-6 sm:h-7" alt="Flowbite Logo" />
         <span class="self-center text-xl font-semibold whitespace-nowrap text-orange-600">Bostone</span>
      </nuxt-link>
        <li>
            <nuxt-link to="/" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
               <span class="ml-3">Dashboard</span>
            </nuxt-link>
         </li>
        </ul>
        </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>