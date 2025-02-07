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

# class SolidMeshBuilder


 Interface class to represent the builder of a SolidMesh



```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### SolidMeshBuilder

```cpp
public void SolidMeshBuilder<>(SolidMeshBuilder<> && )
```


### ~SolidMeshBuilder

```cpp
public void ~SolidMeshBuilder<>()
```


### create

```cpp
public std::unique_ptr<SolidMeshBuilder<dimension> > create(SolidMesh<dimension> & mesh)
```


 Create the builder associated with a SolidMesh.

**mesh** [in] The SolidMesh to build/modify

### edges_builder

```cpp
public SolidEdgesBuilder<dimension> edges_builder()
```


### facets_builder

```cpp
public SolidFacetsBuilder<dimension> facets_builder()
```


### create_point

```cpp
public index_t create_point(Point<dimension> point)
```


 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### create_polyhedron

```cpp
public index_t create_polyhedron(Span vertices, Span facets)
```


 Create a new polyhedron from vertices and facets.

**vertices** [in] The vertices defining the polyhedron to create

**facets** [in] The list of ordered vertices defining all the facets of the polyhedron

**return** the index of the created polyhedron

### set_polyhedron_vertex

```cpp
public void set_polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id)
```


 Modify a polyhedron vertex.

**polyhedron_vertex** [in] The index of the polyhedron vertex to modify

**vertex_id** [in] Index of the mesh vertex to set as polyhedron vertex

### replace_vertex

```cpp
public void replace_vertex(index_t old_vertex_id, index_t new_vertex_id)
```


 Replace old polygon vertices from a given vertex to another.

**old_vertex_id** [in] Index of the initial mesh vertex to modify

**new_vertex_id** [in] Index of the target mesh vertex to set as polyhedron vertex

### set_polyhedron_adjacent

```cpp
public void set_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet, index_t adjacent_id)
```


 Set a polyhedron adgjacent through a facet.

**polygon_facet** [in] The index of the polygon facet

**adjacent_id** [in] Index of the adjacent polyhedron

### unset_polyhedron_adjacent

```cpp
public void unset_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```


 Unset a polyhedron adjacency through a facet.



**polygon_facet** [in] The index of the polygon facet

### compute_polyhedron_adjacencies

```cpp
public void compute_polyhedron_adjacencies()
```


 Compute all the adjacencies between the solid polyhedra

### compute_polyhedron_adjacencies

```cpp
public void compute_polyhedron_adjacencies(Span polyhedra_to_connect)
```


 Compute the adjacencies between the given solid polyhedra

**polyhedra_to_connect** [in] Set of polyhedra for which compute adjacencies

### delete_polyhedra

```cpp
public vector delete_polyhedra(const std::vector<bool> & to_delete)
```


 Delete a set of solid polyhedra

**to_delete** [in] Vector of size solid_mesh_.nb_polyhedra(). If to_delete[i] is true the polyhedra of index i is deleted, else it is kept.

**return** the mapping between old polyhedron indices to new ones. Deleted polyhedra new index is NO_ID

### permute_polyhedra

```cpp
public vector permute_polyhedra(Span permutation)
```


 Permute polyhedra to match the given order.

**permutation** [in] Vector of size solid_mesh_.nb_polyhedra(). Each value corresponds to the destination position.

**return** the mapping between old polyhedron indices to new ones.

### delete_isolated_vertices

```cpp
public vector delete_isolated_vertices()
```


 Delete all the isolated vertices (not used as polyhedron vertices)

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID

### associate_polyhedron_vertex_to_vertex

```cpp
public void associate_polyhedron_vertex_to_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id)
```


 Set a polyhedron vertex to a given vertex.

**polyhedron_vertex** [in] PolyhedronVertex corresponding to the vertex.

**vertex_id** [in] Index of the vertex.

### disassociate_polyhedron_vertex_to_vertex

```cpp
public void disassociate_polyhedron_vertex_to_vertex(index_t vertex_id)
```


 Unset polyhedron vertex information to a given vertex.

**vertex_id** [in] Index of the vertex.

### reset_polyhedra_around_vertex

```cpp
public void reset_polyhedra_around_vertex(index_t vertex_id)
```


### copy

```cpp
public void copy(const SolidMesh<dimension> & solid_mesh)
```


### SolidMeshBuilder

```cpp
protected void SolidMeshBuilder<>(SolidMesh<dimension> & mesh)
```


### update_polyhedron_info

```cpp
protected void update_polyhedron_info(index_t polyhedron_id, Span vertices)
```




# class SolidMeshBuilder


```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<3U>
```



