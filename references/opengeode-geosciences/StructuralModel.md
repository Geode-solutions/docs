# class StructuralModel

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/structural_model.h#52
```

 A Structural Model is a Boundary Representation composed of Faults and Horizons (as Surfaces) and FaultBlocks and StratigraphicUnits (as Blocks).



```cpp
Inherits from BRep, Faults3D, Horizons3D, FaultBlocks3D, StratigraphicUnits3D
```



## Records

HorizonItemRange

FaultItemRange

FaultBlockItemRange

StratigraphicUnitItemRange



## Functions

### StructuralModel

```cpp
public void StructuralModel()
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/structural_model.h#146
```

### StructuralModel

```cpp
public void StructuralModel(StructuralModel && )
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/structural_model.h#147
```

### StructuralModel

```cpp
public void StructuralModel(BRep && brep)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/structural_model.cpp#194
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/structural_model.h#150
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../include/geode/geosciences/explicit/representation/core/structural_model.h#155
```

### horizon_items

```cpp
public HorizonItemRange horizon_items(const Horizon3D & horizon)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/structural_model.cpp#62
```

### fault_items

```cpp
public FaultItemRange fault_items(const Fault3D & fault)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/structural_model.cpp#100
```

### fault_block_items

```cpp
public FaultBlockItemRange fault_block_items(const FaultBlock3D & fault_block)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/structural_model.cpp#142
```

### stratigraphic_unit_items

```cpp
public StratigraphicUnitItemRange stratigraphic_unit_items(const StratigraphicUnit3D & stratigraphic_unit)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/explicit/representation/core/structural_model.cpp#187
```



