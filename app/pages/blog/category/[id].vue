<template>
  <Header />

  <div class="page-root">

    <!-- ─────────────────── CATEGORY BANNER ─────────────────── -->
    <section class="banner-root">

      <!-- Ambient background layers -->
      <div class="bg-grid"   aria-hidden="true"></div>
      <div class="bg-glow-1" aria-hidden="true"></div>
      <div class="bg-glow-2" aria-hidden="true"></div>
      <div class="bg-noise"  aria-hidden="true"></div>

      <div class="banner-inner">

        <!-- ── Skeleton ── -->
        <div v-if="loading" class="skeleton-wrap" aria-busy="true">
          <div class="skel skel-eyebrow"></div>
          <div class="skel skel-tag"></div>
          <div class="skel skel-h1-a"></div>
          <div class="skel skel-h1-b"></div>
          <div class="skel skel-body"></div>
          <div class="skel skel-btn"></div>
        </div>

        <!-- ── Real content ── -->
        <div v-else class="banner-content">

          <!-- Breadcrumb -->
          <nav class="breadcrumb" aria-label="breadcrumb">
            <NuxtLink to="/blog" class="breadcrumb-link">Blog</NuxtLink>
            <svg class="breadcrumb-sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="breadcrumb-current">{{ lastPost.category_name || 'Category' }}</span>
          </nav>

          <!-- Eyebrow -->
          <div class="eyebrow-row">
            <span class="eyebrow-pill">
              <span class="eyebrow-pulse-wrap" aria-hidden="true">
                <span class="eyebrow-ping"></span>
                <span class="eyebrow-dot"></span>
              </span>
              Category
            </span>
            <span class="eyebrow-divider" aria-hidden="true"></span>
            <span class="eyebrow-label">Curated Articles</span>
          </div>

          <!-- Category name as large heading -->
          <h1 class="banner-heading">
            {{ lastPost.category_name || 'Featured Category' }}
          </h1>

          <!-- Featured post teaser -->
          <div class="featured-post-card">
            <div class="featured-post-label">
              <svg class="featured-post-label-icon" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              Latest in this category
            </div>
            <p class="featured-post-title">{{ lastPost.post_title }}</p>
            <p class="featured-post-excerpt">{{ lastPost.short_title }}</p>
          </div>

          <!-- CTA row -->
          <div class="cta-row">
            <NuxtLink :to="`/blog/${lastPost._id}`" class="btn-primary">
              <span>Read Latest Post</span>
              <span class="btn-arrow-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </NuxtLink>

            <NuxtLink to="/blog" class="btn-ghost">
              <span>All Categories</span>
              <svg class="btn-ghost-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </NuxtLink>
          </div>

          <!-- Meta strip -->
          <div class="meta-strip">
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
              <span>{{ lastPost.date || 'Today' }}</span>
            </div>
            <span class="meta-sep" aria-hidden="true"></span>
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 4a1 1 0 00-1 1v14a1 1 0 001.707.707L13 14.414l5.293 5.293A1 1 0 0020 19V5a1 1 0 00-1-1H7z"/>
              </svg>
              <span>{{ lastPost.category_name || 'General' }}</span>
            </div>
            <span class="meta-sep" aria-hidden="true"></span>
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              <span>5 min read</span>
            </div>
          </div>

        </div>

        <!-- ── Decorative category card (desktop only) ── -->
        <div class="category-card" aria-hidden="true">

          <div class="cc-header">
            <div class="cc-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13 2a1 1 0 01-1-1v-1.586l-2.293 2.293a1 1 0 01-1.414-1.414L15.586 13H14a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-1 1h-1z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="cc-title-area">
              <p class="cc-label">Browsing</p>
              <p class="cc-category-name">{{ lastPost.category_name || '—' }}</p>
            </div>
            <div class="cc-live-badge">
              <span class="cc-live-dot"></span>
              LIVE
            </div>
          </div>

          <!-- Decorative bars -->
          <div class="cc-body">
            <div class="cc-bar cc-bar-long"></div>
            <div class="cc-bar cc-bar-mid"></div>
            <div class="cc-bar cc-bar-short"></div>
          </div>

          <!-- Stats pills -->
          <div class="cc-stats">
            <div class="cc-stat">
              <span class="cc-stat-value">50+</span>
              <span class="cc-stat-label">Articles</span>
            </div>
            <div class="cc-stat-divider"></div>
            <div class="cc-stat">
              <span class="cc-stat-value">5★</span>
              <span class="cc-stat-label">Rated</span>
            </div>
            <div class="cc-stat-divider"></div>
            <div class="cc-stat">
              <span class="cc-stat-value">Daily</span>
              <span class="cc-stat-label">Updated</span>
            </div>
          </div>

          <!-- Tags -->
          <div class="cc-tags">
            <span class="cc-tag cc-tag-red">{{ lastPost.category_name || 'Featured' }}</span>
            <span class="cc-tag">Tech</span>
            <span class="cc-tag">Mobile</span>
          </div>

          <!-- Footer -->
          <div class="cc-footer">
            <div class="cc-read-icon">
              <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <span class="cc-footer-label">Curated by Editorial Team</span>
          </div>
        </div>

      </div>

      <!-- Bottom rule -->
      <div class="banner-bottom-rule" aria-hidden="true"></div>
    </section>
    <!-- ─────────────────────────────────────────────────── -->

    <Categories type="blog" />
    <CategoryBlog :no_blog_posts="50" :category_id="category_id" />
    <Categories type="blog" />
    <Footer />

  </div>
