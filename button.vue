<template>
  <button
    class="best-button"
    :class="{ disabled }"
    @click="click"
    :disabled="disabled"
  >
    <i class="best-icon-loading" v-if="loading"></i>
    <span class="text" v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'BestButton',
  props: {
    loading: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: 'default'
    }
  },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

