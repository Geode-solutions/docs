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

# class BackgroundBRepGenericOptimizer


```cpp
Inherits from BackgroundBRepInternalDistanceOptimizer
```



## Functions

### BackgroundBRepGenericOptimizer

```cpp
public void BackgroundBRepGenericOptimizer(const BackgroundBRepGenericOptimizer & )
```


### operator=

```cpp
public BackgroundBRepGenericOptimizer & operator=(const BackgroundBRepGenericOptimizer & )
```


### BackgroundBRepGenericOptimizer

```cpp
public void BackgroundBRepGenericOptimizer(BackgroundBRepGenericOptimizer && )
```


### operator=

```cpp
public BackgroundBRepGenericOptimizer & operator=(BackgroundBRepGenericOptimizer && )
```


### ~BackgroundBRepGenericOptimizer

```cpp
public void ~BackgroundBRepGenericOptimizer()
```


### BackgroundBRepGenericOptimizer

```cpp
protected void BackgroundBRepGenericOptimizer(BackgroundBRepConstraintModifier & constraint_modifier)
```




