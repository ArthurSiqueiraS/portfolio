<template>
  <div class="d-flex flex-column align-center">
    <h1 class="accent--text">{{ $t('technologiesAndSkills') }}</h1>
    <v-col sm="10" md="8" lg="6" xl="4">
      <v-row no-gutters>
        <v-col
          v-for="tech in technologies"
          :key="tech.name"
          cols="4"
          class="d-flex justify-center align-center flex-column my-8 accent--text"
        >
          <v-img height="48" contain :src="tech.logo" />
          <span class="mt-2">{{ tech.name }}</span>
        </v-col>
      </v-row>
    </v-col>
    <v-row no-gutters justify="center">
      <v-col
        v-for="skill in skills"
        :key="skill.name"
        cols="12"
        sm="6"
        class="d-flex justify-center align-center subtitle-1 accent--text my-2"
      >
        <v-icon large left color="accent">{{ skill.icon }}</v-icon
        >{{ skill.name }}
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      technologies: [
        {
          name: 'Vue.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        },
        {
          name: 'React.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        },
        {
          name: 'Vue3.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        },
        {
          name: 'Vue4.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        },
        {
          name: 'Vue5.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        },
        {
          name: 'Vue6.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        },
        {
          name: 'Vue7.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        },
        {
          name: 'Vue8.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        },
        {
          name: 'Vue9.js',
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        },
      ],
      skills: [
        { name: 'Autonomy', icon: 'person' },
        { name: 'Programming Logic', icon: 'person' },
        { name: 'Communication', icon: 'person' },
        { name: 'Efficiency', icon: 'person' },
      ],
    }
  },
}
</script>
