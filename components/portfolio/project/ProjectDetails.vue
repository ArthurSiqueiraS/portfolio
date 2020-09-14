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
    <div
      class="primary--text text-h5 pa-8 d-flex justify-center justify-md-start text-center text-md-left"
    >
      {{ project.title }}
    </div>
    <v-row no-gutters class="accent--text pa-4" align="center">
      <v-col cols="12" md="3" class="text-center">
        <a :href="project.url" target="_blank">
          <img :src="project.logo" height="100" />
        </a>
      </v-col>
      <v-col cols="12" md="9" class="px-4 text-justify">
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
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      galleryHeight: 0,
      panels: [
        {
          title: this.$t('highlights'),
          component: ProjectHighlights,
          props: { highlights: this.project.highlights },
        },
        {
          title: this.$t('technologiesUsed'),
          component: ProjectTechnologies,
          props: {
            frontEnd: this.project.frontEnd,
            backEnd: this.project.backEnd,
          },
        },
        {
          title: this.$t('projectInfo'),
          component: ProjectInfo,
          props: { project: this.project },
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
