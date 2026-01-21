<template>
  <div class="min-h-full bg-white">
    <Disclosure as="nav" class="bg-white border-b border-gray-100 sticky top-0 z-50" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-20 items-center justify-between">
          
          <div class="flex items-center gap-12">
            <NuxtLink to="/admin" class="shrink-0 group">
              <div class="flex items-center gap-2">
                <span class="text-black font-black uppercase tracking-tighter text-xl">FruitFul Vine ADMIN</span>
              </div>
            </NuxtLink>

            <div class="hidden md:block">
              <div class="flex items-baseline space-x-1">
                <Menu as="div" v-for="item in navigation" :key="item.name" class="relative inline-block text-left">
                  <MenuButton
                    :class="[
                      isPathActive(item.path) 
                        ? 'text-red-600' 
                        : 'text-gray-500 hover:text-black', 
                      'group inline-flex items-center rounded-md px-4 py-2 text-sm font-bold uppercase tracking-widest transition-all'
                    ]"
                  >
                    <span>{{ item.name }}</span>
                    <svg class="ml-1 w-4 h-4 transition-transform group-data-[open]:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                    <div v-if="isPathActive(item.path)" class="absolute bottom-[-26px] left-0 w-full h-1 bg-red-600"></div>
                  </MenuButton>

                  <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform scale-100" leave-to-class="transform opacity-0 scale-95">
                    <MenuItems class="absolute left-0 z-10 mt-6 w-56 origin-top-left rounded-xl bg-white p-2 shadow-2xl border border-gray-100 focus:outline-none">
                      <MenuItem v-for="sub in item.dropdown" :key="sub.name" v-slot="{ active }">
                        <NuxtLink :to="sub.href" :class="[active ? 'bg-gray-50 text-red-600' : 'text-black', 'flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-lg transition-colors']">
                          <span :class="['size-1.5 rounded-full bg-red-600 transition-all', active ? 'opacity-100' : 'opacity-0']"></span>
                          {{ sub.name }}
                        </NuxtLink>
                      </MenuItem>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>

          <div class="hidden md:block">
            <button 
              @click="handleSignOut"
              class="flex items-center gap-2 bg-black hover:bg-red-600 text-white px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 transform active:scale-95 shadow-lg hover:shadow-red-500/20"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
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
            <div :class="[isPathActive(item.path) ? 'text-red-600' : 'text-black', 'text-lg font-black uppercase tracking-widest mb-2 px-2']">
              {{ item.name }}
            </div>
            <div class="pl-4 space-y-2 border-l-2 border-gray-100 ml-2">
              <NuxtLink v-for="sub in item.dropdown" :key="sub.name" :to="sub.href" class="block py-1 text-sm text-gray-500 hover:text-red-600 font-bold transition-colors">
                {{ sub.name }}
              </NuxtLink>
            </div>
          </div>
          <button @click="handleSignOut" class="w-full mt-6 bg-gray-100 text-black p-4 rounded-xl font-black uppercase tracking-widest text-xs">
            Confirm Sign Out
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const router = useRouter()

const navigation = [
  { 
    name: 'Main', 
    path: '/admin', // Root path for matching
    dropdown: [
      { name: 'Dashboard Home', href: '/admin' },
      { name: 'Create Product', href: '/admin/product' },
      { name: 'Create Blog', href: '/admin/blog' },
    ]
  },
  { 
    name: 'Products', 
    path: '/admin/product',
    dropdown: [
      { name: 'Create Products', href: '/admin/product' },
      { name: 'Manage Products', href: '/admin/product/manageproduct' }
    ]
  },
  { 
    name: 'Blogs', 
    path: '/admin/blog',
    dropdown: [
      { name: 'Create Blogs', href: '/admin/blog' },
      { name: 'Manage Blogs', href: '/admin/blog/manageblog' }
    ]
  },
  { 
    name: 'Contact', 
    path: '/admin/contact',
    dropdown: [
      { name: 'View Contact Request', href: '/admin/contact' },
    ]
  },
  { 
    name: 'Categories', 
    path: '/admin/categories',
    dropdown: [
      { name: 'Create Categories', href: '/admin/categories' },
      { name: 'Manage Categories', href: '/admin/categories/managecategories' }
    ]
  }
]

// Logic: Check if the current route starts with the nav item path
const isPathActive = (path: string) => {
  if (path === '/admin') {
    return route.path === '/admin' // Exact match for Home
  }
  return route.path.startsWith(path) // Matches sub-pages (e.g., /admin/product/manage)
}

const handleSignOut = () => {
  localStorage.removeItem('FVTOKEN')
  router.push('/login')
}
</script>