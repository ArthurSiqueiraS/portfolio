<template>
  <ResumeMainColumn :title="$t('resume.education')">
    <ResumeMainSectionItem
      v-for="item in education"
      :key="item.id"
      :title="`${item.course}, ${item.title}`"
      :subtitle="item.institution"
      :start-date="item.start_date"
      :end-date="item.end_date"
    >
      {{ item.summary }}
    </ResumeMainSectionItem>
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
