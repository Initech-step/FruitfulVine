<template>
  <div class="services-tiers-root">

    <!-- Background system -->
    <div class="bg-grid" aria-hidden="true"></div>
    <div class="bg-bloom bg-bloom-1" aria-hidden="true"></div>
    <div class="bg-bloom bg-bloom-2" aria-hidden="true"></div>
    <div class="bg-grain" aria-hidden="true"></div>

    <div class="tiers-inner">

      <!-- Section header -->
      <div class="section-header">
        <span class="section-eyebrow">Our Services</span>
        <h2 class="section-title">All Services Available<br class="title-break"> for Your Needs</h2>
        <div class="title-rule" aria-hidden="true"></div>
      </div>

      <!-- Cards grid -->
      <div class="tiers-grid">
        <div
          v-for="(tier, idx) in tiers"
          :key="tier.id"
          :class="['tier-card', tier.featured ? 'tier-card-featured' : 'tier-card-plain', idx === 0 ? 'tier-card-first' : 'tier-card-last']"
        >
          <!-- Card top accent line -->
          <div class="card-top-line" aria-hidden="true"></div>

          <!-- Header -->
          <div class="card-header">
            <div class="tier-icon-wrap" :class="tier.featured ? 'tier-icon-featured' : ''">
              <!-- Hardware icon -->
              <svg v-if="!tier.featured" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="tier-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <!-- Software icon -->
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="tier-icon">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>

            <div class="tier-label-group">
              <p class="tier-category">{{ tier.name }}</p>
              <h3 class="tier-price">{{ tier.priceMonthly }}</h3>
            </div>

            <div v-if="tier.featured" class="tier-badge">Popular</div>
          </div>

          <!-- Description -->
          <p class="tier-desc">{{ tier.description }}</p>

          <!-- Divider -->
          <div class="card-divider" aria-hidden="true"></div>

          <!-- Features -->
          <ul class="features-list" role="list">
            <li v-for="(feature, fi) in tier.features" :key="feature" class="feature-item">
              <span class="feature-check" :class="tier.featured ? 'feature-check-featured' : ''" aria-hidden="true">
                <CheckIcon class="check-icon" />
              </span>
              <span class="feature-text">{{ feature }}</span>
            </li>
          </ul>

          <!-- CTA -->
          <a :href="tier.href" :class="['tier-cta', tier.featured ? 'tier-cta-featured' : 'tier-cta-plain']">
            <svg viewBox="0 0 24 24" fill="currentColor" class="wa-icon">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Message on WhatsApp
            <svg class="cta-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>

          <!-- Feature count -->
          <p class="feature-count">{{ tier.features.length }} services included</p>

        </div>
      </div>

      <!-- Bottom note -->
      <p class="bottom-note">
        Not sure what you need?
        <a :href="mainHref" class="bottom-note-link">Chat with us on WhatsApp</a>
        and we'll guide you.
      </p>

    </div>
  </div>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const WHATSAPP_NUMBER = '231887777364'
