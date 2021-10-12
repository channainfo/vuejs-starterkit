<template>
  <div>
    <h3> Items</h3>
    <ul class="prog-lang">
      <li v-for="item in items" :key="item.id" >
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'

  export default defineComponent({
    props: {
      items: {
        type: Array as PropType<any[]>
      }
    }
  })
</script>

<style lang='scss'>
  .prog-lang {
    list-style-type:none;
    li { 
      display: inline-block;
      padding: 0.7em 1.2em;
      font-weight: bold;
    }
  }

</style>