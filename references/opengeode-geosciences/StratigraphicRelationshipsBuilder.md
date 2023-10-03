# class StratigraphicRelationshipsBuilder

```cpp
Defined at ../include/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.h#36
```

 Class managing modification of StratigraphicRelationships



## Functions

### StratigraphicRelationshipsBuilder

```cpp
public void StratigraphicRelationshipsBuilder(StratigraphicRelationships & relationships)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#28
```

### unregister_component

```cpp
public void unregister_component(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#34
```

 Remove a component from the set of components registered by the StratigraphicRelationships, and its above/under relationships

**id** [in] Unique index of the component to remove

### remove_relation

```cpp
public void remove_relation(const uuid & id1, const uuid & id2)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#58
```

 Remove a relationship between two components

### remove_above_relation

```cpp
public void remove_above_relation(const uuid & id1, const uuid & id2)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#64
```

 Remove a relationship of type above/under between two components

### remove_unconformity_relation

```cpp
public void remove_unconformity_relation(const uuid & id1, const uuid & id2)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#70
```

 Remove an unconformity relationship between two components

### copy_stratigraphic_relationships

```cpp
public void copy_stratigraphic_relationships(const ModelCopyMapping & mapping, const StratigraphicRelationships & relationships)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#76
```

### load_stratigraphic_relationships

```cpp
public void load_stratigraphic_relationships(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#84
```

### add_above_relation

```cpp
protected index_t add_above_relation(const ComponentID & above, const ComponentID & under)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#40
```

 Adds a new relationship of type above-under between two components

### add_erosion_relation

```cpp
protected index_t add_erosion_relation(const ComponentID & erosion, const ComponentID & eroded)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#46
```

 Adds a new unconformity relationship of erosion type between two components

### add_baselap_relation

```cpp
protected index_t add_baselap_relation(const ComponentID & baselap_top, const ComponentID & baselap)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/mixin/builder/stratigraphic_relationships_builder.cpp#52
```

 Adds a new unconformity relationship of baselap type between two components



