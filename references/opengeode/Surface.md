# class Surface

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#160
```

```cpp
Inherits from Component<3U>
```



# class Surface

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#159
```

```cpp
Inherits from Component<2U>
```



# class Surface

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#52
```

 Geometric component describing a Surface. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Surface

```cpp
public void Surface<dimension>(const Surface<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#54
```

### operator=

```cpp
public Surface<dimension> & operator=(const Surface<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#54
```

### Surface

```cpp
public void Surface<dimension>(Surface<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#67
```

### ~Surface

```cpp
public void ~Surface<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#62
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#65
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#70
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#75
```

### mesh

```cpp
public const TypedMesh & mesh()
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#81
```

### Surface

```cpp
public void Surface<dimension>(SurfacesKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#73
```

### Surface

```cpp
public void Surface<dimension>(const MeshImpl & impl, SurfacesKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#78
```

### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(SurfacesKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#92
```

### mesh_type

```cpp
public const MeshImpl & mesh_type()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#110
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, SurfacesKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#138
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, SurfacesBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#145
```

### set_surface_name

```cpp
public void set_surface_name(string_view name, SurfacesBuilderKey key)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#152
```

### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(SurfacesBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#106
```

### set_mesh

```cpp
public void set_mesh(int mesh, SurfacesKey key)
```

### set_mesh

```cpp
public void set_mesh(int mesh, SurfacesBuilderKey key)
```



