# class StratigraphicModelInserter

```cpp
Defined at ../include/geode/implicit/insertion/model_stratigraphic_inserter.h#22
```

## Records

Impl



## Functions

### StratigraphicModelInserter

```cpp
public void StratigraphicModelInserter(const StratigraphicModel & model)
```

```cpp
Defined at /github/workspace/src/geode/implicit/insertion/model_stratigraphic_inserter.cpp#2262
```

### ~StratigraphicModelInserter

```cpp
public void ~StratigraphicModelInserter()
```

```cpp
Defined at /github/workspace/src/geode/implicit/insertion/model_stratigraphic_inserter.cpp#2268
```

### select_stratigraphic_surface_to_insert

```cpp
public void select_stratigraphic_surface_to_insert(const TriangulatedSurface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/implicit/insertion/model_stratigraphic_inserter.cpp#2270
```

### insert_and_build

```cpp
public std::tuple<BRep, ModelMappings> insert_and_build()
```

```cpp
Defined at /github/workspace/src/geode/implicit/insertion/model_stratigraphic_inserter.cpp#2276
```

 Returns the Merged BRep including, in the xyz space, the ImplicitModel surfaces and all the added surfaces, and gives the "input to output" and "output to input" mappings between Surfaces



