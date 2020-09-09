<template>
  <ResumeMainColumn :title="$t('resume.education')">
    <ResumeMainItem
      v-for="item in education"
      :key="item.id"
      :title="`${item.course}, ${item.title}`"
      :subtitle="item.institution"
      :start-date="item.startDate"
      :end-date="item.endDate"
    >
      {{ item.summary }}
    </ResumeMainItem>
  </ResumeMainColumn>
</template>
<script>
export default {
  computed: {
    education() {
      return this.$portfolio().education
    },
  },
}
</script>
