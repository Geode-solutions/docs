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

# class BRepOptimizer


```cpp
Inherits from BRepInternalDistanceOptimizer
```



## Functions

### BRepOptimizer

```cpp
public void BRepOptimizer(const BRepOptimizer & )
```


### operator=

```cpp
public BRepOptimizer & operator=(const BRepOptimizer & )
```


### BRepOptimizer

```cpp
public void BRepOptimizer(BRepOptimizer && )
```


### operator=

```cpp
public BRepOptimizer & operator=(BRepOptimizer && )
```


### ~BRepOptimizer

```cpp
public void ~BRepOptimizer()
```


### BRepOptimizer

```cpp
public void BRepOptimizer(BRepGeometricConstraintModifier & constraint_modifier, const BRepInternalDistanceImprovementSimulator & improvement_simulator)
```


### process_vertex_vertex_configuration

```cpp
protected optional process_vertex_vertex_configuration(const Block3D & block, const PolyhedronFacetEdge & edge, index_t level)
```


### process_edge_vertex_configuration

```cpp
protected optional process_edge_vertex_configuration(const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, index_t level)
```


### process_facet_vertex_configuration

```cpp
protected optional process_facet_vertex_configuration(const Block3D & block, const PolyhedronFacet & facet, index_t level)
```


### process_edge_edge_configuration

```cpp
protected optional process_edge_edge_configuration(const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, index_t level)
```




