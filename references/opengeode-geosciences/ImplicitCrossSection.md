# class ImplicitCrossSection

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/implicit_cross_section.h#47
```

 An ImplicitCrossSection is a CrossSection where each surface has a specific attribute to store the stratigraphic coordinates of its vertices.



```cpp
Inherits from CrossSection
```



## Records

Impl



## Functions

### ImplicitCrossSection

```cpp
public void ImplicitCrossSection()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#332
```

### ImplicitCrossSection

```cpp
public void ImplicitCrossSection(ImplicitCrossSection && implicit_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#337
```

### ImplicitCrossSection

```cpp
public void ImplicitCrossSection(CrossSection && cross_section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#345
```

### ~ImplicitCrossSection

```cpp
public void ~ImplicitCrossSection()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#351
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/implicit_cross_section.h#61
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/implicit_cross_section.h#66
```

### implicit_value

```cpp
public double implicit_value(const Surface2D & surface, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#353
```

 Return the implicit value of the given vertex of the given surface.

### implicit_value

```cpp
public optional implicit_value(const Surface2D & surface, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#359
```

 Return the implicit value of the point, calculated in the polygon containing the given point in the given surface, if there is any.

### implicit_value

```cpp
public double implicit_value(const Surface2D & surface, const Point2D & point, index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#365
```

 Return the implicit value of the point, calculated in the given polygon of the given surface.

### containing_polygon

```cpp
public absl::optional<index_t> containing_polygon(const Surface2D & surface, const Point2D & point)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#372
```

 Returns the surface polygon containing the given point, if there is any.

### horizons_stack

```cpp
public const HorizonsStack2D & horizons_stack()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#378
```

### horizon_implicit_value

```cpp
public optional horizon_implicit_value(const Horizon2D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#383
```

### implicit_value_is_above_horizon

```cpp
public bool implicit_value_is_above_horizon(double implicit_function_value, const Horizon2D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#389
```

### containing_stratigraphic_unit

```cpp
public absl::optional<uuid> containing_stratigraphic_unit(implicit_attribute_type implicit_function_value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#396
```

### initialize_implicit_query_trees

```cpp
public void initialize_implicit_query_trees(PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#402
```

### instantiate_implicit_attribute_on_surfaces

```cpp
public void instantiate_implicit_attribute_on_surfaces(PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#408
```

### set_implicit_value

```cpp
public void set_implicit_value(const Surface2D & surface, index_t vertex_id, double value, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#414
```

### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack2D && stack, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#422
```

### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon2D & horizon, implicit_attribute_type isovalue, PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#428
```

### modifiable_horizons_stack

```cpp
public HorizonsStack2D & modifiable_horizons_stack(PassKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#436
```

### do_set_implicit_value

```cpp
protected void do_set_implicit_value(const Surface2D & surface, index_t vertex_id, double value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_cross_section.cpp#442
```



