<template>
  <button type="type">{{btnTitle}}</button>
</template>

<script setup>

defineProps({
  type: {
    type: String,
    required: true
  },
  btnTitle: {
    type: String,
    required: true
  }
});

</script>

<style scoped>
  button{
      padding: 0.8rem 2rem 0.6rem;
      font-weight: bold;
      border-radius: 1.5rem;
      cursor: pointer;
      border: none;
  }
</style>

