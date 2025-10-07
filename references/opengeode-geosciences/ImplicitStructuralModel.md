<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class ImplicitStructuralModel


 An Implicit Model is a Structural model where each block has a specific attribute to store the implicit value on its vertices. Moreover, an ImplicitStructuralModel is associated to a HorizonsStack. If one or several horizons of the HorizonsStack is explicited in the model, they have the same uuid as in the HorizonsStack. Either way, each horizon of the HorizonsStack is associated to a specific value of the Implicit attribute.



```cpp
Inherits from StructuralModel
```



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


### ImplicitStructuralModel

```cpp
public void ImplicitStructuralModel(const ImplicitStructuralModel & initial_model, BRep && brep, const ModelGenericMapping & initial_to_brep_mappings)
```


### ~ImplicitStructuralModel

```cpp
public void ~ImplicitStructuralModel()
```


### clone

```cpp
public ImplicitStructuralModel clone()
```


### component

```cpp
public const Component3D & component(const uuid & id)
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
```


### implicit_value

```cpp
public implicit_attribute_type implicit_value(const Block3D & block, index_t vertex_id)
```


 Return the implicit value at the given vertex of the given block.

### implicit_value

```cpp
public std::optional<implicit_attribute_type> implicit_value(const Block3D & block, const Point3D & point)
```


 Return the implicit value on the point, computed in the polyhedron containing the given point in the given block, if there is any.

### implicit_value

```cpp
public implicit_attribute_type implicit_value(const Block3D & block, const Point3D & point, index_t polyhedron_id)
```


 Return the implicit value on the point, computed in the given polyhedron of the given block.

### containing_polyhedron

```cpp
public std::optional<index_t> containing_polyhedron(const Block3D & block, const Point3D & point)
```


 Returns the block polyhedron containing the given point, if there is any.

### horizons_stack

```cpp
public const HorizonsStack3D & horizons_stack()
```


### horizon_implicit_value

```cpp
public std::optional<implicit_attribute_type> horizon_implicit_value(const Horizon3D & horizon)
```


### implicit_value_is_above_horizon

```cpp
public bool implicit_value_is_above_horizon(double implicit_function_value, const Horizon3D & horizon)
```


### containing_stratigraphic_unit

```cpp
public std::optional<uuid> containing_stratigraphic_unit(implicit_attribute_type implicit_function_value)
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




