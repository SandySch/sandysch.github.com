<template>
  <div>
    <!-- Info Banner -->
<Transition name="banner">
  <div v-if="showBanner" class="info-banner">
    <p class="info-banner__text">
      Diese Website wird in Kürze erweitert. 
      Für persönliche Fragen oder einen ersten Kontakt freue ich mich über Ihre Nachricht —
      <a href="mailto:praxis@beruehrtimsein.ch">praxis@beruehrtimsein.ch</a>
    </p>
    <button class="info-banner__close" @click="dismissBanner" aria-label="Schließen">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
        <line x1="1" y1="1" x2="13" y2="13"/>
        <line x1="13" y1="1" x2="1" y2="13"/>
      </svg>
    </button>
  </div>
</Transition>
    <!-- Navigation -->
    <nav class="nav">
      <a href="#" class="nav__logo">
        <img src="/logo.png" alt="" class="nav__logo-img" aria-hidden="true" />
        Berührt <span>im Sein</span>
      </a>
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
        src="/bg.jpg"
        alt="Praxis Berührt im Sein"
        loading="eager"
        height="100%"
      />
      <div class="hero__overlay" />
      <div class="hero__content">
        <img src="/logo.png" alt="" class="hero__logo" aria-hidden="true" />
        <p class="hero__eyebrow">Praxis für ganzheitliche Körpertherapie · Winterthur</p>
        <h1 class="hero__title">Berührt im Sein</h1>
        <p class="hero__subtitle">
          Biodynamische Craniosacral Therapie &amp;<br>
          Rhythmische Einreibungen
        </p>
        <a href="#craniosacral" class="btn-outline">Mehr erfahren</a>
      </div>
    </section>

    <!-- Intro band -->
    <div class="intro-band">
      <p>
        In meiner Praxis <strong>Berührt im Sein</strong> begleite ich Menschen in körperlichen und seelischen Belastungssituationen. Die achtsame therapeutische Begleitung lädt dazu ein, Festgehaltenes zu lösen, Raum für natürliche Balance zu entfalten und den Zugang zu den inneren Kräften zu vertiefen, um ganzheitliche Stabilität nachhaltig zu festigen.
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
              in seine natürliche Harmonie finden. Dabei können die innewohnenden Kräfte wirksam werden und zu 
              nachhaltiger Gesundheit, innerer Stabilität und Ruhe beitragen. 
              Auf diese Weise kann der Organismus in seine natürliche Balance zurückfinden.
              Das begleitende Gespräch stärkt die Selbstwahrnehmung, unterstützt den Zugang zu 
              inneren Ressourcen und bringt Bewusstwerdungsprozesse in Bewegung.
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
        src="/portrait.png"
        alt="Stille und Balance"
        loading="eager"
      />
      <span class="full-img-wrap__caption">Biodynamische Craniosacral Therapie</span>
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
              <em>Einreibungen</em><br>
              <span style="font-size: 0.6em; font-style: normal; color: var(--stone-light); letter-spacing: 0.08em;">nach Wegman/Hauschka</span>
            </h2>
            <div class="divider"><div class="divider__icon" /></div>
            <p class="service__body">
              Rhythmisch gestaltete Berührungen mit hochwertigen, ausgewählten Pflanzenölen wirken
              harmonisierend auf die ordnenden Kräfte im Menschen. Die atmenden, rhythmischen
              Bewegungen der Einreibung unterstützen den Körper in seiner Selbstregulation und ermöglichen, dass die aufbauenden Kräfte wirksam werden.
              Dabei kann der Organismus zu Wärme, Vitalität und innerem Gleichgewicht finden.
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

    <!-- Full-width divider image Einreibungen -->
    <div class="full-img-wrap">
      <img
        src="/oils.png"
        alt="Rhythmische Einreibungen"
        loading="eager"
        style="object-position: center 60%;"
      />
      <span class="full-img-wrap__caption">Rhythmische Einreibungen</span>
    </div>

    <!-- Portrait + offer -->
    <section class="service offer-band">
      <div class="section-inner">
        <div class="service__grid service__grid--wide-img">
          <div class="service__img-wrap reveal">
            <img
              class="service__img"
              src="/session.webp"
              alt="Praxis"
              loading="eager" 
            />
          </div>
          <div class="reveal reveal-delay-2">
            <h2 class="service__heading">
              Für ein persönliches <em>Gespräch</em>
              bin ich gerne für Sie da.
            </h2>
            <p class="service__body">
              <strong>Behandlungen erfolgen nach individueller Terminvereinbarung.</strong>
            </p>
            <p class="service__body">
              Im Rahmen meiner fortgeschrittenen Ausbildung zur Craniosacraltherapeutin biete ich die Craniosacraltherapie
              derzeit zu einem reduzierten Einführungstarif an.
            </p>
            <a href="mailto:praxis@beruehrtimsein.ch" class="btn-outline">Termin anfragen</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact / Footer -->
    <section id="kontakt" class="contact">
      <div class="section-inner">
        <div class="contact__grid">
          <div class="contact__col reveal">
            <h4>Adresse</h4>
            <p>
              <strong>Praxis Berührt im Sein</strong><br>
              <a href="https://maps.google.com/?q=Mulchlingerstrasse+38,+8405+Winterthur" target="_blank" rel="noopener noreferrer" style="text-decoration: underline;">
                Mulchlingerstrasse 38<br>8405 Winterthur
              </a>
              Parkplatz direkt vor dem Haus vorhanden.
            </p>
          </div>
          <div class="contact__col reveal reveal-delay-1">
            <h4>Kontakt</h4>
            <p>
            <strong>Sandy Schwengeler</strong><br>
            </p>
            <a style="text-decoration: underline;" href="mailto:praxis@beruehrtimsein.ch">praxis@beruehrtimsein.ch</a>
            <a style="text-decoration: underline;" href="tel:+41774782636">+41 77 478 26 36</a>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      © {{ new Date().getFullYear() }} Praxis <span>Berührt im Sein</span> · Winterthur
      <div class="footer__links">
        <a href="#" @click.prevent="openModal('impressum')">Impressum</a>
        <span>·</span>
        <a href="#" @click.prevent="openModal('datenschutz')">Datenschutz</a>
      </div>
    </footer>
  </div>

  <!-- Modals -->
