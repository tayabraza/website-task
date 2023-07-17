<template>
  <div class="page">
    <div v-if="!loading">
      <div class="loading"></div>
    </div>
    <div v-else>
      <h1 class="main-heading"> {{ page.what_we_do_heading[0].text }} </h1>
      <p> {{ page.what_we_do_text[0].text }} </p>
      <img :src="page.what_we_do_image.url" alt="What we do">
    </div>
  </div>
</template>

<script setup>

  import { ref } from 'vue'
  import { useSinglePrismicDocument } from "@prismicio/vue";

  let { data } = useSinglePrismicDocument("page");
  let loading = ref(false);
  let page = ref({});

  setTimeout(()=>{
      page.value = data._value.data;
      loading.value = true;
  },1000);

</script>
