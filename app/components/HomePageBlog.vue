<template>
  <div class="blog-root">

    <div class="blog-inner">

      <!-- Section header -->
      <div class="section-header">
        <span class="section-eyebrow">Latest Insights</span>
        <h2 class="section-title">
          From the
          <span class="title-accent">
            Blog
            <span class="title-underline" aria-hidden="true"></span>
          </span>
        </h2>
        <p class="section-subtitle">
          Expert advice, industry insights, and tips to help you get the most
          from your devices and stay ahead in the tech world.
        </p>
      </div>

      <!-- Skeleton loader -->
      <div v-if="loading" class="blog-grid">
        <div v-for="i in props.no_blog_posts" :key="i" class="skeleton"></div>
      </div>

      <!-- Blog grid -->
      <div v-else class="blog-grid-wrap">
        <div class="grid-top-rule" aria-hidden="true"></div>
        <div class="blog-grid">
          <article
            v-for="post in posts"
            :key="post._id"
            class="blog-card"
          >

            <!-- Cover image -->
            <div v-if="post.secure_url" class="card-img-wrap">
              <img :src="post.secure_url" :alt="post.post_title" class="card-img" />
              <div class="card-img-overlay" aria-hidden="true"></div>
            </div>

            <!-- Card body -->
            <div class="card-body">

              <!-- Meta row -->
              <div class="card-meta">
                <time class="meta-date">{{ post.date || 'Jan 20, 2026' }}</time>
                <span class="meta-dot" aria-hidden="true"></span>
                <NuxtLink :to="`/category/${post.category_id}`" class="meta-category">
                  {{ post.category_name }}
                </NuxtLink>
              </div>

              <!-- Content -->
              <div class="card-content">
                <h3 class="card-title">
                  <NuxtLink :to="`/blog/${post._id}`" class="card-title-link">
                    {{ post.post_title }}
                  </NuxtLink>
                </h3>
                <p class="card-excerpt">{{ post.short_title }}</p>

                <!-- Read link -->
                <div class="card-footer">
                  <NuxtLink :to="`/blog/${post._id}`" class="read-link">
                    Read article
                    <svg class="read-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Author strip -->
            <div class="author-strip">
              <img
                src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1768928451/FRUITFULL_LOGO-4_vujajv.png"
                alt="Fruitful Vine"
                class="author-avatar"
              />
              <div class="author-info">
                <p class="author-name">Editorial Team</p>
                <p class="author-role">Fruitful Vine Mobile</p>
              </div>
              <div class="author-read-indicator" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>
            </div>

          </article>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const { getUrl } = useApi()

const props = defineProps({
  no_blog_posts: { type: Number, default: 3 }
})

const posts   = ref([])
const loading = ref(true)

const fetchPosts = async () => {
  try {
    loading.value = true
    const res  = await fetch(getUrl(`blog/?page=1&limit=${props.no_blog_posts}`))
    const data = await res.json()
    posts.value = data.blogs
  } catch (e) {
    console.error('Error fetching blog posts:', e)
  } finally {
    loading.value = false
  }
}

onMounted(fetchPosts)
</script>

<style scoped>
/* ─── Color tokens — ALL hex/rgba, zero oklch ────────────────── */
.blog-root {
  --bg:            #09090b;
  --surface:       #111114;
  --surface-2:     #18181d;
  --border:        rgba(255,255,255,0.07);
  --border-2:      rgba(255,255,255,0.12);

  --red:           #dc2626;
  --red-bright:    #ef4444;
  --red-dark:      #b91c1c;
  --red-950-30:    rgba(69,10,10,0.30);
  --red-950-10:    rgba(69,10,10,0.10);
  --red-900-30:    rgba(127,29,29,0.30);
  --red-900-50:    rgba(127,29,29,0.50);
  --red-600-20:    rgba(220,38,38,0.20);
  --red-glow:      rgba(220,38,38,0.12);
  --red-text:      #f87171;
  --red-text-dim:  #ef4444;

  --white:         #ffffff;
  --text-1:        #f4f4f5;
  --text-2:        #a1a1aa;
  --text-3:        #52525b;

  --shadow-card:   0 0 0 1px rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.5);
  --shadow-hover:  0 0 0 1px rgba(127,29,29,0.4), 0 20px 60px rgba(0,0,0,0.7), 0 0 40px rgba(220,38,38,0.08);
}

