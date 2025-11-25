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

# class BackgroundSurfaceDecimator


```cpp
Inherits from geode::internal::BackgroundSurfaceOrchestrator<geode::internal::SurfaceEdge>
```



## Records

OrientedEdge



## Functions

### BackgroundSurfaceDecimator

```cpp
public void BackgroundSurfaceDecimator(geode::internal::BackgroundSurfaceConstraintModifier & constraint_modifier, const BackgroundSurfaceDecimatorOperator & decimator_operator)
```


### ~BackgroundSurfaceDecimator

```cpp
public void ~BackgroundSurfaceDecimator()
```


### collapse_edge

```cpp
protected optional collapse_edge(const OrientedEdge & edge)
```


### skip_element

```cpp
protected bool skip_element(const Element & element)
```


### process_element

```cpp
protected ProcessElementResult process_element(const Element & element)
```




