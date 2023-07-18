<template>

  <nav>
    <button type="button" class="menu-toggle" @click="menuShow = !menuShow"></button>
    <ul v-show="menuShow" ref="menu">
      <li><RouterLink to="/"> {{ store.menu.item1 }} </RouterLink></li>
      <li><RouterLink to="/what-we-do"> {{ store.menu.item2 }} </RouterLink></li>
      <li><RouterLink to="/the-digital-divide"> {{ store.menu.item3 }} </RouterLink></li>
      <li><RouterLink to="/get-involved"> {{ store.menu.item4 }} </RouterLink></li>
      <li><RouterLink to="/our-network"> {{ store.menu.item5 }} </RouterLink></li>
      <li><RouterLink to="/insights"> {{ store.menu.item6 }} </RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'
  import { useMenuStore } from '../stores/menu'

  let store = useMenuStore();
  let menu = ref(null);
  let menuShow = ref(false);

  onMounted(() => {

    menu.value.querySelectorAll('li').forEach(li => li.addEventListener('click', () => menuShow.value = !menuShow));
    
  });

</script>

<style scoped>

  ul {
    display: flex;
    position: absolute;
    width: 105%;
    margin-top: 28px;
    padding-bottom: 1rem;
    left: -30px;
    flex-direction: column;
    text-align: left;
    list-style: none;
    background-color: #fff;
  }

  ul li {
    padding: 0.6rem;
  }

  ul li a {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }
  ul li a:hover {
    color: #2f8375;
    border-bottom: 0.2rem solid #2f8375;
  }

  .menu-toggle{
    width: 40px;
    height: 30px;
    border-top: 6px solid #444;
    border-right: none;
    border-bottom: 18px double #444;
    border-left: none;
    cursor: pointer;
  }
  .menu-toggle:hover{
    border-top: 6px solid #2f8375;
    border-bottom: 18px double #2f8375;
  }
  .router-link-active{
    color: #2f8375;
    border-bottom: 0.2rem solid #2f8375;
  }

  @media only screen and (min-width: 768px){
    ul {
      left: 0;
      margin-top: 14px;
    }
  }

  @media only screen and (min-width: 992px){
    .menu-toggle{
      display: none;
    }
    ul{
      display: flex !important;
      position: static;
      flex-direction: row;
      padding-bottom: 0;
    }
  }

</style>
