<template>
  <section id="contact-us" class="contact-root">

    <div class="contact-inner">

      <!-- Section header -->
      <div class="section-header">
        <span class="section-eyebrow">Inquiry Form</span>
        <h2 class="section-title">
          Let's Reach <span class="title-accent">Out</span>
        </h2>
        <p class="section-subtitle">
          Fill out the form below and we'll get back to you as soon as possible.
          Fields marked with <span class="required-star">*</span> are required.
        </p>
      </div>

      <!-- Main panel -->
      <div class="contact-panel">

        <!-- ── Left: Form ── -->
        <div class="form-col">

          <!-- Progress indicator -->
          <div class="form-progress" aria-label="Form progress">
            <div class="progress-step" :class="{ 'step-active': progressStep >= 1, 'step-done': progressStep > 1 }">
              <span class="step-num">1</span>
              <span class="step-label">Your Info</span>
            </div>
            <div class="progress-line" :class="{ 'line-active': progressStep >= 2 }"></div>
            <div class="progress-step" :class="{ 'step-active': progressStep >= 2, 'step-done': progressStep > 2 }">
              <span class="step-num">2</span>
              <span class="step-label">Message</span>
            </div>
            <div class="progress-line" :class="{ 'line-active': progressStep >= 3 }"></div>
            <div class="progress-step" :class="{ 'step-active': progressStep >= 3 }">
              <span class="step-num">3</span>
              <span class="step-label">Send</span>
            </div>
          </div>

          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>

            <!-- Row 1: Name + Phone -->
            <div class="form-row">
              <div class="field-group" :class="{ 'field-filled': form.name, 'field-has-error': errors.name }">
                <label class="field-label">Full Name <span class="required-star">*</span></label>
                <div class="field-wrap">
                  <span class="field-icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/></svg>
                  </span>
                  <input v-model="form.name" type="text" class="field-input" placeholder="John Doe"
                    @focus="clearError('name')" @input="updateProgress" />
                </div>
                <p v-if="errors.name" class="field-error-msg">{{ errors.name }}</p>
              </div>

              <div class="field-group" :class="{ 'field-filled': form.phone_number, 'field-has-error': errors.phone_number }">
                <label class="field-label">Phone Number <span class="required-star">*</span></label>
                <div class="field-wrap">
                  <span class="field-icon" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                  </span>
                  <input v-model="form.phone_number" type="tel" class="field-input" placeholder="+231 880 000 000"
                    @focus="clearError('phone_number')" @input="updateProgress" />
                </div>
                <p v-if="errors.phone_number" class="field-error-msg">{{ errors.phone_number }}</p>
              </div>
            </div>

            <!-- Email -->
            <div class="field-group" :class="{ 'field-filled': form.email }">
              <label class="field-label">
                Email Address
                <span class="optional-tag">Optional</span>
              </label>
              <div class="field-wrap">
                <span class="field-icon" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                </span>
                <input v-model="form.email" type="email" class="field-input" placeholder="john@example.com" />
              </div>
            </div>

            <!-- Message -->
            <div class="field-group textarea-group" :class="{ 'field-filled': form.message, 'field-has-error': errors.message }">
              <label class="field-label">Your Message <span class="required-star">*</span></label>
              <textarea v-model="form.message" class="field-textarea"
                placeholder="How can we help you today? Describe your issue or inquiry…"
                rows="5" @focus="clearError('message')" @input="updateProgress"
                maxlength="500"></textarea>
              <div class="char-count" :class="{ 'char-warn': form.message.length > 400 }">
                {{ form.message.length }} / 500
              </div>
              <p v-if="errors.message" class="field-error-msg">{{ errors.message }}</p>
            </div>

            <!-- Submit -->
            <button type="submit" class="submit-btn" :disabled="submitting">
              <span class="submit-inner">
                <span v-if="submitting" class="spinner" aria-hidden="true"></span>
                <span>{{ submitting ? 'Sending…' : 'Submit Inquiry' }}</span>
                <svg v-if="!submitting" class="submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
              <span class="submit-hover-bg" aria-hidden="true"></span>
            </button>

          </form>
        </div>

        <!-- ── Right: Info panel ── -->
        <div class="info-col">
          <div class="info-deco-glow-1" aria-hidden="true"></div>
          <div class="info-deco-glow-2" aria-hidden="true"></div>

          <div class="info-content">

            <!-- Brand -->
            <div class="info-brand">
              <div class="brand-logo-wrap" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor" class="brand-icon">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <p class="brand-name">Fruitful Vine Mobile</p>
                <p class="brand-tagline">Where Phones Come Back to Life</p>
              </div>
            </div>

            <!-- Info blocks -->
            <div class="info-blocks">
              <div class="info-block">
                <div class="info-block-header">
                  <span class="info-rule" aria-hidden="true"></span>
                  <h4 class="info-block-title">Contact Info</h4>
                </div>
                <a href="mailto:fruitfulvinemobile@gmail.com" class="info-link info-link-anchor">
                  <div class="info-link-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="info-link-label">Email</p>
                    <p class="info-link-value">fruitfulvinemobile@gmail.com</p>
                  </div>
                </a>
              </div>

              <div class="info-block">
                <div class="info-block-header">
                  <span class="info-rule" aria-hidden="true"></span>
                  <h4 class="info-block-title">Visit Us</h4>
                </div>
                <div class="info-link">
                  <div class="info-link-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <address class="info-link-value not-italic">
                    Shopping Plaza, Opp. GT Bank,<br/>Red Light, Morovia, Liberia
                  </address>
                </div>
              </div>
            </div>

            <!-- Hours card -->
            <div class="hours-card">
              <div class="hours-top">
                <div class="hours-dot-wrap" aria-hidden="true">
                  <span class="hours-dot"></span>
                  <span class="hours-dot-ring"></span>
                </div>
                <div class="hours-text">
                  <p class="hours-label">We're Open</p>
                  <p class="hours-time">9:00 AM — 11:00 PM</p>
                </div>
                <span class="hours-badge">Daily</span>
              </div>
              <p class="hours-note">Online support available 24 / 7</p>
            </div>

            <!-- Quick action buttons -->
            <div class="quick-actions">
              <a href="https://wa.me/231887777364" target="_blank" rel="noopener" class="quick-btn quick-btn-wa">
                <svg viewBox="0 0 24 24" fill="currentColor" class="quick-icon">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
              <a href="mailto:fruitfulvinemobile@gmail.com" class="quick-btn quick-btn-email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="quick-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send Email
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- ── Success modal ── -->
    <Transition name="fade">
      <div v-if="showSuccess" class="modal-backdrop" @click.self="showSuccess = false">
        <div class="modal-card">
          <div class="modal-icon-wrap" aria-hidden="true">
            <svg class="modal-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
            </svg>
            <div class="modal-icon-ring" aria-hidden="true"></div>
          </div>
          <h3 class="modal-title">Message Sent!</h3>
          <p class="modal-body">Thank you for reaching out. Our team will contact you shortly — usually within a few hours.</p>
          <button @click="showSuccess = false" class="modal-close-btn">
            <span>Back to Site</span>
            <span class="modal-close-hover" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </Transition>

  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
