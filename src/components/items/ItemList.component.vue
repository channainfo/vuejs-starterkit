<template>
  <div>
    <h3> Items</h3>
    <ul class="prog-lang">
      <!-- <li v-for="(item, index) in items" :key="item.id" @click="onItemSelect(item)" :class=" item.selected ? 'selected' : ''" >
        {{item.name}} - {{index}} - {{selectedIndex}}
      </li> -->
      <item-component v-for="item in items" :key='item.id' :model='item' @select="onItemSelect" />
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent, PropType } from 'vue'
  import { ItemInterface} from '@/models/items/Item.interface'
  import ItemComponent from './children/Item.component.vue'

  export default defineComponent({
    components: { ItemComponent },
    props: {
      items: {
        type: Array as PropType<ItemInterface[]>
      },
      selectedIndex: {
        type: Number,
        default: 0
      }
    },

    setup(){

      const onItemSelect = (item: ItemInterface) => {
        item.selected = !item.selected
        console.log(`Item ${item.name} switches ${item.selected}` );
        
      }

      return { onItemSelect }
    }
  })
</script>

<style lang='scss'>
  .prog-lang {
    list-style-type:none;
    li { 
      display: inline-block;
      padding: 0.7em 1.2em;

      &.selected {
        font-weight: bold;
        font-size: 110%;
      }
    }

  }

</style>