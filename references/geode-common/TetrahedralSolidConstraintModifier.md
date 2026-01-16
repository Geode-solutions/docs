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

# class TetrahedralSolidConstraintModifier


```cpp
Inherits from ConstraintModifier
```



## Records

Constraints



## Functions

### TetrahedralSolidConstraintModifier

```cpp
public void TetrahedralSolidConstraintModifier(const TetrahedralSolidConstraintModifier & )
```


### operator=

```cpp
public TetrahedralSolidConstraintModifier & operator=(const TetrahedralSolidConstraintModifier & )
```


### TetrahedralSolidConstraintModifier

```cpp
public void TetrahedralSolidConstraintModifier(ModifiableObject solid, Constraints constraints)
```


### TetrahedralSolidConstraintModifier

```cpp
public void TetrahedralSolidConstraintModifier(TetrahedralSolidConstraintModifier && other)
```


### operator=

```cpp
public TetrahedralSolidConstraintModifier & operator=(TetrahedralSolidConstraintModifier && other)
```


### ~TetrahedralSolidConstraintModifier

```cpp
public void ~TetrahedralSolidConstraintModifier()
```


### modifiable_solid

```cpp
public const ModifiableTetrahedralSolid & modifiable_solid()
```


### modifiable_solid

```cpp
public ModifiableTetrahedralSolid & modifiable_solid()
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
public vector swap_edge(const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### split_facet

```cpp
public SplitInfo split_facet(const PolyhedronFacet & facet, const Point3D & point)
```


### swap_facet

```cpp
public vector swap_facet(const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### split_collapse_edge

```cpp
public SplitInfo split_collapse_edge(const PolyhedronFacetEdge & edge, index_t apex, const Point3D & point, const std::optional<SolidEdgeTShape> & tshape)
```


### split_collapse_facet

```cpp
public SplitInfo split_collapse_facet(const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### split_collapse_facet

```cpp
public SplitInfo split_collapse_facet(const PolyhedronFacet & facet, const Point3D & point, const std::optional<PolyhedronVertex> & tshape_apex)
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


### do_swap_edge

```cpp
protected std::tuple<TetrahedralSolidModifier::SwapEdgeInfo, std::vector<index_t> > do_swap_edge(const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### do_remove_triple_adjacency

```cpp
protected RemoveAdjacencyInfo do_remove_triple_adjacency(const PolyhedronVertex & vertex, bool keep_vertex)
```




