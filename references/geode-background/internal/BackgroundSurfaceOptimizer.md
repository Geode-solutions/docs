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

# class BackgroundSurfaceOptimizer


```cpp
Inherits from BackgroundSurfaceInternalDistanceOptimizer
```



## Functions

### BackgroundSurfaceOptimizer

```cpp
public void BackgroundSurfaceOptimizer(const BackgroundSurfaceOptimizer & )
```


### operator=

```cpp
public BackgroundSurfaceOptimizer & operator=(const BackgroundSurfaceOptimizer & )
```


### BackgroundSurfaceOptimizer

```cpp
public void BackgroundSurfaceOptimizer(BackgroundSurfaceOptimizer && )
```


### operator=

```cpp
public BackgroundSurfaceOptimizer & operator=(BackgroundSurfaceOptimizer && )
```


### BackgroundSurfaceOptimizer

```cpp
public void BackgroundSurfaceOptimizer(BackgroundSurfaceConstraintModifier & constraint_modifier, const BackgroundSurfaceImprovementSimulator & improvement_simulator)
```


### ~BackgroundSurfaceOptimizer

```cpp
public void ~BackgroundSurfaceOptimizer()
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




