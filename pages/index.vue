<template>
  <div>{{ test }}</div>
</template>

<script setup lang="ts">
const { test, rename } = useHeader()

rename("changed again")
</script>
