<template>
  <Header />

  <div class="page-root">

    <!-- ─────────────────── HERO BANNER ─────────────────── -->
    <section class="banner-root">

      <!-- Ambient background layers -->
      <div class="bg-grid"    aria-hidden="true"></div>
      <div class="bg-glow-1"  aria-hidden="true"></div>
      <div class="bg-glow-2"  aria-hidden="true"></div>
      <div class="bg-noise"   aria-hidden="true"></div>

      <div class="banner-inner">

        <!-- ── Skeleton loader ── -->
        <div v-if="loading" class="skeleton-wrap" aria-busy="true">
          <div class="skel skel-pill"></div>
          <div class="skel skel-h1-a"></div>
          <div class="skel skel-h1-b"></div>
          <div class="skel skel-body"></div>
          <div class="skel skel-btn"></div>
        </div>

        <!-- ── Real content ── -->
        <div v-else class="banner-content">

          <!-- Eyebrow -->
          <div class="eyebrow-row">
            <span class="eyebrow-pill">
              <span class="eyebrow-pulse-wrap" aria-hidden="true">
                <span class="eyebrow-ping"></span>
                <span class="eyebrow-dot"></span>
              </span>
              {{ lastPost.category_name || 'Featured Story' }}
            </span>
            <span class="eyebrow-divider" aria-hidden="true"></span>
            <span class="eyebrow-label">Latest Article</span>
          </div>

          <!-- Heading -->
          <h1 class="banner-heading">
            <span class="heading-main">{{ lastPost.post_title }}</span>
          </h1>

          <!-- Sub-title / excerpt -->
          <p class="banner-excerpt">{{ lastPost.short_title }}</p>

          <!-- CTA row -->
          <div class="cta-row">
            <NuxtLink :to="`/blog/${lastPost._id}`" class="btn-primary">
              <span>Read Full Story</span>
              <span class="btn-arrow-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </NuxtLink>

            <NuxtLink to="/blog" class="btn-ghost">
              <span>Browse All Articles</span>
              <svg class="btn-ghost-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
          </div>

          <!-- Meta strip -->
          <div class="meta-strip">
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm.75 5.25a.75.75 0 00-1.5 0V12c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V7.25z"/>
              </svg>
              <span>{{ lastPost.date || 'Today' }}</span>
            </div>
            <span class="meta-sep" aria-hidden="true"></span>
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V18a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
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

        <!-- ── Decorative editorial card (desktop) ── -->
        <div class="editorial-card" aria-hidden="true">
          <div class="ec-header">
            <div class="ec-avatar">
              <img
                src="https://res.cloudinary.com/dhsnrwwwn/image/upload/v1768928451/FRUITFULL_LOGO-4_vujajv.png"
                alt="Fruitful Vine"
              />
            </div>
            <div class="ec-author-info">
              <p class="ec-author-name">Editorial Team</p>
              <p class="ec-author-role">Fruitful Vine Mobile</p>
            </div>
            <div class="ec-live-badge">
              <span class="ec-live-dot"></span>
              LIVE
            </div>
          </div>

          <div class="ec-body">
            <div class="ec-bar ec-bar-long"></div>
            <div class="ec-bar ec-bar-mid"></div>
            <div class="ec-bar ec-bar-short"></div>
          </div>

          <div class="ec-tags">
            <span class="ec-tag ec-tag-red">Featured</span>
            <span class="ec-tag">Tech</span>
            <span class="ec-tag">Mobile</span>
          </div>

          <div class="ec-footer">
            <div class="ec-read-ring">
              <svg viewBox="0 0 20 20" fill="currentColor" width="13" height="13">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
              </svg>
            </div>
            <span class="ec-read-label">Now Reading</span>
          </div>
        </div>

      </div>

      <!-- Bottom rule -->
      <div class="banner-bottom-rule" aria-hidden="true"></div>
    </section>
    <!-- ──────────────────────────────────────────────────── -->

    <Categories type="blog" />
    <HomePageBlog no_blog_posts="50" />
    <Categories type="blog" />
    <Footer />

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const { getUrl } = useApi()

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
    const data = await res.json()
    lastPost.value = data
  } catch (error) {
    console.error('Error fetching last blog post:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchLastPost()
})
</script>

<style scoped>
/* ─── Google Fonts ───────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap');

/* ─────────────────────────────────────────────────────────────
   COLOR TOKENS  —  all hex / rgba, zero oklch
   ───────────────────────────────────────────────────────────── */
