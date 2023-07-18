<template>
  <div class="page">
    <div v-if="!loading">
      <div class="loading"></div>
    </div>
    <div v-else>
      <h1 class="main-heading"> {{ page.insights_heading[0].text }} </h1>
      <p> {{ page.insights_text[0].text }} </p>
      <img :src="page.insights_image.url" alt="Insights">
    </div>
  </div>
</template>

<script setup>

  import { ref } from 'vue'

  let page = ref({})
  let loading = ref(false);
  let timer = 200;

  if ( sessionStorage.page ) {
      page.value = JSON.parse(sessionStorage.page);
      loading.value = true;
  }

  function fetchData() {
    setTimeout( () => {
      if ( sessionStorage.page ) {
          page.value = JSON.parse(sessionStorage.page);
          loading.value = true;
      } else {
        timer += 200;
        fetchData();
      }
    }, timer)
  }

  fetchData();

</script>
