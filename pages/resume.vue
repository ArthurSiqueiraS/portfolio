<template>
  <v-row no-gutters class="d-flex justify-center py-8">
    <v-col cols="12" xl="6" class="py-12 px-4 px-sm-12">
      <ResumeHeader class="mb-8" />
      <v-divider class="primary" />
      <v-row no-gutters>
        <v-col cols="12" md="8" class="py-2 pr-12">
          <ResumeMain />
        </v-col>
        <v-col
          cols="12"
          md="4"
          class="px-8 py-4"
          :style="{
            borderLeft: $vuetify.breakpoint.mobile
              ? null
              : '1px solid ' + $vuetify.theme.currentTheme.primary,
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
    return this.$store.state.resume
  },
}
</script>
