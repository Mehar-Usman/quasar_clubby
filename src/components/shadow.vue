<template>
  <div class="q-pa-md  rounded-borders">
    <div class="flex inline shadow-box flex-center"
    v-for="n in 24" :key="n"
    :class="`shadow-${n}`"
    >
    shadow-{{ n }}
    </div>
    <div class="flex inline shadow-box flex-center"
    v-for= "n in 24" :key ="n"
    :class="`shadow-${n}`"
    >
    shadow-up-{{ n }}
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
.shadow-box{
  width: 90px;
  height: 90px;
  margin: 25px;
  border-radius: 50%;
  font-size: 12px;
}
</style>
