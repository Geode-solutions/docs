# class Relationships

```cpp
Defined at ../../include/geode/model/mixin/core/relationships.h#49
```

 This class stores all the relations between a set of components. Each relationship links two components. Relationship types are boundary and its dual incidence, and item and its dual collection. Components should be added through their uuids.



## Records

RelationRangeIterator

RelationRange

BoundaryRangeIterator

BoundaryRange

IncidenceRangeIterator

IncidenceRange

InternalRangeIterator

InternalRange

EmbeddingRangeIterator

EmbeddingRange

ItemRangeIterator

ItemRange

CollectionRangeIterator

CollectionRange



## Functions

### Relationships

```cpp
public void Relationships()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#263
```

### ~Relationships

```cpp
public void ~Relationships()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#274
```

### nb_components_with_relations

```cpp
public index_t nb_components_with_relations()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#282
```

### component_with_relation

```cpp
public const ComponentID & component_with_relation(index_t relation_component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#287
```

### nb_relations

```cpp
public index_t nb_relations(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#293
```

### relations

```cpp
public RelationRange relations(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#298
```

### nb_boundaries

```cpp
public index_t nb_boundaries(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#304
```

### boundaries

```cpp
public BoundaryRange boundaries(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#309
```

### nb_incidences

```cpp
public index_t nb_incidences(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#315
```

### incidences

```cpp
public IncidenceRange incidences(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#320
```

### nb_internals

```cpp
public index_t nb_internals(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#334
```

### internals

```cpp
public InternalRange internals(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#339
```

### nb_embeddings

```cpp
public index_t nb_embeddings(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#345
```

### embeddings

```cpp
public EmbeddingRange embeddings(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#350
```

### nb_items

```cpp
public index_t nb_items(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#364
```

### items

```cpp
public ItemRange items(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#369
```

### nb_collections

```cpp
public index_t nb_collections(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#375
```

### collections

```cpp
public CollectionRange collections(const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#380
```

### is_boundary

```cpp
public bool is_boundary(const uuid & boundary, const uuid & incidence)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#401
```

### is_internal

```cpp
public bool is_internal(const uuid & internal, const uuid & embedding)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#407
```

### is_item

```cpp
public bool is_item(const uuid & item, const uuid & collection)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#413
```

### relation_attribute_manager

```cpp
public AttributeManager & relation_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#437
```

### relation_index

```cpp
public absl::optional<index_t> relation_index(const uuid & component_id1, const uuid & component_id2)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#442
```

### relation_from_index

```cpp
public std::tuple<ComponentID, ComponentID> relation_from_index(index_t component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#448
```

### save_relationships

```cpp
public void save_relationships(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#419
```

### remove_component

```cpp
public void remove_component(const uuid & component_id, RelationshipsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#276
```

 Remove a component from the set of components registered by the Relationships and all its associated relationships

**component_id** [in] Unique index of the component to remove

### add_boundary_relation

```cpp
public index_t add_boundary_relation(const ComponentID & boundary, const ComponentID & incidence, RelationshipsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#326
```

 Add a new relationship of type boundary-incidence between two components

### add_internal_relation

```cpp
public index_t add_internal_relation(const ComponentID & internal, const ComponentID & embedding, RelationshipsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#356
```

 Add a new relationship of type internal-embedding between two components

### add_item_in_collection

```cpp
public index_t add_item_in_collection(const ComponentID & item, const ComponentID & collection, RelationshipsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#386
```

 Add a new relationship of type item-collection between two components

### remove_relation

```cpp
public void remove_relation(const uuid & component_id1, const uuid & component_id2, RelationshipsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#394
```

 Remove a relationship between two components

### copy_relationships

```cpp
public void copy_relationships(const ModelCopyMapping & mapping, const Relationships & relationships, RelationshipsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#424
```

### load_relationships

```cpp
public void load_relationships(string_view directory, RelationshipsBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#431
```

### Relationships

```cpp
protected void Relationships(Relationships && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#264
```

### operator=

```cpp
protected Relationships & operator=(Relationships && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/relationships.cpp#268
```

### copy_relationships

```cpp
public void copy_relationships(const int & mapping, const Relationships & relationships, RelationshipsBuilderKey )
```



