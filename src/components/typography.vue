<template>
<p class="text-h1 text-weight-bolder text-right text-accent ">Headline 1</p>
<p class="text-h2 text-weight-bold text-left text-info ">Headline 2</p>
<p class="text-h3 text-weight-medium text-center text-indigo-13">Headline 3</p>
<p class="text-h4 text-weight-regular text-justify">Headline 4</p>
<p class="text-h5 text-weight-light text-bold">Headline 5</p>
<p class="text-h6 text-weight-thin text-italic ">Headline 6</p>
<!-- <p class="text-6">Headline 6</p> -->
<p class="text-subtitle1 text-no-wrap">Text-subtitle1</p>
<p class="text-subtitle2">Text-subtitle2</p>
<p class="text-body1">
Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</p>
<p class="text-body2">
Body 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquid ad quas sunt voluptatum officia dolorum cumque, possimus nihil molestias sapiente necessitatibus dolor saepe inventore, soluta id accusantium voluptas beatae.</p>
<p class="caption-text">text-caption</p>
<p class="text-overline">Overline</p>
</template>

<script>
export default {
  name: 'typography',
  props:
{
    type:String,
    changeBg:String,
     cards: Array,
    objDATA: Object,
},
  setup () {
    return {}
  }
}
</script>
