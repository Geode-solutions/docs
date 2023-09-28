# class SurfacesBuilder

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#99
```

# class SurfacesBuilder

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#98
```

# class SurfacesBuilder

```cpp
Defined at ../../include/geode/model/mixin/builder/surfaces_builder.h#46
```

## Functions

### load_surfaces

```cpp
public void load_surfaces(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#67
```

### surface_mesh_builder

```cpp
public std::unique_ptr<typename Mesh::Builder> surface_mesh_builder(const uuid & id)
```

```cpp
Defined at ../../include/geode/model/mixin/builder/surfaces_builder.h#56
```

 Get a pointer to the builder of a Surface mesh

**id** [in] Unique index of the Surface

### set_surface_name

```cpp
public void set_surface_name(const uuid & id, string_view name)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#74
```

### SurfacesBuilder

```cpp
protected void SurfacesBuilder<dimension>(Surfaces<dimension> & surfaces)
```

```cpp
Defined at ../../include/geode/model/mixin/builder/surfaces_builder.h#68
```

### create_surface

```cpp
protected const uuid & create_surface()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#34
```

### create_surface

```cpp
protected const uuid & create_surface(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#40
```

### create_surface

```cpp
protected void create_surface(uuid surface_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#47
```

### create_surface

```cpp
protected void create_surface(uuid surface_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#53
```

### delete_surface

```cpp
protected void delete_surface(const Surface<dimension> & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#60
```

### set_surface_mesh

```cpp
protected void set_surface_mesh(const uuid & id, std::unique_ptr<SurfaceMesh<dimension> > mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#82
```

### modifiable_surface_mesh

```cpp
protected SurfaceMesh<dimension> & modifiable_surface_mesh(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/surfaces_builder.cpp#90
```



