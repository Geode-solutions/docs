<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class SolidMesh


 This class represents a 3D Solid made up with polyhedra and provides mesh functionnalities.



```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<dimension>
```



## Functions

### SolidMesh

```cpp
public void SolidMesh<dimension>(const SolidMesh<dimension> & )
```


### operator=

```cpp
public SolidMesh<dimension> & operator=(const SolidMesh<dimension> & )
```


### ~SolidMesh

```cpp
public void ~SolidMesh<dimension>()
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


### nb_polyhedra

```cpp
public index_t nb_polyhedra()
```


### is_vertex_isolated

```cpp
public bool is_vertex_isolated(index_t vertex_id)
```


### nb_polyhedron_vertices

```cpp
public local_index_t nb_polyhedron_vertices(index_t polyhedron_id)
```


 Return the number of vertices in a polyhedron.

### nb_polyhedron_facets

```cpp
public local_index_t nb_polyhedron_facets(index_t polyhedron_id)
```


 Return the number of facets in a polyhedron.

### nb_polyhedron_facet_vertices

```cpp
public local_index_t nb_polyhedron_facet_vertices(const PolyhedronFacet & polyhedron_facet)
```


 Return the number of vertices in polyhedron facet.

**polyhedron_facet** [in] Local index of the facet in polyhedron.

### polyhedron_vertex

```cpp
public index_t polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex)
```


 Return the index in the mesh of a local vertex in a polyhedron.

**polyhedron_vertex** [in] Local index of vertex in polyhedron.

### polyhedron_vertices

```cpp
public PolyhedronVertices polyhedron_vertices(index_t polyhedron_id)
```


 Return all the indices in the mesh of polyhedron vertices.

**polyhedron_id** [in] Index of polyhedron.

### vertex_in_polyhedron

```cpp
public std::optional<local_index_t> vertex_in_polyhedron(index_t polyhedron_id, index_t vertex_id)
```


 Return the local index in the polyhedron of a vertex in the mesh.

**polyhedron_id** [in] Index of polyhedron.

**vertex_id** [in] Index of a vertex in the mesh.

**return** Index in [0,nb_polyhedron_vertices()[ if polyhedron is around the given vertex

### polyhedron_facet_vertex

```cpp
public index_t polyhedron_facet_vertex(const PolyhedronFacetVertex & polyhedron_facet_vertex)
```


 Return the index in the mesh of a given polyhedron facet vertex.

**polyhedron_facet_vertex** [in] Local index of the vertex in the facet of a polyhedron.

### polyhedron_facet_vertex_id

```cpp
public PolyhedronVertex polyhedron_facet_vertex_id(const PolyhedronFacetVertex & polyhedron_facet_vertex)
```


### polyhedron_facet_edge_vertices

```cpp
public array polyhedron_facet_edge_vertices(const PolyhedronFacetEdge & polyhedron_facet_edge)
```


 Return the indices in the mesh of the two polyhedron edge vertices.

**polyhedron_facet_edge** [in] Local index of edge in a polyhedron.

### polyhedron_facet_edge_from_vertices

```cpp
public std::optional<PolyhedronFacetEdge> polyhedron_facet_edge_from_vertices(const std::array<index_t, 2> & edge_vertices)
```


### polyhedron_facet_edge_from_vertices

```cpp
public std::optional<PolyhedronFacetEdge> polyhedron_facet_edge_from_vertices(const std::array<index_t, 2> & edge_vertices, index_t polyhedron_id)
```


### polyhedron_edges_vertices

```cpp
public PolyhedronEdgesVertices polyhedron_edges_vertices(index_t polyhedron)
```


### polyhedron_facet_from_vertices

```cpp
public std::optional<PolyhedronFacet> polyhedron_facet_from_vertices(InlinedVector polyhedron_facet_vertices)
```


### polyhedron_facet_from_vertices

```cpp
public std::optional<PolyhedronFacet> polyhedron_facet_from_vertices(InlinedVector polyhedron_facet_vertices, index_t polyhedron_id)
```


### polyhedron_facet_vertices

```cpp
public InlinedVector polyhedron_facet_vertices(const PolyhedronFacet & polyhedron_facet)
```


### polyhedron_facets_vertices

```cpp
public PolyhedronFacetsVertices polyhedron_facets_vertices(index_t polyhedron)
```


### polyhedron_vertex_facets

```cpp
public PolyhedronFacets polyhedron_vertex_facets(const PolyhedronVertex & polyhedron_vertex)
```


### polyhedron_adjacent

```cpp
public optional polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```


 Return the index of the polyhedron adjacent through a facet.

**polyhedron_facet** [in] Local index of facet in polyhedron.

**return** the index of the adjacent polyhedron if it exists.

### polyhedron_adjacent_facet

```cpp
public std::optional<PolyhedronFacet> polyhedron_adjacent_facet(const PolyhedronFacet & polyhedron_facet)
```


 Return the index of the facet of the adjacent polyhedron through which polyhedra are adjacent.

**polyhedron_facet** [in] Local index of facet in polyhedron.

**return** the index of the adjacent polyhedron facet if it exists.

### is_polyhedron_facet_on_border

```cpp
public bool is_polyhedron_facet_on_border(const PolyhedronFacet & polyhedron_facet)
```


 Return true if the facet is on border, i.e. if the polyhedron has no adjacent through the specified facet.

**polyhedron_facet** [in] Local index of facet in polyhedron.

### is_polyhedron_on_border

```cpp
public bool is_polyhedron_on_border(index_t polyhedron_id)
```


 Return true if at least one polyhedron facet is on border

**polyhedron_id** [in] Index of a polyhedron

### is_edge_in_polyhedron_facet

```cpp
public bool is_edge_in_polyhedron_facet(const PolyhedronFacet & polyhedron_facet, const std::array<index_t, 2> & edge_vertices)
```


 Return true if the edge belongs to the facet

**polyhedron_facet** [in] Local index of facet in polyhedron.

**edge_vertices** [in] Indices of edge vertices.

### polyhedron_facets_on_border

```cpp
public PolyhedronFacetsOnBorder polyhedron_facets_on_border(index_t polyhedron_id)
```


 Return all the facets of a polyhedron that are on border

**polyhedron_id** [in] Index of a polyhedron

### edge_length

```cpp
public double edge_length(const std::array<index_t, 2> & edge_vertices)
```


 Return the length of a given edge.

**edge_vertices** [in] Indices of edge vertices.

### polyhedron_barycenter

```cpp
public Point<dimension> polyhedron_barycenter(index_t polyhedron_id)
```


 Return the barycenter of a polyhedron

**polyhedron_id** [in] Index of a polyhedron

### facet_barycenter

```cpp
public Point<dimension> facet_barycenter(const PolyhedronFacetVertices & facet_vertices)
```


 Return the barycenter coordinates of a given facet.

**facet_vertices** [in] Vertex indices of the facet.

### edge_barycenter

```cpp
public Point<dimension> edge_barycenter(const std::array<index_t, 2> & edge_vertices)
```


 Return the coordinates of the barycenter of a given edge.

**edge_vertices** [in] Indices of edge vertices.

### polyhedron_volume

```cpp
public double polyhedron_volume(index_t polyhedron_id)
```


 Return the volume of a given polyhedron.

**polyhedron_id** [in] Index of a polyhedron.

### polyhedron_facet_area

```cpp
public double polyhedron_facet_area(const PolyhedronFacet & polyhedron_facet)
```


 Return the area of a given PolyhedronFacet.

**polyhedron_facet** [in] Local index of facet in polyhedron.

### polyhedron_facet_normal

```cpp
public std::optional<Vector3D> polyhedron_facet_normal(const PolyhedronFacet & polyhedron_facet)
```


 Return the normal of a given PolyhedronFacet.

**polyhedron_facet** [in] Local index of facet in polyhedron.

### is_polyhedron_degenerated

```cpp
public bool is_polyhedron_degenerated(index_t polyhedron_id)
```


 Return if a polyhedron is degenerated (means stands into an epsilon-large plane)

### vertices_around_vertex

```cpp
public VerticesAroundVertex vertices_around_vertex(index_t vertex_id)
```


 Returns the vertices linked by an edge to the given mesh vertex.

### polyhedra_around_vertex

```cpp
public const PolyhedraAroundVertex & polyhedra_around_vertex(index_t vertex_id)
```


 Get all the polyhedra with one of the vertices matching given vertex.

**vertex_id** [in] Index of the vertex.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedra_around_vertex

```cpp
public const PolyhedraAroundVertex & polyhedra_around_vertex(const PolyhedronVertex & polyhedron_vertex)
```


 Get all the polyhedra with one of the vertices matching given polyhedron vertex.

**polyhedron_vertex** [in] Local index of vertex in polyhedron.

**pre** This function needs that polyhedron adjacencies are computed

### is_vertex_on_border

```cpp
public bool is_vertex_on_border(index_t vertex_id)
```


 Return true if at least one of the polyhedron facets around the vertex is on border.

**vertex_id** [in] Index of the vertex.

**pre** This function needs that polyhedron adjacencies are computed

### is_edge_on_border

```cpp
public bool is_edge_on_border(const std::array<index_t, 2> & vertices)
```


 Return true if at least one of the polyhedron facets around the edge is on border

**vertices** [in] Indices of edge vertices.

### is_edge_on_border

```cpp
public bool is_edge_on_border(const std::array<index_t, 2> & vertices, index_t first_polyhedron)
```


 Return true if at least one of the polyhedron facets around the edges is on border

**vertices** [in] Indices of edge vertices.

**first_polyhedron** [in] One polyhedron index to begin research

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const std::array<index_t, 2> & vertices)
```


 Get all the polyhedra with both edge vertices.

