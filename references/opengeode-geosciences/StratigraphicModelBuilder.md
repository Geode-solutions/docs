# class StratigraphicModelBuilder

```cpp
Defined at ../include/geode/geosciences/implicit/representation/builder/stratigraphic_model_builder.h#43
```

 Class managing modifications of a StratigraphicModel



```cpp
Inherits from ImplicitStructuralModelBuilder
```



## Functions

### StratigraphicModelBuilder

```cpp
public void StratigraphicModelBuilder(StratigraphicModel & stratigraphic_model_)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_model_builder.cpp#35
```

### copy

```cpp
public int copy(const StratigraphicModel & implicit_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_model_builder.cpp#42
```

### reinitialize_stratigraphic_query_trees

```cpp
public void reinitialize_stratigraphic_query_trees()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_model_builder.cpp#50
```

### instantiate_stratigraphic_attribute_on_blocks

```cpp
public void instantiate_stratigraphic_attribute_on_blocks()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_model_builder.cpp#56
```

### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(const Block3D & block, index_t vertex_id, Point2D value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_model_builder.cpp#63
```

### set_stratigraphic_coordinates

```cpp
public void set_stratigraphic_coordinates(const Block3D & block, index_t vertex_id, const StratigraphicPoint3D & value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/stratigraphic_model_builder.cpp#70
```



