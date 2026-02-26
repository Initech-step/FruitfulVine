<template>
  <div class="hero-root">

    <!-- Ambient background layers -->
    <div class="bg-grid" aria-hidden="true"></div>
    <div class="bg-glow bg-glow-1" aria-hidden="true"></div>
    <div class="bg-glow bg-glow-2" aria-hidden="true"></div>
    <div class="bg-noise" aria-hidden="true"></div>

    <div class="hero-inner">

      <!-- Top meta bar -->
      <div class="meta-bar">
        <div class="meta-item">
          <span class="meta-dot"></span>
          <svg viewBox="0 0 24 24" fill="currentColor" class="meta-icon">
            <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
          </svg>
          <span>Shopping Plaza, Opp. GT Bank, Red Light, Paynesville</span>
        </div>
        <div class="meta-divider" aria-hidden="true"></div>
        <div class="meta-item">
          <svg viewBox="0 0 24 24" fill="currentColor" class="meta-icon">
            <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
          </svg>
          <span>Open today&nbsp;<strong>9 AM – 11 PM</strong></span>
        </div>
      </div>

      <!-- Main content -->
      <div class="hero-content">

        <!-- Eyebrow label -->
        <div class="eyebrow">
          <span class="eyebrow-pill">
            <span class="eyebrow-pulse"></span>
            Paynesville's #1 Repair Shop
          </span>
        </div>

        <!-- Heading -->
        <h1 class="hero-heading">
          <span class="heading-line-1">Fast &amp;<br>Reliable</span>
          <span class="heading-line-2">
            Phone Repair
            <span class="heading-accent-bar" aria-hidden="true"></span>
          </span>
          <span class="heading-line-3">in Liberia.</span>
        </h1>

        <!-- Description -->
        <p class="hero-description">
          Broken screen? Dead battery? Software crash? At
          <span class="brand-name">Fruitful Vine Mobile Ltd.</span>
          we restore your device — fast, affordable, and done right the first time.
        </p>

        <!-- CTA Buttons -->
        <div class="cta-row">
          <NuxtLink to="/products" class="btn-primary">
            <span>Browse Products</span>
            <span class="btn-arrow-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </NuxtLink>

          <NuxtLink to="/blog" class="btn-ghost">
            <span>Read Our Blog</span>
            <svg class="btn-ghost-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>

        <!-- Stats strip -->
        <div class="stats-strip">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>

        <!-- Feature pills -->
        <div class="pills-row">
          <div class="pill" v-for="f in features" :key="f">
            <span class="pill-check" aria-hidden="true">
              <svg viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            {{ f }}
          </div>
        </div>

      </div>

      <!-- Floating device card (desktop only) -->
      <div class="device-card" aria-hidden="true">
        <div class="device-screen">
          <div class="device-shimmer"></div>
          <div class="device-ui">
            <div class="dui-bar dui-bar-short"></div>
            <div class="dui-bar dui-bar-long"></div>
            <div class="dui-bar dui-bar-mid"></div>
            <div class="dui-icon-row">
              <span class="dui-icon"></span>
              <span class="dui-icon dui-icon-red"></span>
              <span class="dui-icon"></span>
            </div>
            <div class="dui-bar dui-bar-long"></div>
            <div class="dui-bar dui-bar-short"></div>
          </div>
          <div class="repair-badge">
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            Repaired ✓
          </div>
        </div>
        <div class="device-notch"></div>
      </div>

    </div>

    <!-- Bottom accent line -->
    <div class="hero-bottom-line" aria-hidden="true"></div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const stats = [
  { value: '5,000+', label: 'Devices Fixed' },
  { value: '4.9★',   label: 'Customer Rating' },
  { value: '~1 hr',  label: 'Avg. Turnaround' },
]

const features = [
  'Skilled Technicians',
  'Quality Parts',
  'Honest Pricing',
  'All Brands Serviced',
  'Walk-ins Welcome',
]
</script>

<style scoped>
/* ─── Font ───────────────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&display=swap');

/* ─── Color tokens — ALL hex / rgba, zero oklch ──────────────── */
.hero-root {
  --c-bg:          #09090c;
  --c-surface:     #111116;
  --c-surface-2:   #18181f;
  --c-border:      rgba(255,255,255,0.07);
  --c-border-2:    rgba(255,255,255,0.13);

  --c-red:         #e63030;
  --c-red-bright:  #ff4545;
  --c-red-dark:    #b91c1c;
  --c-red-darker:  #991b1b;
  --c-red-glow:    rgba(230,48,48,0.30);
  --c-red-glow-lg: rgba(220,38,38,0.18);
  --c-red-tint:    rgba(230,48,48,0.12);
  --c-red-text:    #ff7070;

  --c-white:       #ffffff;
  --c-text-1:      #ededf0;
  --c-text-2:      #8888a0;
  --c-text-3:      #50505e;
}

/* ─── Base ───────────────────────────────────────────────────── */
*,*::before,*::after { box-sizing: border-box; }

