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

# class Relationships


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


### ~Relationships

```cpp
public void ~Relationships()
```


### nb_components_with_relations

```cpp
public index_t nb_components_with_relations()
```


### component_with_relation

```cpp
public const ComponentID & component_with_relation(index_t relation_component_id)
```


### nb_relations

```cpp
public index_t nb_relations(const uuid & component_id)
```


### relations

```cpp
public RelationRange relations(const uuid & component_id)
```


### nb_boundaries

```cpp
public index_t nb_boundaries(const uuid & component_id)
```


### boundaries

```cpp
public BoundaryRange boundaries(const uuid & component_id)
```


### nb_incidences

```cpp
public index_t nb_incidences(const uuid & component_id)
```


### incidences

```cpp
public IncidenceRange incidences(const uuid & component_id)
```


### nb_internals

```cpp
public index_t nb_internals(const uuid & component_id)
```


### internals

```cpp
public InternalRange internals(const uuid & component_id)
```


### nb_embeddings

```cpp
public index_t nb_embeddings(const uuid & component_id)
```


### embeddings

```cpp
public EmbeddingRange embeddings(const uuid & component_id)
```


### nb_items

```cpp
public index_t nb_items(const uuid & component_id)
```


### items

```cpp
public ItemRange items(const uuid & component_id)
```


### nb_collections

```cpp
public index_t nb_collections(const uuid & component_id)
```


### collections

```cpp
public CollectionRange collections(const uuid & component_id)
```


### is_boundary

```cpp
public bool is_boundary(const uuid & boundary, const uuid & incidence)
```


### is_internal

```cpp
public bool is_internal(const uuid & internal, const uuid & embedding)
```


### is_item

```cpp
public bool is_item(const uuid & item, const uuid & collection)
```


### relation_attribute_manager

```cpp
public AttributeManager & relation_attribute_manager()
```


### relation_index

```cpp
public absl::optional<index_t> relation_index(const uuid & component_id1, const uuid & component_id2)
```


### relation_from_index

```cpp
public std::tuple<ComponentID, ComponentID> relation_from_index(index_t component_id)
```


### save_relationships

```cpp
public void save_relationships(string_view directory)
```


### remove_component

```cpp
public void remove_component(const uuid & component_id, RelationshipsBuilderKey )
```


 Remove a component from the set of components registered by the Relationships and all its associated relationships

**component_id** [in] Unique index of the component to remove

### add_boundary_relation

```cpp
public index_t add_boundary_relation(const ComponentID & boundary, const ComponentID & incidence, RelationshipsBuilderKey )
```


 Add a new relationship of type boundary-incidence between two components

### add_internal_relation

```cpp
public index_t add_internal_relation(const ComponentID & internal, const ComponentID & embedding, RelationshipsBuilderKey )
```


 Add a new relationship of type internal-embedding between two components

### add_item_in_collection

```cpp
public index_t add_item_in_collection(const ComponentID & item, const ComponentID & collection, RelationshipsBuilderKey )
```


 Add a new relationship of type item-collection between two components

### remove_relation

```cpp
public void remove_relation(const uuid & component_id1, const uuid & component_id2, RelationshipsBuilderKey )
```


 Remove a relationship between two components

### copy_relationships

```cpp
public void copy_relationships(const ModelCopyMapping & mapping, const Relationships & relationships, RelationshipsBuilderKey )
```


### load_relationships

```cpp
public void load_relationships(string_view directory, RelationshipsBuilderKey )
```


### Relationships

```cpp
protected void Relationships(Relationships && other)
```


### operator=

```cpp
protected Relationships & operator=(Relationships && other)
```


### copy_relationships

```cpp
public void copy_relationships(const int & mapping, const Relationships & relationships, RelationshipsBuilderKey )
```



