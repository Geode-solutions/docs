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

# class RelationshipsImpl


 This class stores all the relations between a set of components. Each relationship links two components.



## Members

```cpp
protected unique_ptr graph_

```

```cpp
protected UuidToIndex uuid2index_

```

```cpp
protected shared_ptr ids_

```



## Functions

### nb_components_with_relations

```cpp
public index_t nb_components_with_relations()
```


### nb_relations

```cpp
public index_t nb_relations(const uuid & component_id)
```


### begin_edge

```cpp
public Iterator begin_edge(const uuid & component_id)
```


### end_edge

```cpp
public Iterator end_edge(const uuid & component_id)
```


### graph_component_id

```cpp
public const ComponentID & graph_component_id(index_t graph_component)
```


### graph_component_id

```cpp
public const ComponentID & graph_component_id(const EdgeVertex & graph_edge_vertex)
```


### remove_component

```cpp
public void remove_component(const uuid & component_id)
```


### add_relation_edge

```cpp
public index_t add_relation_edge(const ComponentID & from, const ComponentID & to)
```


### remove_relation

```cpp
public void remove_relation(const uuid & component_id1, const uuid & component_id2)
```


### component_attribute_manager

```cpp
public AttributeManager & component_attribute_manager()
```


### relation_attribute_manager

```cpp
public AttributeManager & relation_attribute_manager()
```


### relation_edge_index

```cpp
public optional relation_edge_index(const uuid & component_id1, const uuid & component_id2)
```


### relation_components_from_index

```cpp
public tuple relation_components_from_index(index_t id)
```


### copy

```cpp
public void copy(const RelationshipsImpl & impl, const ModelCopyMapping & mapping)
```


### RelationshipsImpl

```cpp
protected void RelationshipsImpl()
```


### initialize_attributes

```cpp
protected void initialize_attributes()
```


### vertex_id

```cpp
protected optional vertex_id(const uuid & component_id)
```


### graph

```cpp
protected const Graph & graph()
```


### delete_isolated_vertices

```cpp
protected void delete_isolated_vertices()
```




