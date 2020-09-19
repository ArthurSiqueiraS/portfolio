<template>
  <div class="d-flex flex-column align-center">
    <h1 class="accent--text">{{ $t('technologies') }}</h1>
    <v-col sm="10" md="8" lg="6" xl="4">
      <v-row no-gutters>
        <v-col
          v-for="tech in $portfolio().technologies"
          :key="tech.name"
          cols="4"
        >
          <a
            :href="tech.link"
            target="_blank"
            class="d-flex justify-center align-center flex-column text-center my-8 accent--text"
          >
            <v-img height="48" contain :src="tech.logo" />
            <span class="mt-2">{{ tech.name }}</span>
          </a>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>
