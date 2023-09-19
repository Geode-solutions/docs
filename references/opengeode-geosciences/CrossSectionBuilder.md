# class CrossSectionBuilder


 Class managing modifications of a CrossSection



```cpp
Inherits from SectionBuilder, FaultsBuilder2D, HorizonsBuilder2D, FaultBlocksBuilder2D, StratigraphicUnitsBuilder2D
```



## Functions

### CrossSectionBuilder

```cpp
public void CrossSectionBuilder(const CrossSectionBuilder & )
```


### operator=

```cpp
public CrossSectionBuilder & operator=(const CrossSectionBuilder & )
```


### CrossSectionBuilder

```cpp
public void CrossSectionBuilder(CrossSectionBuilder && )
```


### operator=

```cpp
public CrossSectionBuilder & operator=(CrossSectionBuilder && )
```


### CrossSectionBuilder

```cpp
public void CrossSectionBuilder(CrossSection & cross_section)
```


### copy

```cpp
public ModelMapping copy(const CrossSection & cross_section)
```


### copy_geological_components

```cpp
public void copy_geological_components(ModelCopyMapping & mapping, const CrossSection & cross_section)
```


### add_fault

```cpp
public const uuid & add_fault()
```


### add_fault

```cpp
public const uuid & add_fault(typename Fault2D::FAULT_TYPE type)
```


### add_fault

```cpp
public void add_fault(uuid fault_id)
```


### add_fault

```cpp
public void add_fault(uuid fault_id, typename Fault2D::FAULT_TYPE type)
```


### add_line_in_fault

```cpp
public index_t add_line_in_fault(const Line2D & line, const Fault2D & fault)
```


### remove_fault

```cpp
public void remove_fault(const Fault2D & fault)
```


### add_horizon

```cpp
public const uuid & add_horizon()
```


### add_horizon

```cpp
public const uuid & add_horizon(typename Horizon2D::HORIZON_TYPE type)
```


### add_horizon

```cpp
public void add_horizon(uuid horizon_id)
```


### add_horizon

```cpp
public void add_horizon(uuid horizon_id, typename Horizon2D::HORIZON_TYPE type)
```


### add_line_in_horizon

```cpp
public index_t add_line_in_horizon(const Line2D & line, const Horizon2D & horizon)
```


### remove_horizon

```cpp
public void remove_horizon(const Horizon2D & horizon)
```


### add_fault_block

```cpp
public const uuid & add_fault_block()
```


### add_fault_block

```cpp
public void add_fault_block(uuid fault_block_id)
```


### add_surface_in_fault_block

```cpp
public index_t add_surface_in_fault_block(const Surface2D & surface, const FaultBlock2D & fault_block)
```


### remove_fault_block

```cpp
public void remove_fault_block(const FaultBlock2D & fault_block)
```


### add_stratigraphic_unit

```cpp
public const uuid & add_stratigraphic_unit()
```


### add_stratigraphic_unit

```cpp
public void add_stratigraphic_unit(uuid stratigraphic_unit_id)
```


### add_surface_in_stratigraphic_unit

```cpp
public index_t add_surface_in_stratigraphic_unit(const Surface2D & surface, const StratigraphicUnit2D & stratigraphic_unit)
```


### remove_stratigraphic_unit

```cpp
public void remove_stratigraphic_unit(const StratigraphicUnit2D & stratigraphic_unit)
```


### copy_geological_components

```cpp
public void copy_geological_components(int & mapping, const CrossSection & cross_section)
```

### add_fault

```cpp
public const uuid & add_fault(int type)
```

### add_fault

```cpp
public void add_fault(uuid fault_id, int type)
```

### add_horizon

```cpp
public const uuid & add_horizon(int type)
```

### add_horizon

```cpp
public void add_horizon(uuid horizon_id, int type)
```



