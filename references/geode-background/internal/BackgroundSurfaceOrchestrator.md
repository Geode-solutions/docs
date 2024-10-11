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

# class BackgroundSurfaceOrchestrator


```cpp
Inherits from BackgroundOrchestrator<BackgroundSurface, ElementId>
```



## Functions

### BackgroundSurfaceOrchestrator

```cpp
public void BackgroundSurfaceOrchestrator<ElementId>(const BackgroundSurfaceOrchestrator<ElementId> & )
```


### operator=

```cpp
public BackgroundSurfaceOrchestrator<ElementId> & operator=(const BackgroundSurfaceOrchestrator<ElementId> & )
```


### BackgroundSurfaceOrchestrator

```cpp
public void BackgroundSurfaceOrchestrator<ElementId>(BackgroundSurfaceOrchestrator<ElementId> && )
```


### operator=

```cpp
public BackgroundSurfaceOrchestrator<ElementId> & operator=(BackgroundSurfaceOrchestrator<ElementId> && )
```


### ~BackgroundSurfaceOrchestrator

```cpp
public void ~BackgroundSurfaceOrchestrator<ElementId>()
```


### constraint_modifier

```cpp
public const BackgroundSurfaceConstraintModifier & constraint_modifier()
```


### BackgroundSurfaceOrchestrator

```cpp
protected void BackgroundSurfaceOrchestrator<ElementId>(BackgroundSurfaceConstraintModifier & constraint_modifier)
```


### constraint_modifier

```cpp
protected BackgroundSurfaceConstraintModifier & constraint_modifier()
```




