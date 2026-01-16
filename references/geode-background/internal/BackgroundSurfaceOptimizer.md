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
Inherits from TriangulatedSurfaceOptimizer2D
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
public void BackgroundSurfaceOptimizer(BackgroundSurfaceConstraintModifier & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator2D & improvement_simulator)
```


### ~BackgroundSurfaceOptimizer

```cpp
public void ~BackgroundSurfaceOptimizer()
```




