# class TetrahedralSolid

# class TetrahedralSolid

```cpp
Defined at ../../include/geode/mesh/core/tetrahedral_solid.h#39
```

```cpp
Inherits from SolidMesh<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<TetrahedralSolid<dimension> > create()
```

 Create a new TetrahedralSolid using default data structure.

### create

```cpp
public std::unique_ptr<TetrahedralSolid<dimension> > create(const MeshImpl & impl)
```

 Create a new TetrahedralSolid using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#118
```

### clone

```cpp
public std::unique_ptr<TetrahedralSolid<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#124
```

### polyhedron_edges_vertices

```cpp
public PolyhedronEdgesVertices polyhedron_edges_vertices(index_t polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#281
```

### polyhedron_facets_vertices

```cpp
public PolyhedronFacetsVertices polyhedron_facets_vertices(index_t polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#313
```

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const std::array<index_t, 2> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#205
```

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const std::array<index_t, 2> & vertices, index_t first_polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#228
```

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const PolyhedronFacetEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#272
```

### polyhedron_adjacent_facet

```cpp
public absl::optional<PolyhedronFacet> polyhedron_adjacent_facet(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#332
```

### edge_incident_facets

```cpp
public std::array<PolyhedronFacet, 2> edge_incident_facets(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#134
```

 Return the local indices of the two facets incident to the edge in tetrahedron.

**tetrahedron_id** [in] Index of tetrahedron.

**edge_vertices** [in] Indices of the two vertices of an edge.

**warning** throw an exception if edge_vertices are not tetrahedron vertices.

### opposite_edge_incident_facets

```cpp
public std::array<PolyhedronFacet, 2> opposite_edge_incident_facets(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#159
```

 Return the local indices of the two facets incident to the opposite edge in tetrahedron.

**tetrahedron_id** [in] Index of tetrahedron.

**edge_vertices** [in] Indices of the two vertices of an edge.

**warning** throw an exception if edge_vertices are not tetrahedron vertices.

### tetrahedron

```cpp
public Tetrahedron tetrahedron(index_t tetrahedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#185
```

 Return a geometrical Tetra from an element of the mesh.

### triangle

```cpp
public Triangle<dimension> triangle(const PolyhedronFacet & facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#196
```

 Return a geometrical Triangle from a tetrahedron facet of the mesh.

### TetrahedralSolid

```cpp
protected void TetrahedralSolid<>()
```

```cpp
Defined at ../../include/geode/mesh/core/tetrahedral_solid.h#117
```

### TetrahedralSolid

```cpp
protected void TetrahedralSolid<>(TetrahedralSolid<> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/tetrahedral_solid.h#118
```

### operator=

```cpp
protected TetrahedralSolid<> & operator=(TetrahedralSolid<> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/tetrahedral_solid.h#119
```

### create

```cpp
public int create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#101
```

### create

```cpp
public int create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#110
```

### polyhedron_vertex_facets

```cpp
public PolyhedronFacets polyhedron_vertex_facets(const PolyhedronVertex & polyhedron_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/tetrahedral_solid.cpp#300
```