/* ─── Base ───────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.blog-root {
  background-color: var(--bg);
  padding: 5rem 1.5rem 6rem;
  font-family: 'DM Sans', system-ui, sans-serif;
}
@media (min-width: 640px)  { .blog-root { padding: 7rem 1.5rem 8rem; } }
@media (min-width: 1024px) { .blog-root { padding: 8rem 2rem 9rem; } }

.blog-inner {
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Section header ─────────────────────────────────────────── */
.section-header {
  max-width: 42rem;
  margin-bottom: 4rem;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  background-color: var(--red-950-30);
  border: 1px solid var(--red-900-30);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red-text);
  margin-bottom: 1.1rem;
}

.section-title {
  margin: 0 0 1rem;
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--text-1);
  line-height: 1.05;
}

.title-accent {
  position: relative;
  display: inline-block;
  background-image: linear-gradient(90deg, #ef4444, #dc2626);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.title-underline {
  position: absolute;
  bottom: 2px; left: 0;
  width: 100%; height: 10px;
  border-radius: 9999px;
  background-color: var(--red-600-20);
  z-index: -1;
}

.section-subtitle {
  margin: 0;
  font-size: 1.025rem;
  line-height: 1.75;
  color: var(--text-2);
  max-width: 38rem;
}

/* ─── Skeleton ───────────────────────────────────────────────── */
.skeleton {
  height: 24rem;
  border-radius: 20px;
  background-color: var(--surface);
  border: 1px solid var(--border);
  background-image: linear-gradient(90deg, var(--surface) 0%, var(--surface-2) 50%, var(--surface) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.6s ease-in-out infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ─── Grid ───────────────────────────────────────────────────── */
.blog-grid-wrap { position: relative; }

.grid-top-rule {
  height: 1px;
  background-image: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
  margin-bottom: 3rem;
}

.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
@media (min-width: 1024px) { .blog-grid { grid-template-columns: repeat(3, 1fr); } }

/* ─── Blog card ──────────────────────────────────────────────── */
.blog-card {
  display: flex;
  flex-direction: column;
  background-color: var(--surface);
  border-radius: 20px;
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.25s;
}
.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
  border-color: var(--red-900-50);
}

/* ─── Cover image ────────────────────────────────────────────── */
.card-img-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}

.card-img {
  display: block;
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
}
.blog-card:hover .card-img { transform: scale(1.06); }

.card-img-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(to top, rgba(9,9,11,0.6) 0%, transparent 60%);
  pointer-events: none;
}

/* ─── Card body ──────────────────────────────────────────────── */
.card-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
}

/* Meta */
.card-meta {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.meta-date {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-3);
}

.meta-dot {
  width: 3px; height: 3px;
  border-radius: 50%;
  background-color: var(--text-3);
  flex-shrink: 0;
}

.meta-category {
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 9999px;
  background-color: rgba(255,255,255,0.05);
  border: 1px solid var(--border-2);
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-2);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s;
}
.meta-category:hover {
  background-color: var(--red-950-30);
  color: var(--red-text);
  border-color: var(--red-900-30);
}

/* Content */
.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  margin: 0 0 0.6rem;
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.015em;
  line-height: 1.35;
  color: var(--text-1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-title-link {
  text-decoration: none;
  color: inherit;
  -webkit-text-fill-color: inherit;
  transition: color 0.2s;
}
.blog-card:hover .card-title-link {
  color: var(--red-text);
  -webkit-text-fill-color: var(--red-text);
}

.card-excerpt {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--text-2);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

/* Footer / read link */
.card-footer {
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.read-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.84rem;
  font-weight: 700;
  color: var(--red-text-dim);
  text-decoration: none;
  transition: color 0.2s, gap 0.2s;
}
.read-link:hover {
  color: var(--red-text);
  gap: 0.65rem;
}

.read-arrow {
  width: 14px; height: 14px;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.read-link:hover .read-arrow { transform: translateX(3px); }

/* ─── Author strip ───────────────────────────────────────────── */
.author-strip {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.5rem;
  background-color: rgba(255,255,255,0.02);
  border-top: 1px solid var(--border);
}

.author-avatar {
  width: 36px; height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background-color: var(--surface-2);
  border: 1px solid var(--border-2);
  flex-shrink: 0;
}

.author-info { flex: 1; }

.author-name {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-1);
  -webkit-text-fill-color: var(--text-1);
  line-height: 1.3;
}

.author-role {
  margin: 0;
  font-size: 0.68rem;
  color: var(--text-3);
  line-height: 1.3;
}

.author-read-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px; height: 28px;
  border-radius: 8px;
  background-color: var(--red-950-10);
  color: var(--red-text);
  flex-shrink: 0;
  transition: background-color 0.2s;
}
.blog-card:hover .author-read-indicator {
  background-color: var(--red-950-30);
}
</style>