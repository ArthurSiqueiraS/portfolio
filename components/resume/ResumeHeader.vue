<template>
  <v-row no-gutters align="end">
    <v-col cols="12" md="6">
      <h1 class="primary--text">{{ name }}</h1>
      <h2 class="accent--text">{{ label }}</h2>
      <h5 class="info--text">{{ location }}</h5>
    </v-col>
    <v-col cols="12" md="6" class="text-right mt-8 mt-md-0 hide-print">
      <v-hover v-slot:default="{ hover }">
        <v-btn
          depressed
          tile
          :outlined="!hover"
          color="primary"
          :style="{
            transition: '0.3s',
            border: hover
              ? '1px solid ' + $vuetify.theme.currentTheme.primary
              : null,
          }"
          @click="downloadPdf"
        >
          {{ $t('resume.download') }}
        </v-btn>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    const { name, label, location } = this.$store.state.resume.basics
    return {
      name,
      label,
      location,
    }
  },
  methods: {
    downloadPdf() {
      window.print()
    },
  },
}
</script>