**vertices** [in] Indices of edge vertices.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const PolyhedronFacetEdge & edge)
```


 Get all the polyhedra around the edge.

**edge** [in] Local index of an edge in a polyhedron.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedron_around_edge

```cpp
public optional polyhedron_around_edge(const std::array<index_t, 2> & vertices)
```


 Get one polyhedron with both edge vertices.

**vertices** [in] Indices of edge vertices.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedra_around_edge

```cpp
public PolyhedraAroundEdge polyhedra_around_edge(const std::array<index_t, 2> & vertices, index_t first_polyhedron)
```


 Get all the polyhedra with both edge vertices.

**vertices** [in] Indices of edge vertices.

**first_polyhedron** [in] One polyhedron index to begin research.

**pre** This function needs that polyhedron adjacencies are computed

### polyhedra_from_facet_vertices

```cpp
public PolyhedraAroundFacet polyhedra_from_facet_vertices(InlinedVector facet_vertices)
```


 Return all polyhedra facets made with the given facet vertices.

**facet_vertices** [in] Vertex indices of the facet.

### edge_vertices_in_polyhedron

```cpp
public array edge_vertices_in_polyhedron(index_t polyhedron_id, const std::array<index_t, 2> & edge_vertices)
```


 Get the local indices in the polyhedra of both edge vertices.

**polyhedron_id** [in] Index of polyhedron.

**edge_vertices** [in] Global indices of the two edge vertices.

**details** If the vertices are not in the polyhedron, NO_LID is returned.

### are_edges_enabled

```cpp
public bool are_edges_enabled()
```


### enable_edges

```cpp
public void enable_edges()
```


### disable_edges

```cpp
public void disable_edges()
```


### edges

```cpp
public const SolidEdges<dimension> & edges()
```


### are_facets_enabled

```cpp
public bool are_facets_enabled()
```


### enable_facets

```cpp
public void enable_facets()
```


### disable_facets

```cpp
public void disable_facets()
```


### facets

```cpp
public const SolidFacets<dimension> & facets()
```


### polyhedron_attribute_manager

```cpp
public AttributeManager & polyhedron_attribute_manager()
```


 Access to the manager of attributes associated with polyhedra.

### texture_manager

```cpp
public TextureManager3D texture_manager()
```


### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```


 Compute the bounding box from mesh vertices

