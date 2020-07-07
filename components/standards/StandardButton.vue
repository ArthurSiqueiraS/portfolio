<template>
  <v-hover v-slot:default="{ hover }">
    <v-btn
      v-bind="$attrs"
      :color="hover ? 'primary' : 'accent'"
      :style="{
        transition: '0.1s',
      }"
      text
      :ripple="false"
      v-on="$listeners"
    >
      <slot />
    </v-btn>
  </v-hover>
</template>
