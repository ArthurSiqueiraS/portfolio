<template>
  <div>
    <v-carousel
      id="project-gallery"
      ref="gallery"
      cycle
      hide-delimiter-background
      :show-arrows="!$vuetify.breakpoint.mobile"
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
      <v-col cols="12" md="3" class="text-center pb-6 mb-md-0">
        <a
          :href="project.url"
          target="_blank"
          :style="{ cursor: project.url ? 'pointer' : 'default' }"
        >
          <img
            :src="project.logo"
            height="auto"
            style="max-width: 80%; max-height: 125px"
          />
        </a>
      </v-col>
      <v-col cols="12" md="9" class="px-4 text-justify">
        <div
          v-for="(paragraph, index) in project.description.split('#n')"
          :key="index"
          class="pb-2"
        >
          {{ paragraph }}<br />
        </div>
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
    }
  },
  computed: {
    panels() {
      const panels = [
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
      ]
      if (this.project.highlights.length > 0) {
        panels.unshift({
          title: this.$t('highlights'),
          component: ProjectHighlights,
          props: { highlights: this.project.highlights },
        })
      }

      return panels
    },
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

#project-gallery .v-image::after {
  display: block;
  position: absolute;
  background-image: linear-gradient(to top, black 0%, 15%, transparent 100%);
  opacity: 0.75;
  height: 25%;
  width: 100%;
  bottom: -20px;
  content: '';
}
</style>
