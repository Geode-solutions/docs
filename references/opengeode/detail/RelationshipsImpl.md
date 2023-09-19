# class RelationshipsImpl


 This class stores all the relations between a set of components. Each relationship links two components.



## Members

```cpp
```cpp
protected unique_ptr graph_
```
```

```cpp
```cpp
protected UuidToIndex uuid2index_
```
```

```cpp
```cpp
protected shared_ptr ids_
```
```



## Functions

### nb_components_with_relations

```cpp
```cpp
public index_t nb_components_with_relations()
```
```


### nb_relations

```cpp
```cpp
public index_t nb_relations(const uuid & component_id)
```
```


### begin_edge

```cpp
```cpp
public Iterator begin_edge(const uuid & component_id)
```
```


### end_edge

```cpp
```cpp
public Iterator end_edge(const uuid & component_id)
```
```


### graph_component_id

```cpp
```cpp
public const ComponentID & graph_component_id(index_t graph_component)
```
```


### graph_component_id

```cpp
```cpp
public const ComponentID & graph_component_id(const EdgeVertex & graph_edge_vertex)
```
```


### remove_component

```cpp
```cpp
public void remove_component(const uuid & component_id)
```
```


### add_relation_edge

```cpp
```cpp
public index_t add_relation_edge(const ComponentID & from, const ComponentID & to)
```
```


### remove_relation

```cpp
```cpp
public void remove_relation(const uuid & component_id1, const uuid & component_id2)
```
```


### component_attribute_manager

```cpp
```cpp
public AttributeManager & component_attribute_manager()
```
```


### relation_attribute_manager

```cpp
```cpp
public AttributeManager & relation_attribute_manager()
```
```


### relation_edge_index

```cpp
```cpp
public optional relation_edge_index(const uuid & component_id1, const uuid & component_id2)
```
```


### relation_components_from_index

```cpp
```cpp
public tuple relation_components_from_index(index_t id)
```
```


### copy

```cpp
```cpp
public void copy(const RelationshipsImpl & impl, const ModelCopyMapping & mapping)
```
```


### RelationshipsImpl

```cpp
```cpp
protected void RelationshipsImpl()
```
```


### initialize_attributes

```cpp
```cpp
protected void initialize_attributes()
```
```


### vertex_id

```cpp
```cpp
protected optional vertex_id(const uuid & component_id)
```
```


### graph

```cpp
```cpp
protected const Graph & graph()
```
```


### delete_isolated_vertices

```cpp
```cpp
protected void delete_isolated_vertices()
```
```




