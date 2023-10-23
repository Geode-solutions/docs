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

# class BackgroundSolidModifier


```cpp
Inherits from BackgroundSolidBuilder, TetrahedralSolidModifier
```



## Functions

### BackgroundSolidModifier

```cpp
public void BackgroundSolidModifier(BackgroundSolid & mesh)
```


### ~BackgroundSolidModifier

```cpp
public void ~BackgroundSolidModifier()
```


### split_tetrahedron

```cpp
public SolidSplitInfo split_tetrahedron(index_t tetrahedron_id, const Point3D & point)
```


### split_facet

```cpp
public SolidSplitInfo split_facet(const PolyhedronFacet & facet, const Point3D & point)
```


### split_edge

```cpp
public SolidSplitEdgeInfo split_edge(index_t edge_id, const Point3D & point)
```


### split_edge

```cpp
public SolidSplitEdgeInfo split_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```


### collapse_edge

```cpp
public SolidCollapseEdgeInfo collapse_edge(index_t edge_id, const Point3D & point)
```


### collapse_edge

```cpp
public SolidCollapseEdgeInfo collapse_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```


### swap_facet

```cpp
public SolidSwapFacetInfo swap_facet(const PolyhedronFacet & facet)
```


### swap_edge

```cpp
public SolidSwapEdgeInfo swap_edge(const PolyhedronFacetEdge & edge, index_t apex)
```


### set_updated_vertex

```cpp
public void set_updated_vertex(const VertexMultiMapping & mapping)
```


### clean_background_solid

```cpp
public void clean_background_solid()
```




