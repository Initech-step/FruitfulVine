<template>
  <div class="relative isolate bg-black px-6 py-15 sm:py-32 lg:px-3">
    <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
      <div class="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>
    <div class="mx-auto max-w-4xl text-center">
      <h2 class="text-base/7 font-semibold text-red-600">Our Services</h2>
      <p class="mt-1 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">All Services Available for Your Needs</p>
    </div>
    <!-- <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p> -->
    <div class="mx-auto mt-5 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[tier.featured ? 'relative bg-black' : 'bg-white/2.5 sm:mx-8 lg:mx-0', tier.featured ? '' : tierIdx === 0 ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl' : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none', 'rounded-3xl p-8 ring-1 ring-white/10 sm:p-10']">
        <!-- <h4 :id="tier.id" :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-400', 'text-base/7 font-semibold']">{{ tier.name }}</h4> -->
        <p class="mt-4 flex items-baseline gap-x-2">
          <span :class="[tier.featured ? 'text-white' : 'text-white', 'text-5xl font-semibold tracking-tight']">{{ tier.priceMonthly }}</span>
          <span :class="[tier.featured ? 'text-gray-400' : 'text-gray-400', 'text-base']"></span>
        </p>
        <p :class="[tier.featured ? 'text-gray-300' : 'text-gray-300', 'mt-6 text-base/7']">{{ tier.description }}</p>
        <ul role="list" :class="[tier.featured ? 'text-gray-300' : 'text-gray-300', 'mt-8 space-y-3 text-sm/6 sm:mt-10']">
          <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
            <CheckIcon :class="[tier.featured ? 'text-red-600' : 'text-red-600', 'h-6 w-5 flex-none']" aria-hidden="true" />
            {{ feature }}
          </li>
        </ul>
        <a :href="tier.href" :aria-describedby="tier.id" :class="[tier.featured ? 'bg-green-500 text-white hover:bg-red-600 focus-visible:outline-red-500' : 'bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75', 'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10']">Message on WhatsApp</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const tiers = [
  {
    name: 'Hardware Repairs',
    id: 'hardware-repairs',
    href: '#',
    priceMonthly: 'Hardware',
    description: "The perfect plan if you're just getting started with our product.",
    features: [
        'Screen replacement',
        'Battery replacement',
        'Charging port repair',
        'Speaker/mic repair',
        'Water damage cleaning',
        'Camera replacement',
        'Motherboard-level repairs'
    ],
    featured: false,
  },
  {
    name: 'Software Services',
    id: 'software-services',
    href: '#',
    priceMonthly: 'Software',
    description: 'Dedicated support and infrastructure for your company.',
    features: [
        'Flashing/updating iPhone & Android',
        'Unlocking',
        'iCloud/Samsung Cloud/Oppo ID removal',
        'FRP bypass',
        'Network lock removal'
    ],
    featured: true,
  },
]
</script>