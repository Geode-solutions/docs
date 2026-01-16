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

# class TriangulatedSurfaceOrchestrator


```cpp
Inherits from ModifiableObjectOrchestrator<TriangulatedSurface<dimension>, ElementId>
```



## Functions

### TriangulatedSurfaceOrchestrator

```cpp
public void TriangulatedSurfaceOrchestrator<dimension, ElementId>(const TriangulatedSurfaceOrchestrator<dimension, ElementId> & )
```


### operator=

```cpp
public TriangulatedSurfaceOrchestrator<dimension, ElementId> & operator=(const TriangulatedSurfaceOrchestrator<dimension, ElementId> & )
```


### TriangulatedSurfaceOrchestrator

```cpp
public void TriangulatedSurfaceOrchestrator<dimension, ElementId>(TriangulatedSurfaceOrchestrator<dimension, ElementId> && )
```


### operator=

```cpp
public TriangulatedSurfaceOrchestrator<dimension, ElementId> & operator=(TriangulatedSurfaceOrchestrator<dimension, ElementId> && )
```


### ~TriangulatedSurfaceOrchestrator

```cpp
public void ~TriangulatedSurfaceOrchestrator<dimension, ElementId>()
```


### constraint_modifier

```cpp
public const TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier()
```


### TriangulatedSurfaceOrchestrator

```cpp
protected void TriangulatedSurfaceOrchestrator<dimension, ElementId>(TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier)
```


### constraint_modifier

```cpp
protected TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier()
```




