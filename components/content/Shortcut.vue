<template>
  <Kbd :size>
    {{ computedValue }}
  </Kbd>
</template>

<script setup lang="ts">
// TODO: refactor to use kbd and <kbd> tags
const { value, size = 'sm' } = defineProps<{
  value: string
  size?: 'xs' | 'sm' | 'md'
}>()

const metaSymbol = ref('Ctrl')
onMounted(() => {
  metaSymbol.value = navigator && navigator.userAgent && navigator.userAgent.match(/Macintosh;/) ? '⌘' : 'Ctrl'
})

const computedValue = computed(() => value === 'meta' ? metaSymbol : value)
</script>
