# class StructuralModelBuilder

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/structural_model_builder.h#51
```

 Class managing modifications of a StructuralModel



```cpp
Inherits from BRepBuilder, FaultsBuilder3D, HorizonsBuilder3D, FaultBlocksBuilder3D, StratigraphicUnitsBuilder3D
```



## Functions

### StructuralModelBuilder

```cpp
public void StructuralModelBuilder(const StructuralModelBuilder & )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/structural_model_builder.h#58
```

### operator=

```cpp
public StructuralModelBuilder & operator=(const StructuralModelBuilder & )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/structural_model_builder.h#58
```

### StructuralModelBuilder

```cpp
public void StructuralModelBuilder(StructuralModelBuilder && )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/structural_model_builder.h#58
```

### operator=

```cpp
public StructuralModelBuilder & operator=(StructuralModelBuilder && )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/builder/structural_model_builder.h#58
```

### StructuralModelBuilder

```cpp
public void StructuralModelBuilder(StructuralModel & structural_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#36
```

### copy

```cpp
public ModelMapping copy(const StructuralModel & structural_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#47
```

### copy_geological_components

```cpp
public void copy_geological_components(ModelCopyMapping & mapping, const StructuralModel & structural_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#57
```

### add_fault

```cpp
public const uuid & add_fault()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#70
```

### add_fault

```cpp
public const uuid & add_fault(typename Fault3D::FAULT_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#76
```

### add_fault

```cpp
public void add_fault(uuid fault_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#83
```

### add_fault

```cpp
public void add_fault(uuid fault_id, typename Fault3D::FAULT_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#88
```

### add_surface_in_fault

```cpp
public index_t add_surface_in_fault(const Surface3D & surface, const Fault3D & fault)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#94
```

### remove_fault

```cpp
public void remove_fault(const Fault3D & fault)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#101
```

### add_horizon

```cpp
public const uuid & add_horizon()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#107
```

### add_horizon

```cpp
public const uuid & add_horizon(typename Horizon3D::HORIZON_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#113
```

### add_horizon

```cpp
public void add_horizon(uuid horizon_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#120
```

### add_horizon

```cpp
public void add_horizon(uuid horizon_id, typename Horizon3D::HORIZON_TYPE type)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#125
```

### add_surface_in_horizon

```cpp
public index_t add_surface_in_horizon(const Surface3D & surface, const Horizon3D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#131
```

### remove_horizon

```cpp
public void remove_horizon(const Horizon3D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#138
```

### add_fault_block

```cpp
public const uuid & add_fault_block()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#144
```

### add_fault_block

```cpp
public void add_fault_block(uuid fault_block_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#150
```

### add_block_in_fault_block

```cpp
public index_t add_block_in_fault_block(const Block3D & block, const FaultBlock3D & fault_block)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#155
```

### remove_fault_block

```cpp
public void remove_fault_block(const FaultBlock3D & fault_block)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#162
```

### add_stratigraphic_unit

```cpp
public const uuid & add_stratigraphic_unit()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#169
```

### add_stratigraphic_unit

```cpp
public void add_stratigraphic_unit(uuid stratigraphic_unit_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#175
```

### add_block_in_stratigraphic_unit

```cpp
public index_t add_block_in_stratigraphic_unit(const Block3D & block, const StratigraphicUnit3D & stratigraphic_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#180
```

### remove_stratigraphic_unit

```cpp
public void remove_stratigraphic_unit(const StratigraphicUnit3D & stratigraphic_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/builder/structural_model_builder.cpp#187
```

### copy_geological_components

```cpp
public void copy_geological_components(int & mapping, const StructuralModel & structural_model)
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



