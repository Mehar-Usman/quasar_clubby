<template>

  <q-card class="my-card bg-secondary text-white">

      <q-card-section>
        <div class="text-h6">{{ p }}</div>
        <div class="text-subtitle2">{{ name }}</div>
      </q-card-section>

      <q-card-section>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn :to="url" :class="cardClass">Action</q-btn>
        <q-btn @click="$emit('EmitAction')">Emit</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  name: 'CustomCard2',
  props:{
    name:{
      type:String,
      default: "default name",
    },
    p:String,
    url: String,
    cardClass: String,
    cards: Array,
    objDATA: Object,
  },
  setup () {
    return {}
  }
}
</script>
