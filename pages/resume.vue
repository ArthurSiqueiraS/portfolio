<template>
  <v-row id="resume-container" no-gutters class="d-flex justify-center py-8">
    <v-col
      id="resume"
      cols="12"
      style="max-width: 954px"
      class="py-12 px-4 px-md-12"
    >
      <ResumeHeader class="mb-8" />
      <v-divider class="primary" />
      <v-row no-gutters>
        <v-col cols="12" sm="8" class="py-2 pr-sm-12">
          <ResumeMain />
        </v-col>
        <v-col
          cols="12"
          sm="4"
          class="px-8 py-4"
          :style="{
            borderLeft: mobile ? null : sideBorder,
            borderTop: mobile ? sideBorder : null,
          }"
        >
          <ResumeSide />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      sideBorder: '1px solid ' + this.$vuetify.theme.currentTheme.primary,
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xsOnly
    },
  },
}
</script>
<style lang="scss">
@media print {
  #resume-container {
    padding: 36px 40px 0 !important;
  }

  #resume {
    padding: 0 !important;
  }
}
</style>
