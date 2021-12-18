<template>
  <div>
    <ResumeMainColumn :title="$t('resume.about')">
      <div v-for="(paragraph, i) in about.split('#n')" :key="i" class="pb-2">
        {{ paragraph }}<br />
      </div>
    </ResumeMainColumn>
    <ResumeMainSectionExperience />
    <ResumeMainSectionEducation />
    <ResumeMainSectionExtraInfo />
  </div>
</template>
<script>
export default {
  computed: {
    about() {
      return this.$portfolio().about
    },
  },
}
</script>
