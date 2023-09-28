# class Corner

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#133
```

```cpp
Inherits from Component<3U>
```



# class Corner

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#132
```

```cpp
Inherits from Component<2U>
```



# class Corner

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#48
```

 Geometric component describing a Point. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Corner

```cpp
public void Corner<dimension>(const Corner<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#50
```

### operator=

```cpp
public Corner<dimension> & operator=(const Corner<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#50
```

### Corner

```cpp
public void Corner<dimension>(Corner<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#67
```

### ~Corner

```cpp
public void ~Corner<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#55
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#59
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#64
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#69
```

### mesh

```cpp
public const PointSet<dimension> & mesh()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#80
```

### modifiable_mesh

```cpp
public PointSet<dimension> & modifiable_mesh(CornersKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#76
```

### mesh_type

```cpp
public const MeshImpl & mesh_type()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#92
```

### Corner

```cpp
public void Corner<dimension>(CornersKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#84
```

### Corner

```cpp
public void Corner<dimension>(const MeshImpl & impl, CornersKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#86
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<PointSet<dimension> > mesh, CornersKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#118
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<PointSet<dimension> > mesh, CornersBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#125
```

### set_corner_name

```cpp
public void set_corner_name(string_view name, CornersBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#94
```

### modifiable_mesh

```cpp
public PointSet<dimension> & modifiable_mesh(CornersBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#99
```