const { getUrl } = useApi()

const submitting   = ref(false)
const showSuccess  = ref(false)
const progressStep = ref(1)

const form   = reactive({ name: '', email: '', message: '', phone_number: '' })
const errors = reactive({ name: '', phone_number: '', message: '' })

const clearError = (field: keyof typeof errors) => { errors[field] = '' }

const updateProgress = () => {
  if (form.name && form.phone_number && form.message) progressStep.value = 3
  else if (form.name || form.phone_number)             progressStep.value = 2
  else                                                  progressStep.value = 1
}

const validate = () => {
  let ok = true
  if (!form.name.trim())         { errors.name         = 'Full name is required.';      ok = false }
  if (!form.phone_number.trim()) { errors.phone_number  = 'Phone number is required.';  ok = false }
  if (!form.message.trim())      { errors.message       = 'Please enter your message.'; ok = false }
  return ok
}

const handleSubmit = async () => {
  if (!validate()) return
  submitting.value = true
  try {
    const res  = await fetch(getUrl('contact/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, created_at: new Date().toISOString().split('T')[0] })
    })
    const data = await res.json()
    if (data.status) {
      showSuccess.value = true
      progressStep.value = 1
      Object.assign(form, { name: '', email: '', message: '', phone_number: '' })
    }
  } catch {
    alert('Something went wrong. Please try again later.')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
/* ─── Color tokens — ALL hex/rgba, zero oklch ────────────────── */
.contact-root {
  --red:           #dc2626;
  --red-bright:    #ef4444;
  --red-dark:      #b91c1c;
  --red-50:        #fff1f2;
  --red-100:       #ffe4e6;
  --red-200:       #fecdd3;
  --red-a10:       rgba(220,38,38,0.10);
  --red-a20:       rgba(220,38,38,0.20);
  --red-a30:       rgba(220,38,38,0.30);
  --red-glow:      rgba(220,38,38,0.30);
  --red-text:      #f87171;

  --dark:          #0a0a0c;
  --dark-2:        #111115;
  --dark-3:        #18181e;
  --d-border:      rgba(255,255,255,0.08);
  --d-border-2:    rgba(255,255,255,0.13);

  --gray-50:       #f9fafb;
  --gray-100:      #f3f4f6;
  --gray-200:      #e5e7eb;
  --gray-300:      #d1d5db;
  --gray-400:      #9ca3af;
  --gray-500:      #6b7280;
  --gray-600:      #4b5563;
  --gray-700:      #374151;
  --gray-900:      #111827;

  --white:         #ffffff;
  --shadow-panel:  0 32px 80px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04);
  --shadow-input:  0 1px 3px rgba(0,0,0,0.06);
}

/* ─── Base ───────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.contact-root {
  background-color: var(--white);
  padding: 5rem 1.5rem 6rem;
  font-family: 'DM Sans', system-ui, sans-serif;
}
@media (min-width: 640px)  { .contact-root { padding: 7rem 1.5rem 8rem; } }
@media (min-width: 1024px) { .contact-root { padding: 8rem 2rem 9rem; } }

.contact-inner {
  max-width: 1240px;
  margin: 0 auto;
}

/* ─── Section header ─────────────────────────────────────────── */
.section-header { text-align: center; margin-bottom: 3.5rem; }

.section-eyebrow {
  display: inline-block;
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  background-color: var(--red-50);
  border: 1px solid var(--red-100);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 1rem;
}

.section-title {
  margin: 0 0 0.85rem;
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: var(--gray-900);
  line-height: 1.05;
}
.title-accent {
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.section-subtitle {
  margin: 0 auto;
  max-width: 36rem;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--gray-500);
}
.required-star { color: var(--red); font-weight: 700; }

/* ─── Panel ──────────────────────────────────────────────────── */
.contact-panel {
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-panel);
}
@media (min-width: 1024px) {
  .contact-panel { grid-template-columns: 5fr 4fr; }
}

