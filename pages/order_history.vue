<template>
  <div>
   <h3 class="text-purple-900 p-4 text-xl font-normal "> Orders History</h3>
    <div class="mt-4 bg-white flex items-center">
      <div class="px-2 text-sm font-normal py-2 w-20">id</div>
      <div class="px-2 text-sm font-normal py-2 w-60">Name</div>
      <div class="px-2 text-sm font-normal py-2 w-40">Payment</div>
      <div class="px-2 text-sm font-normal py-2 w-40">Type</div>
      <div class="px-2 text-sm font-normal py-2 w-40">Status</div>
      <div class="px-2 text-sm font-normal py-2 w-40">Total</div>
      <div class="px-2 text-sm font-normal py-2 w-20">Action</div>
    </div>
    <div
      v-for="order in orders"
      :key="order.id"
      class="mt-1 bg-white flex items-left hover:translate-x-1"
    >
      <div class="px-2 text-sm font-normal py-2 w-20">{{ order.id }}</div>
      <div class="px-2 text-sm font-normal py-2 w-60">{{ order.name }}</div>
      <div class="px-2 text-sm font-normal py-2 w-40">{{ order.payment }}</div>
      <div class="px-2 text-sm font-normal py-2 w-40 text-orange-600">
        {{ order.type }}
      </div>
      <div class="px-2 text-sm font-normal py-2 w-40 text-yellow-300">
        {{ order.status }}
      </div>
      <div class="px-2 text-sm font-normal py-2 w-40">{{ order.total }}</div>
      <div class="px-2 text-sm font-normal py-2 w-20">
        <div class="w-full text-right">
          <Menu as="div" class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                <font-awesome-icon
                  :icon="['fas', 'ellipsis-h']"
                  class="cursor-pointer"
                />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'eye']"
                        class="px-2 text-orange-500"
                      />
                      View
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <font-awesome-icon
                        :icon="['fas', 'trash']"
                        class="px-2 text-orange-500"
                      />
                      Delete
                    </button>
                  </MenuItem>
                </div>
                
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const orders = ref([
  {
    id: 1234,
    name: "Mulati Brian",
    payment: "Cash",
    type: "Delivery",
    status: "On the way",
    total: 3000,
  },
  {
    id: 1235,
    name: "Mulati Lydiah",
    payment: "Paid",
    type: "Delivery",
    status: "Delivered",
    total: 200,
  },
]);
</script>

<style lang="scss" scoped></style>
