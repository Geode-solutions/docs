# class Corner

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#170
```

```cpp
Inherits from Component<3U>
```



# class Corner

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#169
```

```cpp
Inherits from Component<2U>
```



# class Corner

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#52
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
Defined at ../../include/geode/model/mixin/core/corner.h#54
```

### operator=

```cpp
public Corner<dimension> & operator=(const Corner<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#54
```

### Corner

```cpp
public void Corner<dimension>(Corner<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#73
```

### ~Corner

```cpp
public void ~Corner<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#62
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#65
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#70
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../../include/geode/model/mixin/core/corner.h#75
```

### mesh

```cpp
public const Mesh & mesh()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#97
```

### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(CornersKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#103
```

### mesh_type

```cpp
public const MeshImpl & mesh_type()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#115
```

### Corner

```cpp
public void Corner<dimension>(CornersKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#80
```

### Corner

```cpp
public void Corner<dimension>(const MeshImpl & impl, CornersKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#85
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, CornersKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#155
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, CornersBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#162
```

### set_corner_name

```cpp
public void set_corner_name(string_view name, CornersBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#121
```

### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(CornersBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corner.cpp#128
```



