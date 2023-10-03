# class ImplicitCrossSectionBuilder

```cpp
Defined at ../include/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.h#43
```

 Class managing modifications of a ImplicitCrossSection



```cpp
Inherits from CrossSectionBuilder
```



## Functions

### ImplicitCrossSectionBuilder

```cpp
public void ImplicitCrossSectionBuilder(ImplicitCrossSection & implicit_section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#35
```

### copy

```cpp
public ModelMapping copy(const ImplicitCrossSection & implicit_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#42
```

### copy_implicit_information

```cpp
public void copy_implicit_information(ModelCopyMapping & mapping, const ImplicitCrossSection & other_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#51
```

### reinitialize_implicit_query_trees

```cpp
public void reinitialize_implicit_query_trees()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#72
```

### instantiate_implicit_attribute_on_surfaces

```cpp
public void instantiate_implicit_attribute_on_surfaces()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#77
```

### set_implicit_value

```cpp
public void set_implicit_value(const Surface2D & surface, index_t vertex_id, double value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#83
```

### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack2D && stack)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#89
```

### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon2D & horizon, double isovalue)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#95
```

### horizons_stack_builder

```cpp
public HorizonsStackBuilder horizons_stack_builder()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/builder/implicit_cross_section_builder.cpp#101
```

### copy_implicit_information

```cpp
public void copy_implicit_information(int & mapping, const ImplicitCrossSection & other_model)
```



