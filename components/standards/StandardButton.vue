<template>
  <v-hover v-slot:default="{ hover }">
    <v-btn
      style="min-width: 0;"
      v-bind="$attrs"
      :color="hover ? textHoverColor : textColor"
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
<script>
export default {
  props: {
    textColor: {
      type: String,
      default: 'accent',
    },
    textHoverColor: {
      type: String,
      default: 'primary',
    },
  },
}
</script>
