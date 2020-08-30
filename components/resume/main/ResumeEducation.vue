<template>
  <ResumeMainColumn :title="$t('resume.education')">
    <ResumeMainItem
      v-for="item in education"
      :key="item.id"
      :title="`${item.area}, ${item.studyType}`"
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
  data() {
    return {
      education: this.$store.state.resume.education,
    }
  },
}
</script>
