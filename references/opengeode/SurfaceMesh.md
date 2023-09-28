# class SurfaceMesh

# class SurfaceMesh

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#143
```

 This class represents a Surface made up with polygons (triangles, quads, ...) of arbitrary dimension and provides mesh functionnalities.



```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<dimension>
```



## Records

Impl



## Functions

### SurfaceMesh

```cpp
public void SurfaceMesh<dimension>(const SurfaceMesh<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#147
```

### operator=

```cpp
public SurfaceMesh<dimension> & operator=(const SurfaceMesh<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/surface_mesh.h#147
```

### ~SurfaceMesh

```cpp
public void ~SurfaceMesh<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#424
```

### create

```cpp
public std::unique_ptr<SurfaceMesh<dimension> > create()
```

 Create a new SurfaceMesh using default data structure.

### create

```cpp
public std::unique_ptr<SurfaceMesh<dimension> > create(const MeshImpl & impl)
```

 Create a new SurfaceMesh using a specified data structure.

**impl** [in] Data structure implementation

### clone

```cpp
public std::unique_ptr<SurfaceMesh<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#1038
```

### nb_polygons

```cpp
public index_t nb_polygons()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#506
```

### is_vertex_isolated

```cpp
public bool is_vertex_isolated(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#512
```

### nb_polygon_vertices

```cpp
public local_index_t nb_polygon_vertices(index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#519
```

 Return the number of vertices in a polygon

### nb_polygon_edges

```cpp
public local_index_t nb_polygon_edges(index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#527
```

 Return the number of edges in a polygon

### polygon_vertex

```cpp
public index_t polygon_vertex(const PolygonVertex & polygon_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#444
```

 Return the index in the mesh of a local vertex in a polygon

**polygon_vertex** [in] Local index of vertex in polygon

### polygon_vertices

```cpp
public PolygonVertices polygon_vertices(index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#454
```

 Return all the indices in the mesh of polygon vertices.

**polygon_id** [in] Index of polygon.

### vertex_in_polygon

```cpp
public absl::optional<local_index_t> vertex_in_polygon(index_t polygon_id, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#467
```

 Return the local index in the polygon of a vertex in the mesh.

**polygon_id** [in] Index of polygon.

**vertex_id** [in] Index of a vertex in the mesh.

**return** Index in [0,nb_polygon_vertices()[ if polygon is around the given vertex

### polygon_edge_vertex

```cpp
public index_t polygon_edge_vertex(const PolygonEdge & polygon_edge, local_index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#749
```

 Return the index in the mesh of a given polygon edge vertex.

**polygon_edge** [in] Local index of edge in a polygon.

**vertex_id** [in] Local index of vertex in the edge (0 or 1).

### polygon_edge_vertices

```cpp
public std::array<index_t, 2> polygon_edge_vertices(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#764
```

 Return the indices in the mesh of the two polygon edge vertices.

**polygon_edge** [in] Local index of edge in a polygon.

### next_polygon_vertex

```cpp
public PolygonVertex next_polygon_vertex(const PolygonVertex & polygon_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#534
```

 Return the next vertex in a polygon (local indexation)

**polygon_vertex** [in] Local index of vertex in polygon

### previous_polygon_vertex

```cpp
public PolygonVertex previous_polygon_vertex(const PolygonVertex & polygon_vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#545
```

 Return the previous vertex in a polygon (local indexation)

**polygon_vertex** [in] Local index of vertex in polygon

### next_polygon_edge

```cpp
public PolygonEdge next_polygon_edge(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#556
```

 Return the next edge in a polygon (local indexation)

**polygon_edge** [in] Local index of edge in polygon

### previous_polygon_edge

```cpp
public PolygonEdge previous_polygon_edge(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#567
```

 Return the previous edge in a polygon (local indexation)

**polygon_edge** [in] Local index of edge in polygon

### polygon_adjacent

```cpp
public absl::optional<index_t> polygon_adjacent(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#578
```

 Return the index of the polygon adjacent through an edge.

**polygon_edge** [in] Local index of edge in polygon.

**return** the index of the adjacent polygon if it exists.

### polygon_adjacent_edge

```cpp
public absl::optional<PolygonEdge> polygon_adjacent_edge(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#588
```

 Return the index of the edge of the adjacent polygon through which polygons are adjacent.

**polygon_edge** [in] Local index of edge in polygon.

**return** the index of the adjacent polygon edge if it exists.

### is_vertex_on_border

```cpp
public bool is_vertex_on_border(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#806
```

 Return true if the vertex is on border, i.e. if there are polygons around this vertex and on the border.

**vertex_id** [in] Index the vertex.

### is_edge_on_border

```cpp
public bool is_edge_on_border(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#656
```

 Return true if the edge is on border, i.e. if the polygon has no adjacent through the specified edge.

**polygon_edge** [in] Local index of edge in polygon.

### is_polygon_on_border

```cpp
public bool is_polygon_on_border(index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#663
```

 Return true if at least one of the polygon edges is on border

**polygon_id** [in] Index of a polygon

### polygon_edges_on_border

```cpp
public PolygonEdgesOnBorder polygon_edges_on_border(index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#670
```

 Return all the edges of a polygon that are on border

**polygon_id** [in] Index of a polygon

### next_on_border

```cpp
public PolygonEdge next_on_border(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#686
```

 Return the next edge on the border (local indexation).

**polygon_edge** [in] Local index of edge in a polygon.

**pre** The given polygon edge should be on border.

### previous_on_border

```cpp
public PolygonEdge previous_on_border(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#702
```

 Return the previous edge on the border (local indexation).

**polygon_edge** [in] Local index of edge in a polygon.

**pre** The given polygon edge should be on border.

### edge_length

```cpp
public double edge_length(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#718
```

 Return the length of a given edge.

**polygon_edge** [in] Local index of edge in a polygon.

### edge_length

```cpp
public double edge_length(const std::array<index_t, 2> & polygon_edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#725
```

### edge_barycenter

```cpp
public Point<dimension> edge_barycenter(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#733
```

 Return the coordinates of the barycenter of a given edge.

**polygon_edge** [in] Local index of edge in a polygon.

### edge_barycenter

```cpp
public Point<dimension> edge_barycenter(const std::array<index_t, 2> & polygon_edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#740
```

### polygon_barycenter

```cpp
public Point<dimension> polygon_barycenter(index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#772
```

 Return the barycenter of a polygon

**polygon_id** [in] Index of a polygon

### polygon_area

```cpp
public double polygon_area(index_t polygon_id)
```

 Return the area of a polygon.

**polygon_id** [in] Index of a polygon.

**warning** Result guaranteed only for convex polygon.

### polygon_normal

```cpp
public typename std::enable_if<T == 3, absl::optional<Vector3D> >::type polygon_normal(index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#985
```

 Return the normal of a polygon

### polygon_vertex_normal

```cpp
public typename std::enable_if<T == 3, absl::optional<Vector3D> >::type polygon_vertex_normal(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#1014
```

 Return the normal at a polygon vertex

### polygons_around_vertex

```cpp
public const PolygonsAroundVertex & polygons_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#785
```

 Get all the polygons with one of the vertices matching given vertex.

**vertex_id** [in] Index of the vertex.

**pre** This function needs that polygon adjacencies are computed

### polygons_around_vertex

```cpp
public const PolygonsAroundVertex & polygons_around_vertex(const PolygonVertex & vertex)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#795
```

 Get all the polygons with one of the vertices matching given vertex.

**polygon_vertex** [in] Local index of vertex in polygon.

**pre** This function needs that polygon adjacencies are computed

### polygon_edge_from_vertices

```cpp
public absl::optional<PolygonEdge> polygon_edge_from_vertices(index_t from_vertex_id, index_t to_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#815
```

 Find the polygon edge corresponding to an ordered pair of vertex indices.

**from_vertex_id** [in] Index of the vertex from which starts the edge

**to_vertex_id** [in] Index of the vertex to which ends the edge

**return** Local index if the edge is found.

### polygons_from_edge_vertices

```cpp
public PolygonsAroundEdge polygons_from_edge_vertices(Span edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#831
```

 Find the polygon edges corresponding to a pair of vertex indices.

**return** Local indices of the edges found

### are_edges_enabled

```cpp
public bool are_edges_enabled()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#856
```

### enable_edges

```cpp
public void enable_edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#862
```

### disable_edges

```cpp
public void disable_edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#868
```

### edges

```cpp
public const SurfaceEdges<dimension> & edges()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#874
```

### polygon_attribute_manager

```cpp
public AttributeManager & polygon_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#893
```

 Access to the manager of attributes associated with polygons.

### texture_manager

```cpp
public TextureManager2D texture_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#1048
```

### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#927
```

 Compute the bounding box from mesh vertices

### polygon_around_vertex

```cpp
public absl::optional<PolygonVertex> polygon_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#482
```

 Return one polygon with one of the vertices matching given vertex.

**vertex_id** [in] Index of the vertex.

### associate_polygon_vertex_to_vertex

```cpp
public void associate_polygon_vertex_to_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id, SurfaceMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#499
```

### reset_polygons_around_vertex

```cpp
public void reset_polygons_around_vertex(index_t vertex_id, SurfaceMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#938
```

### edges

```cpp
public SurfaceEdges<dimension> & edges(SurfaceMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#880
```

### copy_edges

```cpp
public void copy_edges(const SurfaceMesh<dimension> & surface_mesh, SurfaceMeshKey )
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#886
```

### SurfaceMesh

```cpp
protected void SurfaceMesh<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#400
```

### SurfaceMesh

```cpp
protected void SurfaceMesh<dimension>(SurfaceMesh<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#405
```

### operator=

```cpp
protected SurfaceMesh<dimension> & operator=(SurfaceMesh<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#413
```

### create

```cpp
public int create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#429
```

### create

```cpp
public int create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#437
```

### get_polygon_around_vertex

```cpp
public absl::optional<PolygonVertex> get_polygon_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/surface_mesh.cpp#491
```



# class SurfaceMesh

