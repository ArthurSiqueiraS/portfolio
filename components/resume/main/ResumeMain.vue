<template>
  <div>
    <ResumeMainColumn :title="$t('resume.summary')">
      {{ summary }}
    </ResumeMainColumn>
    <ResumeExperience />
    <ResumeEducation />
    <ResumeExtraInfo />
  </div>
</template>
<script>
export default {
  computed: {
    summary() {
      return this.$portfolio().summary
    },
  },
}
</script>
