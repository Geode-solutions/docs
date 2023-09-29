# class ImplicitStructuralModeler

```cpp
Defined at ../include/geode/implicit/modeler/implicit_structural_modeler.h#31
```

## Records

Impl



## Functions

### ImplicitStructuralModeler

```cpp
public void ImplicitStructuralModeler(StructuralModel && structural_model)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_structural_modeler.cpp#363
```

### ~ImplicitStructuralModeler

```cpp
public void ~ImplicitStructuralModeler()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_structural_modeler.cpp#369
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../include/geode/implicit/modeler/implicit_structural_modeler.h#37
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../include/geode/implicit/modeler/implicit_structural_modeler.h#43
```

### structural_model

```cpp
public const StructuralModel & structural_model()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_structural_modeler.cpp#371
```

### horizons_stack

```cpp
public const HorizonsStack3D & horizons_stack()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_structural_modeler.cpp#376
```

### horizons_stack_builder

```cpp
public HorizonsStackBuilder3D horizons_stack_builder()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_structural_modeler.cpp#381
```

### set_stratigraphic_unit_thickness

```cpp
public void set_stratigraphic_unit_thickness(const StratigraphicUnit3D & strati_unit, double thickness)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_structural_modeler.cpp#386
```

### add_horizon_data_pointset_in_block

```cpp
public void add_horizon_data_pointset_in_block(const Block3D & block, const Horizon3D & horizon, const PointSet3D & pointset, double weight)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_structural_modeler.cpp#392
```

### build

```cpp
public ImplicitStructuralModel build()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_structural_modeler.cpp#402
```



