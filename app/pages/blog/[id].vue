<template>
  <main class="pt-12 pb-16 lg:pt-20 lg:pb-28 bg-white antialiased">
    <div class="flex justify-between px-6 mx-auto max-w-screen-xl">
      <article class="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-red">
        
        <header class="mb-8 lg:mb-12 not-format">
          <address class="flex items-center mb-8 not-italic">
            <div class="inline-flex items-center mr-3 text-sm text-black">
              <img class="mr-4 w-16 h-16 rounded-full border-2 border-red-600 p-0.5" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos">
              <div>
                <a href="#" rel="author" class="text-xl font-bold text-black hover:text-red-600 transition-colors">Jese Leos</a>
                <p class="text-base text-gray-500">Graphic Designer, educator & CEO Flowbite</p>
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

        <section class="not-format mt-20 pt-10 border-t border-gray-100">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl lg:text-3xl font-bold text-black">Discussion <span class="text-red-600">(20)</span></h2>
          </div>
          
          <form class="mb-10">
            <div class="py-4 px-6 mb-4 bg-gray-50 rounded-2xl border border-gray-100 focus-within:border-red-600 transition-all">
              <label for="comment" class="sr-only">Your comment</label>
              <textarea id="comment" rows="4" class="w-full text-sm text-black border-0 focus:ring-0 bg-transparent placeholder-gray-400" placeholder="Write a professional comment..." required></textarea>
            </div>
            <button type="submit" class="inline-flex items-center py-3 px-8 text-sm font-bold text-center text-white bg-black hover:bg-red-600 rounded-full transition-all duration-300 shadow-lg uppercase tracking-widest">
              Post comment
            </button>
          </form>

          <article class="p-8 mb-6 text-base bg-white border border-gray-100 rounded-3xl shadow-sm">
            <footer class="flex justify-between items-center mb-4">
              <div class="flex items-center">
                <p class="inline-flex items-center mr-3 font-bold text-black text-sm">
                  <img class="mr-3 w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough">
                  Michael Gough
                </p>
                <p class="text-xs text-gray-400 font-medium">Feb. 8, 2022</p>
              </div>
            </footer>
            <p class="text-gray-600 leading-relaxed">Very straight-to-point article. Really worth time reading. Thank you!</p>
            <div class="flex items-center mt-6">
              <button type="button" class="flex items-center text-xs font-bold text-red-600 uppercase tracking-tighter hover:underline">
                <span class="icon-[tabler--message-circle] mr-2 size-4"></span> Reply
              </button>
            </div>
          </article>
        </section>
      </article>
    </div>
  </main>

  <aside aria-label="Related articles" class="py-20 bg-gray-50">
    <div class="px-6 mx-auto max-w-screen-xl">
      <div class="flex items-center gap-4 mb-12">
        <div class="h-1 w-12 bg-red-600"></div>
        <h2 class="text-3xl font-bold text-black">Related Articles</h2>
      </div>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="i in 4" :key="i" class="group bg-white p-4 rounded-3xl border border-transparent hover:border-red-600 transition-all duration-500">
          <a href="#" class="block overflow-hidden rounded-2xl mb-6">
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="w-full transform group-hover:scale-105 transition-transform duration-500" alt="Image">
          </a>
          <h3 class="mb-3 text-xl font-bold leading-tight text-black group-hover:text-red-600 transition-colors">
            <a href="#">Enterprise design tips</a>
          </h3>
          <p class="mb-5 text-gray-500 text-sm line-clamp-2">Exploring the intersections of brand identity and user interface design in 2025.</p>
          <a href="#" class="inline-flex items-center font-bold text-xs uppercase tracking-widest text-black hover:text-red-600 transition-colors">
            Read Article <span class="icon-[tabler--arrow-right] ml-2"></span>
          </a>
        </article>
      </div>
    </div>
  </aside>
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