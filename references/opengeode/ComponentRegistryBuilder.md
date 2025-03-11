<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class ComponentRegistryBuilder


## Functions

### ComponentRegistryBuilder

```cpp
public void ComponentRegistryBuilder(ComponentRegistry & component_registry)
```


### ~ComponentRegistryBuilder

```cpp
public void ~ComponentRegistryBuilder()
```


### add_mesh_component

```cpp
public void add_mesh_component(const ComponentType & type, const uuid & id)
```


### add_collection_component

```cpp
public void add_collection_component(const ComponentType & type, const uuid & id)
```


### remove_mesh_component

```cpp
public void remove_mesh_component(const ComponentType & type, const uuid & id)
```


### remove_collection_component

```cpp
public void remove_collection_component(const ComponentType & type, const uuid & id)
```




