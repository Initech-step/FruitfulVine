<template>
  <Header />

  <main class="post-root">

    <!-- ── Loading ── -->
    <div v-if="loading" class="post-loading">
      <div class="post-spinner"></div>
      <p class="post-spinner-label">Loading article…</p>
    </div>

    <!-- ── Post ── -->
    <div v-else-if="post" class="post-shell">

      <!-- Back button -->
      <div class="post-back-row">
        <button @click="$router.back()" class="back-btn group">
          <svg class="back-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          Go Back
        </button>
      </div>

      <article class="post-article">

        <!-- ──────── Header ──────── -->
        <header class="post-header">

          <!-- Category chip -->
          <div class="post-category-row">
            <span class="post-category-chip">{{ post.category_name }}</span>
          </div>

          <!-- Title -->
          <h1 class="post-title">{{ post.post_title }}</h1>

          <!-- Subtitle -->
          <p class="post-subtitle">{{ post.short_title }}</p>

          <!-- Author / meta strip -->
          <div class="post-meta-strip">
            <div class="post-author">
              <div class="author-avatar-wrap">
                <img
                  src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1768928451/FRUITFULL_LOGO-4_vujajv.png"
                  alt="FruitFul Vine Editorial"
                  class="author-avatar"
                />
              </div>
              <div class="author-info">
                <a href="#" rel="author" class="author-name">FruitFul Vine</a>
                <p class="author-role">Editorial Team · {{ post.category_name }}</p>
              </div>
            </div>

            <div class="post-meta-right">
              <div class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
                <time :datetime="post.date">{{ post.date }}</time>
              </div>
              <span class="meta-dot" aria-hidden="true"></span>
              <div class="meta-item">
                <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
                5 min read
              </div>
            </div>
          </div>

          <!-- Divider -->
          <div class="post-header-rule" aria-hidden="true"></div>
        </header>

        <!-- ──────── Cover image ──────── -->
        <figure v-if="post.secure_url" class="post-cover">
          <img :src="post.secure_url" :alt="post.post_title" class="post-cover-img" />
          <div class="post-cover-overlay" aria-hidden="true"></div>
        </figure>

        <!-- ──────── Body ──────── -->
        <div class="post-body" v-html="post.body"></div>

        <!-- ──────── Footer ──────── -->
        <footer class="post-footer">

          <!-- Author card -->
          <div class="post-author-card">
            <div class="pac-avatar-wrap">
              <img
                src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1768928451/FRUITFULL_LOGO-4_vujajv.png"
                alt="FruitFul Vine"
                class="pac-avatar"
              />
            </div>
            <div class="pac-info">
              <p class="pac-name">FruitFul Vine Editorial Team</p>
              <p class="pac-bio">Experts in mobile technology, phone repair, and everything in between — writing to keep you informed.</p>
            </div>
          </div>

          <!-- Return button -->
          <button @click="$router.back()" class="return-btn group">
            <svg class="return-btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Articles
          </button>

        </footer>
      </article>
    </div>

  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const { getUrl } = useApi()

interface BlogPost {
  _id: string
  post_title: string
  short_title: string
  category_name: string
  body: string
  secure_url?: string
  date: string
}

const route   = useRoute()
const post    = ref<BlogPost | null>(null)
const loading = ref(true)

