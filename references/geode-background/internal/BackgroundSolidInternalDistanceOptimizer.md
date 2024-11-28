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

# class BackgroundSolidInternalDistanceOptimizer


```cpp
Inherits from BackgroundSolidOrchestrator<index_t>
```



## Functions

### BackgroundSolidInternalDistanceOptimizer

```cpp
public void BackgroundSolidInternalDistanceOptimizer(const BackgroundSolidInternalDistanceOptimizer & )
```


### operator=

```cpp
public BackgroundSolidInternalDistanceOptimizer & operator=(const BackgroundSolidInternalDistanceOptimizer & )
```


### BackgroundSolidInternalDistanceOptimizer

```cpp
public void BackgroundSolidInternalDistanceOptimizer(BackgroundSolidInternalDistanceOptimizer && )
```


### operator=

```cpp
public BackgroundSolidInternalDistanceOptimizer & operator=(BackgroundSolidInternalDistanceOptimizer && )
```


### ~BackgroundSolidInternalDistanceOptimizer

```cpp
public void ~BackgroundSolidInternalDistanceOptimizer()
```


### BackgroundSolidInternalDistanceOptimizer

```cpp
protected void BackgroundSolidInternalDistanceOptimizer(BackgroundSolidConstraintModifier & constraint_modifier, const BackgroundSolidInternalDistanceImprovementSimulator & improvement_simulator)
```




