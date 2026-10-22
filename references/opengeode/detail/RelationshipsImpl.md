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

### RelationshipsImpl

```cpp
public void RelationshipsImpl(BITSERY )
```


### nb_components_with_relations

```cpp
public index_t nb_components_with_relations()
```


### nb_relations

```cpp
public index_t nb_relations(const uuid & component_id)
```


### edges_around_component

```cpp
public absl::Span<const EdgeVertex> edges_around_component(const uuid & component_id)
```


 Return the graph edges around the given component (empty if the component has no relation)

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


### remove_components

```cpp
public void remove_components(absl::Span<const uuid> component_ids)
```


 Remove several components and all their relations at once

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
public std::optional<index_t> relation_edge_index(const uuid & component_id1, const uuid & component_id2)
```


### relation_components_from_index

```cpp
public std::tuple<ComponentID, ComponentID> relation_components_from_index(index_t id)
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
protected std::optional<index_t> vertex_id(const uuid & component_id)
```


### graph

```cpp
protected const Graph & graph()
```


### repair_after_load

```cpp
protected void repair_after_load()
```


 Rebuild the uuid to graph vertex map from the ids stored on the graph vertices, after loading a file. Vertices without a valid or with a duplicated id are removed with their relations, as well as isolated vertices.

### do_add_relation_edge

```cpp
protected index_t do_add_relation_edge(const ComponentID & from, const ComponentID & to)
```


 Create a relation edge without checking if it already exists



