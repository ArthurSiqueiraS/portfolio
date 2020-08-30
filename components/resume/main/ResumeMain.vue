<template>
  <div>
    <ResumeMainColumn :title="$t('resume.summary')">
      {{ summary }}
    </ResumeMainColumn>
    <ResumeExperience />
    <ResumeEducation />
    <ResumeAwards />
  </div>
</template>
<script>
export default {
  data() {
    return {
      summary: this.$store.state.resume.basics.summary,
    }
  },
}
</script>
