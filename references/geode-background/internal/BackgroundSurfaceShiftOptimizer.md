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

# class BackgroundSurfaceShiftOptimizer


```cpp
Inherits from BackgroundSurfaceOptimizer
```



## Functions

### BackgroundSurfaceShiftOptimizer

```cpp
public void BackgroundSurfaceShiftOptimizer(const BackgroundSurfaceShiftOptimizer & )
```


### operator=

```cpp
public BackgroundSurfaceShiftOptimizer & operator=(const BackgroundSurfaceShiftOptimizer & )
```


### BackgroundSurfaceShiftOptimizer

```cpp
public void BackgroundSurfaceShiftOptimizer(BackgroundSurfaceShiftOptimizer && )
```


### operator=

```cpp
public BackgroundSurfaceShiftOptimizer & operator=(BackgroundSurfaceShiftOptimizer && )
```


### BackgroundSurfaceShiftOptimizer

```cpp
public void BackgroundSurfaceShiftOptimizer(BackgroundSurfaceConstraintModifier & constraint_modifier, const BackgroundSurfaceInternalDistanceImprovementSimulator & improvement_simulator)
```


### ~BackgroundSurfaceShiftOptimizer

```cpp
public void ~BackgroundSurfaceShiftOptimizer()
```


### process_vertex_vertex_configuration

```cpp
protected optional process_vertex_vertex_configuration(const PolygonEdge & edge, index_t level)
```




