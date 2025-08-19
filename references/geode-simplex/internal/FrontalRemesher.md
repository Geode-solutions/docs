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

# class FrontalRemesher


```cpp
Inherits from RemeshAlgo<dimension>
```



## Records

MacroEdge

Apex



## Functions

### FrontalRemesher

```cpp
public void FrontalRemesher<>(const TriangulatedSurface<dimension> & background_mesh, TriangulatedSurfaceBuilder<dimension> & background_builder, TriangulatedSurfaceEpsilonModifier<dimension> & background_modifier, const Metric<dimension> & metric, Span lock_vertices)
```


### ~FrontalRemesher

```cpp
public void ~FrontalRemesher<>()
```


### remesh

```cpp
public RemeshedSurface<dimension> remesh()
```


### background_mesh

```cpp
public const TriangulatedSurface<dimension> & background_mesh()
```


### is_macro_vertex

```cpp
public bool is_macro_vertex(index_t vertex)
```


### is_edge_on_macro_edge

```cpp
public bool is_edge_on_macro_edge(const PolygonEdge & edge)
```


### is_edge_on_macro_edge

```cpp
public bool is_edge_on_macro_edge(index_t macro_edge_id, const PolygonEdge & edge)
```


### is_macro_triangle

```cpp
public bool is_macro_triangle(index_t triangle)
```


### macro_edge_vertices

```cpp
public pair macro_edge_vertices(index_t macro_edge)
```


### active_macro_edges

```cpp
public vector active_macro_edges(const PolygonEdge & edge)
```


### all_macro_edges

```cpp
public vector all_macro_edges(const PolygonEdge & edge)
```


### last_macro_edge_id

```cpp
public index_t last_macro_edge_id(const PolygonEdge & edge)
```


### find_edges_around_vertex_on_macro_edge

```cpp
public absl::InlinedVector<OrientedPolygonEdge, 4> find_edges_around_vertex_on_macro_edge(index_t macro_edge_id, index_t vertex)
```


### find_next_edge_on_macro_edge

```cpp
public std::optional<OrientedPolygonEdge> find_next_edge_on_macro_edge(const OrientedPolygonEdge & edge, index_t macro_edge_id)
```


### macro_edge_path

```cpp
public vector macro_edge_path(index_t start, index_t end, index_t macro_edge_id)
```


### last_active_macro_edge_id

```cpp
public optional last_active_macro_edge_id(const PolygonEdge & edge, index_t me)
```


### should_snap_on_macro_edge

```cpp
protected std::optional<std::tuple<Point<dimension>, index_t> > should_snap_on_macro_edge(index_t triangle_id, const Point<dimension> & point)
```




# class FrontalRemesher


```cpp
Inherits from RemeshAlgo<3U>
```



# class FrontalRemesher


```cpp
Inherits from RemeshAlgo<2U>
```



