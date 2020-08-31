<template>
  <v-row no-gutters class="d-flex justify-center py-8">
    <v-col cols="12" style="max-width: 954px;" class="py-12 px-4 px-sm-12">
      <ResumeHeader class="mb-8" />
      <v-divider class="primary" />
      <v-row no-gutters>
        <v-col cols="12" md="8" class="py-2 pr-md-12">
          <ResumeMain />
        </v-col>
        <v-col
          cols="12"
          md="4"
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
      return this.$vuetify.breakpoint.smAndDown
    },
  },
}
</script>
