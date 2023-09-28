# class SolidMeshBuilder

```cpp
Defined at ../../include/geode/mesh/builder/solid_mesh_builder.h#48
```

 Interface class to represent the builder of a SolidMesh



```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### ~SolidMeshBuilder

```cpp
public void ~SolidMeshBuilder<>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#356
```

### create

```cpp
public int create(SolidMesh<dimension> & mesh)
```

 Create the builder associated with a SolidMesh.

**mesh** [in] The SolidMesh to build/modify

### edges_builder

```cpp
public SolidEdgesBuilder<dimension> edges_builder()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#677
```

### facets_builder

```cpp
public SolidFacetsBuilder<dimension> facets_builder()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#741
```

### create_point

```cpp
public index_t create_point(Point<dimension> point)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#760
```

 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### create_polyhedron

```cpp
public index_t create_polyhedron(Span vertices, int facets)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#472
```

 Create a new polyhedron from vertices and facets.

**vertices** [in] The vertices defining the polyhedron to create

**facets** [in] The list of ordered vertices defining all the facets of the polyhedron

**return** the index of the created polyhedron

### set_polyhedron_vertex

```cpp
public void set_polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#393
```

 Modify a polyhedron vertex.

**polyhedron_vertex** [in] The index of the polyhedron vertex to modify

**vertex_id** [in] Index of the mesh vertex to set as polyhedron vertex

### replace_vertex

```cpp
public void replace_vertex(index_t old_vertex_id, index_t new_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#369
```

 Replace old polygon vertices from a given vertex to another.

**old_vertex_id** [in] Index of the initial mesh vertex to modify

**new_vertex_id** [in] Index of the target mesh vertex to set as polyhedron vertex

### set_polyhedron_adjacent

```cpp
public void set_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet, index_t adjacent_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#593
```

 Set a polyhedron adgjacent through a facet.

**polygon_facet** [in] The index of the polygon facet

**adjacent_id** [in] Index of the adjacent polyhedron

### unset_polyhedron_adjacent

```cpp
public void unset_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#608
```

 Unset a polyhedron adjacency through a facet.



**polygon_facet** [in] The index of the polygon facet

### compute_polyhedron_adjacencies

```cpp
public void compute_polyhedron_adjacencies()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#620
```

 Compute all the adjacencies between the solid polyhedra

### compute_polyhedron_adjacencies

```cpp
public void compute_polyhedron_adjacencies(Span polyhedra_to_connect)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#629
```

 Compute the adjacencies between the given solid polyhedra

**polyhedra_to_connect** [in] Set of polyhedra for which compute adjacencies

### delete_polyhedra

```cpp
public int delete_polyhedra(const int & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#684
```

 Delete a set of solid polyhedra

**to_delete** [in] Vector of size solid_mesh_.nb_polyhedra(). If to_delete[i] is true the polyhedra of index i is deleted, else it is kept.

**return** the mapping between old polyhedron indices to new ones. Deleted polyhedra new index is NO_ID

### permute_polyhedra

```cpp
public int permute_polyhedra(Span permutation)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#709
```

 Permute polyhedra to match the given order.

**permutation** [in] Vector of size solid_mesh_.nb_polyhedra(). Each value corresponds to the destination position.

**return** the mapping between old polyhedron indices to new ones.

### delete_isolated_vertices

```cpp
public int delete_isolated_vertices()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#748
```

 Delete all the isolated vertices (not used as polyhedron vertices)

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID

### associate_polyhedron_vertex_to_vertex

```cpp
public void associate_polyhedron_vertex_to_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#536
```

 Set a polyhedron vertex to a given vertex.

**polyhedron_vertex** [in] PolyhedronVertex corresponding to the vertex.

**vertex_id** [in] Index of the vertex.

### disassociate_polyhedron_vertex_to_vertex

```cpp
public void disassociate_polyhedron_vertex_to_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#550
```

 Unset polyhedron vertex information to a given vertex.

**vertex_id** [in] Index of the vertex.

### reset_polyhedra_around_vertex

```cpp
public void reset_polyhedra_around_vertex(index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#529
```

### copy

```cpp
public void copy(const SolidMesh<dimension> & solid_mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#835
```

### SolidMeshBuilder

```cpp
protected void SolidMeshBuilder<>(SolidMesh<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#347
```

### update_polyhedron_info

```cpp
protected void update_polyhedron_info(index_t polyhedron_id, Span vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#770
```

### create_polyhedron

```cpp
public index_t create_polyhedron(absl::Span<const index_t> vertices, absl::Span<const std::vector<local_index_t> > facets)
```

 Create a new polyhedron from vertices and facets.

**vertices** [in] The vertices defining the polyhedron to create

**facets** [in] The list of ordered vertices defining all the facets of the polyhedron

**return** the index of the created polyhedron

### delete_polyhedra

```cpp
public vector delete_polyhedra(const std::vector<bool> & to_delete)
```

 Delete a set of solid polyhedra

**to_delete** [in] Vector of size solid_mesh_.nb_polyhedra(). If to_delete[i] is true the polyhedra of index i is deleted, else it is kept.

**return** the mapping between old polyhedron indices to new ones. Deleted polyhedra new index is NO_ID

### create

```cpp
public int create(SolidMesh<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#361
```

### get_polyhedron_facet_vertices

```cpp
public int get_polyhedron_facet_vertices(Span vertices, int facets)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#507
```

### do_delete_vertices

```cpp
public void do_delete_vertices(const int & to_delete, Span old2new)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#559
```

### remove_polyhedra_edges

```cpp
public void remove_polyhedra_edges(const int & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#659
```

### remove_polyhedra_facets

```cpp
public void remove_polyhedra_facets(const int & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/solid_mesh_builder.cpp#723
```



# class SolidMeshBuilder

