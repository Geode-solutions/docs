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

# class TriangulatedSurfaceDecimator


```cpp
Inherits from TriangulatedSurfaceOrchestrator<2U, SurfaceEdge<2U> >
```



# class TriangulatedSurfaceDecimator


```cpp
Inherits from TriangulatedSurfaceOrchestrator<dimension, SurfaceEdge<dimension> >
```



## Records

OrientedEdge



## Functions

### TriangulatedSurfaceDecimator

```cpp
public void TriangulatedSurfaceDecimator<dimension>(TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier, const TriangulatedSurfaceDecimatorOperator<dimension> & decimator_operator)
```


### ~TriangulatedSurfaceDecimator

```cpp
public void ~TriangulatedSurfaceDecimator<dimension>()
```


### skip_element

```cpp
protected bool skip_element(const Element & element)
```


### process_element

```cpp
protected ProcessElementResult process_element(const Element & element)
```


### collapse_edge

```cpp
protected std::optional<ProcessElementResult> collapse_edge(const OrientedEdge & edge)
```




# class TriangulatedSurfaceDecimator


```cpp
Inherits from TriangulatedSurfaceOrchestrator<3U, SurfaceEdge<3U> >
```



