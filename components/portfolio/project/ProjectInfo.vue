<template>
  <div class="py-4 px-8">
    <v-row
      v-for="[key, value] in Object.entries(details)"
      :key="key"
      align="center"
      justify="space-between"
    >
      <span class="title font-weight-bold">{{ key }}:</span
      ><span>{{ value }}</span>
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
    details[this.$t('project.employment')] = this.project.employment
    details[this.$t('project.occupations')] = this.project.occupations.join(
      ' / '
    )
    details[this.$t('project.status')] = this.project.status.join(' / ')

    return {
      details,
    }
  },
}
</script>
