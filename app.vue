<template>
  <div>
    <!-- Navigation -->
    <nav class="nav">
      <a href="#" class="nav__logo">Berührt <span>im Sein</span></a>
      <ul class="nav__links">
        <li><a href="#craniosacral">Craniosacral</a></li>
        <li><a href="#einreibungen">Einreibungen</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
    </nav>

    <!-- Hero -->
    <section class="hero">
      <img
        class="hero__img"
        src="/background.png"
        alt="Praxis Berührt im Sein"
        loading="eager"
        height="100%"
      />
      <div class="hero__overlay" />
      <div class="hero__content">
        <p class="hero__eyebrow">Praxis für ganzheitliche Therapie · Winterthur</p>
        <h1 class="hero__title">Berührt im Sein</h1>
        <p class="hero__subtitle">
          Biodynamische Craniosacral Therapie &amp;<br>
          Rhythmische Einreibungen
        </p>
        <a href="#craniosacral" class="hero__cta">Mehr erfahren</a>
      </div>
    </section>

    <!-- Intro band -->
    <div class="intro-band">
      <p>
        In meiner Praxis begleite ich Menschen in körperlichen und seelischen Belastungssituationen.
        Die achtsame Begleitung lädt dazu ein, Festgehaltenes zu lösen und den Zugang zu den
        inneren Kräften zu vertiefen.
      </p>
    </div>

    <!-- Craniosacral Service -->
    <section id="craniosacral" class="service">
      <div class="section-inner">
        <div class="service__grid">
          <div class="service__img-wrap reveal">
            <img
              class="service__img"
              src="/service.png"
              alt="Biodynamische Craniosacral Therapie"
              loading="eager"
            />
          </div>
          <div class="reveal reveal-delay-2">
            <span class="service__tag">Therapie I</span>
            <h2 class="service__heading">
              Biodynamische<br>
              <em>Craniosacral</em><br>
              Therapie
            </h2>
            <div class="divider"><div class="divider__icon" /></div>
            <p class="service__body">
              Eine sanfte und zugleich tiefgehende Körperarbeit, die den Menschen in seiner Ganzheit
              anspricht. Die Behandlung folgt den feinen Rhythmen und Bewegungen des Organismus,
              die wahrgenommen und achtsam begleitet werden.
            </p>
            <p class="service__body">
              Feine Berührungen lassen einen stillen Raum entstehen, in dem sich die Selbstregulation
              des Organismus entfalten kann. In dieser Ruhe kann der craniosacrale Rhythmus wieder
              in seine natürliche Harmonie finden und nachhaltig zu Gesundheit und innerer Stabilität beitragen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Conditions Craniosacral -->
    <section class="conditions-section">
      <div class="section-inner">
        <div class="conditions-header reveal">
          <h3>Mit einfühlsamer Begleitung unterstütze ich Sie gerne bei:</h3>
        </div>
        <div class="conditions-grid">
          <div v-for="(item, i) in craniosacralConditions" :key="i" class="condition-item">
            <span v-html="item" />
          </div>
        </div>
      </div>
    </section>

    <!-- Full-width divider image -->
    <div class="full-img-wrap">
      <img
        src="/session.png"
        alt="Stille und Balance"
        loading="eager"
      />
      <span class="full-img-wrap__caption">Raum für Ruhe und innere Balance</span>
    </div>

    <!-- Einreibungen Service -->
    <section id="einreibungen" class="service service--alt">
      <div class="section-inner">
        <div class="service__grid service__grid--reverse">
          <div class="service__img-wrap reveal">
            <img
              class="service__img"
              src="/service-2.png"
              alt="Rhythmische Einreibungen"
              loading="eager"
            />
          </div>
          <div class="reveal reveal-delay-2">
            <span class="service__tag">Therapie II</span>
            <h2 class="service__heading">
              Rhythmische<br>
              <em>Einreibungen</em>
            </h2>
            <div class="divider"><div class="divider__icon" /></div>
            <p class="service__body">
              Rhythmisch gestaltete Berührungen mit hochwertigen, ausgewählten Pflanzenölen wirken
              harmonisierend auf die ordnenden Kräfte im Menschen. Die atmenden, rhythmischen
              Bewegungen unterstützen den Körper in seiner Selbstregulation.
            </p>
            <p class="service__body">
              Die rhythmischen Einreibungen stammen aus der anthroposophischen Pflege und Therapie.
              Sie werden individuell auf den Menschen und seine Bedürfnisse abgestimmt und laden ein,
              Ruhe zu finden, neue Kraft zu schöpfen und die eigene Mitte zu stärken.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Conditions Einreibungen -->
    <section class="conditions-section conditions-section--alt">
      <div class="section-inner">
        <div class="conditions-header reveal">
          <h3>In ruhiger und geschützter Atmosphäre begleite ich Sie gerne bei:</h3>
        </div>
        <div class="conditions-grid">
          <div v-for="(item, i) in einreibungenConditions" :key="i" class="condition-item">
            <span v-html="item" />
          </div>
        </div>
      </div>
    </section>

    <!-- Portrait + offer -->
    <div class="full-img-wrap" style="height: clamp(260px,36vw,420px)">
      <img
        src="/portrait.png"
        alt="Praxis"
        loading="eager"
        style="object-position: center 20%;"
      />
    </div>

    <!-- Offer band -->
    <div class="offer-band">
      <div class="offer-band__inner reveal">
        <h3>Für ein persönliches Gespräch bin ich gerne für Sie da.</h3>
        <p>
          Behandlungen erfolgen nach individueller Terminvereinbarung. Im Rahmen meiner
          fortgeschrittenen Ausbildung zur Craniosacraltherapeutin biete ich die Craniosacraltherapie
          derzeit zu einem reduzierten Einführungstarif an.
        </p>
        <a href="mailto:praxis@beruehrtimsein.ch" class="btn-outline">Termin anfragen</a>
      </div>
    </div>

    <!-- Contact / Footer -->
    <section id="kontakt" class="contact">
      <div class="section-inner">
        <div class="contact__grid">
          <div class="contact__col reveal">
            <h4>Adresse</h4>
            <p>Muchlingerstrasse 38<br>8405 Winterthur</p>
          </div>
          <div class="contact__col reveal reveal-delay-1">
            <h4>Öffnungszeiten</h4>
            <p>Montag – Freitag<br>08:00 – 18:00 Uhr</p>
          </div>
          <div class="contact__col reveal reveal-delay-2">
            <h4>Kontakt</h4>
            <a href="mailto:praxis@beruehrtimsein.ch">praxis@beruehrtimsein.ch</a>
            <a href="tel:+41774782636">+41 77 478 26 36</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      © {{ new Date().getFullYear() }} Praxis <span>Berührt im Sein</span> · Winterthur
    </footer>
  </div>
