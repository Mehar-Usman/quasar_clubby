<template>
  <q-page padding>
    <cardsheader name="Card Practice" class="text-center text-primary text-weight-bolder text-h1 bg-black q-mb-lg"/>
    <!-- content -->
    <div class="row q-col-gutter-xl">
      <div class="col-md-4 cursor-pointer ">
        <f name="Abu usman" p="MY First Card Practice"/>
      </div>
      <div class="col-md-4 cursor-none">
        <f name="Abu usman" p="MY First Card Practice"/>
      </div>
      <div class="col-md-4 cursor-inherit">
        <f name="Abu usman" p="MY First Card Practice"/>
      </div>
      <div class="col-md-4">
        <f name="Abu usman" p="MY First Card Practice"/>
      </div>
      <div class="col-md-8">
        <typography changeBg="bg-red q-pa-md"/>
      </div>
      <div class="col-md-12">
        <shadow/>
      </div>
    </div>
  </q-page>
</template>

<script>
import f from "src/components/CustomCard2.vue"
import cardsheader from "src/components/cardsheader.vue"
import typography from "src/components/typography.vue"
import shadow from "src/components/shadow.vue"
export default {
  name: 'angvo',
  components : {
    f,
    cardsheader,
    typography,
    shadow
  },
}
</script>
