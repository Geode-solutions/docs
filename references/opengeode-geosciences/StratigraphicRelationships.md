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
public _Bool is_above(const uuid & above, const uuid & under)
```


### is_eroded_by

```cpp
public _Bool is_eroded_by(const uuid & eroded, const uuid & erosion)
```


### is_baselap_of

```cpp
public _Bool is_baselap_of(const uuid & baselap, const uuid & baselap_top)
```


### above

```cpp
public absl::optional<uuid> above(const uuid & element)
```


### under

```cpp
public absl::optional<uuid> under(const uuid & element)
```


### save_stratigraphic_relationships

```cpp
public void save_stratigraphic_relationships(string_view directory)
```


### remove_component

```cpp
public void remove_component(const uuid & id, PassKey )
```


 Remove a component and all its associated relationships

**id** [in] Unique index of the component to remove

### add_above_relation

```cpp
public index_t add_above_relation(const ComponentID & above, const ComponentID & under, PassKey )
```


 Adds a new relationship of type above-under between two components

### add_erosion_relation

```cpp
public index_t add_erosion_relation(const ComponentID & erosion, const ComponentID & eroded, PassKey )
```


### add_baselap_relation

```cpp
public index_t add_baselap_relation(const ComponentID & baselap_top, const ComponentID & baselap, PassKey )
```


### remove_relation

```cpp
public void remove_relation(const uuid & id1, const uuid & id2, PassKey )
```


 Remove all relations between two components

### remove_above_relation

```cpp
public void remove_above_relation(const uuid & id1, const uuid & id2, PassKey )
```


 Removes any above/under relationship between two components

### remove_unconformity_relation

```cpp
public void remove_unconformity_relation(const uuid & id1, const uuid & id2, PassKey )
```


 Removes any unconformity relationship between two components

### copy_stratigraphic_relationships

```cpp
public void copy_stratigraphic_relationships(const ModelCopyMapping & mapping, const StratigraphicRelationships & relationships, PassKey )
```


### load_stratigraphic_relationships

```cpp
public void load_stratigraphic_relationships(string_view directory, PassKey )
```


### StratigraphicRelationships

```cpp
protected void StratigraphicRelationships(StratigraphicRelationships && )
```


### operator=

```cpp
protected StratigraphicRelationships & operator=(StratigraphicRelationships && other)
```




