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

# class TriangulatedSurfaceShiftOptimizer


```cpp
Inherits from TriangulatedSurfaceOptimizer<3U>
```



# class TriangulatedSurfaceShiftOptimizer


```cpp
Inherits from TriangulatedSurfaceOptimizer<2U>
```



# class TriangulatedSurfaceShiftOptimizer


```cpp
Inherits from TriangulatedSurfaceOptimizer<dimension>
```



## Functions

### TriangulatedSurfaceShiftOptimizer

```cpp
public void TriangulatedSurfaceShiftOptimizer<dimension>(const TriangulatedSurfaceShiftOptimizer<dimension> & )
```


### operator=

```cpp
public TriangulatedSurfaceShiftOptimizer<dimension> & operator=(const TriangulatedSurfaceShiftOptimizer<dimension> & )
```


### TriangulatedSurfaceShiftOptimizer

```cpp
public void TriangulatedSurfaceShiftOptimizer<dimension>(TriangulatedSurfaceShiftOptimizer<dimension> && )
```


### operator=

```cpp
public TriangulatedSurfaceShiftOptimizer<dimension> & operator=(TriangulatedSurfaceShiftOptimizer<dimension> && )
```


### TriangulatedSurfaceShiftOptimizer

```cpp
public void TriangulatedSurfaceShiftOptimizer<dimension>(TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator<dimension> & improvement_simulator)
```


### ~TriangulatedSurfaceShiftOptimizer

```cpp
public void ~TriangulatedSurfaceShiftOptimizer<dimension>()
```


### process_edge_vertex_configuration

```cpp
protected optional process_edge_vertex_configuration(const PolygonEdge & edge, index_t level)
```




