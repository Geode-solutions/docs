# class ImplicitStructuralModel

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/implicit_structural_model.h#46
```

 An Implicit Model is a Structural model where each block has a specific attribute to store the implicit value on its vertices.



```cpp
Inherits from StructuralModel
```



## Records

Impl



## Functions

### ImplicitStructuralModel

```cpp
public void ImplicitStructuralModel()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#324
```

### ImplicitStructuralModel

```cpp
public void ImplicitStructuralModel(ImplicitStructuralModel && implicit_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#329
```

### ImplicitStructuralModel

```cpp
public void ImplicitStructuralModel(StructuralModel && structural_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#337
```

### ~ImplicitStructuralModel

```cpp
public void ~ImplicitStructuralModel()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#344
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/implicit_structural_model.h#61
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/implicit_structural_model.h#66
```

### implicit_value

```cpp
public implicit_attribute_type implicit_value(const Block3D & block, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#346
```

 Return the implicit value at the given vertex of the given block.

### implicit_value

```cpp
public absl::optional<implicit_attribute_type> implicit_value(const Block3D & block, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#352
```

 Return the implicit value on the point, computed in the polyhedron containing the given point in the given block, if there is any.

### implicit_value

```cpp
public implicit_attribute_type implicit_value(const Block3D & block, const Point3D & point, index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#358
```

 Return the implicit value on the point, computed in the given polyhedron of the given block.

### containing_polyhedron

```cpp
public absl::optional<index_t> containing_polyhedron(const Block3D & block, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#364
```

 Returns the block polyhedron containing the given point, if there is any.

### horizons_stack

```cpp
public const HorizonsStack3D & horizons_stack()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#370
```

### horizon_implicit_value

```cpp
public absl::optional<implicit_attribute_type> horizon_implicit_value(const Horizon3D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#375
```

### implicit_value_is_above_horizon

```cpp
public bool implicit_value_is_above_horizon(double implicit_function_value, const Horizon3D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#381
```

### containing_stratigraphic_unit

```cpp
public absl::optional<uuid> containing_stratigraphic_unit(implicit_attribute_type implicit_function_value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#388
```

### initialize_implicit_query_trees

```cpp
public void initialize_implicit_query_trees(ImplicitStructuralModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#395
```

### instantiate_implicit_attribute_on_blocks

```cpp
public void instantiate_implicit_attribute_on_blocks(ImplicitStructuralModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#401
```

### set_implicit_value

```cpp
public void set_implicit_value(const Block3D & block, index_t vertex_id, implicit_attribute_type value, ImplicitStructuralModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#407
```

### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack3D && stack, ImplicitStructuralModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#415
```

### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon3D & horizon, implicit_attribute_type isovalue, ImplicitStructuralModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#421
```

### modifiable_horizons_stack

```cpp
public HorizonsStack3D & modifiable_horizons_stack(ImplicitStructuralModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#429
```

### do_set_implicit_value

```cpp
protected void do_set_implicit_value(const Block3D & block, index_t vertex_id, implicit_attribute_type value)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/implicit_structural_model.cpp#435
```



