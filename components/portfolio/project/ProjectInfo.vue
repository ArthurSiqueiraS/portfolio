<template>
  <div class="py-4 px-8">
    <v-row
      v-for="[key, value] in Object.entries(details)"
      :key="key"
      align="center"
      justify="space-between"
    >
      <span class="title font-weight-bold">{{ key }}:</span>
      <a v-if="key == 'Website'" :href="value" target="_blank">{{ value }}</a>
      <span v-else>{{ value }}</span>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    const details = {}
    details[this.$t('project.employer')] = this.project.employer.name
    details[this.$t('project.occupations')] = this.project.occupations
      .map((o) => o.name)
      .join(' / ')
    // details[this.$t('project.status')] = this.project.status
    //   .map((s) => s.name)
    //   .join(' / ')
    if (this.project.url) {
      details.Website = this.project.url
    }

    return {
      details,
    }
  },
}
</script>
