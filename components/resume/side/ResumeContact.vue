<template>
  <ResumeSideColumn
    :title="$t('resume.contact')"
    class="d-flex flex-column align-center"
  >
    <div>
      <div v-for="contact in contacts" :key="contact.icon">
        <v-icon size="16" color="primary">{{ contact.icon }}</v-icon>
        <a
          v-if="contact.url"
          :href="contact.url"
          :target="$vuetify.breakpoint.mobile ? null : '_blank'"
        >
          {{ contact.text }}
        </a>
        <span v-else>
          {{ contact.text }}
        </span>
      </div>
    </div>
  </ResumeSideColumn>
</template>
<script>
import { mdiLinkedin } from '@mdi/js'

export default {
  computed: {
    contacts() {
      const { phone, email, linkedin } = this.$portfolio()
      const url = 'dev.arthursiqueira.netlify.app'
      let linkedinUrl = 'https://www.linkedin.com/in/' + linkedin
      if (this.$i18n.locale === 'pt') linkedinUrl += '/?locale=pt_BR'

      return [
        {
          icon: 'phone',
          text: phone.replace(/(\d{2})(\d{2})(\d*)/, '+$1 $2 $3'),
        },
        { icon: 'email', text: email },
        {
          icon: mdiLinkedin,
          text: linkedin,
          url: linkedinUrl,
        },
        { icon: 'link', text: url, url: 'https://' + url },
      ]
    },
  },
}
</script>
