# class SurfaceMeshBuilder

# class SurfaceMeshBuilder

```cpp
Defined at ../../include/geode/mesh/builder/surface_mesh_builder.h#50
```

 Interface class to represent the builder of a SurfaceMesh



```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### ~SurfaceMeshBuilder

```cpp
public void ~SurfaceMeshBuilder<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#313
```

### create

```cpp
public int create(SurfaceMesh<dimension> & mesh)
```

 Create the builder associated with a SurfaceMesh.

**mesh** [in] The SurfaceMesh to build/modify

### edges_builder

```cpp
public SurfaceEdgesBuilder<dimension> edges_builder()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#632
```

### create_point

```cpp
public index_t create_point(Point<dimension> point)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#696
```

 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### create_polygon

```cpp
public index_t create_polygon(Span vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#327
```

 Create a new polygon from vertices.

**vertices** [in] The ordered vertices defining the polygon to create

**return** the index of the created polygon

### set_polygon_vertex

```cpp
public void set_polygon_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#403
```

 Modify a polygon vertex.

**polygon_vertex** [in] The index of the polygon vertex to modify

**vertex_id** [in] Index of the mesh vertex to set as polygon vertex

### replace_vertex

```cpp
public void replace_vertex(index_t old_vertex_id, index_t new_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#380
```

 Replace old polygon vertices from a given vertex to another.

**old_vertex_id** [in] Index of the initial mesh vertex to modify

**new_vertex_id** [in] Index of the target mesh vertex to set as polygon vertex

### set_polygon_adjacent

```cpp
public void set_polygon_adjacent(const PolygonEdge & polygon_edge, index_t adjacent_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#509
```

 Set a polygon adjacent through an edge.

**polygon_edge** [in] The index of the polygon edge

**adjacent_id** [in] Index of the adjacent polygon

### unset_polygon_adjacent

```cpp
public void unset_polygon_adjacent(const PolygonEdge & polygon_edge)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#524
```

 Unset a polygon adjacency through an edge.

**polygon_edge** [in] The index of the polygon edge

### compute_polygon_adjacencies

```cpp
public void compute_polygon_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#536
```

 Compute all the adjacencies between the surface polygons

### compute_polygon_adjacencies

```cpp
public void compute_polygon_adjacencies(Span polygons_to_connect)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#545
```

 Compute the adjacencies between the given surface polygons

**polygons_to_connect** [in] Set of polygons for which compute adjacencies

### delete_polygons

```cpp
public int delete_polygons(const int & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#639
```

 Delete a set of surface polygons

**to_delete** [in] Vector of size surface_mesh_.nb_polygons(). If to_delete[i] is true the polygon of index i is deleted, else it is kept.

**return** the mapping between old polygon indices to new ones. Deleted polygons new index is NO_ID

### permute_polygons

```cpp
public int permute_polygons(Span permutation)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#671
```

 Permute polygons to match the given order.

**permutation** [in] Vector of size surface_mesh_.nb_polygons(). Each value corresponds to the destination position.

**return** the mapping between old polygon indices to new ones.

### delete_isolated_vertices

```cpp
public int delete_isolated_vertices()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#684
```

 Delete all the isolated vertices (not used as polygon vertices)

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID

### associate_polygon_vertex_to_vertex

```cpp
public void associate_polygon_vertex_to_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#358
```

 Set a polygon vertex to a given vertex.

**polygon_vertex** [in] PolygonVertex corresponding to the vertex.

**vertex_id** [in] Index of the vertex.

### disassociate_polygon_vertex_to_vertex

```cpp
public void disassociate_polygon_vertex_to_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#372
```

Unset polygon vertex information to a given vertex.

**vertex_id** [in] Index of the vertex.

### reset_polygons_around_vertex

```cpp
public void reset_polygons_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#351
```

### copy

```cpp
public void copy(const SurfaceMesh<dimension> & surface_mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#732
```

### SurfaceMeshBuilder

```cpp
protected void SurfaceMeshBuilder<dimension>(SurfaceMesh<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#304
```

### delete_polygons

```cpp
public std::vector<index_t> delete_polygons(const std::vector<bool> & to_delete)
```

 Delete a set of surface polygons

**to_delete** [in] Vector of size surface_mesh_.nb_polygons(). If to_delete[i] is true the polygon of index i is deleted, else it is kept.

**return** the mapping between old polygon indices to new ones. Deleted polygons new index is NO_ID

### create

```cpp
public int create(SurfaceMesh<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#318
```

### do_delete_vertices

```cpp
public void do_delete_vertices(const int & to_delete, Span old2new)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/surface_mesh_builder.cpp#483
```



# class SurfaceMeshBuilder

