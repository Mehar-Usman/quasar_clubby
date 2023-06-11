<template>
  <div class=" q-pa-lg">
    <div class="">
      <q-img src="https://www.clubby.me/Clubbylogo.svg" style="width: 200px;" />
    </div>
    <div class="q-mt-xl q-mb-lg">
      <p class="text-h5 ">Login</p>
    </div>
    <div>
      <p class="q-mt-lg text-h5 text-weight-bold ">Email Address</p>
      <q-input filled v-model="text" label="email@domain.com"/>
    </div>
    <div>
      <p class="q-mt-lg text-h5 text-weight-bold ">Password</p>
      <q-input filled v-model="password" label="password" />
    </div>
    <div class="q-mt-xl">
      <q-btn class="full-width-button bg-light-blue-8 text-white text-capitalize q-py-sm text-h6" flat label="Login" @click="buttonClicked" />
    </div>
    <div class="q-mt-lg">
      <span class="text-subtitle1 text-weight-bold">Don't have an account? <a href="#"
          class="border_none text-blue">Sign Up.</a></span>
    </div>
    <div class="row q-my-md q-px-lg">
      <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 q-mt-md ">
        <q-separator class="size"/>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 justify-center flex">
       <p class="text-weight-bold text-subtitle1">or</p>
      </div>
      <div class="col-5 q-mt-md ">
        <q-separator class="size"/>
      </div>
    </div>
    <div class="q-mt-md q-mb-xl">
      <q-btn  class="full-width-button  text-weight-bold bg-grey-2 text-capitalize q-py-md" icon="laptop" flat label="Login With Google" @click="buttonClicked" text-color="black"  />
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
.full-width-button {
  width: 100%;
}
.border_none{
  text-decoration: none;
}
</style>
