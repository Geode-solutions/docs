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

# class BackgroundSurfaceInternalDistanceOptimizer


```cpp
Inherits from BackgroundSurfaceOrchestrator<index_t>
```



## Functions

### BackgroundSurfaceInternalDistanceOptimizer

```cpp
public void BackgroundSurfaceInternalDistanceOptimizer(const BackgroundSurfaceInternalDistanceOptimizer & )
```


### operator=

```cpp
public BackgroundSurfaceInternalDistanceOptimizer & operator=(const BackgroundSurfaceInternalDistanceOptimizer & )
```


### BackgroundSurfaceInternalDistanceOptimizer

```cpp
public void BackgroundSurfaceInternalDistanceOptimizer(BackgroundSurfaceInternalDistanceOptimizer && )
```


### operator=

```cpp
public BackgroundSurfaceInternalDistanceOptimizer & operator=(BackgroundSurfaceInternalDistanceOptimizer && )
```


### ~BackgroundSurfaceInternalDistanceOptimizer

```cpp
public void ~BackgroundSurfaceInternalDistanceOptimizer()
```


### BackgroundSurfaceInternalDistanceOptimizer

```cpp
protected void BackgroundSurfaceInternalDistanceOptimizer(BackgroundSurfaceConstraintModifier & constraint_modifier, const BackgroundSurfaceInternalDistanceImprovementSimulator & improvement_simulator)
```




