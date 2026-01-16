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

# class TriangulatedSurfaceInternalDistanceOptimizer


```cpp
Inherits from TriangulatedSurfaceOrchestrator<dimension, index_t>
```



## Functions

### TriangulatedSurfaceInternalDistanceOptimizer

```cpp
public void TriangulatedSurfaceInternalDistanceOptimizer<dimension>(const TriangulatedSurfaceInternalDistanceOptimizer<dimension> & )
```


### operator=

```cpp
public TriangulatedSurfaceInternalDistanceOptimizer<dimension> & operator=(const TriangulatedSurfaceInternalDistanceOptimizer<dimension> & )
```


### TriangulatedSurfaceInternalDistanceOptimizer

```cpp
public void TriangulatedSurfaceInternalDistanceOptimizer<dimension>(TriangulatedSurfaceInternalDistanceOptimizer<dimension> && )
```


### operator=

```cpp
public TriangulatedSurfaceInternalDistanceOptimizer<dimension> & operator=(TriangulatedSurfaceInternalDistanceOptimizer<dimension> && )
```


### ~TriangulatedSurfaceInternalDistanceOptimizer

```cpp
public void ~TriangulatedSurfaceInternalDistanceOptimizer<dimension>()
```


### TriangulatedSurfaceInternalDistanceOptimizer

```cpp
protected void TriangulatedSurfaceInternalDistanceOptimizer<dimension>(TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator<dimension> & improvement_simulator)
```




# class TriangulatedSurfaceInternalDistanceOptimizer


```cpp
Inherits from TriangulatedSurfaceOrchestrator<3U, index_t>
```



# class TriangulatedSurfaceInternalDistanceOptimizer


```cpp
Inherits from TriangulatedSurfaceOrchestrator<2U, index_t>
```



