<template>
  <div>
    <div class="w-2/5 mt-6 bg-white ml-auto mr-auto">
      <h3 class="text-orange-500 px-4 text-xl font-normal text-center py-2">
        Bostone Manager
      </h3>
      <p class="text-sm font-normal text-black py-2 text-center">
        Your are adding new food category for your customers
      </p>
      <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
        <form>
          <div class="form-group mb-2">
            <label
              for="exampleInputEmail1"
              class="form-label inline-block mb-2 text-gray-700"
              >Catgory name:</label
            >
            <input
              v-model="c_name"
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="e.g pizza"
            />
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
              @click="handleSubmit"
                type="button"
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
const emits = defineEmits(["fileChange"]);
const router=useRouter()
const fileUpload = ref(null);
const onfileChange = async (e) => {
  var files = e.target.files || e.dataTransfer.files;
  if (!files.length) return;
  const { snapshot, downloadUrl, metadata } = await uploadFile(files[0]);
  emits("fileChange", snapshot, downloadUrl, metadata);
  console.log("download url from sell", downloadUrl);
  fileUpload.value = downloadUrl;
};

const c_name=ref('')
const handleSubmit=async()=>{
  if(c_name.value && fileUpload.value){
    await newCategory(c_name.value,fileUpload.value)
    router.push('/food')

  }else{
    console.log('fill out the values first ')
  }
}
</script>

<style lang="scss" scoped></style>
