<template>
  <main class="pt-12 pb-16 lg:pt-20 lg:pb-28 bg-white antialiased">
    <div class="flex justify-between px-6 mx-auto max-w-screen-xl">
      <article class="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-red">
        
        <header class="mb-8 lg:mb-12 not-format">
          <address class="flex items-center mb-8 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-black">
              <img class="mr-4 w-16 h-16 rounded-full border-2 border-red-600 p-0.5" src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1768928451/FRUITFULL_LOGO-4_vujajv.png" alt="Jese Leos">
              <div>
                <a href="#" rel="author" class="text-xl font-bold text-black hover:text-red-600 transition-colors">FruitFul Vine</a>
                <p class="text-base text-gray-500">Editorial Team</p>
                <p class="text-sm text-gray-400 font-medium uppercase tracking-wider">
                  <time pubdate datetime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time>
                </p>
              </div>
            </div>
          </address>
          <h1 class="mb-6 text-4xl font-extrabold leading-tight text-black lg:text-5xl tracking-tight">
            Best practices for successful <span class="text-red-600">prototypes</span>
          </h1>
        </header>

        <div class="prose prose-lg max-w-none prose-headings:text-black prose-a:text-red-600 prose-strong:text-black prose-img:rounded-3xl prose-ol:list-decimal prose-ul:list-disc">
          <p class="text-xl leading-relaxed text-gray-600 font-medium italic border-l-4 border-red-600 pl-6 mb-8">
            Flowbite is an open-source library of UI components built with the utility-first classes from Tailwind CSS.
          </p>

          <p>Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way, you can think things through before committing to an actual design project.</p>

          <figure class="my-10">
            <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="Digital Art" class="shadow-2xl">
            <figcaption class="text-center text-sm text-gray-400 mt-4">Digital art by Anonymous</figcaption>
          </figure>

          <h2 class="text-3xl font-bold mt-12 mb-6">Getting started with Flowbite</h2>
          <p>First of all you need to understand how Flowbite works. This library is not another framework. Rather, it is a set of components based on Tailwind CSS.</p>

          <blockquote class="bg-gray-50 border-l-4 border-red-600 p-8 rounded-r-xl my-10">
            <p class="text-xl font-semibold text-black italic">"Flowbite is just awesome. Perfect choice for your next SaaS application."</p>
          </blockquote>

          <h3 class="text-2xl font-bold text-black mb-4">Prototyping Benefits</h3>
          <ul class="space-y-3 mb-10">
            <li class="flex items-start gap-3">
              <span class="text-red-600 font-bold">•</span>
              <span><strong>Usability testing:</strong> See how users interact with your design live.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-red-600 font-bold">•</span>
              <span><strong>Involving stakeholders:</strong> Pass prototypes to teams for real-world testing.</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </main>

</template>

<style scoped>
/* Custom prose overrides for the Red/Black brand */
.format-red :where(h1, h2, h3, h4):not(.not-format) {
  color: #000000;
  font-weight: 800;
}
.format-red :where(a):not(.not-format) {
  color: #dc2626; /* Red-600 */
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}
.format-red :where(a):hover:not(.not-format) {
  border-bottom-color: #dc2626;
}
.format-red :where(blockquote):not(.not-format) {
  border-left-color: #dc2626;
  background-color: #fef2f2; /* Light red tint */
}
</style>

<script setup lang="ts">
</script>