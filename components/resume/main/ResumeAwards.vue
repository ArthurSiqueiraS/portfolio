<template>
  <ResumeMainColumn :title="$t('resume.awards')">
    <ResumeMainItem
      v-for="award in awards"
      :key="award.title"
      :title="award.title"
      :subtitle="award.awarder"
      :start-date="award.date"
    >
      {{ award.summary }}
    </ResumeMainItem>
  </ResumeMainColumn>
</template>
<script>
export default {
  data() {
    return {
      awards: this.$store.state.resume.awards,
    }
  },
}
</script>
