# class Surface

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#134
```

```cpp
Inherits from Component<3U>
```



# class Surface

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#133
```

```cpp
Inherits from Component<2U>
```



# class Surface

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#48
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
Defined at ../../include/geode/model/mixin/core/surface.h#50
```

### operator=

```cpp
public Surface<dimension> & operator=(const Surface<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#50
```

### Surface

```cpp
public void Surface<dimension>(Surface<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#60
```

### ~Surface

```cpp
public void ~Surface<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#55
```

### component_type_static

```cpp
public NamedType component_type_static()
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#59
```

### component_type

```cpp
public NamedType component_type()
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#64
```

### component_id

```cpp
public ComponentID component_id()
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#69
```

### mesh

```cpp
public const Mesh & mesh()
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#75
```

### Surface

```cpp
public void Surface<dimension>(SurfacesKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#81
```

### Surface

```cpp
public void Surface<dimension>(const MeshImpl & impl, SurfacesKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#83
```

### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(SurfacesKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#86
```

### mesh_type

```cpp
public const MeshImpl & mesh_type()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#91
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<SurfaceMesh<dimension> > mesh, SurfacesKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#119
```

### set_mesh

```cpp
public void set_mesh(std::unique_ptr<SurfaceMesh<dimension> > mesh, SurfacesBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/surface.cpp#126
```

### set_surface_name

```cpp
public void set_surface_name(string_view name, SurfacesBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#99
```

### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(SurfacesBuilderKey )
```

```cpp
Defined at ../../include/geode/model/mixin/core/surface.h#105
```

### set_mesh

```cpp
public void set_mesh(int mesh, SurfacesKey )
```

### set_mesh

```cpp
public void set_mesh(int mesh, SurfacesBuilderKey )
```



