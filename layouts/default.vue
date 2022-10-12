<template>
  <div class="min-w-screen-md flex h-screen w-screen flex-col">
    {{ test }}
    <slot />
  </div>
</template>

<script setup lang="ts">
const { test, rename } = useHeader()

</script>
