<template>
  <q-page >
    <!-- content -->
    <div class="row q-col-gutter-md ">
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-py-xl flex items-center">
        <sign_up_clubby/>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 q-px-xl flex justify-center ">
    <sign_up_clubby2/>
      </div>
    </div>
  </q-page>
</template>

<script>
import sign_up_clubby from "src/components/sign_up_clubby.vue"
import sign_up_clubby2 from "src/components/sign_up_clubby2.vue"
export default {
  name: 'clubby',
  components: {
    sign_up_clubby,
    sign_up_clubby2
  }
}
</script>
