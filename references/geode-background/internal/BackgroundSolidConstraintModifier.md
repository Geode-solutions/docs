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

# class BackgroundSolidConstraintModifier


## Records

Constraints

OrientedEdgeVertices

CollapseEdgeInfo

SplitInfo

RemoveAdjacencyInfo



## Functions

### BackgroundSolidConstraintModifier

```cpp
public void BackgroundSolidConstraintModifier(const BackgroundSolidConstraintModifier & )
```


### operator=

```cpp
public BackgroundSolidConstraintModifier & operator=(const BackgroundSolidConstraintModifier & )
```


### BackgroundSolidConstraintModifier

```cpp
public void BackgroundSolidConstraintModifier(ModifiableObject solid, BackgroundSolidBuilder & builder, Constraints constraints)
```


### BackgroundSolidConstraintModifier

```cpp
public void BackgroundSolidConstraintModifier(BackgroundSolidConstraintModifier && other)
```


### operator=

```cpp
public BackgroundSolidConstraintModifier & operator=(BackgroundSolidConstraintModifier && other)
```


### ~BackgroundSolidConstraintModifier

```cpp
public void ~BackgroundSolidConstraintModifier()
```


### solid

```cpp
public const ModifiableBackgroundSolid & solid()
```


### solid

```cpp
public ModifiableBackgroundSolid & solid()
```


### constraints

```cpp
public const Constraints & constraints()
```


### constraints

```cpp
public Constraints & constraints()
```


### collapse_edge

```cpp
public CollapseEdgeInfo collapse_edge(const PolyhedronFacetEdge & edge, const OrientedEdgeVertices & edge_vertices)
```


### split_edge

```cpp
public SplitInfo split_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```


### swap_edge

```cpp
public vector swap_edge(const PolyhedronFacetEdge & edge, index_t apex)
```


### split_facet

```cpp
public SplitInfo split_facet(const PolyhedronFacet & facet, const Point3D & point)
```


### swap_facet

```cpp
public array swap_facet(const PolyhedronFacet & facet)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex, const Point3D & point)
```


### split_collapse_facet

```cpp
public SplitInfo split_collapse_facet(const PolyhedronFacet & facet)
```


### split_collapse_facet

```cpp
public SplitInfo split_collapse_facet(const PolyhedronFacet & facet, const Point3D & point)
```


### split_split_collapse

```cpp
public SplitInfo split_split_collapse(const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point)
```


### remove_triple_adjacency

```cpp
public RemoveAdjacencyInfo remove_triple_adjacency(const PolyhedronVertex & vertex)
```


### remove_double_adjacency

```cpp
public RemoveAdjacencyInfo remove_double_adjacency(const PolyhedronFacetEdge & edge)
```