/* ─── Form column ────────────────────────────────────────────── */
.form-col {
  background-color: var(--white);
  padding: 2.25rem 2rem;
}
@media (min-width: 1024px) { .form-col { padding: 3.5rem; } }

/* Progress */
.form-progress {
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
}
.progress-step { display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0; }

.step-num {
  width: 28px; height: 28px;
  border-radius: 50%;
  background-color: var(--gray-100);
  border: 2px solid var(--gray-200);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem; font-weight: 800;
  color: var(--gray-400);
  transition: background-color 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s;
}
.step-label {
  font-size: 0.7rem; font-weight: 600;
  color: var(--gray-400);
  letter-spacing: 0.04em;
  transition: color 0.25s;
}
.step-active .step-num {
  background-color: var(--red);
  border-color: var(--red);
  color: var(--white);
  -webkit-text-fill-color: var(--white);
  box-shadow: 0 4px 12px var(--red-glow);
}
.step-active .step-label { color: var(--gray-900); }
.step-done .step-num {
  background-color: var(--red-dark);
  border-color: var(--red-dark);
  color: var(--white);
  -webkit-text-fill-color: var(--white);
}

.progress-line {
  flex: 1; height: 2px;
  background-color: var(--gray-200);
  margin: 0 0.5rem;
  border-radius: 9999px;
  transition: background-image 0.4s;
}
.line-active { background-image: linear-gradient(90deg, #dc2626, #b91c1c); }

/* Form layout */
.contact-form { display: flex; flex-direction: column; gap: 1.5rem; }
.form-row {
  display: grid; grid-template-columns: 1fr; gap: 1.5rem;
}
@media (min-width: 640px) { .form-row { grid-template-columns: 1fr 1fr; } }

/* Field */
.field-group { display: flex; flex-direction: column; gap: 0.45rem; }

.field-label {
  font-size: 0.72rem; font-weight: 700;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: var(--gray-700);
  display: flex; align-items: center; gap: 0.4rem;
}
.optional-tag {
  font-size: 0.6rem; font-weight: 600;
  color: var(--gray-400);
  background-color: var(--gray-100);
  border-radius: 9999px;
  padding: 0.1rem 0.45rem;
  text-transform: uppercase; letter-spacing: 0.05em;
}

.field-wrap { position: relative; display: flex; align-items: center; }
.field-icon {
  position: absolute; left: 0.9rem; top: 50%; transform: translateY(-50%);
  width: 16px; height: 16px; color: var(--gray-300);
  pointer-events: none; transition: color 0.2s; flex-shrink: 0;
}
.field-icon svg { width: 16px; height: 16px; }

.field-input {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 2.5rem;
  border-radius: 12px;
  border: 1.5px solid var(--gray-200);
  background-color: var(--gray-50);
  font-size: 0.92rem;
  color: var(--gray-900);
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
  box-shadow: var(--shadow-input);
}
.field-input::placeholder { color: var(--gray-300); }
.field-input:focus {
  border-color: var(--red);
  background-color: var(--white);
  box-shadow: 0 0 0 3px var(--red-a10), var(--shadow-input);
}
.field-group.field-filled .field-icon { color: var(--red); }
.field-group.field-has-error .field-input {
  border-color: var(--red-bright);
  box-shadow: 0 0 0 3px var(--red-a10);
}

.textarea-group { position: relative; }
.field-textarea {
  width: 100%;
  padding: 1rem 1.1rem;
  border-radius: 14px;
  border: 1.5px solid var(--gray-200);
  background-color: var(--gray-50);
  font-size: 0.92rem;
  color: var(--gray-900);
  font-family: inherit;
  outline: none; resize: none;
  min-height: 140px; line-height: 1.65;
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
  box-shadow: var(--shadow-input);
}
.field-textarea::placeholder { color: var(--gray-300); }
.field-textarea:focus {
  border-color: var(--red);
  background-color: var(--white);
  box-shadow: 0 0 0 3px var(--red-a10), var(--shadow-input);
}

.char-count {
  position: absolute; bottom: 0.6rem; right: 0.75rem;
  font-size: 0.65rem; font-weight: 600;
  color: var(--gray-300); pointer-events: none;
}
.char-warn { color: var(--red); }

.field-error-msg {
  margin: 0; font-size: 0.72rem;
  color: var(--red); font-weight: 600;
}

/* Submit button */
.submit-btn {
  position: relative;
  width: 100%;
  padding: 1.05rem 2rem;
  border-radius: 14px;
  background-image: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: var(--white);
  -webkit-text-fill-color: var(--white);
  font-family: inherit;
  font-weight: 800;
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0,0,0,0.22);
  transition: transform 0.2s, box-shadow 0.3s;
}
.submit-hover-bg {
  position: absolute; inset: 0;
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  opacity: 0;
  transition: opacity 0.35s;
}
.submit-btn:hover .submit-hover-bg { opacity: 1; }
.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(220,38,38,0.35);
}
.submit-btn:active { transform: none; }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.submit-btn:disabled:hover { transform: none; box-shadow: 0 8px 24px rgba(0,0,0,0.22); }
.submit-btn:disabled:hover .submit-hover-bg { opacity: 0; }

