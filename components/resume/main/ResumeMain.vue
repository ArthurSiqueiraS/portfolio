<template>
  <div>
    <ResumeMainColumn :title="$t('resume.about')">
      <div v-for="(paragraph, i) in summary.split('#n')" :key="i" class="pb-2">
        {{ paragraph }}<br />
      </div>
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
