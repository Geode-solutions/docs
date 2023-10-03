# class StratigraphicRelationships

```cpp
Defined at ../include/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.h#48
```

 This class stores the relations between a set of geological components. Each relationship links two components, one being above the other in the stratigraphy. Components should be added through their uuids.



## Functions

### StratigraphicRelationships

```cpp
public void StratigraphicRelationships()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#348
```

### ~StratigraphicRelationships

```cpp
public void ~StratigraphicRelationships()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#354
```

### is_above

```cpp
public bool is_above(const uuid & above, const uuid & under)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#369
```

### is_eroded_by

```cpp
public bool is_eroded_by(const uuid & eroded, const uuid & erosion)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#375
```

### is_baselap_of

```cpp
public bool is_baselap_of(const uuid & baselap, const uuid & baselap_top)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#381
```

### above

```cpp
public absl::optional<uuid> above(const uuid & element)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#387
```

### under

```cpp
public absl::optional<uuid> under(const uuid & element)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#393
```

### save_stratigraphic_relationships

```cpp
public void save_stratigraphic_relationships(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#441
```

### remove_component

```cpp
public void remove_component(const uuid & id, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#363
```

 Remove a component and all its associated relationships

**id** [in] Unique index of the component to remove

### add_above_relation

```cpp
public index_t add_above_relation(const ComponentID & above, const ComponentID & under, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#399
```

 Adds a new relationship of type above-under between two components

### add_erosion_relation

```cpp
public index_t add_erosion_relation(const ComponentID & erosion, const ComponentID & eroded, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#407
```

### add_baselap_relation

```cpp
public index_t add_baselap_relation(const ComponentID & baselap_top, const ComponentID & baselap, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#415
```

### remove_relation

```cpp
public void remove_relation(const uuid & id1, const uuid & id2, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#423
```

 Remove all relations between two components

### remove_above_relation

```cpp
public void remove_above_relation(const uuid & id1, const uuid & id2, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#429
```

 Removes any above/under relationship between two components

### remove_unconformity_relation

```cpp
public void remove_unconformity_relation(const uuid & id1, const uuid & id2, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#435
```

 Removes any unconformity relationship between two components

### copy_stratigraphic_relationships

```cpp
public void copy_stratigraphic_relationships(const ModelCopyMapping & mapping, const StratigraphicRelationships & relationships, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#447
```

### load_stratigraphic_relationships

```cpp
public void load_stratigraphic_relationships(string_view directory, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#455
```

### StratigraphicRelationships

```cpp
protected void StratigraphicRelationships(StratigraphicRelationships && )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#349
```

### operator=

```cpp
protected StratigraphicRelationships & operator=(StratigraphicRelationships && other)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/core/stratigraphic_relationships.cpp#356
```