const fetchPost = async () => {
  const blogId = route.params.id as string
  try {
    loading.value = true
    const response = await fetch(getUrl(`blog/${blogId}/`))
    if (!response.ok) throw new Error('Post not found')
    post.value = await response.json()
  } catch (error) {
    console.error('Failed to fetch blog post:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchPost)
</script>

<style scoped>
/* ============================================================
   COLOR TOKENS — all hex / rgba, zero oklch
   ============================================================ */
.post-root {
  --white:          #ffffff;
  --gray-50:        #f9fafb;
  --gray-100:       #f3f4f6;
  --gray-200:       #e5e7eb;
  --gray-300:       #d1d5db;
  --gray-400:       #9ca3af;
  --gray-500:       #6b7280;
  --gray-600:       #4b5563;
  --gray-800:       #1f2937;
  --gray-900:       #111827;
  --black:          #000000;

  --red-50:         #fef2f2;
  --red-100:        #fee2e2;
  --red-600:        #dc2626;
  --red-700:        #b91c1c;
  --red-600-20:     rgba(220,38,38,0.20);
  --red-600-glow:   rgba(220,38,38,0.25);

  --shadow-sm:      0 1px 3px rgba(0,0,0,0.08);
  --shadow-cover:   0 24px 64px rgba(0,0,0,0.14);
}

/* ─── Page shell ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.post-root {
  background-color: var(--white);
  color: var(--gray-900);
  font-family: 'DM Sans', system-ui, sans-serif;
  min-height: 100vh;
  padding-top: 5rem; /* clears fixed Header */
}

/* ─── Loading state ──────────────────────────────────────────── */
.post-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  gap: 1rem;
}
.post-spinner {
  width: 48px; height: 48px;
  border-radius: 50%;
  border: 3px solid var(--gray-200);
  border-bottom-color: var(--red-600);
  animation: spin 0.8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

.post-spinner-label {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gray-400);
}

/* ─── Outer shell ────────────────────────────────────────────── */
.post-shell {
  max-width: 768px;
  margin: 0 auto;
  padding: 2rem 1.5rem 6rem;
}
@media (min-width: 768px) {
  .post-shell { padding: 2.5rem 2rem 8rem; }
}

/* ─── Back button ────────────────────────────────────────────── */
.post-back-row {
  margin-bottom: 2.5rem;
}
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red-600);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}
.back-btn:hover { color: var(--black); }
.back-btn-icon {
  width: 16px; height: 16px;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.back-btn:hover .back-btn-icon { transform: translateX(-3px); }

/* ─── Article ────────────────────────────────────────────────── */
.post-article {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* ─── Header ─────────────────────────────────────────────────── */
.post-header {
  margin-bottom: 2.5rem;
}

/* Category chip */
.post-category-row {
  margin-bottom: 1.25rem;
}
.post-category-chip {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.85rem;
  border-radius: 9999px;
  background-color: var(--red-50);
  border: 1px solid var(--red-100);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--red-700);
}

/* Title */
.post-title {
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  color: var(--black);
  text-shadow: 0 8px 24px rgba(0,0,0,0.06);
}

/* Subtitle */
.post-subtitle {
  margin: 0 0 1.75rem;
  font-size: 1.1rem;
  line-height: 1.75;
  color: var(--gray-500);
  font-weight: 500;
}

/* Author / meta strip */
.post-meta-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.post-author {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.author-avatar-wrap {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 2px solid var(--red-600);
  padding: 2px;
  flex-shrink: 0;
  background-color: var(--white);
}
.author-avatar {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}

.author-info { display: flex; flex-direction: column; gap: 0.1rem; }
.author-name {
  font-size: 1rem;
  font-weight: 800;
  color: var(--black);
  text-decoration: none;
  transition: color 0.2s;
}
.author-name:hover { color: var(--red-600); }
.author-role {
  font-size: 0.8rem;
  color: var(--gray-500);
}

.post-meta-right {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}
.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gray-400);
}
.meta-icon {
  width: 13px; height: 13px;
  flex-shrink: 0;
  color: var(--gray-400);
}
.meta-dot {
  width: 3px; height: 3px;
  border-radius: 50%;
  background-color: var(--gray-300);
  flex-shrink: 0;
}

/* Divider below header */
.post-header-rule {
  height: 1px;
  background-image: linear-gradient(90deg, var(--red-600) 0%, var(--red-100) 40%, transparent 100%);
}

