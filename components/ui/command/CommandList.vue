<template>
  <ComboboxContent
    v-bind="forwarded"
    :class="cn('overflow-y-auto overflow-x-hidden', props.class)"
  >
    <div role="presentation">
      <slot />
    </div>
  </ComboboxContent>
</template>

<script setup lang="ts">
import type { ComboboxContentEmits, ComboboxContentProps } from 'reka-ui'
import { ComboboxContent, useForwardPropsEmits } from 'reka-ui'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<ComboboxContentProps & { class?: HTMLAttributes['class'] }>(),
  {
    class: '',
    dismissable: false,
  },
)
const emits = defineEmits<ComboboxContentEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
