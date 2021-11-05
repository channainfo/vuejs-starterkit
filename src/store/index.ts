import { ItemInterface } from '@/models/items/Item.interface'
import ItemsStateInterface from '@/models/store/ItemsState.interface'
import { createStore } from 'vuex'

const state: ItemsStateInterface = {
  loading: false,
  items: []
}


export default createStore({
  state: state,
  mutations: {
    _loadingItems(state: ItemsStateInterface) {
      state.loading = true
      state.items = []
    },

    _loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.loading = false
      state.items = items
    },

    _selectItem(state: ItemsStateInterface, selectedItem: ItemInterface) {
      console.log('Item mutated: ', selectedItem)
      if (!selectedItem.selected)
        return;

      state.items.forEach((item) => {
        if (item.id !== selectedItem.id)
          item.selected = false
      })
    }
  },
  actions: {
    loadItems({ commit }) {
      commit('_loadingItems')

      const items: ItemInterface[] = [
        { id: 1, name: 'Ruby', selected: false },
        { id: 2, name: 'Php', selected: false },
        { id: 3, name: 'Python', selected: false },
        { id: 4, name: 'C', selected: false },
      ]

      setTimeout(() => {
        commit('_loadedItems', items)
      }, 3000)
    },

    selectItem({ state, commit }, { id, selected }) {
      const item = state.items.find(item => item.id === id)
      if (item) {
        item.selected = selected
        commit('_selectItem', item)
      }
    }

  },
  modules: {
  }
})
