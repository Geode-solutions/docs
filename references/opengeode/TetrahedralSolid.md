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

# class TetrahedralSolid


```cpp
Inherits from SolidMesh<3U>
```



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


### polyhedron_edges

```cpp
public std::array<PolyhedronFacetEdge, 6> polyhedron_edges(index_t polyhedron)
```


### polyhedron_facets_vertices

```cpp
public PolyhedronFacetsVertices polyhedron_facets_vertices(index_t polyhedron)
```


### polyhedron_facets_local_vertices

```cpp
public PolyhedronFacetsLocalVertices polyhedron_facets_local_vertices(index_t polyhedron)
```


### vertices_around_vertex

```cpp
public typename SolidMesh<dimension>::VerticesAroundVertex vertices_around_vertex(index_t vertex_id)
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
public std::optional<PolyhedronFacet> polyhedron_adjacent_facet(const PolyhedronFacet & polyhedron_facet)
```


### opposite_edge_vertices

```cpp
public array opposite_edge_vertices(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
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




