# class OpenGeodeTetrahedralSolid

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_tetrahedral_solid.h#43
```

```cpp
Inherits from TetrahedralSolid<dimension>
```



## Records

Impl



## Functions

### OpenGeodeTetrahedralSolid

```cpp
public void OpenGeodeTetrahedralSolid<dimension>(const OpenGeodeTetrahedralSolid<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_tetrahedral_solid.h#45
```

### operator=

```cpp
public OpenGeodeTetrahedralSolid<dimension> & operator=(const OpenGeodeTetrahedralSolid<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_tetrahedral_solid.h#45
```

### OpenGeodeTetrahedralSolid

```cpp
public void OpenGeodeTetrahedralSolid<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#150
```

### OpenGeodeTetrahedralSolid

```cpp
public void OpenGeodeTetrahedralSolid<dimension>(OpenGeodeTetrahedralSolid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#156
```

### operator=

```cpp
public OpenGeodeTetrahedralSolid<dimension> & operator=(OpenGeodeTetrahedralSolid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#164
```

### ~OpenGeodeTetrahedralSolid

```cpp
public void ~OpenGeodeTetrahedralSolid<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#174
```

### impl_name_static

```cpp
public NamedType impl_name_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_tetrahedral_solid.h#59
```

### impl_name

```cpp
public NamedType impl_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_tetrahedral_solid.h#65
```

### type_name

```cpp
public NamedType type_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_tetrahedral_solid.h#70
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_tetrahedral_solid.h#75
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_tetrahedral_solid.h#82
```

### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGTetrahedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#180
```

### set_polyhedron_vertex

```cpp
public void set_polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id, OGTetrahedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#229
```

### set_polyhedron_adjacent

```cpp
public void set_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet, index_t adjacent_id, OGTetrahedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#245
```

### add_tetrahedron

```cpp
public void add_tetrahedron(const std::array<index_t, 4> & vertices, OGTetrahedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#238
```

### get_polyhedron_adjacent

```cpp
public absl::optional<index_t> get_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_tetrahedral_solid.cpp#202
```



# class OpenGeodeTetrahedralSolid

