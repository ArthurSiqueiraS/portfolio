<template>
  <v-row no-gutters align="end">
    <v-col cols="12" sm="8">
      <h1 class="primary--text">Arthur Siqueira e Silva</h1>
      <h2 class="accent--text">{{ portfolio.title }}</h2>
      <h5 class="info--text">
        {{ portfolio.address.city }}, {{ portfolio.address.state }},
        {{ portfolio.address.country }}
      </h5>
    </v-col>
    <v-col
      cols="12"
      sm="4"
      class="text-right mt-8 mt-md-0 d-flex justify-end hide-print"
    >
      <v-hover v-slot:default="{ hover }">
        <div style="width: 200px">
          <div
            v-if="disabledPrint"
            class="error--text caption mb-2 text-center"
          >
            {{ $t('resume.print.unavailable') }}
          </div>
          <v-btn
            depressed
            tile
            block
            :outlined="!hover || disabledPrint"
            color="primary"
            :style="{
              transition: '0.3s',
              border: hover
                ? '1px solid ' + $vuetify.theme.currentTheme.primary
                : null,
            }"
            class="hide-print"
            :disabled="disabledPrint"
            @click="handlePrintButton"
          >
            {{ $t('resume.print.button') }}
          </v-btn>
          <v-dialog v-model="printDialog" width="1000">
            <v-sheet class="pa-8 d-flex flex-column align-center text-center">
              <div
                class="mx-sm-8"
                :class="$vuetify.breakpoint.mdAndUp ? 'title' : 'body'"
              >
                {{ $t('resume.print.tutorial') }}
              </div>
              <video
                :src="
                  require(`@/assets/videos/print_tutorial_${$i18n.locale}.mp4`)
                "
                width="100%"
                controls
                autoplay
                muted
                class="mt-4"
              />
              <div class="mt-8">
                <StandardButton @click="printDialog = false">{{
                  $t('resume.print.dialogCancel')
                }}</StandardButton>
                <StandardButton @click="printPdf">{{
                  $t('resume.print.dialogConfirm')
                }}</StandardButton>
              </div>
              <v-checkbox
                v-model="dontShow"
                dense
                hide-details
                class="align-self-end caption pa-0 mt-n1 mb-n3"
                :label="$t('resume.print.dontShow')"
              />
            </v-sheet>
          </v-dialog>
        </div>
      </v-hover>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      printDialog: false,
      dontShow: this.$getCookie('print.tutorial') === 'false',
    }
  },
  computed: {
    disabledPrint() {
      return navigator.userAgent.toLowerCase().includes('firefox')
    },
    portfolio() {
      return this.$portfolio()
    },
  },
  watch: {
    printDialog(open) {
      if (!open) {
        if (this.dontShow) {
          this.$setCookie('print.tutorial', false)
        }
      }
    },
  },
  methods: {
    handlePrintButton() {
      if (this.dontShow) this.printPdf()
      else this.printDialog = true
    },
    printPdf() {
      this.printDialog = false
      window.print()
    },
  },
}
</script>
<style lang="scss">
@media print {
  .v-dialog__content,
  .v-overlay {
    display: none !important;
  }
}
</style>
