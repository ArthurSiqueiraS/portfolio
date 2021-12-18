<template>
  <ResumeSideColumn
    :title="$t('resume.languages')"
    class="d-flex flex-column align-center"
  >
    <div
      v-for="language in languages"
      :key="language.name"
      class="text-center pa-3"
    >
      <div>
        {{ language.name }}
      </div>
      <v-icon
        v-for="(level, index) in Array(language.level + 2)"
        :key="'level' + index"
        size="8"
        class="mx-1"
        color="primary"
      >
        lens </v-icon
      ><v-icon
        v-for="(level, index) in Array(5 - (language.level + 2))"
        :key="index"
        size="8"
        class="mx-1"
        color="primary"
      >
        panorama_fish_eye
      </v-icon>
    </div>
  </ResumeSideColumn>
</template>
<script>
export default {
  computed: {
    languages() {
      return this.$portfolio().languages
    },
  },
}
</script>
