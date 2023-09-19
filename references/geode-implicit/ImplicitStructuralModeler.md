# class ImplicitStructuralModeler


## Records

Impl



## Functions

### ImplicitStructuralModeler

```cpp
public void ImplicitStructuralModeler(BoundingBox3D bbox)
```


### ~ImplicitStructuralModeler

```cpp
public void ~ImplicitStructuralModeler()
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### horizons_stack

```cpp
public const HorizonsStack3D & horizons_stack()
```


### horizons_stack_builder

```cpp
public HorizonsStackBuilder3D horizons_stack_builder()
```


### set_stratigraphic_unit_thickness

```cpp
public void set_stratigraphic_unit_thickness(const StratigraphicUnit3D & strati_unit, double thickness)
```


### add_horizon_data_pointset

```cpp
public void add_horizon_data_pointset(const Horizon3D & horizon, const PointSet3D & pointset, double weight)
```


### build

```cpp
public ImplicitStructuralModel build()
```




