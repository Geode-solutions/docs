# class ImplicitStructuralModel


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


### ImplicitStructuralModel

```cpp
public void ImplicitStructuralModel(ImplicitStructuralModel && implicit_model)
```


### ImplicitStructuralModel

```cpp
public void ImplicitStructuralModel(StructuralModel && structural_model)
```


### ~ImplicitStructuralModel

```cpp
public void ~ImplicitStructuralModel()
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### implicit_value

```cpp
public implicit_attribute_type implicit_value(const Block3D & block, index_t vertex_id)
```


 Return the implicit value at the given vertex of the given block.

### implicit_value

```cpp
public absl::optional<implicit_attribute_type> implicit_value(const Block3D & block, const Point3D & point)
```


 Return the implicit value on the point, computed in the polyhedron containing the given point in the given block, if there is any.

### implicit_value

```cpp
public implicit_attribute_type implicit_value(const Block3D & block, const Point3D & point, index_t polyhedron_id)
```


 Return the implicit value on the point, computed in the given polyhedron of the given block.

### containing_polyhedron

```cpp
public absl::optional<index_t> containing_polyhedron(const Block3D & block, const Point3D & point)
```


 Returns the block polyhedron containing the given point, if there is any.

### horizons_stack

```cpp
public const HorizonsStack3D & horizons_stack()
```


### horizon_implicit_value

```cpp
public absl::optional<implicit_attribute_type> horizon_implicit_value(const Horizon3D & horizon)
```


### implicit_value_is_above_horizon

```cpp
public _Bool implicit_value_is_above_horizon(double implicit_function_value, const Horizon3D & horizon)
```


### containing_stratigraphic_unit

```cpp
public absl::optional<uuid> containing_stratigraphic_unit(implicit_attribute_type implicit_function_value)
```


### initialize_implicit_query_trees

```cpp
public void initialize_implicit_query_trees(ImplicitStructuralModelBuilderKey )
```


### instantiate_implicit_attribute_on_blocks

```cpp
public void instantiate_implicit_attribute_on_blocks(ImplicitStructuralModelBuilderKey )
```


### set_implicit_value

```cpp
public void set_implicit_value(const Block3D & block, index_t vertex_id, implicit_attribute_type value, ImplicitStructuralModelBuilderKey )
```


### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack3D && stack, ImplicitStructuralModelBuilderKey )
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon3D & horizon, implicit_attribute_type isovalue, ImplicitStructuralModelBuilderKey )
```


### modifiable_horizons_stack

```cpp
public HorizonsStack3D & modifiable_horizons_stack(ImplicitStructuralModelBuilderKey )
```


### do_set_implicit_value

```cpp
protected void do_set_implicit_value(const Block3D & block, index_t vertex_id, implicit_attribute_type value)
```




