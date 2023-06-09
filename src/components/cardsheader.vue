<template>
  <div class="row">
    <div class="col-md-12">
      <p>{{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cardsheader',
  props:{
    name:{
      type:String,
      default: "default name",
    },
    bgClass: String,

  },
  setup () {
    return {}
  }
}
</script>
