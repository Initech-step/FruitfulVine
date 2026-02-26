<template>
  <div class="services-root">

    <!-- Background blob -->
    <div class="blob blob-top" aria-hidden="true">
      <div class="blob-shape"></div>
    </div>

    <div class="services-inner">

      <!-- Section header -->
      <div class="section-header">
        <span class="section-eyebrow">What We Offer</span>
        <h1 class="section-title">
          Details of Our <span class="title-accent">Services</span>
        </h1>
        <p class="section-subtitle">
          Professional phone repair and software services delivered with expertise and care
        </p>
        <div class="title-rule"></div>
      </div>

      <!-- Services list -->
      <div class="services-list">

        <!-- ── Service 1: Screen Replacement ── -->
        <div class="service-card">
          <div class="service-text order-text-1">
            <div class="service-heading-row">
              <div class="service-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="service-number">01</p>
                <h3 class="service-title">Screen Replacement</h3>
              </div>
            </div>

            <p class="service-desc">
              Cracked or unresponsive screen? We replace damaged screens with high-quality parts to restore clarity and touch sensitivity. Most screen repairs are completed the same day.
            </p>

            <div class="feature-box">
              <p class="feature-box-title">
                <span class="feature-rule" aria-hidden="true"></span>
                What you get:
              </p>
              <ul class="feature-list">
                <li class="feature-item" v-for="f in screenFeatures" :key="f">
                  <span class="feature-check" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                  </span>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>

            <a :href="screen_replacement_href" class="btn-whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" class="btn-wa-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Get This Service
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
          </div>

          <div class="service-img-wrap order-img-1">
            <img src="/img/images (2).jpg" alt="Screen Replacement Service" class="service-img" />
            <div class="service-img-overlay" aria-hidden="true"></div>
            <div class="service-img-badge">
              <span class="img-badge-dot" aria-hidden="true"></span>
              Same-day repair
            </div>
          </div>
        </div>

        <!-- ── Service 2: Battery Replacement ── -->
        <div class="service-card service-card-alt">
          <div class="service-img-wrap order-img-2">
            <img src="/img/images (4).jpg" alt="Battery Replacement Service" class="service-img" />
            <div class="service-img-overlay" aria-hidden="true"></div>
          </div>

          <div class="service-text order-text-2">
            <div class="service-heading-row">
              <div class="service-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p class="service-number">02</p>
                <h3 class="service-title">Battery Replacement</h3>
              </div>
            </div>

            <p class="service-desc">
              Is your phone shutting down fast, overheating, or not holding charge? We replace weak or damaged batteries to give your phone longer life and better performance.
            </p>

            <div class="feature-box feature-box-warning">
              <p class="feature-box-title">
                <span class="feature-rule" aria-hidden="true"></span>
                Signs you need this service:
              </p>
              <ul class="feature-list">
                <li class="feature-item feature-item-warning" v-for="f in batteryWarnings" :key="f">
                  <span class="feature-check feature-check-warning" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
                  </span>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>

            <a :href="battery_replacement_href" class="btn-whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" class="btn-wa-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Get This Service
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
          </div>
        </div>

        <!-- ── Service 3: Charging Port ── -->
        <div class="service-card">
          <div class="service-text order-text-1">
            <div class="service-heading-row">
              <div class="service-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <p class="service-number">03</p>
                <h3 class="service-title">Charging Port Repair</h3>
              </div>
            </div>

            <p class="service-desc">
              Phone not charging properly or only charging at a certain angle? We clean, repair, or replace faulty charging ports to get your device powered again.
            </p>

            <div class="info-callout info-callout-blue">
              <div class="info-callout-icon info-icon-blue">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg>
              </div>
              <div>
                <h4 class="info-callout-title">Common Issues We Fix</h4>
                <p class="info-callout-body">Loose connections, debris buildup, damaged pins, and more</p>
              </div>
            </div>

            <a :href="charging_port_href" class="btn-whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" class="btn-wa-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Get This Service
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
          </div>

          <div class="service-img-wrap order-img-1">
            <img src="/img/images (5).jpg" alt="Charging Port Repair Service" class="service-img" />
            <div class="service-img-overlay" aria-hidden="true"></div>
          </div>
        </div>

        <!-- ── Service 4: Water Damage ── -->
        <div class="service-card service-card-alt">
          <div class="service-img-wrap order-img-2">
            <img src="https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&h=600&fit=crop" alt="Water Damage Cleaning" class="service-img" />
            <div class="service-img-overlay" aria-hidden="true"></div>
          </div>

          <div class="service-text order-text-2">
            <div class="service-heading-row">
              <div class="service-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div>
                <p class="service-number">04</p>
                <h3 class="service-title">Water Damage Cleaning</h3>
              </div>
            </div>

            <p class="service-desc">
              Dropped your phone in water or liquid? Bring it in fast. We professionally clean and treat water-damaged phones to prevent corrosion and data loss.
            </p>

            <div class="info-callout info-callout-amber">
              <div class="info-callout-icon info-icon-amber">
                <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
              </div>
              <div>
                <h4 class="info-callout-title info-title-amber">⚠️ Time is Critical!</h4>
                <p class="info-callout-body info-body-amber">The sooner you come in, the higher the chance of recovery.</p>
              </div>
            </div>

            <a :href="water_damage_cleaning_href" class="btn-whatsapp btn-whatsapp-red">
              <svg viewBox="0 0 24 24" fill="currentColor" class="btn-wa-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Get Emergency Help
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
          </div>
        </div>

        <!-- ── Service 5: Camera / Speaker / Mic ── -->
        <div class="service-card">
          <div class="service-text order-text-1">
            <div class="service-heading-row">
              <div class="service-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="service-number">05</p>
                <h3 class="service-title">Camera, Speaker &amp; Mic</h3>
              </div>
            </div>

            <p class="service-desc">
              Blurry photos, low sound, or people can't hear you on calls? We repair or replace faulty cameras, speakers, and microphones.
            </p>

            <div class="component-grid">
              <div class="component-tile component-tile-purple">
                <div class="component-icon component-icon-purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/></svg>
                </div>
                <p class="component-label component-label-purple">Camera</p>
              </div>
              <div class="component-tile component-tile-blue">
                <div class="component-icon component-icon-blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                </div>
                <p class="component-label component-label-blue">Speaker</p>
              </div>
              <div class="component-tile component-tile-green">
                <div class="component-icon component-icon-green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                </div>
                <p class="component-label component-label-green">Microphone</p>
              </div>
            </div>

            <NuxtLink to="/#contact-us" class="btn-whatsapp btn-whatsapp-red">
              Get This Service
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </NuxtLink>
          </div>

          <div class="service-img-wrap order-img-1">
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop" alt="Camera and Audio Repair" class="service-img" />
            <div class="service-img-overlay" aria-hidden="true"></div>
          </div>
        </div>

        <!-- ── Service 6: Software — dark card ── -->
        <div class="service-card service-card-dark">
          <div class="service-img-wrap order-img-2">
            <img src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=600&fit=crop" alt="Software Services" class="service-img" />
            <div class="service-img-overlay-dark" aria-hidden="true"></div>
          </div>

          <div class="service-text order-text-2">
            <div class="service-heading-row">
              <div class="service-icon-wrap service-icon-wrap-red">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <p class="service-number service-number-dim">06</p>
                <h3 class="service-title service-title-white">Software Services</h3>
              </div>
            </div>

            <p class="service-desc service-desc-light">
              We provide professional software solutions, including phone flashing, network unlocking, and account-related fixes.
            </p>

            <ul class="software-list">
              <li class="software-item" v-for="s in softwareServices" :key="s">
                <span class="software-check" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>
                </span>
                <span>{{ s }}</span>
              </li>
            </ul>

            <a :href="software_service_href" class="btn-whatsapp">
              <svg viewBox="0 0 24 24" fill="currentColor" class="btn-wa-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Get This Service
              <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </a>
          </div>
        </div>

      </div>

      <!-- CTA Banner -->
      <div class="cta-banner">
        <div class="cta-inner">
          <div class="cta-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          </div>
          <div class="cta-text">
            <h3 class="cta-title">Ready to Get Your Phone Fixed?</h3>
            <p class="cta-body">Visit us today or contact us to schedule your repair. Fast, reliable, and affordable — guaranteed.</p>
          </div>
          <a :href="main_href" class="cta-btn">
            <svg viewBox="0 0 24 24" fill="currentColor" class="btn-wa-icon"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            WhatsApp Us Now
            <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const WHATSAPP_NUMBER = '231887777364'