/* ─── Cover image ────────────────────────────────────────────── */
.post-cover {
  position: relative;
  margin: 0 0 2.5rem;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: var(--shadow-cover);
}
.post-cover-img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.post-cover-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(to top, rgba(0,0,0,0.08) 0%, transparent 50%);
  pointer-events: none;
}

/* ─── Body ───────────────────────────────────────────────────── */
.post-body {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--gray-800);
  margin-bottom: 3rem;
}

/* Typography for v-html content */
.post-body :deep(h1),
.post-body :deep(h2),
.post-body :deep(h3),
.post-body :deep(h4) {
  color: var(--black);
  font-weight: 800;
  letter-spacing: -0.015em;
  margin-top: 2em;
  margin-bottom: 0.6em;
  line-height: 1.2;
}
.post-body :deep(h2) { font-size: 1.55rem; }
.post-body :deep(h3) { font-size: 1.25rem; }

.post-body :deep(p) {
  margin: 0 0 1.4em;
  color: var(--gray-800);
}

.post-body :deep(a) {
  color: var(--red-600);
  text-decoration: underline;
  text-decoration-color: var(--red-100);
  text-underline-offset: 3px;
  transition: color 0.2s, text-decoration-color 0.2s;
}
.post-body :deep(a:hover) {
  color: var(--red-700);
  text-decoration-color: var(--red-600);
}

.post-body :deep(strong) {
  color: var(--black);
  font-weight: 700;
}

.post-body :deep(blockquote) {
  margin: 1.75em 0;
  padding: 1.4rem 1.5rem;
  border-left: 4px solid var(--red-600);
  background-color: var(--red-50);
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  font-style: italic;
  color: var(--gray-600);
}

.post-body :deep(ul),
.post-body :deep(ol) {
  padding-left: 1.5rem;
  margin: 0 0 1.4em;
  color: var(--gray-800);
}
.post-body :deep(ul) { list-style-type: disc; }
.post-body :deep(ol) { list-style-type: decimal; }
.post-body :deep(li) { margin-bottom: 0.4em; }

.post-body :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  display: block;
  margin: 1.5em auto;
}

.post-body :deep(code) {
  font-size: 0.88em;
  padding: 0.15em 0.45em;
  border-radius: 6px;
  background-color: var(--gray-100);
  color: var(--red-700);
  font-family: 'Courier New', monospace;
}

.post-body :deep(pre) {
  padding: 1.25rem 1.5rem;
  border-radius: 14px;
  background-color: var(--gray-900);
  color: var(--gray-100);
  overflow-x: auto;
  margin: 1.5em 0;
}
.post-body :deep(pre code) {
  background: none;
  color: inherit;
  padding: 0;
}

.post-body :deep(hr) {
  border: none;
  height: 1px;
  background-image: linear-gradient(90deg, transparent, var(--gray-200), transparent);
  margin: 2.5em 0;
}

/* ─── Footer ─────────────────────────────────────────────────── */
.post-footer {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding-top: 2.5rem;
  border-top: 1px solid var(--gray-100);
}

/* Author card */
.post-author-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 16px;
  background-color: var(--gray-50);
  border: 1px solid var(--gray-200);
}
.pac-avatar-wrap {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 2px solid var(--red-600);
  padding: 2px;
  flex-shrink: 0;
  background-color: var(--white);
}
.pac-avatar {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
.pac-info { display: flex; flex-direction: column; gap: 0.3rem; }
.pac-name {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 800;
  color: var(--black);
}
.pac-bio {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.65;
  color: var(--gray-500);
}

/* Return button */
.return-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 1rem 2rem;
  border-radius: 12px;
  background-color: var(--black);
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
}
.return-btn:hover {
  background-color: var(--red-600);
  box-shadow: 0 8px 24px var(--red-600-glow);
  transform: translateY(-1px);
}
.return-btn-icon {
  width: 18px; height: 18px;
  flex-shrink: 0;
  transition: transform 0.2s;
}
.return-btn:hover .return-btn-icon { transform: translateX(-3px); }
</style>