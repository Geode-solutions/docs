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

# class BRepInternalDistanceOptimizer


```cpp
Inherits from BRepOrchestrator<index_t>
```



## Functions

### BRepInternalDistanceOptimizer

```cpp
public void BRepInternalDistanceOptimizer(const BRepInternalDistanceOptimizer & )
```


### operator=

```cpp
public BRepInternalDistanceOptimizer & operator=(const BRepInternalDistanceOptimizer & )
```


### BRepInternalDistanceOptimizer

```cpp
public void BRepInternalDistanceOptimizer(BRepInternalDistanceOptimizer && )
```


### operator=

```cpp
public BRepInternalDistanceOptimizer & operator=(BRepInternalDistanceOptimizer && )
```


### ~BRepInternalDistanceOptimizer

```cpp
public void ~BRepInternalDistanceOptimizer()
```


### BRepInternalDistanceOptimizer

```cpp
protected void BRepInternalDistanceOptimizer(BRepGeometricConstraintModifier & constraint_modifier, const BRepInternalDistanceImprovementSimulator & improvement_simulator)
```


### get_output

```cpp
protected vector get_output(const absl::flat_hash_map<uuid, std::vector<index_t> > & info)
```




