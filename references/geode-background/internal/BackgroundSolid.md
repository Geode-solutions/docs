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

# class BackgroundSolid


```cpp
Inherits from ElementSearch<TetrahedralSolid3D>, MacroInfo3D
```



## Functions

### BackgroundSolid

```cpp
public void BackgroundSolid(const TetrahedralSolid3D & solid)
```


### BackgroundSolid

```cpp
public void BackgroundSolid(BackgroundSolid && other)
```


### ~BackgroundSolid

```cpp
public void ~BackgroundSolid()
```


### solid

```cpp
public const TetrahedralSolid3D & solid()
```


### clone

```cpp
public std::tuple<std::unique_ptr<TetrahedralSolid3D>, std::unique_ptr<BackgroundSolid> > clone()
```


### clone_solid

```cpp
public std::unique_ptr<TetrahedralSolid3D> clone_solid()
```


### edge_has_incident_macro_facet

```cpp
public bool edge_has_incident_macro_facet(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```


### edge_incident_macro_facets

```cpp
public flat_hash_map edge_incident_macro_facets(const std::array<index_t, 2> & edge_vertices)
```


### one_border_polyhedron_facet

```cpp
public PolyhedronFacet one_border_polyhedron_facet()
```


### edge_vertices

```cpp
public const std::array<index_t, 2> & edge_vertices(index_t edge_id)
```


### macro_edge_path

```cpp
public std::optional<std::vector<OrientedEdge> > macro_edge_path(const std::array<index_t, 2> & edge_vertices, const MeshEdge & macro_edge)
```


### macro_facet_patch

```cpp
public std::optional<std::vector<index_t> > macro_facet_patch(Span boundary_edges, const MeshPolygon & macro_facet)
```




