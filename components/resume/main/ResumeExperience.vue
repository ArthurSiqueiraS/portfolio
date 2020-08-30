<template>
  <ResumeMainColumn :title="$t('resume.experience')">
    <ResumeMainItem
      v-for="job in experience"
      :key="job.id"
      :title="job.position"
      :subtitle="job.company"
      :start-date="job.startDate"
      :end-date="job.endDate"
    >
      {{ job.summary }}
    </ResumeMainItem>
  </ResumeMainColumn>
</template>
<script>
export default {
  data() {
    return {
      experience: this.$store.state.resume.work,
    }
  },
}
</script>
