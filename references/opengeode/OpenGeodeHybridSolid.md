# class OpenGeodeHybridSolid

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_hybrid_solid.h#43
```

```cpp
Inherits from HybridSolid<dimension>
```



## Records

Impl



## Functions

### OpenGeodeHybridSolid

```cpp
public void OpenGeodeHybridSolid<dimension>(const OpenGeodeHybridSolid<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_hybrid_solid.h#45
```

### operator=

```cpp
public OpenGeodeHybridSolid<dimension> & operator=(const OpenGeodeHybridSolid<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_hybrid_solid.h#45
```

### OpenGeodeHybridSolid

```cpp
public void OpenGeodeHybridSolid<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#469
```

### OpenGeodeHybridSolid

```cpp
public void OpenGeodeHybridSolid<dimension>(OpenGeodeHybridSolid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#474
```

### operator=

```cpp
public OpenGeodeHybridSolid<dimension> & operator=(OpenGeodeHybridSolid<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#482
```

### ~OpenGeodeHybridSolid

```cpp
public void ~OpenGeodeHybridSolid<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#492
```

### impl_name_static

```cpp
public NamedType impl_name_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_hybrid_solid.h#57
```

### impl_name

```cpp
public NamedType impl_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_hybrid_solid.h#63
```

### type_name

```cpp
public NamedType type_name()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_hybrid_solid.h#68
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_hybrid_solid.h#73
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/mesh/core/geode/geode_hybrid_solid.h#80
```

### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#497
```

### set_polyhedron_vertex

```cpp
public void set_polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#549
```

### set_polyhedron_adjacent

```cpp
public void set_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet, index_t adjacent_id, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#558
```

### add_tetrahedron

```cpp
public void add_tetrahedron(const std::array<index_t, 4> & vertices, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#581
```

### add_hexahedron

```cpp
public void add_hexahedron(const std::array<index_t, 8> & vertices, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#588
```

### add_prism

```cpp
public void add_prism(const std::array<index_t, 6> & vertices, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#595
```

### add_pyramid

```cpp
public void add_pyramid(const std::array<index_t, 5> & vertices, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#602
```

### remove_polyhedra

```cpp
public void remove_polyhedra(const std::vector<bool> & to_delete, OGHybridSolidKey )
```

### permute_polyhedra

```cpp
public void permute_polyhedra(Span permutation, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#574
```

### copy_polyhedra

```cpp
public void copy_polyhedra(const OpenGeodeHybridSolid<dimension> & solid_mesh, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#633
```

### get_polyhedron_adjacent

```cpp
public absl::optional<index_t> get_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#533
```

### remove_polyhedra

```cpp
public void remove_polyhedra(const int & to_delete, OGHybridSolidKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#567
```

### polyhedron_edges_vertices

```cpp
public PolyhedronEdgesVertices polyhedron_edges_vertices(index_t polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#609
```

### polyhedron_facets_vertices

```cpp
public PolyhedronFacetsVertices polyhedron_facets_vertices(index_t polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/geode/geode_hybrid_solid.cpp#617
```



# class OpenGeodeHybridSolid

