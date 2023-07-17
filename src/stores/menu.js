import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menu = ref({
    item1: 'Home', 
    item2: 'What we do',
    item3: 'The digital divide',
    item4: 'Get Involved',
    item5: 'Our Network',
    item6: 'Insights'
  });

  function changeMenu(k, v){
    menu.value[k] = v;
  }

  return { menu, changeMenu}
})
