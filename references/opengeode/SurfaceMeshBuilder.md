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

# class SurfaceMeshBuilder


```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<2U>
```



# class SurfaceMeshBuilder


 Interface class to represent the builder of a SurfaceMesh



```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### SurfaceMeshBuilder

```cpp
public void SurfaceMeshBuilder<dimension>(SurfaceMeshBuilder<dimension> && )
```


### ~SurfaceMeshBuilder

```cpp
public void ~SurfaceMeshBuilder<dimension>()
```


### create

```cpp
public std::unique_ptr<SurfaceMeshBuilder<dimension> > create(SurfaceMesh<dimension> & mesh)
```


 Create the builder associated with a SurfaceMesh.

**mesh** [in] The SurfaceMesh to build/modify

### edges_builder

```cpp
public SurfaceEdgesBuilder<dimension> edges_builder()
```


### create_point

```cpp
public index_t create_point(Point<dimension> point)
```


 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### create_polygon

```cpp
public index_t create_polygon(Span vertices)
```


 Create a new polygon from vertices.

**vertices** [in] The ordered vertices defining the polygon to create

**return** the index of the created polygon

### set_polygon_vertex

```cpp
public void set_polygon_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id)
```


 Modify a polygon vertex.

**polygon_vertex** [in] The index of the polygon vertex to modify

**vertex_id** [in] Index of the mesh vertex to set as polygon vertex

### replace_vertex

```cpp
public void replace_vertex(index_t old_vertex_id, index_t new_vertex_id)
```


 Replace old polygon vertices from a given vertex to another.

**old_vertex_id** [in] Index of the initial mesh vertex to modify

**new_vertex_id** [in] Index of the target mesh vertex to set as polygon vertex

### set_polygon_adjacent

```cpp
public void set_polygon_adjacent(const PolygonEdge & polygon_edge, index_t adjacent_id)
```


 Set a polygon adjacent through an edge.

**polygon_edge** [in] The index of the polygon edge

**adjacent_id** [in] Index of the adjacent polygon

### unset_polygon_adjacent

```cpp
public void unset_polygon_adjacent(const PolygonEdge & polygon_edge)
```


 Unset a polygon adjacency through an edge.

**polygon_edge** [in] The index of the polygon edge

### compute_polygon_adjacencies

```cpp
public void compute_polygon_adjacencies()
```


 Compute all the adjacencies between the surface polygons

### compute_polygon_adjacencies

```cpp
public void compute_polygon_adjacencies(Span polygons_to_connect)
```


 Compute the adjacencies between the given surface polygons

**polygons_to_connect** [in] Set of polygons for which compute adjacencies

### delete_polygons

```cpp
public vector delete_polygons(const std::vector<bool> & to_delete)
```


 Delete a set of surface polygons

**to_delete** [in] Vector of size surface_mesh_.nb_polygons(). If to_delete[i] is true the polygon of index i is deleted, else it is kept.

**return** the mapping between old polygon indices to new ones. Deleted polygons new index is NO_ID

### permute_polygons

```cpp
public vector permute_polygons(Span permutation)
```


 Permute polygons to match the given order.

**permutation** [in] Vector of size surface_mesh_.nb_polygons(). Each value corresponds to the destination position.

**return** the mapping between old polygon indices to new ones.

### delete_isolated_vertices

```cpp
public vector delete_isolated_vertices()
```


 Delete all the isolated vertices (not used as polygon vertices)

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID

### associate_polygon_vertex_to_vertex

```cpp
public void associate_polygon_vertex_to_vertex(const PolygonVertex & polygon_vertex, index_t vertex_id)
```


 Set a polygon vertex to a given vertex.

**polygon_vertex** [in] PolygonVertex corresponding to the vertex.

**vertex_id** [in] Index of the vertex.

### disassociate_polygon_vertex_to_vertex

```cpp
public void disassociate_polygon_vertex_to_vertex(index_t vertex_id)
```


Unset polygon vertex information to a given vertex.

**vertex_id** [in] Index of the vertex.

### reset_polygons_around_vertex

```cpp
public void reset_polygons_around_vertex(index_t vertex_id)
```


### copy

```cpp
public void copy(const SurfaceMesh<dimension> & surface_mesh)
```


### SurfaceMeshBuilder

```cpp
protected void SurfaceMeshBuilder<dimension>(SurfaceMesh<dimension> & mesh)
```




# class SurfaceMeshBuilder


```cpp
Inherits from VertexSetBuilder, CoordinateReferenceSystemManagersBuilder<3U>
```



