<template>
  <div class="page">
    <div v-if="!loading">
      <div class="loading"></div>
    </div>
    <div v-else>
      <h1 class="main-heading"> {{ page.the_digital_divide_heading[0].text }} </h1>
      <p> {{ page.the_digital_divide_text[0].text }} </p>
      <img :src="page.the_digital_divide_image.url" alt="The digital divide">
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
