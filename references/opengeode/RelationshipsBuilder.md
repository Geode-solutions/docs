# class RelationshipsBuilder

```cpp
Defined at ../../include/geode/model/mixin/builder/relationships_builder.h#34
```

 Class managing modification of Relationships



## Functions

### RelationshipsBuilder

```cpp
public void RelationshipsBuilder(Relationships & relationships)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/relationships_builder.cpp#28
```

### unregister_component

```cpp
public void unregister_component(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/relationships_builder.cpp#33
```

 Remove a component from the set of components registered by the Relationships and all its associated relationships

**id** [in] Unique index of the component to remove

### add_boundary_relation

```cpp
public index_t add_boundary_relation(const ComponentID & boundary, const ComponentID & incidence)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/relationships_builder.cpp#38
```

 Add a new relationship of type boundary-incidence between two components

### add_internal_relation

```cpp
public index_t add_internal_relation(const ComponentID & internal, const ComponentID & embedding)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/relationships_builder.cpp#44
```

 Add a new relationship of type internal-embedding between two components

### add_item_in_collection

```cpp
public index_t add_item_in_collection(const ComponentID & item, const ComponentID & collection)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/relationships_builder.cpp#50
```

 Add a new relationship of type item-collection between two components

### remove_relation

```cpp
public void remove_relation(const uuid & component_id1, const uuid & component_id2)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/relationships_builder.cpp#56
```

 Remove a relationship between two components

### copy_relationships

```cpp
public void copy_relationships(const ModelCopyMapping & mapping, const Relationships & relationships)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/relationships_builder.cpp#63
```

### load_relationships

```cpp
public void load_relationships(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/relationships_builder.cpp#69
```



