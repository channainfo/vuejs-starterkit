# store_powerup

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```


### Anatomy
#### Entry 
- point main.ts
#### Embed
- App.vue

#### views
views dir is where the pages of our app live. it contains template, css and component declaration. Actually view is a vue component

#### setup component
```
setup(props, { emit }) {
  const css = computed(() => {
    let css = "item";
    if (props.item?.selected) {
      css += " selected";
    }
    return css.trim();
  });

  const onClick = () => {
    emit("select", props.item);
  };

  return {
    css,
    onClick,
  };
},
```

it returns variables to be used in the template

#### emit
emit event in a (child) component so other component can listen to it and call store.dispatch to trigger vuex store actions.

### store.dispatch
it dispatch an action to vuex store action
```
const onSelectItem = (item: ItemInterface) => {
  store.dispatch('selectItem', {
    id: item.id,
    selected: !item.selected
  })
}


// actions
selectItem({ commit, state }, { id, selected }) {
  const item = state.items.find(item => item.id === id)
  if (item) {
    item.selected = selected
    commit('selectItem', params)
  }
}
```
Vuex actions is the best place to get and prepare data and the vuex mutations is the place to change state to update the UI.

### vuex store commit
To trigger vuex mutations


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
