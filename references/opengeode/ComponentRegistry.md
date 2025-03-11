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

# class ComponentRegistry


## Functions

### ComponentRegistry

```cpp
public void ComponentRegistry()
```


### ~ComponentRegistry

```cpp
public void ~ComponentRegistry()
```


### mesh_components

```cpp
public const Registry & mesh_components()
```


### collection_components

```cpp
public const Registry & collection_components()
```


### add_mesh_component

```cpp
public void add_mesh_component(const ComponentType & type, const uuid & id, PassKey key)
```


### add_collection_component

```cpp
public void add_collection_component(const ComponentType & type, const uuid & id, PassKey key)
```


### remove_mesh_component

```cpp
public void remove_mesh_component(const ComponentType & type, const uuid & id, PassKey key)
```


### remove_collection_component

```cpp
public void remove_collection_component(const ComponentType & type, const uuid & id, PassKey key)
```


### ComponentRegistry

```cpp
protected void ComponentRegistry(ComponentRegistry && other)
```


### operator=

```cpp
protected ComponentRegistry & operator=(ComponentRegistry && other)
```




