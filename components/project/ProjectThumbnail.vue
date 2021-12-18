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
      v-on="$listeners"
      @click="toggleDetails"
    >
      <div
        :class="
          darkTheme ? 'secondary accent--text' : 'primary secondary--text'
        "
        class="pa-2 d-flex flex-column text-center justify-center"
        style="height: 100%; width: 100%"
      >
        <div
          class="secondary--text rounded-pill subtitle-1 pa-1"
          active-class="text-center"
          :class="darkTheme ? 'primary' : 'accent'"
        >
          {{ project.title }}
        </div>
        <div class="flex-grow-1 d-flex flex-column justify-center">
          <div
            v-for="(stack, stackName) in {
              frontEnd: project.frontEnd,
              backEnd: project.backEnd,
            }"
            :key="stackName"
          >
            <div v-if="stack.length > 0" class="pb-3">
              {{ $t(stackName) }}:
              <div class="mt-2 d-flex justify-center align-center">
                <v-chip
                  v-for="tech in stack.slice(0, 3)"
                  :key="tech.id"
                  small
                  :color="darkTheme ? 'primary' : 'accent'"
                  text-color="secondary"
                  class="mr-1 ml-1"
                  >{{ tech.name }}</v-chip
                >
                <v-icon
                  v-if="stack.length > 3"
                  small
                  color="accent"
                  @click="detailsDialog = true"
                  >add</v-icon
                >
              </div>
            </div>
          </div>
        </div>
        <div>
          <v-dialog v-model="detailsDialog" max-width="800px">
            <template v-slot:activator="{ on }">
              <v-btn
                width="150px"
                small
                depressed
                :color="darkTheme ? 'primary' : 'accent'"
                class="rounded-lg"
                v-on="on"
                >{{ $t('details') }}</v-btn
              >
            </template>
            <v-sheet tile width="100%" height="100%" style="position: relative">
              <div
                style="position: absolute; width: 100%"
                class="d-flex justify-end"
              >
                <v-btn
                  icon
                  style="z-index: 999; position: fixed"
                  @click="detailsDialog = false"
                >
                  <v-icon>close</v-icon>
                </v-btn>
              </div>
              <ProjectDetails :project="project" />
            </v-sheet>
          </v-dialog>
          <v-btn
            v-if="project.url"
            width="150px"
            small
            :color="darkTheme ? 'primary' : 'accent'"
            rounded
            outlined
            class="rounded-lg ml-1"
            :href="project.url"
            target="_blank"
            >Site</v-btn
          >
        </div>
      </div>
      <div
        style="height: 100%; position: relative"
        class="d-flex align-center justify-center"
      >
        <img
          height="50%"
          width="auto"
          :src="project.logo"
          :style="{
            position: 'absolute',
            zIndex: 1,
            filter: 'drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.75)',
            maxWidth: '70%',
            objectFit: 'contain',
          }"
        />
        <v-img
          height="100%"
          :src="project.thumbnail"
          :gradient="$helpers.imageGradient()"
          style="
            filter: blur(1.75px) brightness(95%) saturate(90%) contrast(90%);
          "
        />
      </div>
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
      detailsDialog: false,
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
