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

# class BackgroundBRepInternalDistanceOptimizer


```cpp
Inherits from BackgroundBRepOrchestrator<index_t>
```



## Functions

### BackgroundBRepInternalDistanceOptimizer

```cpp
public void BackgroundBRepInternalDistanceOptimizer(const BackgroundBRepInternalDistanceOptimizer & )
```


### operator=

```cpp
public BackgroundBRepInternalDistanceOptimizer & operator=(const BackgroundBRepInternalDistanceOptimizer & )
```


### BackgroundBRepInternalDistanceOptimizer

```cpp
public void BackgroundBRepInternalDistanceOptimizer(BackgroundBRepInternalDistanceOptimizer && )
```


### operator=

```cpp
public BackgroundBRepInternalDistanceOptimizer & operator=(BackgroundBRepInternalDistanceOptimizer && )
```


### ~BackgroundBRepInternalDistanceOptimizer

```cpp
public void ~BackgroundBRepInternalDistanceOptimizer()
```


### BackgroundBRepInternalDistanceOptimizer

```cpp
protected void BackgroundBRepInternalDistanceOptimizer(BackgroundBRepConstraintModifier & constraint_modifier, const BackgroundSolidInternalDistanceImprovementSimulator & improvement_simulator)
```


### get_output

```cpp
protected vector get_output(const absl::flat_hash_map<uuid, std::vector<index_t> > & info)
```




