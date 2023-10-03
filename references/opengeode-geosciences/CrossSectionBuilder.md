# class CrossSectionBuilder

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/cross_section_builder.h#51
```

 Class managing modifications of a CrossSection



```cpp
Inherits from SectionBuilder, FaultsBuilder2D, HorizonsBuilder2D, FaultBlocksBuilder2D, StratigraphicUnitsBuilder2D
```



## Functions

### CrossSectionBuilder

```cpp
public void CrossSectionBuilder(const CrossSectionBuilder & )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/cross_section_builder.h#58
```

### operator=

```cpp
public CrossSectionBuilder & operator=(const CrossSectionBuilder & )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/cross_section_builder.h#58
```

### CrossSectionBuilder

```cpp
public void CrossSectionBuilder(CrossSectionBuilder && )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/cross_section_builder.h#58
```

### operator=

```cpp
public CrossSectionBuilder & operator=(CrossSectionBuilder && )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/cross_section_builder.h#58
```

### CrossSectionBuilder

```cpp
public void CrossSectionBuilder(CrossSection & cross_section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#36
```

### copy

```cpp
public ModelMapping copy(const CrossSection & cross_section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#46
```

### copy_geological_components

```cpp
public void copy_geological_components(ModelCopyMapping & mapping, const CrossSection & cross_section)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#55
```

### add_fault

```cpp
public const uuid & add_fault()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#68
```

### add_fault

```cpp
public const uuid & add_fault(typename Fault2D::FAULT_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#74
```

### add_fault

```cpp
public void add_fault(uuid fault_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#81
```

### add_fault

```cpp
public void add_fault(uuid fault_id, typename Fault2D::FAULT_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#86
```

### add_line_in_fault

```cpp
public index_t add_line_in_fault(const Line2D & line, const Fault2D & fault)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#92
```

### remove_fault

```cpp
public void remove_fault(const Fault2D & fault)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#99
```

### add_horizon

```cpp
public const uuid & add_horizon()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#105
```

### add_horizon

```cpp
public const uuid & add_horizon(typename Horizon2D::HORIZON_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#111
```

### add_horizon

```cpp
public void add_horizon(uuid horizon_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#118
```

### add_horizon

```cpp
public void add_horizon(uuid horizon_id, typename Horizon2D::HORIZON_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#123
```

### add_line_in_horizon

```cpp
public index_t add_line_in_horizon(const Line2D & line, const Horizon2D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#129
```

### remove_horizon

```cpp
public void remove_horizon(const Horizon2D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#136
```

### add_fault_block

```cpp
public const uuid & add_fault_block()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#142
```

### add_fault_block

```cpp
public void add_fault_block(uuid fault_block_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#148
```

### add_surface_in_fault_block

```cpp
public index_t add_surface_in_fault_block(const Surface2D & surface, const FaultBlock2D & fault_block)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#153
```

### remove_fault_block

```cpp
public void remove_fault_block(const FaultBlock2D & fault_block)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#160
```

### add_stratigraphic_unit

```cpp
public const uuid & add_stratigraphic_unit()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#167
```

### add_stratigraphic_unit

```cpp
public void add_stratigraphic_unit(uuid stratigraphic_unit_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#173
```

### add_surface_in_stratigraphic_unit

```cpp
public index_t add_surface_in_stratigraphic_unit(const Surface2D & surface, const StratigraphicUnit2D & stratigraphic_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#179
```

### remove_stratigraphic_unit

```cpp
public void remove_stratigraphic_unit(const StratigraphicUnit2D & stratigraphic_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/cross_section_builder.cpp#187
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



