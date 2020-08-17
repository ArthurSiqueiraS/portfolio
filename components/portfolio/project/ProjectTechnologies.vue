<template>
  <div>
    <div v-for="stack in stacks" :key="stack.name" class="py-4">
      <div v-if="stack.stack.length > 0">
        <div class="title primary--text text-center text-sm-left">
          {{ $t(stack.name) }}
        </div>
        <v-col
          cols="12"
          class="px-0 py-4 px-sm-4 d-flex flex-wrap justify-center justify-sm-start"
        >
          <div
            v-for="(tech, index) in stack.stack"
            :key="tech"
            class="d-flex align-center mb-2"
          >
            <v-chip class="secondary--text" color="primary">
              {{ tech }}
            </v-chip>
            <v-icon
              v-if="index < stack.stack.length - 1"
              color="accent"
              class="mx-1"
              x-small
            >
              lens
            </v-icon>
          </div>
        </v-col>
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
