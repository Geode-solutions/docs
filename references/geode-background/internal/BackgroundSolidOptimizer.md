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

# class BackgroundSolidOptimizer


```cpp
Inherits from BackgroundSolidInternalDistanceOptimizer
```



## Functions

### BackgroundSolidOptimizer

```cpp
public void BackgroundSolidOptimizer(const BackgroundSolidOptimizer & )
```


### operator=

```cpp
public BackgroundSolidOptimizer & operator=(const BackgroundSolidOptimizer & )
```


### BackgroundSolidOptimizer

```cpp
public void BackgroundSolidOptimizer(BackgroundSolidOptimizer && )
```


### operator=

```cpp
public BackgroundSolidOptimizer & operator=(BackgroundSolidOptimizer && )
```


### BackgroundSolidOptimizer

```cpp
public void BackgroundSolidOptimizer(BackgroundSolidConstraintModifier & constraint_modifier, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### ~BackgroundSolidOptimizer

```cpp
public void ~BackgroundSolidOptimizer()
```


### process_vertex_vertex_configuration

```cpp
protected optional process_vertex_vertex_configuration(const PolyhedronFacetEdge & edge, index_t level)
```


### process_triple_adjacency_configuration

```cpp
protected optional process_triple_adjacency_configuration(const PolyhedronVertex & vertex, index_t level)
```


### process_double_adjacency_configuration

```cpp
protected optional process_double_adjacency_configuration(const PolyhedronFacetEdge & edge, index_t level)
```


### process_edge_vertex_configuration

```cpp
protected optional process_edge_vertex_configuration(const PolyhedronFacetEdge & edge, index_t apex, index_t level)
```


### process_facet_vertex_configuration

```cpp
protected optional process_facet_vertex_configuration(const PolyhedronFacet & facet, index_t level)
```


### process_edge_edge_configuration

```cpp
protected optional process_edge_edge_configuration(const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, index_t level)
```


### try_shift_vertex

```cpp
protected optional try_shift_vertex(const PolyhedronFacetEdge & edge, const class BackgroundSolidConstraintModifier::OrientedEdgeVertices & edge_vertices)
```




