<template>
  <section class="hero mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
    <NuxtLink
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      class="hero__announcement inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <template v-if="announcement.icon">
        <SmartIcon
          :name="announcement.icon"
          :size="16"
        />
        <UiSeparator
          class="mx-2 h-4"
          orientation="vertical"
        />
      </template>
      <span class="sm:hidden">{{ announcement.title }}</span>
      <span class="hidden sm:inline">
        {{ announcement.title }}
      </span>
      <Icon
        name="lucide:arrow-right"
        class="ml-1 size-4"
      />
    </NuxtLink>

    <h1 class="hero__title text-center text-3xl font-bold md:text-6xl md:leading-[1.5]">
      <ContentSlot
        :use="$slots.title"
        unwrap="p"
      />
    </h1>
    <span class="hero__description max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl">
      <ContentSlot
        :use="$slots.description"
        unwrap="p"
      />
    </span>

    <section
      v-if="actions"
      class="hero__actions flex w-full items-center justify-center space-x-4 py-4 md:pb-10"
    >
      <NuxtLink
        v-for="(action, i) in actions"
        :key="i"
        :to="action.to"
        :target="action.target"
      >
        <UiButton :variant="action.variant">
          <SmartIcon
            v-if="action.leftIcon"
            :name="action.leftIcon"
            class="mr-1"
          />
          {{ action.name }}
          <SmartIcon
            v-if="action.rightIcon"
            :name="action.rightIcon"
            class="ml-1"
          />
        </UiButton>
      </NuxtLink>
    </section>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  announcement?: {
    to?: string
    target?: Target
    icon?: string
    title: string
  }
  actions?: [
    {
      name: string
      leftIcon?: string
      rightIcon?: string
      variant?:
        | 'default'
        | 'link'
        | 'destructive'
        | 'outline'
        | 'secondary'
        | 'ghost'
      to: string
      target?: Target
    },
  ]
}>()

defineSlots()
</script>