const encode = (t) => encodeURIComponent(t.trim())
const msg = `Hello FruitFul Vine 👋\n\nI'm interested in your services,\nlet me know your availability.`
const mainHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg)}`

const tiers = [
  {
    name: 'Hardware Repairs',
    id: 'hardware-repairs',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg)}`,
    priceMonthly: 'Hardware',
    description: 'Physical repairs for all phone models — screen to motherboard.',
    features: [
      'Screen replacement',
      'Battery replacement',
      'Charging port repair',
      'Speaker / mic repair',
      'Water damage cleaning',
      'Camera replacement',
      'Motherboard-level repairs',
    ],
    featured: false,
  },
  {
    name: 'Software Services',
    id: 'software-services',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg)}`,
    priceMonthly: 'Software',
    description: 'Expert software solutions for iPhones, Android, and more.',
    features: [
      'Flashing / updating iPhone & Android',
      'Network unlocking',
      'iCloud / Samsung / Oppo ID removal',
      'FRP bypass',
      'Network lock removal',
    ],
    featured: true,
  },
]
</script>

<style scoped>
/* ─── Color tokens — ALL hex/rgba, zero oklch ────────────────── */
.services-tiers-root {
  --bg:             #09090b;
  --surface:        #111116;
  --surface-2:      #1a1a22;
  --border:         rgba(255,255,255,0.07);
  --border-2:       rgba(255,255,255,0.13);
  --border-red:     rgba(220,38,38,0.35);
  --border-red-2:   rgba(220,38,38,0.55);

  --red:            #dc2626;
  --red-bright:     #ef4444;
  --red-dark:       #b91c1c;
  --red-glow:       rgba(220,38,38,0.25);
  --red-glow-lg:    rgba(220,38,38,0.18);
  --red-tint:       rgba(220,38,38,0.12);
  --red-tint-2:     rgba(220,38,38,0.20);
  --red-text:       #f87171;

  --green:          #16a34a;
  --green-dark:     #15803d;
  --green-glow:     rgba(21,128,61,0.40);

  --white:          #ffffff;
  --text-1:         #f0f0f4;
  --text-2:         #8888a0;
  --text-3:         #4a4a5e;
}

/* ─── Base ───────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.services-tiers-root {
  position: relative;
  background-color: var(--bg);
  padding: 5rem 1.5rem 6rem;
  overflow: hidden;
  font-family: 'DM Sans', system-ui, sans-serif;
}
@media (min-width: 640px)  { .services-tiers-root { padding: 7rem 1.5rem 8rem; } }
@media (min-width: 1024px) { .services-tiers-root { padding: 8rem 2rem 9rem; } }

/* ─── Background ─────────────────────────────────────────────── */
.bg-grid {
  position: absolute; inset: 0; z-index: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 52px 52px;
  -webkit-mask-image: radial-gradient(ellipse 85% 70% at 50% 20%, black 30%, transparent 100%);
  mask-image: radial-gradient(ellipse 85% 70% at 50% 20%, black 30%, transparent 100%);
}

.bg-bloom {
  position: absolute; z-index: 0;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}
.bg-bloom-1 {
  width: 700px; height: 400px;
  top: -120px; left: 50%;
  transform: translateX(-50%);
  background-color: rgba(220,38,38,0.14);
}
.bg-bloom-2 {
  width: 400px; height: 500px;
  bottom: -100px; right: -80px;
  background-color: rgba(180,20,20,0.10);
}

.bg-grain {
  position: absolute; inset: 0; z-index: 1;
  opacity: 0.025; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}

/* ─── Inner layout ───────────────────────────────────────────── */
.tiers-inner {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
}

/* ─── Section header ─────────────────────────────────────────── */
.section-header { text-align: center; }

.section-eyebrow {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  border: 1px solid var(--border-red);
  background-color: var(--red-tint);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red-text);
  margin-bottom: 1.25rem;
}

.section-title {
  margin: 0 0 1.25rem;
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.08;
  color: var(--text-1);
  -webkit-text-fill-color: var(--text-1);
}
.title-break { display: none; }
@media (min-width: 640px) { .title-break { display: block; } }

.title-rule {
  width: 2.5rem; height: 3px;
  border-radius: 9999px;
  background-image: linear-gradient(90deg, #ef4444, #b91c1c);
  margin: 0 auto;
}

/* ─── Cards grid ─────────────────────────────────────────────── */
.tiers-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  align-items: stretch;
}
@media (min-width: 768px) {
  .tiers-grid { grid-template-columns: 1fr 1fr; gap: 0; }
}

/* ─── Base card ──────────────────────────────────────────────── */
.tier-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 2.25rem 2rem;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.tier-card:hover { transform: translateY(-4px); }

/* Plain card (hardware) */
.tier-card-plain {
  background-color: var(--surface);
  border: 1px solid var(--border-2);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}
.tier-card-plain:hover {
  box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px var(--border-red);
}

/* Featured card (software) */
.tier-card-featured {
  background-image: linear-gradient(155deg, #18080a 0%, #0f0d14 60%, #09090b 100%);
  border: 1px solid var(--border-red);
  box-shadow: 0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px var(--red-tint);
}
.tier-card-featured:hover {
  box-shadow: 0 16px 56px rgba(0,0,0,0.6), 0 0 40px var(--red-glow);
}

/* Rounded corners at desktop — adjacent cards share an inner edge */
@media (min-width: 768px) {
  .tier-card-first  { border-radius: 20px 0 0 20px; border-right: none; }
  .tier-card-last   { border-radius: 0 20px 20px 0; }
}

/* ─── Top accent line ────────────────────────────────────────── */
.card-top-line {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  border-radius: 9999px 9999px 0 0;
}
.tier-card-plain .card-top-line { background-color: var(--border-2); }
.tier-card-featured .card-top-line {
  background-image: linear-gradient(90deg, #ef4444, #b91c1c, rgba(185,28,28,0));
}

/* ─── Card header ────────────────────────────────────────────── */
.card-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.tier-icon-wrap {
  display: flex; align-items: center; justify-content: center;
  width: 48px; height: 48px;
  border-radius: 13px;
  border: 1px solid var(--border-2);
  background-color: rgba(255,255,255,0.05);
  flex-shrink: 0;
  color: var(--text-2);
  transition: border-color 0.2s, background-color 0.2s;
}
.tier-icon-featured {
  border-color: var(--border-red);
  background-color: var(--red-tint);
  color: var(--red-text);
}
.tier-card:hover .tier-icon-wrap { border-color: var(--border-red); }
.tier-icon { width: 22px; height: 22px; }

.tier-label-group { flex: 1; }

.tier-category {
  margin: 0 0 0.2rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-3);
}
.tier-card-featured .tier-category { color: var(--red-text); opacity: 0.7; }

.tier-price {
  margin: 0;
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--text-1);
  -webkit-text-fill-color: var(--text-1);
  line-height: 1;
}
.tier-card-featured .tier-price {
  background-image: linear-gradient(90deg, #ffffff, #ffb3b3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

/* Popular badge */
.tier-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.2rem 0.65rem;
  border-radius: 9999px;
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: 0 4px 12px rgba(220,38,38,0.45);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

/* ─── Description ────────────────────────────────────────────── */
.tier-desc {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.65;
  color: var(--text-2);
}

/* ─── Divider ────────────────────────────────────────────────── */
.card-divider {
  height: 1px;
  background-image: linear-gradient(90deg, transparent, var(--border-2), transparent);
  margin: 1.5rem 0;
}
.tier-card-featured .card-divider {
  background-image: linear-gradient(90deg, transparent, var(--border-red), transparent);
}

/* ─── Features list ──────────────────────────────────────────── */
.features-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  font-size: 0.875rem;
  color: var(--text-2);
  line-height: 1.5;
}

.feature-check {
  display: flex; align-items: center; justify-content: center;
  width: 20px; height: 20px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.06);
  flex-shrink: 0;
  margin-top: 1px;
  color: var(--text-3);
  transition: background-color 0.2s;
}
.feature-check-featured {
  background-color: var(--red-tint-2);
  color: var(--red-text);
}
.tier-card:hover .feature-check { background-color: rgba(255,255,255,0.09); }
.tier-card:hover .feature-check-featured { background-color: rgba(220,38,38,0.28); }
.check-icon { width: 11px; height: 11px; }

.feature-text { flex: 1; }

/* ─── CTA button ─────────────────────────────────────────────── */
.tier-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  margin-top: 2rem;
  padding: 0.85rem 1.5rem;
  border-radius: 11px;
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s, background-image 0.25s;
}
.tier-cta:hover { transform: translateY(-2px); }

.tier-cta-plain {
  background-color: rgba(255,255,255,0.07);
  border: 1px solid var(--border-2);
  color: var(--text-1);
  -webkit-text-fill-color: var(--text-1);
  box-shadow: none;
}
.tier-cta-plain:hover {
  background-color: rgba(255,255,255,0.11);
  border-color: rgba(255,255,255,0.22);
  box-shadow: 0 4px 16px rgba(0,0,0,0.3);
}

.tier-cta-featured {
  background-image: linear-gradient(135deg, #16a34a, #15803d);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  border: none;
  box-shadow: 0 4px 18px rgba(21,128,61,0.40);
}
.tier-cta-featured:hover {
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  box-shadow: 0 8px 28px rgba(220,38,38,0.45);
}

.wa-icon { width: 17px; height: 17px; flex-shrink: 0; }
.cta-arrow { width: 15px; height: 15px; flex-shrink: 0; transition: transform 0.2s; }
.tier-cta:hover .cta-arrow { transform: translateX(3px); }

/* ─── Feature count ──────────────────────────────────────────── */
.feature-count {
  margin: 0.75rem 0 0;
  text-align: center;
  font-size: 0.68rem;
  color: var(--text-3);
  letter-spacing: 0.04em;
}

/* ─── Bottom note ────────────────────────────────────────────── */
.bottom-note {
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-2);
  text-align: center;
}
.bottom-note-link {
  color: var(--red-text);
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: var(--red-tint);
  text-underline-offset: 3px;
  transition: color 0.2s;
}
.bottom-note-link:hover { color: #ffffff; }
</style>