<template>
  <div class="bg-grey-3 q-pa-md">
    <div class=" flex justify-center">
      <q-img src="https://www.clubby.me/Clubbylogo.svg" width="850px"/>
    </div>
    <div class="q-mt-lg flex justify-center">
      <p class="text-weight-bold text-h4 set-color ">#1  BEST APP FOR CLUBS</p>
    </div>
    <div class=" set_line_height">
      <span class="text-size text-weight-bolder flex justify-center">
       Sign up today to get
      </span>
      <p class="text-size text-weight-bolder flex justify-center ">
        started with
      </p>
    </div>
    <div class="text-weight-bolder flex justify-center  text-size-2">
      <p>clubby!</p>
    </div>
    <br>
    <div class="set_line_height text-body1">
     <p class="justify-center flex"> Welcome to Clubby: The only app your club will ever need. Keep in touch and build community </p>
     <p class="justify-center flex"> with the many great features.</p>
    </div>
    <div class="flex justify-center">
      <q-btn label="Sign up" class="set-btn-width q-mr-md q-py-sm set-bg-color"/>
      <q-btn label="Login" class="set-btn-width bg-white text-capitalize "/>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup () {
    return {}
  }
}
</script>
<style scoped>
  .set-color{
    color: #3c8ec9;
  }
  .text-size{
    font-size: 70px;
  }
  .set_line_height{
    line-height: 1.0;
  }
  .text-size-2{
    font-size: 80px;
    line-height: 0.9;
    color: #3c8ec9;

  }
  .set-btn-width{
    width: 190px;
    border-radius: 8px;
  }
  .set-bg-color{
    background-color: #3c8ec9;
    color: white;
  }
</style>
