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

# class BackgroundBRepOptimizer


```cpp
Inherits from BRepOptimizer
```



## Functions

### BackgroundBRepOptimizer

```cpp
public void BackgroundBRepOptimizer(const BackgroundBRepOptimizer & )
```


### operator=

```cpp
public BackgroundBRepOptimizer & operator=(const BackgroundBRepOptimizer & )
```


### BackgroundBRepOptimizer

```cpp
public void BackgroundBRepOptimizer(BackgroundBRepOptimizer && )
```


### operator=

```cpp
public BackgroundBRepOptimizer & operator=(BackgroundBRepOptimizer && )
```


### ~BackgroundBRepOptimizer

```cpp
public void ~BackgroundBRepOptimizer()
```


### BackgroundBRepOptimizer

```cpp
public void BackgroundBRepOptimizer(BackgroundBRepGeometricConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator)
```




