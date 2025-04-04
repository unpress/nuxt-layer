<template>
  <UiAlert
    class="transition-all [&:not(:first-child)]:mt-5"
    :class="[
      typeTwClass[type],
      to && 'hover:bg-muted/50',
      noClick && to && 'cursor-pointer',
      inStack && 'm-0 rounded-none border-none',
    ]"
    @click="alertClick"
  >
    <SmartIcon
      v-if="icon && title"
      :name="icon"
      :size="16"
    />

    <UiAlertTitle
      v-if="title"
      class="font-semibold"
    >
      {{ title }}
    </UiAlertTitle>

    <UiAlertDescription class="w-full">
      <div class="flex flex-row gap-2">
        <SmartIcon
          v-if="icon && !title"
          :name="icon"
          :size="16"
          class="mb-[2px] mt-0.5 min-w-5 self-start"
        />

        <span
          class="w-full"
          :class="[to && 'pr-8']"
        >
          <slot />
        </span>
      </div>

      <SmartIcon
        v-if="(noClick || to) && showLinkIcon"
        :name="_external || target === '_blank' ? 'lucide:arrow-up-right' : 'lucide:arrow-right'"
        class="absolute right-4 top-4"
        :size="20"
      />
    </UiAlertDescription>
  </UiAlert>
</template>

<script setup lang="ts">
const {
  to,
  target,
  type = 'default',
  external = undefined,
  inStack = false,
  showLinkIcon = true,
  noClick = false,
} = defineProps<{
  title?: string
  icon?: string
  type?: 'default' | 'info' | 'warning' | 'success' | 'danger' | 'secondary'
  to?: string
  target?: Target
  external?: boolean
  inStack?: boolean
  showLinkIcon?: boolean
  noClick?: boolean
}>()

const typeTwClass = {
  default: '',
  info: 'border-sky-600 text-sky-600 [&>svg]:text-sky-600',
  note: 'border-blue-700 text-blue-700 [&>svg]:text-blue-700',
  example: 'border-violet-600 text-violet-600 [&>svg]:text-violet-600',
  warning: 'border-amber-600 text-amber-600 [&>svg]:text-amber-600',
  success: 'border-green-600 text-green-600 [&>svg]:text-green-600',
  danger: 'border-red-600 text-red-600 [&>svg]:text-red-600',
  secondary: 'bg-muted/50',
}

const _external = computed(() => external ?? to?.startsWith('http'))

async function alertClick() {
  if (!noClick && to) {
    if (target) {
      await navigateTo(to, {
        external: _external.value,
        open: { target },
      })
    }
    else {
      await navigateTo(to, {
        external: _external.value,
      })
    }
  }
}
</script>
