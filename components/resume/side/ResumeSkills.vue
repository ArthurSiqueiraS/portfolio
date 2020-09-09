<template>
  <ResumeSideColumn :title="$t('resume.skills')">
    <v-row justify="center" align="center">
      <v-col
        v-for="skill in skills"
        :key="skill.name"
        cols="6"
        class="text-center pa-3 d-flex align-center justify-center"
      >
        <v-icon size="4" color="primary" left>lens</v-icon>{{ skill.name }}
      </v-col>
    </v-row>
  </ResumeSideColumn>
</template>
<script>
export default {
  computed: {
    skills() {
      return this.$portfolio().skills
    },
  },
}
</script>
