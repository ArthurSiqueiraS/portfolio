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
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </v-avatar>
        </v-col>
        <v-col
          cols="12"
          md="9"
          class="subtitle-1 d-flex flex-column pa-8 pa-md-0 justify-space-between"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <div class="mt-8 d-sm-flex">
            <v-btn
              :block="mobile"
              tile
              depressed
              color="primary"
              class="mb-4 mb-sm-0 mr-sm-4"
            >
              {{ $t('viewResume') }}
            </v-btn>
            <div class="contact-icons d-flex justify-center">
              <v-icon large color="primary">email</v-icon>
              <v-icon large color="primary">{{ mdiLinkedin }}</v-icon>
              <v-icon large color="primary">{{ mdiInstagram }}</v-icon>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mdiLinkedin, mdiInstagram } from '@mdi/js'

export default {
  data() {
    return {
      mdiLinkedin,
      mdiInstagram,
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.xsOnly
    },
    email() {
      return 'dev.arthursiqueira@gmail.com'
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
