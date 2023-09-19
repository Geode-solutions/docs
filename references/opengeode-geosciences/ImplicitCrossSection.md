# class ImplicitCrossSection


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


### ImplicitCrossSection

```cpp
public void ImplicitCrossSection(ImplicitCrossSection && implicit_model)
```


### ImplicitCrossSection

```cpp
public void ImplicitCrossSection(CrossSection && cross_section)
```


### ~ImplicitCrossSection

```cpp
public void ~ImplicitCrossSection()
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
public double implicit_value(const Surface2D & surface, index_t vertex_id)
```


 Return the implicit value of the given vertex of the given surface.

### implicit_value

```cpp
public optional implicit_value(const Surface2D & surface, const Point2D & point)
```


 Return the implicit value of the point, calculated in the polygon containing the given point in the given surface, if there is any.

### implicit_value

```cpp
public double implicit_value(const Surface2D & surface, const Point2D & point, index_t polygon_id)
```


 Return the implicit value of the point, calculated in the given polygon of the given surface.

### containing_polygon

```cpp
public absl::optional<index_t> containing_polygon(const Surface2D & surface, const Point2D & point)
```


 Returns the surface polygon containing the given point, if there is any.

### horizons_stack

```cpp
public const HorizonsStack2D & horizons_stack()
```


### horizon_implicit_value

```cpp
public optional horizon_implicit_value(const Horizon2D & horizon)
```


### implicit_value_is_above_horizon

```cpp
public _Bool implicit_value_is_above_horizon(double implicit_function_value, const Horizon2D & horizon)
```


### containing_stratigraphic_unit

```cpp
public absl::optional<uuid> containing_stratigraphic_unit(implicit_attribute_type implicit_function_value)
```


### initialize_implicit_query_trees

```cpp
public void initialize_implicit_query_trees(PassKey )
```


### instantiate_implicit_attribute_on_surfaces

```cpp
public void instantiate_implicit_attribute_on_surfaces(PassKey )
```


### set_implicit_value

```cpp
public void set_implicit_value(const Surface2D & surface, index_t vertex_id, double value, PassKey )
```


### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack2D && stack, PassKey )
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon2D & horizon, implicit_attribute_type isovalue, PassKey )
```


### modifiable_horizons_stack

```cpp
public HorizonsStack2D & modifiable_horizons_stack(PassKey )
```


### do_set_implicit_value

```cpp
protected void do_set_implicit_value(const Surface2D & surface, index_t vertex_id, double value)
```




