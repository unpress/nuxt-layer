<template>
  <AvatarImage
    v-bind="props"
    class="size-full object-cover"
  />
</template>

<script setup lang="ts">
import { AvatarImage, type AvatarImageProps } from 'reka-ui'

const props = defineProps<AvatarImageProps>()
</script>
