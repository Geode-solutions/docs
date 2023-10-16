# class TetrahedralSolid

# class TetrahedralSolid


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


### clone

```cpp
public std::unique_ptr<TetrahedralSolid<dimension> > clone()
```


### polyhedron_edges_vertices

```cpp
public PolyhedronEdgesVertices polyhedron_edges_vertices(index_t polyhedron)
```


### polyhedron_facets_vertices

```cpp
public PolyhedronFacetsVertices polyhedron_facets_vertices(index_t polyhedron)
```


### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const std::array<index_t, 2> & vertices)
```


### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const std::array<index_t, 2> & vertices, index_t first_polyhedron)
```


### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const PolyhedronFacetEdge & edge)
```


### polyhedron_adjacent_facet

```cpp
public absl::optional<PolyhedronFacet> polyhedron_adjacent_facet(const PolyhedronFacet & polyhedron_facet)
```


### edge_incident_facets

```cpp
public std::array<PolyhedronFacet, 2> edge_incident_facets(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```


 Return the local indices of the two facets incident to the edge in tetrahedron.

**tetrahedron_id** [in] Index of tetrahedron.

**edge_vertices** [in] Indices of the two vertices of an edge.

**warning** throw an exception if edge_vertices are not tetrahedron vertices.

### opposite_edge_incident_facets

```cpp
public std::array<PolyhedronFacet, 2> opposite_edge_incident_facets(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```


 Return the local indices of the two facets incident to the opposite edge in tetrahedron.

**tetrahedron_id** [in] Index of tetrahedron.

**edge_vertices** [in] Indices of the two vertices of an edge.

**warning** throw an exception if edge_vertices are not tetrahedron vertices.

### tetrahedron

```cpp
public Tetrahedron tetrahedron(index_t tetrahedron_id)
```


 Return a geometrical Tetra from an element of the mesh.

### triangle

```cpp
public Triangle<dimension> triangle(const PolyhedronFacet & facet)
```


 Return a geometrical Triangle from a tetrahedron facet of the mesh.

### TetrahedralSolid

```cpp
protected void TetrahedralSolid<>()
```


### TetrahedralSolid

```cpp
protected void TetrahedralSolid<>(TetrahedralSolid<> && other)
```


### operator=

```cpp
protected TetrahedralSolid<> & operator=(TetrahedralSolid<> && other)
```


### create

```cpp
public int create()
```


### create

```cpp
public int create(const MeshImpl & impl)
```


### polyhedron_vertex_facets

```cpp
public PolyhedronFacets polyhedron_vertex_facets(const PolyhedronVertex & polyhedron_vertex)
```




