<template>
  <div class="q-px-xl">
    <div class="">
      <q-img src="https://www.clubby.me/Clubbylogo.svg" style="width: 300px;" />
    </div>
    <div class="q-mt-xl">
      <p class="text-h4 text-weight-bold">Create an account</p>
    </div>
    <div>
      <p class="q-mt-md  text-h5 text-weight-bold q-mt-xl">Choose a username</p>
      <q-input filled v-model="text" label="john doe" />
    </div>
    <div>
      <p class="q-mt-lg text-h5 text-weight-bold ">Email Address</p>
      <q-input filled v-model="text" label="email@domain.com" />
    </div>
    <div>
      <p class="q-mt-lg text-h5 text-weight-bold ">Password</p>
      <q-input filled v-model="password" label="password" type="password" />
    </div>
    <div class="q-mt-lg">
      <span>By signing up for clubby you are agreeing to the <a href="#" class="border_none text-blue">term of
          services.</a></span>
    </div>
    <div class="q-mt-lg">
      <q-btn class="full-width-button bg-light-blue-8 text-white text-h6" flat label="Sign Up" @click="buttonClicked" />
    </div>
    <div class="q-mt-lg">
      <span class="text-subtitle1 text-weight-bold">Already have an account? <a href="#"
          class="border_none text-blue">Sign Up.</a></span>
    </div>
    <div class="row q-my-md q-px-lg">
      <div class="col-5 q-mt-md ">
        <q-separator class="size"/>
      </div>
      <div class="col-2 justify-center flex">
       <p class="text-weight-bold text-subtitle1">or</p>
      </div>
      <div class="col-5 q-mt-md ">
        <q-separator class="size"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  setup() {
    return {}
  }
}
</script>
<style scoped>
.border_none {
  /* border-bottom: none; */
  text-decoration: none;
}

.full-width-button {
  width: 100%;
}
.size{
  /* font-size: 10px; */
  height: 2px;
  /* color:black ; */
  background-color: rgb(56, 54, 54);
}
</style>
