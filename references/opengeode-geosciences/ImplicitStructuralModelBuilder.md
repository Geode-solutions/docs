# class ImplicitStructuralModelBuilder


 Class managing modifications of a ImplicitStructuralModel



```cpp
Inherits from StructuralModelBuilder
```



## Functions

### ImplicitStructuralModelBuilder

```cpp
public void ImplicitStructuralModelBuilder(ImplicitStructuralModel & implicit_model)
```


### copy

```cpp
public ModelCopyMapping copy(const ImplicitStructuralModel & implicit_model)
```


### copy_implicit_information

```cpp
public void copy_implicit_information(ModelCopyMapping & mapping, const ImplicitStructuralModel & other_model)
```


### reinitialize_implicit_query_trees

```cpp
public void reinitialize_implicit_query_trees()
```


### instantiate_implicit_attribute_on_blocks

```cpp
public void instantiate_implicit_attribute_on_blocks()
```


### set_implicit_value

```cpp
public void set_implicit_value(const Block3D & block, index_t vertex_id, double value)
```


### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack3D && stack)
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon3D & horizon, double isovalue)
```


### horizons_stack_builder

```cpp
public HorizonsStackBuilder3D horizons_stack_builder()
```


### copy_implicit_information

```cpp
public void copy_implicit_information(int & mapping, const ImplicitStructuralModel & other_model)
```



