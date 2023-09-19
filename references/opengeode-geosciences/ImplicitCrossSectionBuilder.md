# class ImplicitCrossSectionBuilder


 Class managing modifications of a ImplicitCrossSection



```cpp
Inherits from CrossSectionBuilder
```



## Functions

### ImplicitCrossSectionBuilder

```cpp
public void ImplicitCrossSectionBuilder(ImplicitCrossSection & implicit_section)
```


### copy

```cpp
public ModelMapping copy(const ImplicitCrossSection & implicit_model)
```


### copy_implicit_information

```cpp
public void copy_implicit_information(ModelCopyMapping & mapping, const ImplicitCrossSection & other_model)
```


### reinitialize_implicit_query_trees

```cpp
public void reinitialize_implicit_query_trees()
```


### instantiate_implicit_attribute_on_surfaces

```cpp
public void instantiate_implicit_attribute_on_surfaces()
```


### set_implicit_value

```cpp
public void set_implicit_value(const Surface2D & surface, index_t vertex_id, double value)
```


### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack2D && stack)
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon2D & horizon, double isovalue)
```


### horizons_stack_builder

```cpp
public HorizonsStackBuilder horizons_stack_builder()
```


### copy_implicit_information

```cpp
public void copy_implicit_information(int & mapping, const ImplicitCrossSection & other_model)
```