.hero-root {
  position: relative;
  min-height: 100vh;
  background-color: var(--c-bg);
  color: var(--c-text-1);
  font-family: 'DM Sans', system-ui, sans-serif;
  overflow: hidden;
}

/* ─── Background: dot grid ───────────────────────────────────── */
.bg-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 40px 40px;
  -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 100%);
  mask-image: radial-gradient(ellipse 80% 70% at 50% 0%, black 30%, transparent 100%);
}

/* ─── Background: colour glows ───────────────────────────────── */
.bg-glow {
  position: absolute;
  z-index: 0;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}
.bg-glow-1 {
  width: 700px; height: 500px;
  top: -180px; left: 50%;
  transform: translateX(-55%);
  background-color: rgba(220,38,38,0.16);
}
.bg-glow-2 {
  width: 350px; height: 350px;
  bottom: -80px; right: -60px;
  background-color: rgba(185,28,28,0.12);
}

/* ─── Background: subtle noise ───────────────────────────────── */
.bg-noise {
  position: absolute; inset: 0; z-index: 1;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
}

/* ─── Grid layout ────────────────────────────────────────────── */
.hero-inner {
  position: relative;
  z-index: 2;
  max-width: 1140px;
  margin: 0 auto;
  padding: 1.75rem 1.5rem 6rem;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 3rem;
}

@media (min-width: 920px) {
  .hero-inner {
    padding: 2.25rem 3rem 7rem;
    grid-template-columns: 1fr 340px;
    grid-template-rows: auto 1fr;
    align-items: center;
    column-gap: 4rem;
  }
}

/* ─── Meta bar ───────────────────────────────────────────────── */
.meta-bar {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  font-size: 0.72rem;
  color: var(--c-text-2);
  border-bottom: 1px solid var(--c-border);
  padding-bottom: 1.25rem;
  animation: fadeDown 0.5s ease both;
}
.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.meta-item strong { color: var(--c-text-1); font-weight: 600; }

.meta-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background-color: var(--c-red-bright);
  box-shadow: 0 0 8px var(--c-red-glow);
  animation: pulseDot 2.2s ease-in-out infinite;
}
@keyframes pulseDot {
  0%,100% { box-shadow: 0 0 6px var(--c-red-glow); }
  50%     { box-shadow: 0 0 16px rgba(230,48,48,0.55); }
}

.meta-icon { width: 13px; height: 13px; color: var(--c-red-text); flex-shrink: 0; }
.meta-divider { width: 1px; height: 14px; background-color: var(--c-border-2); }

/* ─── Content column ─────────────────────────────────────────── */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}
@media (min-width: 920px) {
  .hero-content { grid-row: 2; }
}

/* ─── Eyebrow ────────────────────────────────────────────────── */
.eyebrow { animation: fadeUp 0.55s 0.05s ease both; }

.eyebrow-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  border: 1px solid rgba(230,48,48,0.3);
  background-color: rgba(230,48,48,0.09);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--c-red-text);
}
.eyebrow-pulse {
  width: 6px; height: 6px;
  border-radius: 50%;
  background-color: var(--c-red-bright);
  animation: pulseDot 1.8s ease-in-out infinite;
}

/* ─── Heading ────────────────────────────────────────────────── */
.hero-heading {
  margin: 0;
  font-family: 'Syne', system-ui, sans-serif;
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.0;
  display: flex;
  flex-direction: column;
  gap: 0.08em;
  animation: fadeUp 0.6s 0.12s ease both;
}

.heading-line-1 {
  font-size: clamp(3rem, 8vw, 5.25rem);
  color: var(--c-text-1);
}
.heading-line-2 {
  position: relative;
  display: inline-block;
  font-size: clamp(3rem, 8vw, 5.25rem);
  /* Explicit hex gradient — no oklch, safe on all iOS Safari */
  background-image: linear-gradient(90deg, #ff4545 0%, #e63030 50%, #c02020 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.heading-accent-bar {
  position: absolute;
  left: 0; bottom: -3px;
  width: 55%; height: 3px;
  border-radius: 2px;
  background-image: linear-gradient(90deg, #ff4545, rgba(230,48,48,0));
}
.heading-line-3 {
  font-size: clamp(1.8rem, 5vw, 3.25rem);
  color: var(--c-text-3);
}

/* ─── Description ────────────────────────────────────────────── */
.hero-description {
  margin: 0;
  font-size: clamp(0.95rem, 1.8vw, 1.1rem);
  line-height: 1.8;
  color: var(--c-text-2);
  max-width: 500px;
  animation: fadeUp 0.6s 0.2s ease both;
}
.brand-name { color: var(--c-text-1); font-weight: 600; }

/* ─── CTA buttons ────────────────────────────────────────────── */
.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  animation: fadeUp 0.6s 0.28s ease both;
}

.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  background-image: linear-gradient(135deg, #e63030 0%, #b91c1c 100%);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  border: none;
  /* explicit rgba shadow */
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

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid var(--c-border-2);
  color: var(--c-text-2);
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
}
.btn-ghost:hover {
  border-color: rgba(255,255,255,0.22);
  color: var(--c-text-1);
  background-color: rgba(255,255,255,0.04);
}
.btn-ghost-arrow { width: 16px; height: 16px; transition: transform 0.2s; }
.btn-ghost:hover .btn-ghost-arrow { transform: translateX(3px); }

/* ─── Stats strip ────────────────────────────────────────────── */
.stats-strip {
  display: flex;
  align-items: stretch;
  gap: 0;
  border: 1px solid var(--c-border);
  border-radius: 14px;
  overflow: hidden;
  animation: fadeUp 0.6s 0.36s ease both;
}

.stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  padding: 1rem 0.75rem;
  background-color: var(--c-surface);
  border-right: 1px solid var(--c-border);
  transition: background-color 0.2s;
}
.stat:last-child { border-right: none; }
.stat:hover { background-color: var(--c-surface-2); }