</template>

<script setup lang="ts">
import Categories  from '~/components/Categories.vue'
import CategoryBlog from '~/components/CategoryBlog.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const { getUrl } = useApi()
const route = useRoute()
const category_id = route.params.id as string

interface BlogPost {
  _id: string
  url?: string
  secure_url?: string
  category_name: string
  post_title: string
  short_title: string
  body: string
  date: string
}

const lastPost = ref<BlogPost>({
  _id: '',
  category_name: '',
  post_title: '',
  short_title: '',
  body: '',
  date: ''
})

const loading = ref(true)

const fetchLastPost = async () => {
  try {
    const res = await fetch(getUrl('get_last_post/'))
    if (!res.ok) throw new Error('Post not found')
    lastPost.value = await res.json()
  } catch (error) {
    console.error('Error fetching last blog post:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchLastPost)
</script>

<style scoped>
/* ─── Google Fonts ───────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap');

/* ============================================================
   COLOR TOKENS — all hex / rgba, zero oklch
   ============================================================ */
.page-root {
  --bg:             #09090c;
  --surface:        #111116;
  --surface-2:      #18181f;
  --border:         rgba(255,255,255,0.07);
  --border-2:       rgba(255,255,255,0.13);

  --red:            #e63030;
  --red-dark:       #b91c1c;
  --red-glow:       rgba(230,48,48,0.30);
  --red-glow-lg:    rgba(220,38,38,0.18);
  --red-tint:       rgba(230,48,48,0.12);
  --red-tint-30:    rgba(69,10,10,0.30);
  --red-border:     rgba(127,29,29,0.35);
  --red-text:       #ff7070;
  --red-text-dim:   #ef4444;

  --text-1:         #ededf0;
  --text-2:         #8888a0;
  --text-3:         #50505e;
  --white:          #ffffff;
}

/* ─── Page shell ─────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.page-root {
  background-color: var(--bg);
  font-family: 'DM Sans', system-ui, sans-serif;
}

/* ─────────────────────────────────────────────────────────────
   BANNER ROOT
   ───────────────────────────────────────────────────────────── */
.banner-root {
  position: relative;
  min-height: 100vh;
  background-color: var(--bg);
  color: var(--text-1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* ─── Dot grid ───────────────────────────────────────────────── */
.bg-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 100%);
  mask-image:         radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 100%);
}

/* ─── Glow blobs ─────────────────────────────────────────────── */
.bg-glow-1 {
  position: absolute; z-index: 0;
  width: 700px; height: 500px;
  top: -200px; left: 50%;
  transform: translateX(-55%);
  border-radius: 50%;
  background-color: rgba(220,38,38,0.16);
  filter: blur(90px);
  pointer-events: none;
}
.bg-glow-2 {
  position: absolute; z-index: 0;
  width: 400px; height: 400px;
  bottom: -100px; right: -80px;
  border-radius: 50%;
  background-color: rgba(185,28,28,0.12);
  filter: blur(90px);
  pointer-events: none;
}

/* ─── Noise overlay ──────────────────────────────────────────── */
.bg-noise {
  position: absolute; inset: 0; z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
}

/* ─── Inner layout ───────────────────────────────────────────── */
.banner-inner {
  position: relative;
  z-index: 2;
  flex: 1;
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  padding: 6rem 1.5rem 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
}
@media (min-width: 900px) {
  .banner-inner {
    padding: 7rem 3rem 6rem;
    flex-direction: row;
    align-items: center;
    column-gap: 5rem;
  }
}

/* ─── Banner content col ─────────────────────────────────────── */
.banner-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

/* ─── Breadcrumb ─────────────────────────────────────────────── */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  animation: fadeUp 0.5s 0.0s ease both;
}
.breadcrumb-link {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-3);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.2s;
}
.breadcrumb-link:hover { color: var(--red-text); }
.breadcrumb-sep {
  width: 12px; height: 12px;
  color: var(--text-3);
  flex-shrink: 0;
}
.breadcrumb-current {
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--red-text);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ─── Eyebrow ────────────────────────────────────────────────── */
.eyebrow-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  animation: fadeUp 0.6s 0.08s ease both;
}

.eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  background-color: rgba(69,10,10,0.30);
  border: 1px solid rgba(127,29,29,0.35);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--red-text);
}

.eyebrow-pulse-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8px; height: 8px;
  flex-shrink: 0;
}
.eyebrow-ping {
  position: absolute; inset: 0;
  border-radius: 50%;
  background-color: rgba(255,112,112,0.75);
  animation: ping 1.4s ease-in-out infinite;
}
.eyebrow-dot {
  position: relative;
  width: 6px; height: 6px;
  border-radius: 50%;
  background-color: var(--red-text);
}
@keyframes ping {
  0%   { transform: scale(1);   opacity: 0.75; }
  100% { transform: scale(2.2); opacity: 0; }
}

.eyebrow-divider {
  width: 1px; height: 16px;
  background-color: rgba(255,255,255,0.12);
  border-radius: 9999px;
}
.eyebrow-label {
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: rgba(136,136,160,0.8);
  text-transform: uppercase;
}

/* ─── Main heading ───────────────────────────────────────────── */
.banner-heading {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.6rem, 7vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text-1);
  text-shadow: 0 10px 40px rgba(0,0,0,0.30);
  animation: fadeUp 0.6s 0.14s ease both;
}

/* ─── Featured post card ─────────────────────────────────────── */
.featured-post-card {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 1.1rem 1.25rem;
  background-color: var(--surface);
  border: 1px solid var(--border);
  border-left: 3px solid var(--red);
  border-radius: 12px;
  animation: fadeUp 0.6s 0.20s ease both;
}

.featured-post-label {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red-text-dim);
}
.featured-post-label-icon {
  width: 11px; height: 11px;
  color: var(--red-text-dim);
  flex-shrink: 0;
}

.featured-post-title {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-size: 0.98rem;
  font-weight: 800;
  line-height: 1.4;
  color: var(--text-1);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.featured-post-excerpt {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.65;
  color: var(--text-2);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ─── CTA row ────────────────────────────────────────────────── */
.cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.85rem;
  animation: fadeUp 0.6s 0.28s ease both;
}

/* Primary button */
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.75rem;
  border-radius: 11px;
  background-image: linear-gradient(135deg, #e63030 0%, #b91c1c 100%);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.92rem;
  text-decoration: none;
  border: none;
  box-shadow: 0 0 0 1px rgba(230,48,48,0.45), 0 8px 28px rgba(230,48,48,0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute; inset: 0;
  background-image: linear-gradient(160deg, rgba(255,255,255,0.13), transparent 60%);
  pointer-events: none;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 0 1px rgba(230,48,48,0.55), 0 14px 36px rgba(230,48,48,0.45);
}
.btn-primary:active { transform: none; }

.btn-arrow-wrap {
  display: flex; align-items: center;
  transition: transform 0.2s;
}
.btn-arrow-wrap svg { width: 16px; height: 16px; }
.btn-primary:hover .btn-arrow-wrap { transform: translateX(3px); }

/* Ghost button */
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  border-radius: 11px;
  background-color: transparent;
  border: 1px solid rgba(255,255,255,0.13);
  color: var(--text-2);
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.92rem;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.22);
  color: var(--text-1);
  background-color: rgba(255,255,255,0.04);
}
.btn-ghost-arrow { width: 16px; height: 16px; transition: transform 0.2s; }
.btn-ghost:hover .btn-ghost-arrow { transform: translateX(3px); }

/* ─── Meta strip ─────────────────────────────────────────────── */
.meta-strip {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  animation: fadeUp 0.6s 0.36s ease both;
}
.meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-3);
  letter-spacing: 0.02em;
}
.meta-icon { width: 13px; height: 13px; flex-shrink: 0; color: var(--text-3); }
.meta-sep {
  width: 3px; height: 3px;
  border-radius: 50%;
  background-color: var(--text-3);
  flex-shrink: 0;
}

