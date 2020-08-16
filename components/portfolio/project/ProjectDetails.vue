<template>
  <div>
    <v-carousel
      ref="gallery"
      cycle
      hide-delimiter-background
      :show-arrows="false"
      show-arrows-on-hover
      :height="galleryHeight"
    >
      <v-carousel-item
        v-for="(image, index) in project.images"
        :key="index"
        :src="image"
      />
    </v-carousel>
    <div class="primary--text text-h5 pa-8">
      {{ project.title }}
    </div>
    <v-row no-gutters class="accent--text pa-4" align="center">
      <v-col cols="3" class="text-center">
        <a :href="project.link" target="_blank">
          <img :src="project.logo" height="100" />
        </a>
      </v-col>
      <v-col cols="9" class="px-4 text-justify">
        {{ project.description }} {{ project.description }}
        {{ project.description }} {{ project.description }}
        {{ project.description }} {{ project.description }}
        {{ project.description }} {{ project.description }}
      </v-col>
    </v-row>
    <v-expansion-panels class="py-8" :value="[0, 1, 2]" multiple tile flat>
      <v-expansion-panel
        v-for="panel in panels"
        :key="panel.title"
        class="px-8 py-4 accent--text"
      >
        <v-expansion-panel-header class="title pa-1">
          {{ panel.title }}
          <template v-slot:actions>
            <v-icon color="accent" large>expand_more</v-icon>
          </template>
        </v-expansion-panel-header>
        <v-divider :color="$vuetify.theme.currentTheme.primary" />
        <v-expansion-panel-content class="pa-1">
          <component :is="panel.component" v-bind="panel.props" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import ProjectHighlights from './ProjectHighlights'
import ProjectTechnologies from './ProjectTechnologies'
import ProjectInfo from './ProjectInfo'

export default {
  data() {
    const project = {
      title: 'XXXVI Semana Acadêmica de Medicina UFPel',
      link: 'https://sam2020.netlify.app',
      description: 'Plataforma para transmissão de evento online',
      frontEnd: ['VueJS', 'NuxtJs', 'Vuetify'],
      backEnd: ['Ruby on Rails', 'MongoDB'],
      startDate: new Date(2020, 6, 1),
      endDate: new Date(2020, 7, 1),
      employment: 'Freelancer',
      occupations: ['Project Manager', 'Full-stack Developer'],
      highlights: [
        {
          image: 'https://www.w3schools.com/w3css/img_lights.jpg',
          title: 'Event videos',
          text: 'bla bla bla bla bla bla bla bla bla bla bla',
        },
        {
          image: 'https://www.w3schools.com/w3css/img_lights.jpg',
          title: 'solo project',
          text: 'bla bla bla bla bla bla bla bla bla bla bla',
        },
      ],
      status: ['Launched'],
      images: [
        'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080',
      ],
      logo: 'https://pt.freelogodesign.org/Content/img/logo-samples/flooop.png',
    }
    return {
      galleryHeight: 0,
      project,
      panels: [
        {
          title: 'Highlights',
          component: ProjectHighlights,
          props: { highlights: project.highlights },
        },
        {
          title: 'Technologies used',
          component: ProjectTechnologies,
          props: {
            frontEnd: project.frontEnd,
            backEnd: project.backEnd,
          },
        },
        {
          title: 'Project info',
          component: ProjectInfo,
          props: { project },
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.galleryHeight = this.$refs.gallery.$el.clientWidth / (16 / 9)
    }, 1)
  },
}
</script>
<style lang="scss">
.v-carousel__controls__item i {
  color: var(--v-accent-base) !important;
}

.v-expansion-panel-content__wrap {
  padding: 0 !important;
}

.v-expansion-panel-header--active {
  min-height: 48px !important;
}
</style>
