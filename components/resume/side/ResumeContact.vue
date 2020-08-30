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
  data() {
    const { phone, email, linkedin, url } = this.$store.state.resume.basics

    return {
      contacts: [
        { icon: 'phone', text: phone },
        { icon: 'email', text: email },
        {
          icon: mdiLinkedin,
          text: linkedin,
          url: 'https://www.linkedin.com/in/' + linkedin,
        },
        { icon: 'link', text: url, url: 'https://' + url },
      ],
    }
  },
}
</script>