<Teleport to="body">
  <div v-if="activeModal" class="modal-backdrop" @click.self="closeModal">
    <div class="modal">
      <button class="modal__close" @click="closeModal">&#x2715;</button>

      <!-- Impressum -->
      <div v-if="activeModal === 'impressum'">
        <h2 class="modal__title">Impressum</h2>
        <p>
          <strong>Praxis Berührt im Sein</strong><br>
          Sandy Schwengeler<br>
          Muchlingerstrasse 38<br>
          8405 Winterthur<br>
          Schweiz
        </p>
        <p>
          Telefon: <a href="tel:+41774782636">+41 77 478 26 36</a><br>
          E-Mail: <a href="mailto:praxis@beruehrtimsein.ch">praxis@beruehrtimsein.ch</a>
        </p>
      </div>

      <!-- Datenschutz -->
      <div v-if="activeModal === 'datenschutz'">
        <h2 class="modal__title">Datenschutz</h2>
        <p>
          Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen.
          Personenbezogene Daten werden auf dieser Webseite nur im notwendigen Umfang verarbeitet.
        </p>
        <p>
          Wenn Sie mich per Telefon oder E-Mail kontaktieren, werden Ihre Angaben ausschliesslich
          zur Bearbeitung Ihrer Anfrage verwendet und vertraulich behandelt.
        </p>
        <p>
          Diese Webseite kann externe Dienste wie Google Maps zur Darstellung von Karten verwenden.
          Dabei können Daten an den jeweiligen Anbieter übermittelt werden.
        </p>
        <p>
          Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten Daten sowie auf
          Berichtigung oder Löschung dieser Daten.
        </p>
        <p>
          Bei Fragen zum Datenschutz können Sie mich kontaktieren:<br>
          Sandy Schwengeler · Praxis Berührt im Sein<br>
          Muchlingerstrasse 38 · 8405 Winterthur<br>
          <a href="mailto:praxis@beruehrtimsein.ch">praxis@beruehrtimsein.ch</a>
        </p>
        <h3 class="modal__subtitle">Haftungshinweis</h3>
        <p>
          Die Inhalte dieser Webseite wurden mit Sorgfalt erstellt. Für die Richtigkeit,
          Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
        </p>
        <p>
          Diese Webseite kann Links zu externen Webseiten enthalten. Für die Inhalte dieser
          externen Seiten sind ausschliesslich deren Betreiber verantwortlich.
        </p>
      </div>
    </div>
  </div>
</Teleport>
</template>

<script setup>
const BANNER_KEY = 'bis_info_banner_dismissed'
const showBanner = ref(
  typeof sessionStorage !== 'undefined'
    ? sessionStorage.getItem(BANNER_KEY) !== 'true'
    : false
)
const dismissBanner = () => {
  showBanner.value = false
  sessionStorage.setItem(BANNER_KEY, 'true')
}
const craniosacralConditions = [
  '<strong>Rücken-, Nacken- &amp; Schulterbeschwerden</strong>',
  '<strong>Kopfschmerzen &amp; Migräne</strong>',
  '<strong>Kiefergelenksbeschwerden &amp; Zähneknirschen</strong>',
  '<strong>Tinnitus</strong>',
  '<strong>Beschwerden nach Unfällen, Operationen &amp; Schleudertrauma</strong>',
  '<strong>Stress, Erschöpfung &amp; Burnout</strong>',
  '<strong>Schlafstörungen &amp; Müdigkeit</strong>',
  '<strong>Traumatischen Erfahrungen</strong>',
]

const einreibungenConditions = [
  '<strong>Muskelverspannungen</strong>',
  '<strong>Körperlicher und seelischer Anspannung</strong>',
  '<strong>Unregelmässigem Schlaf-Wach-Rhythmus</strong>',
  '<strong>Erschöpfung &amp; Antriebslosigkeit</strong>',
  '<strong>Belastenden Lebensereignissen &amp; innerer Unruhe &amp; Ängsten</strong>',
  '<strong>Chronischen Schmerzen &amp; rheumatischen Beschwerden</strong>',
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

const activeModal = ref(null)
const openModal = (name) => {
  activeModal.value = name
  document.body.style.overflow = 'hidden'
}
const closeModal = () => {
  activeModal.value = null
  document.body.style.overflow = ''
}
</script>
