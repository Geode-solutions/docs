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

# class TetrahedralSolidShiftOptimizer


```cpp
Inherits from TetrahedralSolidOptimizer
```



## Functions

### TetrahedralSolidShiftOptimizer

```cpp
public void TetrahedralSolidShiftOptimizer(const TetrahedralSolidShiftOptimizer & )
```


### operator=

```cpp
public TetrahedralSolidShiftOptimizer & operator=(const TetrahedralSolidShiftOptimizer & )
```


### TetrahedralSolidShiftOptimizer

```cpp
public void TetrahedralSolidShiftOptimizer(TetrahedralSolidShiftOptimizer && )
```


### operator=

```cpp
public TetrahedralSolidShiftOptimizer & operator=(TetrahedralSolidShiftOptimizer && )
```


### TetrahedralSolidShiftOptimizer

```cpp
public void TetrahedralSolidShiftOptimizer(TetrahedralSolidConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator)
```


### ~TetrahedralSolidShiftOptimizer

```cpp
public void ~TetrahedralSolidShiftOptimizer()
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




