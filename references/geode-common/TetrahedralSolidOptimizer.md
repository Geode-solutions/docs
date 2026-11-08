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

# class TetrahedralSolidOptimizer


```cpp
Inherits from TetrahedralSolidInternalDistanceOptimizer
```



## Functions

### TetrahedralSolidOptimizer

```cpp
public void TetrahedralSolidOptimizer(const TetrahedralSolidOptimizer & )
```


### TetrahedralSolidOptimizer

```cpp
public void TetrahedralSolidOptimizer(TetrahedralSolidOptimizer && )
```


### operator=

```cpp
public TetrahedralSolidOptimizer & operator=(const TetrahedralSolidOptimizer & )
```


### operator=

```cpp
public TetrahedralSolidOptimizer & operator=(TetrahedralSolidOptimizer && )
```


### TetrahedralSolidOptimizer

```cpp
public void TetrahedralSolidOptimizer(TetrahedralSolidConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator)
```


### ~TetrahedralSolidOptimizer

```cpp
public void ~TetrahedralSolidOptimizer()
```


### try_multi_face_removal

```cpp
protected std::optional<ProcessElementResult> try_multi_face_removal(index_t tetrahedron_id)
```


 Multi-face removal (TetrahedralSolidModifier::swap_facets) seeded at each facet of the tetrahedron, the facets chosen by the dynamic programming of Shewchuk ("Two Discrete Optimization Algorithms for the Topological Improvement of Tetrahedral Meshes", 2002) to maximize the worst metric of the new tetrahedra. The best one that improves the metric and is allowed (allowed_swap_facets) is applied. Not called by the optimizer itself: a derived optimizer calls it from the configuration processing where it is useful. The edge-edge tetrahedra are slivers (flat, with two almost crossing edges): no single face swap is valid on them, but a multi-face removal can add an edge between the apexes on both sides of the sliver, so a call from process_edge_edge_configuration, after the base one failed, improves them. It costs time (about 20% more on large meshes). A derived optimizer whose modifier or constraints differ from the TetrahedralSolid ones should override allowed_swap_facets and handle TetrahedralSolidModifier::swap_facets before calling it.

### process_vertex_vertex_configuration

```cpp
protected std::optional<ProcessElementResult> process_vertex_vertex_configuration(const PolyhedronFacetEdge & edge, index_t level)
```


### process_triple_adjacency_configuration

```cpp
protected std::optional<ProcessElementResult> process_triple_adjacency_configuration(const PolyhedronVertex & vertex, index_t level)
```


### process_double_adjacency_configuration

```cpp
protected std::optional<ProcessElementResult> process_double_adjacency_configuration(const PolyhedronFacetEdge & edge, index_t level)
```


### process_edge_vertex_configuration

```cpp
protected std::optional<ProcessElementResult> process_edge_vertex_configuration(const PolyhedronFacetEdge & edge, index_t apex, index_t level)
```


### process_facet_vertex_configuration

```cpp
protected std::optional<ProcessElementResult> process_facet_vertex_configuration(const PolyhedronFacet & facet, index_t level)
```


### process_edge_edge_configuration

```cpp
protected std::optional<ProcessElementResult> process_edge_edge_configuration(const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, index_t level)
```




