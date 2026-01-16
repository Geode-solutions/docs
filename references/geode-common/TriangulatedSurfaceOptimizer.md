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

# class TriangulatedSurfaceOptimizer


```cpp
Inherits from TriangulatedSurfaceInternalDistanceOptimizer<3U>
```



# class TriangulatedSurfaceOptimizer


```cpp
Inherits from TriangulatedSurfaceInternalDistanceOptimizer<2U>
```



# class TriangulatedSurfaceOptimizer


```cpp
Inherits from TriangulatedSurfaceInternalDistanceOptimizer<dimension>
```



## Functions

### TriangulatedSurfaceOptimizer

```cpp
public void TriangulatedSurfaceOptimizer<dimension>(const TriangulatedSurfaceOptimizer<dimension> & )
```


### operator=

```cpp
public TriangulatedSurfaceOptimizer<dimension> & operator=(const TriangulatedSurfaceOptimizer<dimension> & )
```


### TriangulatedSurfaceOptimizer

```cpp
public void TriangulatedSurfaceOptimizer<dimension>(TriangulatedSurfaceOptimizer<dimension> && )
```


### operator=

```cpp
public TriangulatedSurfaceOptimizer<dimension> & operator=(TriangulatedSurfaceOptimizer<dimension> && )
```


### TriangulatedSurfaceOptimizer

```cpp
public void TriangulatedSurfaceOptimizer<dimension>(TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator<dimension> & improvement_simulator)
```


### ~TriangulatedSurfaceOptimizer

```cpp
public void ~TriangulatedSurfaceOptimizer<dimension>()
```


### process_vertex_vertex_configuration

```cpp
protected optional process_vertex_vertex_configuration(const PolygonEdge & edge, index_t level)
```


### process_double_adjacency_configuration

```cpp
protected optional process_double_adjacency_configuration(index_t vertex, index_t level)
```


### process_edge_vertex_configuration

```cpp
protected optional process_edge_vertex_configuration(const PolygonEdge & edge, index_t level)
```




