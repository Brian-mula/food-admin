<template>
  <div>
    <div class="w-60 h-screen">
      <div class="overflow-y-auto py-4 px-3 bg-gray-50">
        <ul class="space-y-2">
          <nuxt-link to="" class="flex items-center pl-2.5 mb-5 cursor-pointer">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/23/21/21/label-2780146__340.png"
              class="mr-3 h-6 sm:h-7"
              alt="Flowbite Logo"
            />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap text-orange-600"
              >Bostone</span
            >
          </nuxt-link>
          <li>
            <nuxt-link
            
              to="/"
              class="flex items-center p-2 text-base font-normal text-black rounded-sm hover:bg-pink-400 bg-white"
            >
              <font-awesome-icon :icon="['fas','home']" class="text-black"/>
              <span class="ml-3">Live Orders</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
            
              to="/offers"
              class="flex items-center p-2 text-base font-normal text-black rounded-sm hover:bg-pink-500 bg-white"
            >
              <font-awesome-icon :icon="['fas','usd']" class="text-black"/>
              <span class="ml-3">Offers</span>
            </nuxt-link>
          </li>
           <li>
            <nuxt-link
            
              to="/order_history"
              class="flex items-center p-2 text-base font-normal text-black rounded-sm hover:bg-pink-400 bg-white"
            >
              <font-awesome-icon :icon="['fas','archive']" class="text-black"/>
              <span class="ml-3">Order History</span>
            </nuxt-link>
          </li>
           <li>
            <nuxt-link
            
              to="/food"
              class="flex items-center p-2 text-base font-normal text-black rounded-sm hover:bg-pink-400 bg-white"
            >
              <font-awesome-icon :icon="['fas','cutlery']" class="text-black"/>
              <span class="ml-3">Food</span>
            </nuxt-link>
          </li>
           <li>
            <nuxt-link
            
              to="/stock"
              class="flex items-center p-2 text-base font-normal text-black rounded-sm hover:bg-pink-400 bg-white"
            >
              <font-awesome-icon :icon="['fas','university']" class="text-black"/>
              <span class="ml-3">Stock</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="css" scoped>
.router-link-exact-active{
    background-color: rgb(247, 68, 223);
}
</style>
