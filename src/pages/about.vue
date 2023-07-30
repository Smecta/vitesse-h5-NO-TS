<script setup>
const { t } = useI18n()
</script>

<template>
  <div>
    <h1>{{ t('button.about') }}</h1>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
