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
Inherits from TriangulatedSurfaceShiftOptimizer2D
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
public void BackgroundSurfaceShiftOptimizer(BackgroundSurfaceConstraintModifier & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator2D & improvement_simulator)
```


### ~BackgroundSurfaceShiftOptimizer

```cpp
public void ~BackgroundSurfaceShiftOptimizer()
```




