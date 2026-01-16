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

# class BackgroundSolidShiftOptimizer


```cpp
Inherits from TetrahedralSolidShiftOptimizer
```



## Functions

### BackgroundSolidShiftOptimizer

```cpp
public void BackgroundSolidShiftOptimizer(const BackgroundSolidShiftOptimizer & )
```


### operator=

```cpp
public BackgroundSolidShiftOptimizer & operator=(const BackgroundSolidShiftOptimizer & )
```


### BackgroundSolidShiftOptimizer

```cpp
public void BackgroundSolidShiftOptimizer(BackgroundSolidShiftOptimizer && )
```


### operator=

```cpp
public BackgroundSolidShiftOptimizer & operator=(BackgroundSolidShiftOptimizer && )
```


### BackgroundSolidShiftOptimizer

```cpp
public void BackgroundSolidShiftOptimizer(BackgroundSolidConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator)
```


### ~BackgroundSolidShiftOptimizer

```cpp
public void ~BackgroundSolidShiftOptimizer()
```




