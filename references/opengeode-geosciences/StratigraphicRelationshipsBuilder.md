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

# class StratigraphicRelationshipsBuilder


 Class managing modification of StratigraphicRelationships



## Functions

### StratigraphicRelationshipsBuilder

```cpp
public void StratigraphicRelationshipsBuilder(StratigraphicRelationships & relationships)
```


### unregister_component

```cpp
public void unregister_component(const uuid & id)
```


 Remove a component from the set of components registered by the StratigraphicRelationships, and its above/under relationships

**id** [in] Unique index of the component to remove

### remove_relation

```cpp
public void remove_relation(const uuid & id1, const uuid & id2)
```


 Remove a relationship between two components

### remove_above_relation

```cpp
public void remove_above_relation(const uuid & id1, const uuid & id2)
```


 Remove a relationship of type above/under between two components

### remove_unconformity_relation

```cpp
public void remove_unconformity_relation(const uuid & id1, const uuid & id2)
```


 Remove an unconformity relationship between two components

### copy_stratigraphic_relationships

```cpp
public void copy_stratigraphic_relationships(const ModelCopyMapping & mapping, const StratigraphicRelationships & relationships)
```


### load_stratigraphic_relationships

```cpp
public void load_stratigraphic_relationships(basic_string_view directory)
```


### add_above_relation

```cpp
protected index_t add_above_relation(const ComponentID & above, const ComponentID & under)
```


 Adds a new relationship of type above-under between two components

### add_erosion_relation

```cpp
protected index_t add_erosion_relation(const ComponentID & erosion, const ComponentID & eroded)
```


 Adds a new unconformity relationship of erosion type between two components

### add_baselap_relation

```cpp
protected index_t add_baselap_relation(const ComponentID & baselap_top, const ComponentID & baselap)
```


 Adds a new unconformity relationship of baselap type between two components



