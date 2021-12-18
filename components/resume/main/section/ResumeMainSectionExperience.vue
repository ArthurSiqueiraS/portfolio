<template>
  <ResumeMainColumn :title="$t('resume.experience')">
    <ResumeMainSectionItem
      v-for="job in experience"
      :key="job.id"
      :title="job.employer.name"
      :subtitle="job.occupations.map((o) => o.name).join(' | ')"
      :start-date="job.start_date"
      :end-date="job.end_date"
    >
      {{ job.summary }}
    </ResumeMainSectionItem>
  </ResumeMainColumn>
</template>
<script>
export default {
  computed: {
    experience() {
      return this.$portfolio().experiences
    },
  },
}
</script>
