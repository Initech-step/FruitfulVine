<template>
  <div class="bg-black py-20 sm:py-28 lg:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Section Header -->
      <div class="mx-auto max-w-2xl lg:mx-0 mb-16">
        <div class="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-red-950/30 border border-red-900/30">
          <span class="text-xs font-semibold text-red-400 uppercase tracking-wider">Latest Insights</span>
        </div>
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
          From the <span class="relative inline-block">
            <span class="relative z-10 text-red-600">Blog</span>
            <span class="absolute bottom-1 left-0 w-full h-3 bg-red-600/20 -z-0"></span>
          </span>
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-400">
          Expert advice, industry insights, and tips to help you get the most from your devices and stay ahead in the tech world.
        </p>
      </div>

      <!-- Blog Grid -->
      <div class="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-800 pt-12 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article v-for="post in posts" :key="post.id" 
                 class="group flex flex-col bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-900/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-red-950/20 hover:-translate-y-1">
          
          <!-- Card Content -->
          <div class="flex flex-col flex-1 p-6 sm:p-8">
            <!-- Meta Information -->
            <div class="flex items-center gap-x-3 text-xs mb-4">
              <time :datetime="post.datetime" class="flex items-center text-gray-500 font-medium">
                <svg class="w-4 h-4 mr-1.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {{ post.date }}
              </time>
              <span class="text-gray-700">•</span>
              <a :href="post.category.href" 
                 class="relative z-10 rounded-full bg-gray-900/60 border border-gray-800 px-3 py-1.5 font-semibold text-gray-300 hover:bg-red-950/40 hover:text-red-400 hover:border-red-900/50 transition-all duration-300">
                {{ post.category.title }}
              </a>
            </div>

            <!-- Article Content -->
            <div class="flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300 mb-3 line-clamp-2">
                <a :href="post.href" class="focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black rounded">
                  <span class="absolute inset-0"></span>
                  {{ post.title }}
                </a>
              </h3>
              <p class="text-sm leading-relaxed text-gray-400 line-clamp-3 mb-6">
                {{ post.description }}
              </p>

              <!-- Read More Link -->
              <div class="mt-auto pt-4 border-t border-gray-800">
                <a :href="post.href" 
                   class="inline-flex items-center text-sm font-semibold text-red-500 hover:text-red-400 transition-colors duration-300 group/link">
                  Read article
                  <svg class="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                       fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Author Section -->
          <div class="relative mt-auto px-6 sm:px-8 py-5 bg-white/[0.02] border-t border-gray-800">
            <div class="flex items-center gap-x-4">
              <div class="relative">
                <img :src="post.author.imageUrl" 
                     alt="" 
                     class="w-12 h-12 rounded-full bg-gray-800 ring-2 ring-gray-800 group-hover:ring-red-900/50 transition-all duration-300" />
                <div class="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10"></div>
              </div>
              <div class="text-sm flex-1">
                <p class="font-semibold text-white group-hover:text-red-400 transition-colors duration-300">
                  <a :href="post.author.href" class="focus:outline-none">
                    <span class="absolute inset-0"></span>
                    {{ post.author.name }}
                  </a>
                </p>
                <p class="text-gray-500 text-xs mt-0.5">{{ post.author.role }}</p>
              </div>
              <svg class="w-5 h-5 text-gray-700 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-300" 
                   fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </article>
      </div>

      <!-- View All CTA -->
      <div class="mt-16 flex justify-center">
        <a href="#" 
           class="group inline-flex items-center gap-x-2 rounded-xl bg-white/[0.02] border border-gray-800 px-8 py-4 text-sm font-semibold text-white hover:bg-red-950/20 hover:border-red-900/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-black/20 hover:shadow-red-950/30">
          <span>View all articles</span>
          <svg class="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" 
               fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const posts = [
  {
    id: 1,
    title: 'Essential Phone Maintenance Tips for Longevity',
    href: '#',
    description:
      'Discover expert techniques to extend your phone\'s lifespan, from proper charging habits to optimal storage conditions. Learn how small daily practices can make a significant difference.',
    date: 'Dec 28, 2024',
    datetime: '2024-12-28',
    category: { title: 'Phone Care', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Tech Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Choosing the Right Screen Protector: A Complete Guide',
    href: '#',
    description: 'Compare tempered glass, plastic film, and liquid protectors. Understand the pros and cons of each type to make an informed decision for your device.',
    date: 'Dec 22, 2024',
    datetime: '2024-12-22',
    category: { title: 'Accessories', href: '#' },
    author: {
      name: 'Lindsay Walton',
      role: 'Product Expert',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Signs Your Phone Needs Professional Repair',
    href: '#',
    description:
      'Learn to identify common warning signs that indicate your device requires expert attention. From battery issues to screen problems, know when to seek professional help.',
    date: 'Dec 15, 2024',
    datetime: '2024-12-15',
    category: { title: 'Repair Tips', href: '#' },
    author: {
      name: 'Tom Cook',
      role: 'Repair Technician',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
</script>