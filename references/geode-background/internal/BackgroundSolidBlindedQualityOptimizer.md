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

# class BackgroundSolidBlindedQualityOptimizer


```cpp
Inherits from BackgroundSolidShiftOptimizer
```



## Functions

### BackgroundSolidBlindedQualityOptimizer

```cpp
public void BackgroundSolidBlindedQualityOptimizer(const BackgroundSolidBlindedQualityOptimizer & )
```


### operator=

```cpp
public BackgroundSolidBlindedQualityOptimizer & operator=(const BackgroundSolidBlindedQualityOptimizer & )
```


### BackgroundSolidBlindedQualityOptimizer

```cpp
public void BackgroundSolidBlindedQualityOptimizer(BackgroundSolidBlindedQualityOptimizer && )
```


### operator=

```cpp
public BackgroundSolidBlindedQualityOptimizer & operator=(BackgroundSolidBlindedQualityOptimizer && )
```


### BackgroundSolidBlindedQualityOptimizer

```cpp
public void BackgroundSolidBlindedQualityOptimizer(BackgroundSolidConstraintModifier & constraint_modifier, const BackgroundSolidInternalDistanceImprovementSimulator & improvement_simulator)
```


### ~BackgroundSolidBlindedQualityOptimizer

```cpp
public void ~BackgroundSolidBlindedQualityOptimizer()
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




