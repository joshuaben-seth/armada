// https://nuxt.com/docs/api/configuration/nuxt-config
const title = 'Buy New, Used, and Accidented Cars | Car Rentals & Savings Plans - Armada';
const siteName = 'Armada';
const siteImage = 'https://armadazone.com/images/luxury.png'
const description = 'Discover a wide selection of new, used, and accidented cars at Armada. We also offer car rentals and innovative savings plans to help you buy your dream car. Explore exotic and regular cars, save towards your purchase, and enjoy an immersive car-buying experience. Visit our site for the latest inventory updates and expert car tips.';


export default defineNuxtConfig({
  app: {
    head: {
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: 'buy cars, new cars, used cars, accidented cars, car rentals, car savings plans, exotic cars, regular cars, car dealership, car finance, automotive sales, luxury cars, affordable cars, car buying tips' },
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: siteName },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: siteImage },
        { property: 'og:url', content: 'https://armadazone.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: siteImage },
      ]
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: [
    '@/assets/css/main.css',
  ],
  compatibilityDate: '2024-07-02'
})