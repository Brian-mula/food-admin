<template>
  <div>
    <h3 class="text-purple-900 p-4 text-2xl font-normal">
      Food
    </h3>
    
    <div class="flex justify-end mb-2">
    <nuxt-link to="/new_food" class="flex items-center justify-end px-4 bg-green-500 rounded-sm py-2 cursor-pointer ">
    <font-awesome-icon :icon="['fas','plus']" class="text-white px-2" />
    <p class="text-sm font-normal text-white py-1">New Food</p>
    </nuxt-link>
    </div>
    <h3 class="text-purple-900 px-4 pb-2 text-xl font-normal">Categories</h3>
    <div class="grid grid-cols-6 mb-20">
      <div
        v-for="category in categories"
        :key="category.id"
        class="p-4 w-40 h-44 bg-pink-300 rounded-lg border border-gray-200 shadow-sm cursor-pointer"
      >
        <div class="w-full flex items-center justify-center">
          <img
            class="h-20 w-20 rounded-full cursor-pointer"
            :src="category.image"
            alt=""
          />
        </div>
        <div class="w-full flex items-center justify-center">
          <h5
            class="mb-1 text-xl font-normal tracking-tight text-gray-900 py-2"
          >
            {{ category.name }}
          </h5>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-5 gap-3">
    <div class="relative w-52 h-56 bg-white shadow-lg pb-2 rounded-lg mb-16" v-for="food in foods" :key="food.id">
      
      <div
        class="absolute left-7 right-7 rounded-full h-36 top-0 -mt-14 w-36 bg-red-500"
      >
        <img
          class="h-full w-full rounded-full cursor-pointer"
          src="https://cdn.pixabay.com/photo/2022/06/07/20/58/salad-7249259__340.jpg"
          alt=""
        />
      </div>
      <h3 class="text-purple-900 p-4 text-xl font-normal mt-20 text-center">
        Freaky Salad
      </h3>
      <div class="flex justify-between items-center px-4">
        <div class="">
          <p class="text-sm font-normal text-purple-900">60 Calories</p>
        </div>
        <div>
          <p class="text-sm font-normal text-pink-500">Ksh. 3200</p>
        </div>
      </div>
      <nuxt-link :to="{name:'foods-id',params:{id:food.id}}" class="flex items-center justify-center px-2 cursor-pointer  w-24 bg-blue-600 rounded-sm ml-auto mr-auto mt-2">
      <p class="text-sm font-normal text-white py-1">more</p>
      </nuxt-link>
    </div>
    </div>
    <div class="h-5"></div>
  </div>
</template>

<script setup>
const categories = ref([
  {
    id: 123,
    image:
      "https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422__340.jpg",
    name: "Salad",
  },
  {
    id: 124,
    image:
      "https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422__340.jpg",
    name: "Salad",
  },
  {
    id: 125,
    image:
      "https://cdn.pixabay.com/photo/2016/03/27/16/54/food-1283108__340.jpg",
    name: "Burger",
  },
  {
    id: 126,
    image:
      "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699__340.jpg",
    name: "Drinks",
  },
  {
    id: 127,
    image:
      "https://cdn.pixabay.com/photo/2018/05/03/05/19/skewer-3370443__340.jpg",
    name: "Steak Meat",
  },
  {
    id: 128,
    image:
      "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg",
    name: "Pizza",
  },
]);
const foods=ref([
    {
        id:12,
        image: '',
        title:'',
        price:'',
        calories:''
    },
      {
        id:12,
        image: '',
        title:'',
        price:'',
        calories:''
    },
      {
        id:12,
        image: '',
        title:'',
        price:'',
        calories:''
    },
      {
        id:12,
        image: '',
        title:'',
        price:'',
        calories:''
    },
      {
        id:12,
        image: '',
        title:'',
        price:'',
        calories:''
    },
      {
        id:12,
        image: '',
        title:'',
        price:'',
        calories:''
    },
])
</script>

<style lang="scss" scoped></style>