</template>

<script setup>
const craniosacralConditions = [
  '<strong>Rücken-, Nacken- &amp; Schulterbeschwerden</strong>',
  '<strong>Kopfschmerzen &amp; Migräne</strong>',
  '<strong>Kiefergelenksbeschwerden &amp; Zähneknirschen</strong>',
  '<strong>Tinnitus</strong>',
  '<strong>Beschwerden nach Unfällen</strong>, Operationen &amp; Schleudertrauma',
  '<strong>Stress, Erschöpfung &amp; Burnout</strong>',
  '<strong>Schlafstörungen &amp; Müdigkeit</strong>',
  '<strong>Traumatische Erfahrungen</strong>',
]

const einreibungenConditions = [
  '<strong>Muskelverspannungen</strong>',
  '<strong>Körperliche und seelische Anspannung</strong>',
  '<strong>Innere Unruhe &amp; Ängste</strong>',
  '<strong>Unregelmässiger Schlaf-Wach-Rhythmus</strong>',
  '<strong>Erschöpfung &amp; Antriebslosigkeit</strong>',
  '<strong>Belastende Lebensereignisse</strong>',
  '<strong>Chronische Schmerzen &amp; rheumatische Beschwerden</strong>',
  '<strong>Polyneuropathie</strong>',
  '<strong>Wärmebalance &amp; Entspannung</strong>',
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>
