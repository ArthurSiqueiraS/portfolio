<template>
  <div class="text-center d-flex flex-column">
    <h1 class="accent--text mx-4">{{ $t('pastWork') }}</h1>
    <carousel3d
      ref="carousel"
      :controls-visible="mobile"
      :min-swipe-distance="60"
      width="350"
      height="250"
      bias="right"
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
        <ProjectThumbnail
          :project="project"
          :disabled="currentSlide != index"
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
  methods: {
    onSlideChange(index) {
      this.currentSlide = index
    },
  },
}
</script>
