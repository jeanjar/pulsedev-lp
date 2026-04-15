import { createApp } from 'vue'
import './style.css'
import { WHATSAPP_NUMBER, pains, solutionItems, steps, deliverables, audiences, differentials, faqs } from './data.js'

const app = createApp({
  data() {
    return {
      whatsappNumber: WHATSAPP_NUMBER,
      openFaq: null,
      pains,
      solutionItems,
      steps,
      deliverables,
      audiences,
      differentials,
      faqs,
    }
  },
  methods: {
    whatsappLink(message) {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`
    },
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? null : index
    },
  },
  mounted() {
    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    // Parallax on mouse move (hero only, desktop)
    const hero = document.getElementById('hero')
    if (hero && window.matchMedia('(min-width: 1024px)').matches) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        hero.querySelectorAll('.parallax-layer').forEach(layer => {
          const speed = parseFloat(layer.dataset.speed) || 0.03
          const tx = x * speed * 1000
          const ty = y * speed * 1000
          layer.style.transform = `translate(${tx}px, ${ty}px)`
        })
      })
    }
  },
})

app.mount('#app')