.stat-value {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--c-text-1);
  line-height: 1;
}
.stat-label {
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-text-3);
  text-align: center;
}

/* ─── Feature pills ──────────────────────────────────────────── */
.pills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  animation: fadeUp 0.6s 0.44s ease both;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  background-color: var(--c-surface-2);
  border: 1px solid var(--c-border);
  font-size: 0.76rem;
  font-weight: 500;
  color: var(--c-text-2);
  transition: border-color 0.15s, color 0.15s;
}
.pill:hover { border-color: var(--c-border-2); color: var(--c-text-1); }

.pill-check {
  display: flex; align-items: center; justify-content: center;
  width: 14px; height: 14px;
  border-radius: 50%;
  background-color: var(--c-red-tint);
  flex-shrink: 0;
}
.pill-check svg { width: 8px; height: 8px; color: var(--c-red-text); }

/* ─── Floating device card ───────────────────────────────────── */
.device-card { display: none; }

@media (min-width: 920px) {
  .device-card {
    display: block;
    grid-row: 2;
    justify-self: center;
    align-self: center;
    position: relative;
    width: 210px; height: 400px;
    border-radius: 36px;
    /* explicit hex gradient */
    background-image: linear-gradient(145deg, #1c1c26, #0f0f18);
    border: 1px solid rgba(255,255,255,0.11);
    box-shadow:
      0 0 0 1px rgba(0,0,0,0.6),
      0 40px 80px rgba(0,0,0,0.7),
      inset 0 1px 0 rgba(255,255,255,0.07);
    animation: slideIn 0.8s 0.35s ease both, floatY 7s 1.2s ease-in-out infinite;
    transform: rotate(-2deg);
  }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(40px) rotate(-2deg); }
  to   { opacity: 1; transform: translateY(0) rotate(-2deg); }
}
@keyframes floatY {
  0%,100% { transform: translateY(0) rotate(-2deg); }
  50%     { transform: translateY(-14px) rotate(-2deg); }
}

.device-notch {
  position: absolute;
  top: 13px; left: 50%;
  transform: translateX(-50%);
  width: 62px; height: 16px;
  border-radius: 9999px;
  background-color: #09090c;
  z-index: 3;
}

.device-screen {
  position: absolute;
  inset: 7px;
  border-radius: 30px;
  background-image: linear-gradient(165deg, #17171f, #0d0d14);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3.25rem 1.1rem 1.25rem;
}

.device-shimmer {
  position: absolute; top: 0; left: -80%;
  width: 60%; height: 100%;
  background-image: linear-gradient(110deg, transparent, rgba(255,255,255,0.035), transparent);
  animation: shimmer 5s 2s ease-in-out infinite;
  pointer-events: none;
}
@keyframes shimmer {
  0%   { left: -80%; }
  100% { left: 120%; }
}

.device-ui { display: flex; flex-direction: column; gap: 0.7rem; }

.dui-bar {
  height: 7px; border-radius: 9999px;
  background-color: rgba(255,255,255,0.07);
}
.dui-bar-short { width: 42%; }
.dui-bar-long  { width: 90%; }
.dui-bar-mid   { width: 64%; }

.dui-icon-row { display: flex; gap: 0.45rem; margin: 0.2rem 0; }
.dui-icon {
  width: 34px; height: 34px; border-radius: 9px;
  background-color: rgba(255,255,255,0.07);
}
.dui-icon-red {
  background-image: linear-gradient(135deg, #e63030, #b91c1c);
  box-shadow: 0 4px 14px rgba(230,48,48,0.45);
}

.repair-badge {
  position: absolute;
  bottom: 1rem; right: 0.85rem;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.65rem;
  border-radius: 9999px;
  background-image: linear-gradient(135deg, #e63030, #b91c1c);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(230,48,48,0.5);
}

/* ─── Bottom accent line ─────────────────────────────────────── */
.hero-bottom-line {
  position: relative; z-index: 2;
  height: 1px;
  background-image: linear-gradient(90deg, transparent 0%, rgba(230,48,48,0.45) 50%, transparent 100%);
}

/* ─── Entrance keyframes ─────────────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeDown {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>