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

# class BackgroundSolidOptimizer


```cpp
Inherits from TetrahedralSolidOptimizer
```



## Functions

### BackgroundSolidOptimizer

```cpp
public void BackgroundSolidOptimizer(const BackgroundSolidOptimizer & )
```


### operator=

```cpp
public BackgroundSolidOptimizer & operator=(const BackgroundSolidOptimizer & )
```


### BackgroundSolidOptimizer

```cpp
public void BackgroundSolidOptimizer(BackgroundSolidOptimizer && )
```


### operator=

```cpp
public BackgroundSolidOptimizer & operator=(BackgroundSolidOptimizer && )
```


### BackgroundSolidOptimizer

```cpp
public void BackgroundSolidOptimizer(BackgroundSolidConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator)
```


### ~BackgroundSolidOptimizer

```cpp
public void ~BackgroundSolidOptimizer()
```




