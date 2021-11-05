<template>
  <li :class="css" @click="onClick">
    <div class="selected-indicator">⋆</div>
    <div class="name">{{ model.name }}</div>
  </li>
</template>

<script lang="ts">
import { ItemInterface } from '@/models/items/Item.interface'
import { defineComponent, computed, PropType } from 'vue'

export default defineComponent({
  props:{
    model: {
      type: Object as PropType<ItemInterface>,
    }
  },
  setup(props, { emit }) {
    const css = computed( () => {
      let css = 'item'
      if(props.model?.selected){
        css += ' selected'
      }
      return css.trim()
    })

    const onClick = () => {
      emit('select', props.model)
    }

    return {
      css, onClick
    }
  },
})
</script>
