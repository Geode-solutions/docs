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

# class StratigraphicRelationships


 This class stores the relations between a set of geological components. Each relationship links two components, one being above the other in the stratigraphy. Components should be added through their uuids.



## Functions

### StratigraphicRelationships

```cpp
public void StratigraphicRelationships()
```


### ~StratigraphicRelationships

```cpp
public void ~StratigraphicRelationships()
```


### is_above

```cpp
public bool is_above(const uuid & above, const uuid & under)
```


### is_directly_above

```cpp
public bool is_directly_above(const uuid & above, const uuid & under)
```


### above

```cpp
public std::optional<uuid> above(const uuid & element)
```


### under

```cpp
public std::optional<uuid> under(const uuid & element)
```


### save_stratigraphic_relationships

```cpp
public void save_stratigraphic_relationships(basic_string_view directory)
```


### remove_component

```cpp
public void remove_component(const uuid & id, StratigraphicRelationshipsBuilderKey )
```


 Remove a component and all its associated relationships

**id** [in] Unique index of the component to remove

### add_above_relation

```cpp
public index_t add_above_relation(const ComponentID & above, const ComponentID & under, StratigraphicRelationshipsBuilderKey )
```


 Adds a new relationship of type above-under between two components

### remove_relation

```cpp
public void remove_relation(const uuid & id1, const uuid & id2, StratigraphicRelationshipsBuilderKey )
```


 Remove all relations between two components

### remove_above_relation

```cpp
public void remove_above_relation(const uuid & id1, const uuid & id2, StratigraphicRelationshipsBuilderKey )
```


 Removes any above/under relationship between two components

### copy_stratigraphic_relationships

```cpp
public void copy_stratigraphic_relationships(const ModelCopyMapping & mapping, const StratigraphicRelationships & relationships, StratigraphicRelationshipsBuilderKey )
```


### load_stratigraphic_relationships

```cpp
public void load_stratigraphic_relationships(basic_string_view directory, StratigraphicRelationshipsBuilderKey )
```


### StratigraphicRelationships

```cpp
protected void StratigraphicRelationships(StratigraphicRelationships && other)
```


### operator=

```cpp
protected StratigraphicRelationships & operator=(StratigraphicRelationships && other)
```