.submit-inner {
  position: relative; z-index: 1;
  display: flex; align-items: center; justify-content: center; gap: 0.6rem;
}
.submit-arrow { width: 18px; height: 18px; transition: transform 0.2s; }
.submit-btn:hover .submit-arrow { transform: translateX(4px); }

.spinner {
  width: 16px; height: 16px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: #ffffff;
  animation: spin 0.7s linear infinite;
  flex-shrink: 0;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* ─── Info column ────────────────────────────────────────────── */
.info-col {
  position: relative;
  background-color: var(--dark);
  background-image: linear-gradient(145deg, #111115, #0a0a0c);
  padding: 2.25rem 2rem;
  overflow: hidden;
}
@media (min-width: 1024px) { .info-col { padding: 3.5rem; } }

.info-deco-glow-1 {
  position: absolute;
  width: 320px; height: 320px;
  top: -100px; right: -100px;
  border-radius: 50%;
  background-image: radial-gradient(circle, rgba(220,38,38,0.20), transparent 70%);
  pointer-events: none;
}
.info-deco-glow-2 {
  position: absolute;
  width: 200px; height: 200px;
  bottom: -60px; left: -60px;
  border-radius: 50%;
  background-image: radial-gradient(circle, rgba(220,38,38,0.12), transparent 70%);
  pointer-events: none;
}

.info-content {
  position: relative; z-index: 1;
  display: flex; flex-direction: column;
  gap: 2rem; height: 100%;
}

/* Brand */
.info-brand { display: flex; align-items: center; gap: 0.85rem; }
.brand-logo-wrap {
  display: flex; align-items: center; justify-content: center;
  width: 44px; height: 44px;
  border-radius: 12px;
  background-image: linear-gradient(135deg, #16a34a, #15803d);
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(21,128,61,0.4);
}
.brand-icon { width: 22px; height: 22px; color: #ffffff; }
.brand-name {
  margin: 0; font-size: 0.95rem; font-weight: 800;
  color: var(--white); -webkit-text-fill-color: var(--white); line-height: 1.2;
}
.brand-tagline {
  margin: 0; font-size: 0.68rem;
  color: rgba(255,255,255,0.35); font-style: italic;
}

/* Info blocks */
.info-blocks { display: flex; flex-direction: column; gap: 1.75rem; }
.info-block-header {
  display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.85rem;
}
.info-rule {
  display: block; width: 24px; height: 2px;
  border-radius: 9999px; background-color: var(--red); flex-shrink: 0;
}
.info-block-title {
  margin: 0; font-size: 0.7rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  color: var(--white); -webkit-text-fill-color: var(--white);
}

.info-link {
  display: flex; align-items: flex-start; gap: 0.85rem;
  text-decoration: none;
}
.info-link-anchor { transition: opacity 0.2s; }
.info-link-anchor:hover { opacity: 0.8; }

.info-link-icon {
  display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px;
  border-radius: 10px;
  background-color: var(--d-border);
  border: 1px solid var(--d-border-2);
  flex-shrink: 0; color: rgba(255,255,255,0.45);
  transition: background-color 0.2s, color 0.2s;
}
.info-link-icon svg { width: 16px; height: 16px; }
.info-link-anchor:hover .info-link-icon {
  background-color: var(--red-a20);
  color: var(--red-text);
}

.info-link-label {
  margin: 0 0 0.15rem; font-size: 0.65rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.07em;
  color: rgba(255,255,255,0.30);
}
.info-link-value {
  margin: 0; font-size: 0.85rem;
  color: rgba(255,255,255,0.70); line-height: 1.55;
}

/* Hours card */
.hours-card {
  border-radius: 16px; padding: 1.25rem;
  background-color: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
}
.hours-top {
  display: flex; align-items: center; gap: 0.85rem; margin-bottom: 0.6rem;
}
.hours-dot-wrap { position: relative; width: 12px; height: 12px; flex-shrink: 0; }
.hours-dot {
  display: block; width: 10px; height: 10px;
  border-radius: 50%; background-color: #4ade80;
  position: absolute; top: 1px; left: 1px;
}
.hours-dot-ring {
  display: block; width: 12px; height: 12px;
  border-radius: 50%; border: 2px solid rgba(74,222,128,0.4);
  position: absolute; top: 0; left: 0;
  animation: pulse-ring 2s ease-in-out infinite;
}
@keyframes pulse-ring {
  0%,100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.5); opacity: 0; }
}

.hours-text { flex: 1; }
.hours-label {
  margin: 0; font-size: 0.65rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.07em;
  color: rgba(255,255,255,0.30);
}
.hours-time {
  margin: 0; font-size: 1rem; font-weight: 800;
  color: var(--white); -webkit-text-fill-color: var(--white);
}
.hours-badge {
  padding: 0.2rem 0.6rem; border-radius: 9999px;
  background-color: var(--red-a20);
  border: 1px solid var(--red-a30);
  font-size: 0.65rem; font-weight: 700;
  color: var(--red-text); letter-spacing: 0.06em; text-transform: uppercase;
}
.hours-note {
  margin: 0; font-size: 0.72rem;
  color: rgba(255,255,255,0.25); padding-left: 1.5rem;
}

/* Quick actions */
.quick-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
.quick-btn {
  flex: 1; min-width: 120px;
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  font-size: 0.8rem; font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}
.quick-btn:hover { transform: translateY(-2px); }

.quick-btn-wa {
  background-image: linear-gradient(135deg, #16a34a, #15803d);
  color: #ffffff; -webkit-text-fill-color: #ffffff;
  box-shadow: 0 4px 16px rgba(21,128,61,0.35);
}
.quick-btn-wa:hover { box-shadow: 0 8px 24px rgba(21,128,61,0.45); }

.quick-btn-email {
  background-color: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.70); -webkit-text-fill-color: rgba(255,255,255,0.70);
}
.quick-btn-email:hover {
  background-color: rgba(255,255,255,0.10);
  border-color: rgba(255,255,255,0.20);
}

.quick-icon { width: 16px; height: 16px; flex-shrink: 0; }

/* ─── Modal ──────────────────────────────────────────────────── */
.modal-backdrop {
  position: fixed; inset: 0; z-index: 100;
  display: flex; align-items: center; justify-content: center; padding: 1.5rem;
  background-color: rgba(0,0,0,0.75);
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
}
.modal-card {
  background-color: var(--white);
  border-radius: 24px; padding: 2.5rem 2rem;
  max-width: 380px; width: 100%; text-align: center;
  box-shadow: 0 40px 100px rgba(0,0,0,0.4);
  animation: scaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes scaleIn {
  from { transform: scale(0.88); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}

.modal-icon-wrap {
  position: relative;
  width: 72px; height: 72px;
  margin: 0 auto 1.5rem;
  display: flex; align-items: center; justify-content: center;
  border-radius: 50%;
  background-image: linear-gradient(135deg, #fee2e2, #fecdd3);
}
.modal-icon { width: 36px; height: 36px; color: var(--red); stroke: var(--red); }
.modal-icon-ring {
  position: absolute; inset: -6px; border-radius: 50%;
  border: 2px solid var(--red-100);
  animation: pulse-ring 2.5s ease-in-out 0.3s infinite;
}

.modal-title {
  margin: 0 0 0.6rem;
  font-size: 1.5rem; font-weight: 900;
  letter-spacing: -0.02em; text-transform: uppercase;
  color: var(--gray-900);
}
.modal-body {
  margin: 0 0 2rem;
  font-size: 0.9rem; line-height: 1.7;
  color: var(--gray-500);
}

.modal-close-btn {
  position: relative; overflow: hidden;
  width: 100%; padding: 0.9rem;
  border-radius: 12px;
  background-image: linear-gradient(135deg, #111827, #1f2937);
  color: var(--white); -webkit-text-fill-color: var(--white);
  font-family: inherit; font-weight: 800;
  font-size: 0.78rem; letter-spacing: 0.1em; text-transform: uppercase;
  border: none; cursor: pointer;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
.modal-close-hover {
  position: absolute; inset: 0;
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  opacity: 0; transition: opacity 0.25s;
}
.modal-close-btn:hover .modal-close-hover { opacity: 1; }
.modal-close-btn span:first-child { position: relative; z-index: 1; }

/* ─── Transition ─────────────────────────────────────────────── */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>