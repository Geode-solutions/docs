# class ImplicitBlockModeler

```cpp
Defined at ../include/geode/implicit/modeler/implicit_block_modeler.h#28
```

## Records

Impl



## Functions

### ImplicitBlockModeler

```cpp
public void ImplicitBlockModeler(BoundingBox3D bbox)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_block_modeler.cpp#154
```

### ImplicitBlockModeler

```cpp
public void ImplicitBlockModeler(ImplicitBlockModeler && block_modeler)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_block_modeler.cpp#159
```

### ~ImplicitBlockModeler

```cpp
public void ~ImplicitBlockModeler()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_block_modeler.cpp#165
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../include/geode/implicit/modeler/implicit_block_modeler.h#35
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../include/geode/implicit/modeler/implicit_block_modeler.h#41
```

### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon3D & horizon, double implicit_value)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_block_modeler.cpp#167
```

### add_horizon_data_pointset

```cpp
public void add_horizon_data_pointset(const Horizon3D & horizon, const PointSet3D & pointset, double weight)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_block_modeler.cpp#173
```

### build_block_mesh

```cpp
public int build_block_mesh()
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_block_modeler.cpp#179
```

### build_implicit_model

```cpp
public ImplicitStructuralModel build_implicit_model(const HorizonsStack3D & horizons_stack)
```

```cpp
Defined at /github/workspace/src/geode/implicit/modeler/implicit_block_modeler.cpp#185
```



