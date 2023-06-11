<template>
  <q-page >
    <div class="row q-col-gutter-xl flex items-center">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-py-xl flex items-center">
        <sign_up_clubby />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
        <Login_clubby />
      </div>
    </div>
  </q-page>
</template>

<script>
import Login_clubby from 'src/components/login_clubby.vue';
import sign_up_clubby from 'src/components/sign_up_clubby.vue';
export default {
  name: 'login',
  components: {
    sign_up_clubby,
    Login_clubby
  }
}
</script>
