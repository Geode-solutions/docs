# class RelationshipsImpl

```cpp
Defined at ../../include/geode/model/mixin/core/detail/relationships_impl.h#43
```

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

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#49
```

### nb_relations

```cpp
public index_t nb_relations(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#54
```

### begin_edge

```cpp
public Iterator begin_edge(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#65
```

### end_edge

```cpp
public Iterator end_edge(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#75
```

### graph_component_id

```cpp
public const ComponentID & graph_component_id(index_t graph_component)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#85
```

### graph_component_id

```cpp
public const ComponentID & graph_component_id(const EdgeVertex & graph_edge_vertex)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#91
```

### remove_component

```cpp
public void remove_component(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#98
```

### add_relation_edge

```cpp
public index_t add_relation_edge(const ComponentID & from, const ComponentID & to)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#123
```

### remove_relation

```cpp
public void remove_relation(const uuid & component_id1, const uuid & component_id2)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#139
```

### component_attribute_manager

```cpp
public AttributeManager & component_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#151
```

### relation_attribute_manager

```cpp
public AttributeManager & relation_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#162
```

### relation_edge_index

```cpp
public optional relation_edge_index(const uuid & component_id1, const uuid & component_id2)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#167
```

### relation_components_from_index

```cpp
public tuple relation_components_from_index(index_t id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#183
```

### copy

```cpp
public void copy(const RelationshipsImpl & impl, const ModelCopyMapping & mapping)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#193
```

### RelationshipsImpl

```cpp
protected void RelationshipsImpl()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#44
```

### initialize_attributes

```cpp
protected void initialize_attributes()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#234
```

### vertex_id

```cpp
protected optional vertex_id(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#242
```

### graph

```cpp
protected const Graph & graph()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#248
```

### delete_isolated_vertices

```cpp
protected void delete_isolated_vertices()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/detail/relationships_impl.cpp#272
```



