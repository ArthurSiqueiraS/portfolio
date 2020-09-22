<template>
  <div class="text-center d-flex flex-column">
    <h1 class="accent--text mx-4">{{ $t('pastWork') }}</h1>
    <v-tooltip
      v-if="firstTip"
      v-model="portfolioTip"
      top
      activator="#project-thumbnail-0"
    >
      <span @click="portfolioTip = false">
        {{ $t(mobile ? 'portfolioTipMobile' : 'portfolioTip') }}
      </span>
    </v-tooltip>
    <carousel3d
      ref="carousel"
      v-observe-visibility="{
        callback: triggerPortfolioTip,
        once: true,
        throttle: 1000,
        intersection: {
          threshold: 1.0,
        },
      }"
      :controls-visible="mobile"
      :min-swipe-distance="60"
      width="350"
      height="250"
      bias="right"
      @before-slide-change="onSlideChange"
    >
      <slide
        v-for="(project, index) in projects"
        :id="'project-thumbnail-' + index"
        :key="index"
        :index="index"
        class="rounded-xl"
        :style="{
          border: '2px solid ' + $vuetify.theme.currentTheme.primary,
          backgroundColor: 'white',
        }"
      >
        <ProjectThumbnail
          :project="project"
          :disabled="currentSlide != index"
          @mouseover="firstTip = false"
        />
      </slide>
    </carousel3d>
    <div class="d-flex justify-center">
      <div v-for="(project, index) in projects" :key="index">
        <v-tooltip bottom color="primary">
          <template v-slot:activator="{ on }">
            <v-icon
              class="mx-2"
              x-small
              :color="currentSlide == index ? 'primary' : 'accent'"
              v-on="on"
              @click="$refs.carousel.goSlide(index)"
            >
              lens
            </v-icon>
          </template>
          {{ project.title }}
        </v-tooltip>
      </div>
    </div>
  </div>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      currentSlide: 0,
      portfolioTip: false,
      firstTip: true,
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    projects() {
      return this.$portfolio().projects
    },
  },
  watch: {
    portfolioTip(value) {
      if (!value) {
        setTimeout(() => {
          this.firstTip = false
        }, 200)
      }
    },
  },
  methods: {
    onSlideChange(index) {
      this.currentSlide = index
    },
    triggerPortfolioTip(visible) {
      this.portfolioTip = visible
    },
  },
}
</script>