const encode = (t: string) => encodeURIComponent(t.trim())

const msg  = (svc: string) => `Hello FruitFul Vine 👋\nI'm interested in ${svc},\nlet me know your availability.`

const main_href                 = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg('your services'))}`
const screen_replacement_href   = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg('Screen Replacement service'))}`
const battery_replacement_href  = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg('Battery Replacement service'))}`
const charging_port_href        = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg('Charging Port Repair'))}`
const water_damage_cleaning_href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg('Water Damage Cleaning'))}`
const software_service_href     = `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg('software service'))}`

const screenFeatures  = ['Clear display & smooth touch', 'Quality replacement parts', 'Careful installation']
const batteryWarnings = ['Phone dies quickly', 'Battery percentage jumps', 'Phone gets hot']
const softwareServices = [
  'Phone flashing & firmware installation',
  'Network unlocking',
  'FRP & account-related fixes',
  'Cloud / ID removal (where legally permitted)',
]
</script>

<style scoped>
/* ─── Color tokens — ALL hex/rgba, zero oklch ────────────────── */
.services-root {
  --red:          #dc2626;
  --red-bright:   #ef4444;
  --red-dark:     #b91c1c;
  --red-50:       #fff1f2;
  --red-100:      #ffe4e6;
  --red-200:      #fecdd3;
  --red-600-a20:  rgba(220,38,38,0.20);
  --red-glow:     rgba(220,38,38,0.14);

  --green-50:     #f0fdf4;
  --green-100:    #dcfce7;
  --green-700:    #15803d;
  --green-800:    #166534;
  --green-900:    #14532d;

  --amber-50:     #fffbeb;
  --amber-200:    #fde68a;
  --amber-100:    #fef3c7;
  --amber-600:    #d97706;
  --amber-800:    #92400e;
  --amber-900:    #78350f;

  --blue-50:      #eff6ff;
  --blue-100:     #dbeafe;
  --blue-200:     #bfdbfe;
  --blue-600:     #2563eb;
  --blue-900:     #1e3a8a;

  --purple-50:    #faf5ff;
  --purple-100:   #f3e8ff;
  --purple-200:   #e9d5ff;
  --purple-600:   #9333ea;
  --purple-900:   #581c87;

  --gray-50:      #f9fafb;
  --gray-100:     #f3f4f6;
  --gray-200:     #e5e7eb;
  --gray-300:     #d1d5db;
  --gray-500:     #6b7280;
  --gray-600:     #4b5563;
  --gray-700:     #374151;
  --gray-900:     #111827;

  --dark-900:     #0f0f0f;
  --dark-800:     #1a1a1a;
  --dark-700:     #262626;
  --dark-border:  rgba(255,255,255,0.08);

  --white:        #ffffff;
}

/* ─── Base ───────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; }

.services-root {
  position: relative;
  background-color: var(--white);
  /* subtle page tint — explicit hex, no Tailwind gradient util */
  background-image: linear-gradient(180deg, #ffffff 0%, #f9fafb 50%, #ffffff 100%);
  padding: 5rem 1.5rem 6rem;
  overflow: hidden;
  font-family: 'DM Sans', system-ui, sans-serif;
}
@media (min-width: 640px)  { .services-root { padding-top: 7rem; padding-bottom: 8rem; } }
@media (min-width: 1024px) { .services-root { padding-left: 2rem; padding-right: 2rem; } }

/* ─── Background blob ────────────────────────────────────────── */
.blob { position: absolute; left: 0; right: 0; z-index: 0; overflow: hidden; filter: blur(56px); pointer-events: none; }
.blob-top { top: -10rem; }
.blob-shape {
  clip-path: polygon(74.1% 44.1%,100% 61.6%,97.5% 26.9%,85.5% 0.1%,80.7% 2%,72.5% 32.5%,60.2% 62.4%,52.4% 68.1%,47.5% 58.3%,45.2% 34.5%,27.5% 76.7%,0.1% 64.9%,17.9% 100%,27.6% 76.8%,76.1% 97.7%,74.1% 44.1%);
  aspect-ratio: 1155/678;
  position: relative;
  left: calc(50% - 11rem);
  width: 36.125rem;
  transform: translateX(-50%) rotate(30deg);
  background-image: linear-gradient(135deg, #f87171, #dc2626);
  opacity: 0.10;
}
@media (min-width: 640px) { .blob-shape { width: 72.1875rem; } }

/* ─── Inner layout ───────────────────────────────────────────── */
.services-inner {
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}

/* ─── Section header ─────────────────────────────────────────── */
.section-header { text-align: center; margin-bottom: 5rem; }

.section-eyebrow {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--red);
  padding: 0.3rem 0.9rem;
  border-radius: 9999px;
  background-color: var(--red-50);
  border: 1px solid var(--red-100);
  margin-bottom: 1rem;
}

.section-title {
  margin: 0 0 1rem;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  font-weight: 900;
  letter-spacing: -0.03em;
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
  margin: 0 auto 1.5rem;
  max-width: 42rem;
  font-size: 1.05rem;
  color: var(--gray-500);
  line-height: 1.7;
}
.title-rule {
  width: 3rem; height: 4px;
  border-radius: 9999px;
  background-image: linear-gradient(90deg, #dc2626, #b91c1c);
  margin: 0 auto;
}

/* ─── Services list ──────────────────────────────────────────── */
.services-list { display: flex; flex-direction: column; gap: 3.5rem; }

/* ─── Service card ───────────────────────────────────────────── */
.service-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  background-color: var(--white);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid var(--gray-200);
  box-shadow: 0 4px 24px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
}
.service-card:hover {
  box-shadow: 0 16px 56px rgba(0,0,0,0.11), 0 2px 8px rgba(0,0,0,0.06);
  transform: translateY(-3px);
}
@media (min-width: 1024px) {
  .service-card { grid-template-columns: 1fr 1fr; gap: 3rem; padding: 3rem; align-items: center; }
}

.service-card-dark {
  background-color: var(--dark-900);
  border-color: var(--dark-700);
  background-image: linear-gradient(145deg, #1a1a1a, #0f0f0f);
}

/* Column ordering */
.order-text-1 { order: 2; }
.order-img-1  { order: 1; }
@media (min-width: 1024px) {
  .order-text-1 { order: 1; }
  .order-img-1  { order: 2; }
}
.order-text-2 { order: 1; }
.order-img-2  { order: 2; }

/* ─── Service heading row ────────────────────────────────────── */
.service-heading-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.service-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px; height: 52px;
  border-radius: 14px;
  background-image: linear-gradient(135deg, #ffe4e6, #fecdd3);
  color: var(--red);
  flex-shrink: 0;
  transition: transform 0.25s;
}
.service-card:hover .service-icon-wrap { transform: scale(1.08); }

.service-icon-wrap-red {
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  color: var(--white);
  -webkit-text-fill-color: var(--white);
}

.service-icon-wrap svg { width: 26px; height: 26px; }

.service-number {
  margin: 0;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 0.2rem;
}
.service-number-dim { color: rgba(239,68,68,0.6); }

.service-title {
  margin: 0;
  font-size: clamp(1.4rem, 3vw, 1.9rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--gray-900);
  line-height: 1.15;
}
.service-title-white {
  color: var(--white);
  -webkit-text-fill-color: var(--white);
}

.service-desc {
  margin: 0 0 1.5rem;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--gray-600);
}
.service-desc-light { color: rgba(255,255,255,0.72); }

/* ─── Feature box ────────────────────────────────────────────── */
.feature-box {
  background-color: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1.5rem;
}
.feature-box-warning {
  background-color: #fffbeb;
  border-color: #fde68a;
}

.feature-box-title {
  margin: 0 0 1rem;
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--gray-900);
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.feature-rule {
  display: block;
  width: 3px; height: 18px;
  border-radius: 9999px;
  background-image: linear-gradient(180deg, #dc2626, #b91c1c);
  flex-shrink: 0;
}

.feature-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.65rem; }
.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;
  font-size: 0.9rem;
  color: var(--gray-700);
  line-height: 1.5;
}
.feature-item-warning { color: #78350f; }

.feature-check {
  display: flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; border-radius: 50%;
  background-color: var(--red-100);
  color: var(--red);
  flex-shrink: 0;
  margin-top: 1px;
}
.feature-check svg { width: 11px; height: 11px; }

.feature-check-warning {
  background-color: #fef3c7;
  color: #d97706;
}

/* ─── Info callout ───────────────────────────────────────────── */
.info-callout {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  border-radius: 14px;
  margin-bottom: 1.5rem;
}
.info-callout-blue  { background-color: var(--blue-50);  border: 1px solid var(--blue-100); }
.info-callout-amber { background-color: var(--amber-50); border: 2px solid var(--amber-200); }

.info-callout-icon {
  display: flex; align-items: center; justify-content: center;
  width: 42px; height: 42px; border-radius: 10px;
  flex-shrink: 0;
}
.info-icon-blue  { background-color: var(--blue-100);  color: var(--blue-600); }
.info-icon-amber { background-color: var(--amber-100); color: var(--amber-600); }
.info-callout-icon svg { width: 20px; height: 20px; }

.info-callout-title { margin: 0 0 0.2rem; font-size: 0.9rem; font-weight: 700; color: var(--gray-900); }
.info-title-amber   { color: var(--amber-900); font-size: 0.95rem; }
.info-callout-body  { margin: 0; font-size: 0.8rem; color: var(--gray-600); }
.info-body-amber    { color: var(--amber-800); font-weight: 500; }

/* ─── Component grid (Camera/Speaker/Mic) ────────────────────── */
.component-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.component-tile {
  border-radius: 12px;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid;
  transition: transform 0.2s;
}
.component-tile:hover { transform: translateY(-2px); }

.component-tile-purple { background-color: var(--purple-50); border-color: var(--purple-200); }
.component-tile-blue   { background-color: var(--blue-50);   border-color: var(--blue-200); }
.component-tile-green  { background-color: #f0fdf4;           border-color: #bbf7d0; }

.component-icon {
  width: 38px; height: 38px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 0.5rem;
}
.component-icon svg { width: 18px; height: 18px; }

.component-icon-purple { background-color: var(--purple-200); color: var(--purple-600); }
.component-icon-blue   { background-color: var(--blue-200);   color: var(--blue-600); }
.component-icon-green  { background-color: #bbf7d0;           color: #16a34a; }

.component-label { margin: 0; font-size: 0.78rem; font-weight: 700; }
.component-label-purple { color: var(--purple-900); }
.component-label-blue   { color: var(--blue-900); }
.component-label-green  { color: #14532d; }

/* ─── Software list (dark card) ──────────────────────────────── */
.software-list { list-style: none; margin: 0 0 1.5rem; padding: 0; display: flex; flex-direction: column; gap: 0.75rem; }
.software-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.80);
  line-height: 1.5;
}
.software-check {
  display: flex; align-items: center; justify-content: center;
  width: 28px; height: 28px; border-radius: 8px;
  background-color: rgba(220,38,38,0.2);
  color: #f87171;
  flex-shrink: 0;
}
.software-check svg { width: 13px; height: 13px; }

/* ─── Image panel ────────────────────────────────────────────── */
.service-img-wrap {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  transition: box-shadow 0.35s;
}
.service-card:hover .service-img-wrap { box-shadow: 0 16px 48px rgba(0,0,0,0.18); }

.service-img {
  display: block;
  width: 100%; height: 360px;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.service-card:hover .service-img { transform: scale(1.04); }

.service-img-overlay {
  position: absolute; inset: 0;
  background-image: linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 55%);
}
.service-img-overlay-dark {
  position: absolute; inset: 0;
  background-image: linear-gradient(to top, rgba(0,0,0,0.60) 0%, transparent 55%);
}

.service-img-badge {
  position: absolute;
  bottom: 1rem; left: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.75rem;
  border-radius: 9999px;
  background-color: rgba(0,0,0,0.55);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-size: 0.72rem;
  font-weight: 600;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.img-badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background-color: #4ade80;
  box-shadow: 0 0 8px rgba(74,222,128,0.7);
}

/* ─── Buttons ────────────────────────────────────────────────── */
.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.8rem 1.5rem;
  border-radius: 11px;
  background-image: linear-gradient(135deg, #16a34a, #15803d);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-weight: 700;
  font-size: 0.88rem;
  text-decoration: none;
  border: none;
  box-shadow: 0 4px 18px rgba(21,128,61,0.35);
  transition: transform 0.2s, box-shadow 0.2s;
}
.btn-whatsapp:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 28px rgba(21,128,61,0.45);
}

.btn-whatsapp-red {
  background-image: linear-gradient(135deg, #dc2626, #b91c1c);
  box-shadow: 0 4px 18px rgba(220,38,38,0.35);
}
.btn-whatsapp-red:hover { box-shadow: 0 8px 28px rgba(220,38,38,0.45); }

.btn-wa-icon { width: 17px; height: 17px; flex-shrink: 0; }
.btn-arrow { width: 16px; height: 16px; flex-shrink: 0; transition: transform 0.2s; }
.btn-whatsapp:hover .btn-arrow { transform: translateX(3px); }

/* ─── CTA Banner ─────────────────────────────────────────────── */
.cta-banner {
  margin-top: 5rem;
  border-radius: 24px;
  padding: 3px;
  background-image: linear-gradient(135deg, #16a34a, #15803d);
  box-shadow: 0 8px 40px rgba(21,128,61,0.25);
}
.cta-inner {
  background-color: var(--green-50);
  border-radius: 22px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}
@media (min-width: 768px) {
  .cta-inner { flex-direction: row; text-align: left; gap: 2rem; }
}

.cta-icon-wrap {
  display: flex; align-items: center; justify-content: center;
  width: 60px; height: 60px;
  border-radius: 16px;
  background-image: linear-gradient(135deg, #16a34a, #15803d);
  color: #ffffff;
  flex-shrink: 0;
}

.cta-text { flex: 1; }
.cta-title {
  margin: 0 0 0.4rem;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--green-900);
  letter-spacing: -0.02em;
}
.cta-body {
  margin: 0;
  font-size: 0.95rem;
  color: var(--green-800);
  line-height: 1.65;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.85rem 1.75rem;
  border-radius: 11px;
  background-image: linear-gradient(135deg, #15803d, #166534);
  color: #ffffff;
  -webkit-text-fill-color: #ffffff;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 4px 18px rgba(21,128,61,0.4);
  transition: transform 0.2s, box-shadow 0.2s;
}
.cta-btn:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 10px 28px rgba(21,128,61,0.5);
}
.cta-btn .btn-wa-icon { width: 18px; height: 18px; }
.cta-btn:hover .btn-arrow { transform: translateX(3px); }
</style>