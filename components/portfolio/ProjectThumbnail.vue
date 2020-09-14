<template>
  <v-hover
    v-slot:default="{ hover }"
    :disabled="disabled"
    open-delay="100"
    close-delay="100"
  >
    <div
      v-click-outside="
        () => {
          if (mobile) details = false
        }
      "
      :style="{
        position: 'relative',
        height: '100%',
        transition: '1s',
        top: hover && details ? '0' : '-100%',
      }"
      @click="toggleDetails"
    >
      <div
        :class="
          darkTheme ? 'secondary accent--text' : 'primary secondary--text'
        "
        class="pa-2 d-flex flex-column text-center justify-center"
        style="height: 100%; width: 100%;"
      >
        <div
          class="secondary--text rounded-pill subtitle-2 pa-1"
          active-class="text-center"
          :class="darkTheme ? 'primary' : 'accent'"
        >
          {{ project.title }}
        </div>
        <div>
          <div
            v-for="(stack, stackName) in {
              frontEnd: project.frontEnd,
              backEnd: project.backEnd,
            }"
            :key="stackName"
          >
            <div v-if="stack.length > 0" class="mt-3">
              {{ $t(stackName) }}:
              <div class="mt-2">
                <v-chip
                  v-for="tech in stack"
                  :key="tech.id"
                  small
                  :color="darkTheme ? 'primary' : 'accent'"
                  text-color="secondary"
                  class="mr-1 ml-1"
                  >{{ tech.name }}</v-chip
                >
              </div>
            </div>
          </div>
        </div>
        <v-spacer />
        <div>
          <v-dialog max-width="800px">
            <template v-slot:activator="{ on }">
              <v-btn
                width="100px"
                small
                outlined
                :color="darkTheme ? 'primary' : 'accent'"
                class="rounded-lg"
                v-on="on"
                >{{ $t('details') }}</v-btn
              >
            </template>
            <v-sheet tile width="100%" height="100%">
              <ProjectDetails :project="project" />
            </v-sheet>
          </v-dialog>
          <v-btn
            v-if="project.url"
            width="100px"
            small
            :color="darkTheme ? 'primary' : 'accent'"
            depressed
            class="secondary--text rounded-lg ml-1"
            :href="project.url"
            target="_blank"
            >Site</v-btn
          >
        </div>
      </div>
      <v-img height="100%" :src="project.images[0]" />
    </div>
  </v-hover>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      details: this.$vuetify.breakpoint.lgAndUp,
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mdAndDown
    },
    darkTheme() {
      return this.$vuetify.theme.dark
    },
  },
  watch: {
    disabled(value) {
      if (this.mobile) this.details = false
      else this.details = !value
    },
  },
  methods: {
    toggleDetails() {
      if (this.mobile) this.details = !this.details
    },
  },
}
</script>