/* ─── Skeleton ───────────────────────────────────────────────── */
.skeleton-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.skel {
  border-radius: 10px;
  background-color: var(--surface);
  background-image: linear-gradient(90deg, var(--surface) 0%, var(--surface-2) 50%, var(--surface) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.6s ease-in-out infinite;
}
.skel-eyebrow { width: 80px;  height: 14px; border-radius: 9999px; }
.skel-tag     { width: 130px; height: 26px; border-radius: 9999px; }
.skel-h1-a    { width: 75%;   height: 56px; }
.skel-h1-b    { width: 55%;   height: 56px; }
.skel-body    { width: 90%;   height: 80px; border-radius: 12px; }
.skel-btn     { width: 160px; height: 46px; border-radius: 11px; margin-top: 0.5rem; }

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ─────────────────────────────────────────────────────────────
   CATEGORY CARD (desktop decorative panel)
   ───────────────────────────────────────────────────────────── */
.category-card { display: none; }

@media (min-width: 900px) {
  .category-card {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 280px;
    flex-shrink: 0;
    background-color: var(--surface);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 22px;
    padding: 1.5rem;
    box-shadow:
      0 0 0 1px rgba(0,0,0,0.5),
      0 32px 64px rgba(0,0,0,0.6),
      inset 0 1px 0 rgba(255,255,255,0.06);
    animation: slideIn 0.8s 0.3s ease both, floatY 7s 1.2s ease-in-out infinite;
  }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes floatY {
  0%,100% { transform: translateY(0); }
  50%     { transform: translateY(-10px); }
}

/* Card header */
.cc-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.cc-icon-wrap {
  width: 38px; height: 38px;
  border-radius: 10px;
  background-image: linear-gradient(135deg, rgba(230,48,48,0.20), rgba(185,28,28,0.15));
  border: 1px solid rgba(127,29,29,0.30);
  color: var(--red-text);
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.cc-title-area { flex: 1; }
.cc-label {
  margin: 0;
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-3);
  line-height: 1.3;
}
.cc-category-name {
  margin: 0;
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--text-1);
  -webkit-text-fill-color: var(--text-1);
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 110px;
}
.cc-live-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.22rem 0.6rem;
  border-radius: 9999px;
  background-color: rgba(69,10,10,0.35);
  border: 1px solid rgba(127,29,29,0.40);
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--red-text);
  -webkit-text-fill-color: var(--red-text);
  flex-shrink: 0;
}
.cc-live-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background-color: var(--red-text);
  box-shadow: 0 0 6px rgba(255,112,112,0.8);
  animation: pulseDot 1.4s ease-in-out infinite;
}
@keyframes pulseDot {
  0%,100% { opacity: 1; }
  50%     { opacity: 0.4; }
}

/* Decorative bars */
.cc-body {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  padding: 0.9rem 1rem;
  background-color: var(--surface-2);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
}
.cc-bar {
  height: 8px;
  border-radius: 9999px;
  background-color: rgba(255,255,255,0.06);
}
.cc-bar-long  { width: 90%; }
.cc-bar-mid   { width: 65%; }
.cc-bar-short { width: 42%; }

/* Stats row */
.cc-stats {
  display: flex;
  align-items: center;
  background-color: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}
.cc-stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.15rem;
  padding: 0.7rem 0.5rem;
}
.cc-stat-divider {
  width: 1px;
  height: 28px;
  background-color: var(--border);
  flex-shrink: 0;
}
.cc-stat-value {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 0.9rem;
  color: var(--text-1);
  line-height: 1;
}
.cc-stat-label {
  font-size: 0.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-3);
  text-align: center;
}

/* Tags */
.cc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.cc-tag {
  display: inline-block;
  padding: 0.22rem 0.65rem;
  border-radius: 9999px;
  background-color: var(--surface-2);
  border: 1px solid rgba(255,255,255,0.07);
  font-size: 0.67rem;
  font-weight: 600;
  color: var(--text-2);
  -webkit-text-fill-color: var(--text-2);
}
.cc-tag-red {
  background-color: rgba(69,10,10,0.30);
  border-color: rgba(127,29,29,0.35);
  color: var(--red-text);
  -webkit-text-fill-color: var(--red-text);
}

/* Footer */
.cc-footer {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.cc-read-icon {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px;
  border-radius: 8px;
  background-color: rgba(69,10,10,0.20);
  color: var(--red-text);
  flex-shrink: 0;
}
.cc-footer-label {
  font-size: 0.68rem;
  font-weight: 600;
  color: var(--text-3);
}

/* ─── Bottom accent rule ─────────────────────────────────────── */
.banner-bottom-rule {
  position: relative; z-index: 2;
  height: 1px;
  background-image: linear-gradient(90deg, transparent 0%, rgba(230,48,48,0.45) 50%, transparent 100%);
}

/* ─── Entrance animations ────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>