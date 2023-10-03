# class ImplicitStructuralModelBuilder

```cpp
Defined at ../include/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.h#43
```

 Class managing modifications of a ImplicitStructuralModel



```cpp
Inherits from StructuralModelBuilder
```



## Functions

### ImplicitStructuralModelBuilder

```cpp
public void ImplicitStructuralModelBuilder(ImplicitStructuralModel & implicit_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#37
```

### copy

```cpp
public ModelCopyMapping copy(const ImplicitStructuralModel & implicit_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#44
```

### copy_implicit_information

```cpp
public void copy_implicit_information(ModelCopyMapping & mapping, const ImplicitStructuralModel & other_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#53
```

### reinitialize_implicit_query_trees

```cpp
public void reinitialize_implicit_query_trees()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#75
```

### instantiate_implicit_attribute_on_blocks

```cpp
public void instantiate_implicit_attribute_on_blocks()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#80
```

### set_implicit_value

```cpp
public void set_implicit_value(const Block3D & block, index_t vertex_id, double value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#86
```

### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack3D && stack)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#92
```

### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon3D & horizon, double isovalue)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#98
```

### horizons_stack_builder

```cpp
public HorizonsStackBuilder3D horizons_stack_builder()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_structural_model_builder.cpp#104
```

### copy_implicit_information

```cpp
public void copy_implicit_information(int & mapping, const ImplicitStructuralModel & other_model)
```



