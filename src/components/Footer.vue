<template>
  <footer>
    <div class="footer-container">
      <h2>What do we do?</h2>
      <p>You might not have heard of us, but we're the people behind the following impactful programmes.</p>
      <div class="footer-block">
        <div>
          <h3>Get online week</h3>
          <p>lorem ipsum dollar sit amet</p>
          <Button type="button" class="btn btn-primary white-bg secondary-text" btnTitle="Read more" />
        </div>
        <div>
          <h3>Learn my way</h3>
          <p>lorem ipsum dollar sit amet</p>
          <Button type="button" class="btn btn-primary white-bg secondary-text" btnTitle="Read more" />
        </div>
        <div>
          <h3>Make it click</h3>
          <p>lorem ipsum dollar sit amet</p>
          <Button type="button" class="btn btn-primary white-bg secondary-text" btnTitle="Read more" />
        </div>
        <div>
          <h3>Digital you</h3>
          <p>lorem ipsum dollar sit amet</p>
          <Button type="button" class="btn btn-primary white-bg secondary-text" btnTitle="Read more" />
        </div>
      </div>
      <div class="footer-button">
        <Button type="button" class="btn btn-primary white-bg secondary-text" btnTitle="More about what we do" />
      </div>
    </div>
  </footer>
</template>

<script setup>
  import Button from '../components/Button.vue';
</script>

<style scoped>
  .footer-container{
    padding: 2.5rem 3rem;
    background: #367d91;
    color:#fff;
    text-align: center;
  }
  .footer-container h2{
    font-size: 1.8rem;
  }
  .footer-container p{
    margin-top: 1.25rem;
    font-size: 0.85rem;
  }
  .footer-block{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 -1rem;
  }
  .footer-block div{
    margin: 1.5rem 0.8rem;
    padding: 2.5rem;
    text-align: center;
    color:#000;
    background-color: #fff;
  }
  .footer-block button{
    border: 2px solid #000;
  }
  .footer-button{
    text-align: center;
  }
  button{
    padding: 0.7rem 1.2rem;
    margin-top: 1rem;
  }
  @media only screen and (min-width: 768px){
    .footer-block{
      flex-direction: row;
    }
    .footer-block div{
      min-width: 370px;
    }
  }
  @media only screen and (min-width: 1180px){
    .footer-block div{
      min-width: 0;
    }
    .footer-container{
      text-align: left;
    }
    .footer-container h2{
      margin-left: 0.5rem;
      margin-left: 0.5rem;
    }
    .footer-container p{
      margin-left: 0.5rem;
      margin-right: -0.5rem;
    }
  }
</style>
