# class SolidMesh

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#227
```

 This class represents a 3D Solid made up with polyhedra and provides mesh functionnalities.



```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<dimension>
```



## Records

Impl



## Functions

### SolidMesh

```cpp
public void SolidMesh<dimension>(const SolidMesh<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#230
```

### operator=

```cpp
public SolidMesh<dimension> & operator=(const SolidMesh<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/solid_mesh.h#230
```

### create

```cpp
public std::unique_ptr<SolidMesh<dimension> > create()
```

 Create a new SolidMesh using default data structure.

### create

```cpp
public std::unique_ptr<SolidMesh<dimension> > create(const MeshImpl & impl)
```

 Create a new SolidMesh using a specified data structure.

**impl** [in] Data structure implementation.

### clone

```cpp
public std::unique_ptr<SolidMesh<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1497
```

### ~SolidMesh

```cpp
public void ~SolidMesh<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#629
```

### nb_polyhedra

```cpp
public index_t nb_polyhedra()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#834
```

### is_vertex_isolated

```cpp
public bool is_vertex_isolated(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#840
```

### nb_polyhedron_vertices

```cpp
public local_index_t nb_polyhedron_vertices(index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1208
```

 Return the number of vertices in a polyhedron.

### nb_polyhedron_facets

```cpp
public local_index_t nb_polyhedron_facets(index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1216
```

 Return the number of facets in a polyhedron.

### nb_polyhedron_facet_vertices

```cpp
public local_index_t nb_polyhedron_facet_vertices(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1269
```

 Return the number of vertices in polyhedron facet.

**polyhedron_facet** [in] Local index of the facet in polyhedron.

### polyhedron_vertex

```cpp
public index_t polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#657
```

 Return the index in the mesh of a local vertex in a polyhedron.

**polyhedron_vertex** [in] Local index of vertex in polyhedron.

### polyhedron_vertices

```cpp
public PolyhedronVertices polyhedron_vertices(index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#667
```

 Return all the indices in the mesh of polyhedron vertices.

**polyhedron_id** [in] Index of polyhedron.

### vertex_in_polyhedron

```cpp
public absl::optional<local_index_t> vertex_in_polyhedron(index_t polyhedron_id, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#680
```

 Return the local index in the polyhedron of a vertex in the mesh.

**polyhedron_id** [in] Index of polyhedron.

**vertex_id** [in] Index of a vertex in the mesh.

**return** Index in [0,nb_polyhedron_vertices()[ if polyhedron is around the given vertex

### polyhedron_facet_vertex

```cpp
public index_t polyhedron_facet_vertex(const PolyhedronFacetVertex & polyhedron_facet_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1224
```

 Return the index in the mesh of a given polyhedron facet vertex.

**polyhedron_facet_vertex** [in] Local index of the vertex in the facet of a polyhedron.

### polyhedron_facet_vertex_id

```cpp
public PolyhedronVertex polyhedron_facet_vertex_id(const PolyhedronFacetVertex & polyhedron_facet_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#731
```

### polyhedron_facet_edge_vertices

```cpp
public std::array<index_t, 2> polyhedron_facet_edge_vertices(const PolyhedronFacetEdge & polyhedron_facet_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1241
```

 Return the indices in the mesh of the two polyhedron edge vertices.

**polyhedron_facet_edge** [in] Local index of edge in a polyhedron.

### polyhedron_facet_edge_from_vertices

```cpp
public absl::optional<PolyhedronFacetEdge> polyhedron_facet_edge_from_vertices(const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#913
```

### polyhedron_facet_edge_from_vertices

```cpp
public absl::optional<PolyhedronFacetEdge> polyhedron_facet_edge_from_vertices(const std::array<index_t, 2> & edge_vertices, index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#874
```

### polyhedron_edges_vertices

```cpp
public PolyhedronEdgesVertices polyhedron_edges_vertices(index_t polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1106
```

### polyhedron_facet_from_vertices

```cpp
public absl::optional<PolyhedronFacet> polyhedron_facet_from_vertices(PolyhedronFacetVertices polyhedron_facet_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#847
```

### polyhedron_facet_vertices

```cpp
public PolyhedronFacetVertices polyhedron_facet_vertices(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#738
```

### polyhedron_facets_vertices

```cpp
public PolyhedronFacetsVertices polyhedron_facets_vertices(index_t polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1127
```

### polyhedron_vertex_facets

```cpp
public PolyhedronFacets polyhedron_vertex_facets(const PolyhedronVertex & polyhedron_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1149
```

### polyhedron_adjacent

```cpp
public absl::optional<index_t> polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1279
```

 Return the index of the polyhedron adjacent through a facet.

**polyhedron_facet** [in] Local index of facet in polyhedron.

**return** the index of the adjacent polyhedron if it exists.

### polyhedron_adjacent_facet

```cpp
public absl::optional<PolyhedronFacet> polyhedron_adjacent_facet(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1289
```

 Return the index of the facet of the adjacent polyhedron through which polyhedra are adjacent.

**polyhedron_facet** [in] Local index of facet in polyhedron.

**return** the index of the adjacent polyhedron facet if it exists.

### is_polyhedron_facet_on_border

```cpp
public bool is_polyhedron_facet_on_border(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1337
```

 Return true if the facet is on border, i.e. if the polyhedron has no adjacent through the specified facet.

**polyhedron_facet** [in] Local index of facet in polyhedron.

### is_polyhedron_on_border

```cpp
public bool is_polyhedron_on_border(index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1344
```

 Return true if at least one polyhedron facet is on border



**polyhedron_id** [in] Index of a polyhedron

### is_edge_in_polyhedron_facet

```cpp
public bool is_edge_in_polyhedron_facet(const PolyhedronFacet & polyhedron_facet, const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#970
```

 Return true if the edge belongs to the facet

**polyhedron_facet** [in] Local index of facet in polyhedron.

**edge_vertices** [in] Indices of edge vertices.

### polyhedron_facets_on_border

```cpp
public PolyhedronFacetsOnBorder polyhedron_facets_on_border(index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1351
```

 Return all the facets of a polyhedron that are on border

**polyhedron_id** [in] Index of a polyhedron

### edge_length

```cpp
public double edge_length(const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#648
```

 Return the length of a given edge.

**edge_vertices** [in] Indices of edge vertices.

### polyhedron_barycenter

```cpp
public Point<dimension> polyhedron_barycenter(index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#696
```

 Return the barycenter of a polyhedron

**polyhedron_id** [in] Index of a polyhedron

### facet_barycenter

```cpp
public Point<dimension> facet_barycenter(const PolyhedronFacetVertices & facet_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#710
```

 Return the barycenter coordinates of a given facet.

**facet_vertices** [in] Vertex indices of the facet.

### edge_barycenter

```cpp
public Point<dimension> edge_barycenter(const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#722
```

 Return the coordinates of the barycenter of a given edge.

**edge_vertices** [in] Indices of edge vertices.

### polyhedron_volume

```cpp
public double polyhedron_volume(index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#752
```

 Return the volume of a given polyhedron.

**polyhedron_id** [in] Index of a polyhedron.

### polyhedron_facet_normal

```cpp
public Vector3D polyhedron_facet_normal(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#786
```

 Return the normal of a given PolyhedronFacet.

**polyhedron_facet** [in] Local index of facet in polyhedron.

### new_polyhedron_facet_normal

```cpp
public absl::optional<Vector3D> new_polyhedron_facet_normal(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#803
```

 Return the normal of a given PolyhedronFacet.

**polyhedron_facet** [in] Local index of facet in polyhedron.

### polyhedra_around_vertex

```cpp
public const PolyhedraAroundVertex & polyhedra_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#960
```

 Get all the polyhedra with one of the vertices matching given vertex.

**vertex_id** [in] Index of the vertex.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedra_around_vertex

```cpp
public const PolyhedraAroundVertex & polyhedra_around_vertex(const PolyhedronVertex & polyhedron_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#951
```

 Get all the polyhedra with one of the vertices matching given polyhedron vertex.

**polyhedron_vertex** [in] Local index of vertex in polyhedron.

**pre** This function needs that polyhedron adjacencies are computed

### is_vertex_on_border

```cpp
public bool is_vertex_on_border(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1015
```

 Return true if at least one of the polyhedron facets around the vertex is on border.

**vertex_id** [in] Index of the vertex.

**pre** This function needs that polyhedron adjacencies are computed

### is_edge_on_border

```cpp
public bool is_edge_on_border(const std::array<index_t, 2> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1022
```

 Return true if at least one of the polyhedron facets around the edge is on border

**vertices** [in] Indices of edge vertices.

### is_edge_on_border

```cpp
public bool is_edge_on_border(const std::array<index_t, 2> & vertices, index_t first_polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1034
```

 Return true if at least one of the polyhedron facets around the edges is on border

**vertices** [in] Indices of edge vertices.

**first_polyhedron** [in] One polyhedron index to begin research

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const std::array<index_t, 2> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1055
```

 Get all the polyhedra with both edge vertices.

**vertices** [in] Indices of edge vertices.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const PolyhedronFacetEdge & edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1067
```

 Get all the polyhedra around the edge.

**edge** [in] Local index of an edge in a polyhedron.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedron_around_edge

```cpp
public absl::optional<index_t> polyhedron_around_edge(const std::array<index_t, 2> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1099
```

 Get one polyhedron with both edge vertices.

**vertices** [in] Indices of edge vertices.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const std::array<index_t, 2> & vertices, index_t first_polyhedron)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1075
```

 Get all the polyhedra with both edge vertices.

**vertices** [in] Indices of edge vertices.

**first_polyhedron** [in] One polyhedron index to begin research.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedra_from_facet_vertices

```cpp
public PolyhedraAroundFacet polyhedra_from_facet_vertices(PolyhedronFacetVertices facet_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#931
```

 Return all polyhedra facets made with the given facet vertices.

**facet_vertices** [in] Vertex indices of the facet.

### edge_vertices_in_polyhedron

```cpp
public std::array<local_index_t, 2> edge_vertices_in_polyhedron(index_t polyhedron_id, const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1369
```

 Get the local indices in the polyhedra of both edge vertices.

**polyhedron_id** [in] Index of polyhedron.

**edge_vertices** [in] Global indices of the two edge vertices.

**details** If the vertices are not in the polyhedron, NO_LID is returned.

### are_edges_enabled

```cpp
public bool are_edges_enabled()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1399
```

### enable_edges

```cpp
public void enable_edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1405
```

### disable_edges

```cpp
public void disable_edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1418
```

### edges

```cpp
public const SolidEdges<dimension> & edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1424
```

### are_facets_enabled

```cpp
public bool are_facets_enabled()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1436
```

### enable_facets

```cpp
public void enable_facets()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1442
```

### disable_facets

```cpp
public void disable_facets()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1455
```

### facets

```cpp
public const SolidFacets<dimension> & facets()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1461
```

### polyhedron_attribute_manager

```cpp
public AttributeManager & polyhedron_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1392
```

 Access to the manager of attributes associated with polyhedra.

### texture_manager

```cpp
public TextureManager3D texture_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1518
```

### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1507
```

 Compute the bounding box from mesh vertices

### polyhedron_around_vertex

```cpp
public absl::optional<PolyhedronVertex> polyhedron_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1174
```

 Return one polyhedron with one of the vertices matching given vertex.

**vertex_id** [in] Index of the vertex.

### associate_polyhedron_vertex_to_vertex

```cpp
public void associate_polyhedron_vertex_to_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id, SolidMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1191
```

### reset_polyhedra_around_vertex

```cpp
public void reset_polyhedra_around_vertex(index_t vertex_id, SolidMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1201
```

### edges

```cpp
public SolidEdges<dimension> & edges(SolidMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1430
```

### copy_edges

```cpp
public void copy_edges(const SolidMesh<dimension> & solid, SolidMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1411
```

### facets

```cpp
public SolidFacets<dimension> & facets(SolidMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1467
```

### copy_facets

```cpp
public void copy_facets(const SolidMesh<dimension> & solid, SolidMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1448
```

### SolidMesh

```cpp
protected void SolidMesh<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#605
```

### SolidMesh

```cpp
protected void SolidMesh<dimension>(SolidMesh<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#610
```

### operator=

```cpp
protected SolidMesh<dimension> & operator=(SolidMesh<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#618
```

### create

```cpp
public int create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#634
```

### create

```cpp
public int create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#641
```

### get_polyhedron_around_vertex

```cpp
public absl::optional<PolyhedronVertex> get_polyhedron_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/solid_mesh.cpp#1183
```

### polyhedron_facet_from_vertices

```cpp
public absl::optional<PolyhedronFacet> polyhedron_facet_from_vertices(int polyhedron_facet_vertices)
```

### facet_barycenter

```cpp
public Point<dimension> facet_barycenter(const int & facet_vertices)
```

 Return the barycenter coordinates of a given facet.

**facet_vertices** [in] Vertex indices of the facet.

### polyhedra_from_facet_vertices

```cpp
public int polyhedra_from_facet_vertices(int facet_vertices)
```

 Return all polyhedra facets made with the given facet vertices.

**facet_vertices** [in] Vertex indices of the facet.



# class SolidMesh

