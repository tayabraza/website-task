<template>
    
      <section class="slide">
          <h1 class="top-heading white-text">Get online week 2021</h1>
          <p class="top-text white-bg primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse amet incidunt aut officia, eveniet minus tenetur culpa sapiente. </p>
          <Button type="button" class="btn btn-primary" btnTitle="Get involved now!" />
      </section>

      <section class="social-container">

        <div class="social-background"></div>

        <div class="social-block primary-bg">
          <h2 class="white-text">
            We are a social change charity, helping people to improve their lives through digital
          </h2>
          <p class="white-text">
            We tackle the most pressing issues of our time, working with partners in thaosands of communities across the UK and further afield.
          </p>
          <Button type="button" class="btn btn-primary primary-bg white-text" btnTitle="Learn more about us" />
        </div>
        
      </section>

      <section class="help-container">
        <h2>How can we help you?</h2>
        <p>Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>
        <div class="start-block white-bg">
            <p> I am <a href="#">an Individual<span> > </span></a> and I want <a href="#">want to learn<span> > </span></a></p>
            <Button type="button" class="btn btn-primary secondary-bg white-text" btnTitle="Start now" />
        </div>
      </section>

</template>

<script setup>
  import Button from '../components/Button.vue';
</script>

<style scoped>
  .slide{
    width: 100%;
    height: 430px;
    padding: 1rem;
    background-image: url("../assets/man-with-mobile.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }
  .top-heading{
    width: 100%;
    max-width: 680px;
    padding: 1rem 2rem;
    font-size: 36px;
    font-weight: bold;
    background-color: #367d91;
  }
  .top-text{
    width: 100%;
    max-width: 530px;
    margin-top: 1.6rem;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.6rem;
  }
  button{
    margin-top: 1.5rem;
    font-size: 1.05rem;
  }
  .social-container{
    display: flex;
    flex-direction: column;
  }
  .social-background{
    min-height: 300px;
    background-image: url("../assets/woman-with-laptop.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .social-block{
    padding: 1.6rem 2rem;
    background-image: url("../assets/logo-print.svg");
    background-repeat: no-repeat;
    background-position: 100% 100%;
  }
  .social-block h2{
    font-size:1.9rem;
    line-height: 2.4rem;
  }
  .social-block p{
    margin-top: 1rem;
    font-size:1.25rem;
    line-height: 1.6rem;
  }
  .social-block button {
    border: 2px solid #fff;
  }
  .help-container{
    padding: 2rem 3rem;
    background-color: #ececec;
  }
  .help-container h2{
    font-size: 1.8rem;
  }
  .help-container p{
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  .start-block{
    margin-top: 1.5rem;
    padding: 0.5rem 1.5rem 1.5rem;
    text-align: center;
  }
  .start-block p{
    display: inline;
    margin-top: 0rem;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
  .start-block a{
    font-weight: bold;
    color: #367d91;
    text-decoration: none;
    border-bottom: 3px solid #367d91;
  }
  .start-block span{
    display: inline-block;
    margin-top: -1rem;
    transform: rotate(90deg);
    font-weight: normal;
  }
  .start-block button{
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 0.6rem 1.3rem;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 480px){
    .slide{
      padding: 2rem;
    }
    .top-heading{
      font-size: 48px;
    }
  }

  @media only screen and (min-width: 992px){
    .slide{
      padding: 3.5rem;
    }
    .top-heading{
      font-size: 60px;
    }
    .social-container{
      flex-direction: row;
    }
    .social-background{
      width: 50%;
    }
    .social-block{
      width: 50%;
    }
  }
</style>