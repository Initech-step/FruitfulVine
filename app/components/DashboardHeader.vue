<template>
  <div class="min-h-full bg-white">
    <Disclosure as="nav" class="bg-white border-b border-gray-100 sticky top-0 z-50" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          
          <div class="flex items-center gap-12">
            <div class="shrink-0">
              <div class="flex items-center gap-2">
                <div class="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <div class="w-4 h-4 bg-red-600 rotate-45"></div>
                </div>
                <span class="text-black font-black uppercase tracking-tighter text-xl">FruitFul Vine</span>
              </div>
            </div>

            <div class="hidden md:block">
              <div class="flex items-baseline space-x-1">
                <Menu as="div" v-for="item in navigation" :key="item.name" class="relative inline-block text-left">
                  <MenuButton
                    @click="setActive(item)"
                    :class="[
                      item.current 
                        ? 'text-red-600' 
                        : 'text-gray-500 hover:text-black', 
                      'group inline-flex items-center rounded-md px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all'
                    ]"
                  >
                    <span>{{ item.name }}</span>
                    <span class="icon-[tabler--chevron-down] ml-1 size-4 transition-transform group-data-[open]:rotate-180"></span>
                    <div v-if="item.current" class="absolute bottom-[-26px] left-0 w-full h-1 bg-red-600"></div>
                  </MenuButton>

                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute left-0 z-10 mt-6 w-56 origin-top-left rounded-xl bg-white p-2 shadow-2xl border border-gray-100 focus:outline-none">
                      <MenuItem v-for="sub in item.dropdown" :key="sub.name" v-slot="{ active }">
                        <a :href="sub.href" :class="[active ? 'bg-gray-50 text-red-600' : 'text-black', 'flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-lg transition-colors']">
                          <span :class="['size-1.5 rounded-full bg-red-600 opacity-0', active ? 'opacity-100' : '']"></span>
                          {{ sub.name }}
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>

          <div class="hidden md:block">
            <div class="ml-4 flex items-center gap-4 md:ml-6">
              <Menu as="div" class="relative ml-3">
                <button class="btn-lg bg-black text-white p-3 round-5">Sign Out</button>
              </Menu>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-100 focus:outline-none">
              <Bars3Icon v-if="!open" class="block size-6" />
              <XMarkIcon v-else class="block size-6" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="md:hidden bg-white border-t border-gray-100">
        <div class="space-y-1 px-4 pt-4 pb-6">
          <div v-for="item in navigation" :key="item.name" class="py-2">
            <div @click="setActive(item)" :class="[item.current ? 'text-red-600' : 'text-black', 'text-lg font-black uppercase tracking-widest mb-2 px-2']">
              {{ item.name }}
            </div>
            <div class="pl-4 space-y-2 border-l-2 border-gray-100 ml-2">
              <a v-for="sub in item.dropdown" :key="sub.name" :href="sub.href" class="block py-1 text-sm text-gray-500 hover:text-red-600 font-bold">
                {{ sub.name }}
              </a>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <header class="bg-gray-300 py-10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-4">
        <div class="h-10 w-1.5 bg-red-600"></div>
        <h1 class="text-4xl font-black tracking-tighter text-black uppercase">
          {{ activePageName }}
        </h1>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const user = {
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const baseUrl = 'http://localhost:3000/'

const navigation = ref([
  { 
    name: 'Main', 
    href: 'http://localhost:3000/admin/', 
    current: true,
    dropdown: [
      { name: 'Create Product', href: 'http://localhost:3000/admin/product/' },
      { name: 'Create Blog', href: 'http://localhost:3000/admin/blog/' },
      { name: 'View Contact Request', href: '#' }
    ]
  },
  { 
    name: 'Products', 
    href: '#', 
    current: false,
    dropdown: [
      { name: 'Create Products', href: 'http://localhost:3000/admin/product/' },
      { name: 'Manage Products', href: 'http://localhost:3000/admin/product/manageproduct/' }
    ]
  },
  { 
    name: 'Blogs', 
    href: '#', 
    current: false,
    dropdown: [
      { name: 'Create Blogs', href: 'http://localhost:3000/admin/blog/' },
      { name: 'Manage Blogs', href: 'http://localhost:3000/admin/blog/manageblog/' }
    ]
  },
  { 
    name: 'Contact', 
    href: '#', 
    current: false,
    dropdown: [
      { name: 'View Contact Request', href: '#' },
      { name: 'View Form', href: '#' }
    ]
  },
  { 
    name: 'Categories', 
    href: 'http://localhost:3000/admin/categories/', 
    current: false,
    dropdown: [
      { name: 'Create Categories', href: 'http://localhost:3000/admin/categories/' },
      { name: 'View Form', href: 'http://localhost:3000/admin/categories/managecategories/' }
    ]
  }
])

const userNavigation = [
  { name: 'Sign out', href: '#' },
]

const setActive = (selectedItem: any) => {
  navigation.value.forEach(item => {
    item.current = item.name === selectedItem.name
  })
}

const activePageName = computed(() => {
  return navigation.value.find(item => item.current)?.name || 'Dashboard'
})
</script>