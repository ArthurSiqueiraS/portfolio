<template>
  <div>
    <ResumeMainColumn
      v-for="(items, group) in extraInfo"
      :key="group"
      :title="group"
    >
      <ResumeMainSectionItem
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :subtitle="item.subtitle"
        :start-date="item.start_date"
        :end-date="item.end_date"
        :continuous="item.continuous"
      >
        {{ item.summary }}
      </ResumeMainSectionItem>
    </ResumeMainColumn>
  </div>
</template>
<script>
import _ from 'lodash'

export default {
  computed: {
    extraInfo() {
      return _.groupBy(this.$portfolio().extra_info, (item) => item.group)
    },
  },
}
</script>
