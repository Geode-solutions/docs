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

# class TetrahedralSolidInternalDistanceOptimizer


```cpp
Inherits from TetrahedralSolidOrchestrator<index_t>
```



## Functions

### TetrahedralSolidInternalDistanceOptimizer

```cpp
public void TetrahedralSolidInternalDistanceOptimizer(const TetrahedralSolidInternalDistanceOptimizer & )
```


### operator=

```cpp
public TetrahedralSolidInternalDistanceOptimizer & operator=(const TetrahedralSolidInternalDistanceOptimizer & )
```


### TetrahedralSolidInternalDistanceOptimizer

```cpp
public void TetrahedralSolidInternalDistanceOptimizer(TetrahedralSolidInternalDistanceOptimizer && )
```


### operator=

```cpp
public TetrahedralSolidInternalDistanceOptimizer & operator=(TetrahedralSolidInternalDistanceOptimizer && )
```


### ~TetrahedralSolidInternalDistanceOptimizer

```cpp
public void ~TetrahedralSolidInternalDistanceOptimizer()
```


### restrict_to_zone

```cpp
public void restrict_to_zone(Span elements)
```


### TetrahedralSolidInternalDistanceOptimizer

```cpp
protected void TetrahedralSolidInternalDistanceOptimizer(TetrahedralSolidConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator)
```




