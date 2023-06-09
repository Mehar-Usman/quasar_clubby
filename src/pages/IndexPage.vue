<template>
  <q-page>
    <CustomCard url="/sdfsdf" name = "jhfyf" @EmitAction="$router.push('/usman')" cardClass="bg-primary q-pa-md"/>
    <CustomCard name="Usman" url="/usman" cardClass="bg-red q-pa-md"/>
    <CustomCard2/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CustomCard from 'src/components/CustomCard.vue';
import CustomCard2 from 'src/components/CustomCard2.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    CustomCard,
    CustomCard2
  }
})
</script>
