<template>
  <header>
    <div class="top-bar">
      <div class="search-container">
        <form action="#">
          <img class="search-icon" alt="Logo" src="@/assets/search.svg"/>
          <input type="search" class="search" id="search" placeholder="Search" />
        </form>
      </div>
      <div class="learn-donate">
        <nav>
          <RouterLink to="/learn" class="learn btn btn-primary black-text">Learn</RouterLink>
          <RouterLink to="/donate" class="donate btn btn-secondary">Donate</RouterLink>
        </nav>
      </div>
    </div>
    <div class="menu-bar">
      <a href="/"><img class="logo" alt="Logo" src="@/assets/logo.png"/></a>
      <Menu />
    </div>
  </header>
</template>

<script setup>
  import Menu from './Menu.vue';
</script>

<style scoped>
  header{
    position: relative;
  }
  .top-bar{
    display: flex;
    justify-content: space-between;
    border-bottom: 0.15rem solid #ccc;
  }
  .search-container{
    padding: 0.5rem 0;
    border-right: 0.15rem solid #ccc;
    border-left: 0.15rem solid #ccc;
  }
  .search-icon{
    width: 1.5rem;
    margin: 0 0.25rem 0 1rem;
  }
  .search{
    width: 4rem;
    border: none;
    outline: none;
    vertical-align: super;
    font-weight: bold;
  }
  .search::placeholder{
    display: none;
    font-weight: bold;
    color: #000;
  }
  .learn, .donate{
    padding: 0.75rem 0;
    width: 100px;
    text-align: center;
  }
  .learn{
    border-left: 0.15rem solid #ccc;
    border-bottom: 0.2rem solid #2f8375;
    font-weight: bold;
  }
  .learn:hover{
    background-color: #ececec;
  }
  .donate{
    border-bottom: 0.2rem solid #cf1b46;
    font-weight: bold;
  }
  .donate:hover{
    background-color: #2f8375;
    border-bottom: 0.2rem solid #2f8375;
  }
  .menu-bar{
    display: flex;
    padding: 1rem;
    justify-content: space-between;
  }
  .logo{
    width: 100%;
    max-width: 200px;
  }
  @media only screen and (min-width : 768px) {
    .top-bar{
      padding: 0 3rem;
    }
    .search-container{
      padding: 0.5rem 0;
    }
    .search-icon{
      width: 1.5rem;
      margin: 0 0.25rem 0 1rem;
    }
    .search{
      transition: 1s;
    }
    .search:focus{
      width: 8rem;
    }
    .search::placeholder{
      display: block;
    }
    .menu-bar{
      padding: 1rem 3rem;
    }
  }
</style>