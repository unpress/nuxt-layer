<template>
  <h4
    :id
    class="prose-h4 scroll-m-20 text-xl font-semibold tracking-tight [&:not(:first-child)]:mt-6"
  >
    <NuxtLink
      v-if="id && generate"
      :to="`#${id}`"
    >
      <slot />
    </NuxtLink>
    <slot v-else />
  </h4>
</template>

<script setup lang="ts">
const { id } = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => id && ((typeof headings?.anchorLinks === 'boolean' && headings?.anchorLinks === true) || (typeof headings?.anchorLinks === 'object' && headings?.anchorLinks?.h4)))
</script>
