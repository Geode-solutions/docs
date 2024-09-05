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

# class BackgroundSolidOrchestrator


```cpp
Inherits from BackgroundOrchestrator<BackgroundSolid, ElementId>
```



## Functions

### BackgroundSolidOrchestrator

```cpp
public void BackgroundSolidOrchestrator<ElementId>(const BackgroundSolidOrchestrator<ElementId> & )
```


### operator=

```cpp
public BackgroundSolidOrchestrator<ElementId> & operator=(const BackgroundSolidOrchestrator<ElementId> & )
```


### BackgroundSolidOrchestrator

```cpp
public void BackgroundSolidOrchestrator<ElementId>(BackgroundSolidOrchestrator<ElementId> && )
```


### operator=

```cpp
public BackgroundSolidOrchestrator<ElementId> & operator=(BackgroundSolidOrchestrator<ElementId> && )
```


### ~BackgroundSolidOrchestrator

```cpp
public void ~BackgroundSolidOrchestrator<ElementId>()
```


### constraint_modifier

```cpp
public const BackgroundSolidConstraintModifier & constraint_modifier()
```


### BackgroundSolidOrchestrator

```cpp
protected void BackgroundSolidOrchestrator<ElementId>(BackgroundSolidConstraintModifier & constraint_modifier)
```


### constraint_modifier

```cpp
protected BackgroundSolidConstraintModifier & constraint_modifier()
```




