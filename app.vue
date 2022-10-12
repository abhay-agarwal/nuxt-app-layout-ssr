<template>
  <div>
    {{ test }}
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { test, rename } = useHeader()

</script>
