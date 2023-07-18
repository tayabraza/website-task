import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePrismicStore = defineStore('prismic', () => {
  const prismic = ref({});

  function addData(v){
    prismic.value = v;
  }

  return { prismic, addData}
})
