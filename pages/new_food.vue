<template>
  <div>
    <div class="w-2/5 mt-6 bg-white ml-auto mr-auto">
      <h3 class="text-orange-500 px-4 text-xl font-normal text-center py-2">
        Bostone Manager
      </h3>
      <p class="text-sm font-normal text-black py-2 text-center">
        Your are adding new food for your customers
      </p>
      <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
        <form>
          <div class="form-group mb-2">
            <label
              for="exampleInputEmail1"
              class="form-label inline-block mb-2 text-gray-700"
              >Food title:</label
            >
            <input
            v-model="f_title"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="e.g pizza"
            />
          </div>
          <div class="form-group mb-2">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
              >Price:</label
            >
            <input
            v-model="f_price"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="e.g 300"
            />
          </div>
          <div class="form-group mb-2">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
              >Calories:</label
            >
            <input
            v-model="f_calories"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="e.g 10"
            />
          </div>
          <div class="form-group mb-2">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
              >Description:</label
            >
            <textarea
            v-model="f_description"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            ></textarea>
          </div>
          <div class="form-group mb-2">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
              >Image:</label
            >
            <input
            @change="onfileChange"
              type="file"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="e.g 10"
            />
          </div>
          <div class="form-group mb-2">
            <label
              for="exampleInputPassword1"
              class="form-label inline-block mb-2 text-gray-700"
              >Category:</label
            >
            <select
            v-model="f_category"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            >
            <option>Select category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
            </select>
          </div>
         <div class="flex justify-between">
          <div>
          <button
            type="submit"
            class="px-6 py-2.5 bg-gray-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Cancel
          </button>
          </div>
          <div>
          <button
            type="submit"
            class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Submit
          </button>
          </div>
         </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const router=useRouter()
const categories=ref([]);
onMounted(async()=>{
  categories.value=await getAllCategories();
  console.log(categories.value)
})
const emits = defineEmits(["fileChange"]);
const fileUpload = ref(null);
const onfileChange = async (e) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  const { snapshot, downloadUrl, metadata } = await uploadFile(files[0]);
  emits("fileChange", snapshot, downloadUrl, metadata);
  console.log("download url from sell", downloadUrl);
  fileUpload.value = downloadUrl;
};
const f_title=ref('');
const f_price=ref('');
const f_calories=ref('');
const f_description=ref('')
const f_category=ref('')
</script>

<style lang="scss" scoped></style>
