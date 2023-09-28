# class OpenGeodePolyhedralSolid

# class OpenGeodePolyhedralSolid

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polyhedral_solid.h#41
```

```cpp
Inherits from PolyhedralSolid<dimension>
```



## Records

Impl



## Functions

### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<dimension>(const OpenGeodePolyhedralSolid<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polyhedral_solid.h#43
```

### operator=

```cpp
public OpenGeodePolyhedralSolid<dimension> & operator=(const OpenGeodePolyhedralSolid<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polyhedral_solid.h#43
```

### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#410
```

### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<dimension>(OpenGeodePolyhedralSolid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#416
```

### operator=

```cpp
public OpenGeodePolyhedralSolid<dimension> & operator=(OpenGeodePolyhedralSolid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#424
```

### ~OpenGeodePolyhedralSolid

```cpp
public void ~OpenGeodePolyhedralSolid<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#434
```

### impl_name_static

```cpp
public NamedType impl_name_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polyhedral_solid.h#56
```

### impl_name

```cpp
public NamedType impl_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polyhedral_solid.h#62
```

### type_name

```cpp
public NamedType type_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polyhedral_solid.h#67
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polyhedral_solid.h#72
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_polyhedral_solid.h#79
```

### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPolyhedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#439
```

### add_polyhedron

```cpp
public void add_polyhedron(Span vertices, absl::Span<const std::vector<local_index_t> > facets, OGPolyhedralSolidKey )
```

### remove_polyhedra

```cpp
public void remove_polyhedra(const std::vector<bool> & to_delete, OGPolyhedralSolidKey )
```

### permute_polyhedra

```cpp
public void permute_polyhedra(Span permutation, OGPolyhedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#518
```

### set_polyhedron_adjacent

```cpp
public void set_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet, index_t adjacent_id, OGPolyhedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#502
```

### set_polyhedron_vertex

```cpp
public void set_polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id, OGPolyhedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#493
```

### copy_polyhedra

```cpp
public void copy_polyhedra(const OpenGeodePolyhedralSolid<dimension> & solid_mesh, OGPolyhedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#534
```

### get_polyhedron_adjacent

```cpp
public absl::optional<index_t> get_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#477
```

### remove_polyhedra

```cpp
public void remove_polyhedra(const int & to_delete, OGPolyhedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#511
```

### add_polyhedron

```cpp
public void add_polyhedron(Span vertices, int facets, OGPolyhedralSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_polyhedral_solid.cpp#525
```



