<template>
  <div
    class="flex items-center border-b px-3"
    cmdk-input-wrapper
  >
    <NuxtIcon
      v-if="!loading"
      name="lucide:search"
      class="mr-2 size-4 shrink-0 opacity-50"
    />
    <NuxtIcon
      v-else
      name="lucide:loader"
      class="mr-2 size-4 shrink-0 animate-spin opacity-50"
    />
    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      :class="cn('flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50', props.class)"
    />
  </div>
</template>

<script setup lang="ts">
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<ComboboxInputProps & {
  class?: HTMLAttributes['class']
  loading?: boolean
}>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>
