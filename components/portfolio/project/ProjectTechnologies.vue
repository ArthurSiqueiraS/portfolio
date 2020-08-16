<template>
  <div>
    <div v-for="stack in stacks" :key="stack.name" class="py-4">
      <div v-if="stack.stack.length > 0">
        <div class="title primary--text">{{ $t(stack.name) }}</div>
        <div class="pa-4 d-flex">
          <div v-for="(tech, index) in stack.stack" :key="tech">
            <v-chip class="secondary--text" color="primary">
              {{ tech }}
            </v-chip>
            <v-icon
              v-if="index < stack.stack.length - 1"
              color="accent"
              class="mr-1"
              x-small
            >
              lens
            </v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    frontEnd: {
      type: Array,
      default: () => [],
    },
    backEnd: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      stacks: [
        { name: 'frontEnd', stack: this.frontEnd },
        { name: 'backEnd', stack: this.backEnd },
      ],
    }
  },
}
</script>