### polyhedron_around_vertex

```cpp
public std::optional<PolyhedronVertex> polyhedron_around_vertex(index_t vertex_id)
```


 Return one polyhedron with one of the vertices matching given vertex.

**vertex_id** [in] Index of the vertex.

### associate_polyhedron_vertex_to_vertex

```cpp
public void associate_polyhedron_vertex_to_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id, SolidMeshKey )
```


### reset_polyhedra_around_vertex

```cpp
public void reset_polyhedra_around_vertex(index_t vertex_id, SolidMeshKey )
```


### edges

```cpp
public SolidEdges<dimension> & edges(SolidMeshKey )
```


### copy_edges

```cpp
public void copy_edges(const SolidMesh<dimension> & solid, SolidMeshKey )
```


### facets

```cpp
public SolidFacets<dimension> & facets(SolidMeshKey )
```


### copy_facets

```cpp
public void copy_facets(const SolidMesh<dimension> & solid, SolidMeshKey )
```


### SolidMesh

```cpp
protected void SolidMesh<dimension>()
```


### SolidMesh

```cpp
protected void SolidMesh<dimension>(SolidMesh<dimension> && other)
```


### operator=

```cpp
protected SolidMesh<dimension> & operator=(SolidMesh<dimension> && other)
```




# class SolidMesh


```cpp
Inherits from VertexSet, CoordinateReferenceSystemManagers<3U>
```