.page-root {
  --bg:              #09090c;
  --surface:         #111116;
  --surface-2:       #18181f;
  --border:          rgba(255,255,255,0.07);
  --border-2:        rgba(255,255,255,0.13);

  --red:             #e63030;
  --red-bright:      #ff4545;
  --red-dark:        #b91c1c;
  --red-glow:        rgba(230,48,48,0.30);
  --red-glow-lg:     rgba(220,38,38,0.18);
  --red-tint:        rgba(230,48,48,0.12);
  --red-tint-30:     rgba(69,10,10,0.30);
  --red-border:      rgba(127,29,29,0.35);
  --red-text:        #ff7070;
  --red-text-dim:    #ef4444;

  --text-1:          #ededf0;
  --text-2:          #8888a0;
  --text-3:          #50505e;
  --white:           #ffffff;
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
  position: absolute;
  z-index: 0;
  width: 700px; height: 500px;
  top: -200px; left: 50%;
  transform: translateX(-55%);
  border-radius: 50%;
  background-color: rgba(220,38,38,0.16);
  filter: blur(90px);
  pointer-events: none;
}
.bg-glow-2 {
  position: absolute;
  z-index: 0;
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

/* ─── Banner content ─────────────────────────────────────────── */
.banner-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

/* ─── Eyebrow ────────────────────────────────────────────────── */
.eyebrow-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  animation: fadeUp 0.6s 0.05s ease both;
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
  color: #ff7070;
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
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: rgba(255,112,112,0.75);
  animation: ping 1.4s ease-in-out infinite;
}
.eyebrow-dot {
  position: relative;
  width: 6px; height: 6px;
  border-radius: 50%;
  background-color: #ff7070;
}
@keyframes ping {
  0%   { transform: scale(1);   opacity: 0.75; }
  100% { transform: scale(2.2); opacity: 0; }
}

.eyebrow-divider {
  width: 1px;
  height: 16px;
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

/* ─── Heading ────────────────────────────────────────────────── */
.banner-heading {
  margin: 0;
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.4rem, 6vw, 4.25rem);
  font-weight: 900;
  line-height: 1.07;
  letter-spacing: -0.03em;
  color: var(--text-1);
  animation: fadeUp 0.6s 0.12s ease both;
}

/* ─── Excerpt ────────────────────────────────────────────────── */
.banner-excerpt {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.78;
  color: var(--text-2);
  max-width: 38rem;
  animation: fadeUp 0.6s 0.20s ease both;

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ─── CTA Row ────────────────────────────────────────────────── */
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
  gap: 1.1rem;
}

.skel {
  border-radius: 10px;
  background-color: var(--surface);
  background-image: linear-gradient(90deg, var(--surface) 0%, var(--surface-2) 50%, var(--surface) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.6s ease-in-out infinite;
}
.skel-pill   { width: 120px; height: 26px; border-radius: 9999px; }
.skel-h1-a   { width: 85%;   height: 54px; }
.skel-h1-b   { width: 60%;   height: 54px; }
.skel-body   { width: 70%;   height: 20px; margin-top: 0.5rem; }
.skel-btn    { width: 160px; height: 46px; border-radius: 11px; margin-top: 0.5rem; }

@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* ─────────────────────────────────────────────────────────────
   EDITORIAL CARD  (desktop-only decorative panel)
   ───────────────────────────────────────────────────────────── */
.editorial-card { display: none; }

@media (min-width: 900px) {
  .editorial-card {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
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
.ec-header {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.ec-avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background-color: var(--surface-2);
  border: 1px solid rgba(255,255,255,0.10);
  overflow: hidden;
  flex-shrink: 0;
}
.ec-avatar img {
  width: 100%; height: 100%;
  object-fit: cover;
}
.ec-author-info { flex: 1; }
.ec-author-name {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-1);
  -webkit-text-fill-color: var(--text-1);
  line-height: 1.3;
}
.ec-author-role {
  margin: 0;
  font-size: 0.67rem;
  color: var(--text-3);
  line-height: 1.3;
}
.ec-live-badge {
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
  color: #ff7070;
  -webkit-text-fill-color: #ff7070;
  flex-shrink: 0;
}
.ec-live-dot {
  width: 5px; height: 5px;
  border-radius: 50%;
  background-color: #ff7070;
  box-shadow: 0 0 6px rgba(255,112,112,0.8);
  animation: pulseDot 1.4s ease-in-out infinite;
}
@keyframes pulseDot {
  0%,100% { opacity: 1; }
  50%     { opacity: 0.4; }
}

/* Card body bars (decorative) */
.ec-body {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1rem;
  background-color: var(--surface-2);
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.05);
}
.ec-bar {
  height: 8px;
  border-radius: 9999px;
  background-color: rgba(255,255,255,0.06);
}
.ec-bar-long  { width: 90%; }
.ec-bar-mid   { width: 65%; }
.ec-bar-short { width: 42%; }

/* Tags */
.ec-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.ec-tag {
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
.ec-tag-red {
  background-color: rgba(69,10,10,0.30);
  border-color: rgba(127,29,29,0.35);
  color: #ff7070;
  -webkit-text-fill-color: #ff7070;
}

/* Card footer */
.ec-footer {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.ec-read-ring {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px;
  border-radius: 8px;
  background-color: rgba(69,10,10,0.20);
  color: #ff7070;
  flex-shrink: 0;
}
.ec-read-label {
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--text-3);
}

/* ─── Bottom rule ────────────────────────────────────────────── */
.banner-bottom-rule {
  position: relative;
  z-index: 2;
  height: 1px;
  background-image: linear-gradient(90deg, transparent 0%, rgba(230,48,48,0.45) 50%, transparent 100%);
}

/* ─── Entrance animations ────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>