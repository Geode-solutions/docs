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

# class BlindedQualityBackgroundSolidOptimizer


```cpp
Inherits from BackgroundSolidShiftOptimizer
```



## Functions

### BlindedQualityBackgroundSolidOptimizer

```cpp
public void BlindedQualityBackgroundSolidOptimizer(const BlindedQualityBackgroundSolidOptimizer & )
```


### operator=

```cpp
public BlindedQualityBackgroundSolidOptimizer & operator=(const BlindedQualityBackgroundSolidOptimizer & )
```


### BlindedQualityBackgroundSolidOptimizer

```cpp
public void BlindedQualityBackgroundSolidOptimizer(BlindedQualityBackgroundSolidOptimizer && )
```


### operator=

```cpp
public BlindedQualityBackgroundSolidOptimizer & operator=(BlindedQualityBackgroundSolidOptimizer && )
```


### BlindedQualityBackgroundSolidOptimizer

```cpp
public void BlindedQualityBackgroundSolidOptimizer(BackgroundSolidConstraintModifier & constraint_modifier)
```


### ~BlindedQualityBackgroundSolidOptimizer

```cpp
public void ~BlindedQualityBackgroundSolidOptimizer()
```


### try_shift_vertex

```cpp
protected optional try_shift_vertex(const PolyhedronFacetEdge & edge, const class BackgroundSolidConstraintModifier::OrientedEdgeVertices & edge_vertices)
```


### process_vertex_vertex_configuration

```cpp
protected optional process_vertex_vertex_configuration(const PolyhedronFacetEdge & edge, index_t level)
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


### custom_skip_element

```cpp
protected bool custom_skip_element(const ElementStamp & element_stamp)
```




