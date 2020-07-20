<template>
  <div class="text-center d-flex flex-column">
    <h1 class="accent--text">{{ $t('portfolio') }}</h1>
    <carousel3d
      ref="carousel"
      :controls-visible="mobile"
      :min-swipe-distance="60"
      width="350"
      height="250"
      @before-slide-change="onSlideChange"
    >
      <slide
        v-for="(project, index) in projects"
        :key="index"
        :index="index"
        class="rounded-xl"
        :style="{
          border: '2px solid ' + $vuetify.theme.currentTheme.primary,
          backgroundColor: 'white',
        }"
      >
        <PortfolioThumbnail
          :project="project"
          :disabled="currentSlide != index"
        />
      </slide>
    </carousel3d>
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import PortfolioThumbnail from '@/components/portfolio/PortfolioThumbnail'

export default {
  components: {
    Carousel3d,
    Slide,
    PortfolioThumbnail,
  },
  data() {
    return {
      currentSlide: 0,
      projects: [
        {
          name: 'Semana Acadêmica de Medicina UFPel',
          images: ['https://logomaster.ai/static/media/sample.c8bf2b04.svg'],
          technologies: {
            frontEnd: ['Vue.js', 'Vuetify'],
            backEnd: ['Ruby on Rails', 'MongoDB'],
          },
          link: 'https://sam2020.netlify.app',
        },
        {
          name: 'Vidium',
          images: [
            'https://vidium-solutions.com/wp-content/uploads/2019/01/180713_VF_vidium_logonoir_Plan-de-travail-1.jpg',
          ],
          technologies: {
            frontEnd: ['Vue.js', 'Vuetify'],
            backEnd: ['Ruby on Rails', 'MongoDB'],
          },
          link: 'https://vidium.indeorum.com',
        },
        {
          name: 'Cientum',
          images: [
            'https://cientum.indeorum.com/assets/logo/full-b2a3915f67c4351b367c9639118d0641bf70abc3448b82e76a65f27ba70750d3.png',
          ],
          technologies: {
            frontEnd: ['Vue.js', 'Vuetify'],
            backEnd: ['Ruby on Rails', 'MongoDB'],
          },
        },
      ],
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
  },
  methods: {
    onSlideChange(index) {
      this.currentSlide = index
    },
  },
}
</script>
