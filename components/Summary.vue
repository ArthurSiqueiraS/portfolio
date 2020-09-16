<template>
  <v-row no-gutters justify="center" class="accent--text">
    <v-col cols="12" lg="10" xl="6">
      <v-row no-gutters class="pa-md-8 pa-lg-0">
        <v-col
          cols="12"
          md="3"
          class="d-flex justify-center justify-md-end pr-md-8 pr-lg-16"
        >
          <v-avatar size="200">
            <V-img
              :gradient="$helpers.imageGradient(0.75)"
              :src="require('@/assets/images/landing_profile.jpg')"
            />
          </v-avatar>
        </v-col>
        <v-col
          cols="12"
          md="9"
          class="subtitle-1 d-flex flex-column pa-8 pa-md-0 justify-space-between"
        >
          {{ $t('callToAction') }}
          <div class="mt-8 d-sm-flex">
            <v-btn
              :block="mobile"
              tile
              depressed
              color="primary"
              class="mb-4 mb-sm-0 mr-sm-4"
              :to="localePath('/resume')"
            >
              {{ $t('viewResume') }}
            </v-btn>
            <div class="contact-icons d-flex justify-center">
              <a :href="linkedin" target="_blank">
                <v-icon large color="primary">{{ mdiLinkedin }}</v-icon>
              </a>
              <a :href="'mailto:' + email" target="_blank">
                <v-icon large color="primary">email</v-icon>
              </a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mdiLinkedin } from '@mdi/js'

export default {
  data() {
    return {
      mdiLinkedin,
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xsOnly
    },
    email() {
      return 'dev.arthursiqueira@gmail.com'
    },
    linkedin() {
      let linkedin = this.$portfolio().linkedin
      if (this.$i18n.locale === 'pt') linkedin += '/?locale=pt_BR'

      return 'https://www.linkedin.com/in/' + linkedin
    },
  },
}
</script>
<style lang="scss">
.contact-icons {
  .v-icon {
    margin: 0 8px;
    cursor: pointer;

    &:hover {
      transform: scale3d(1.2, 1.2, 1.2);
    }
  }
}
</style>
