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

# class BackgroundBRepOrchestrator


```cpp
Inherits from BackgroundOrchestrator<BackgroundBRep, BlockElement<ElementId> >
```



## Functions

### BackgroundBRepOrchestrator

```cpp
public void BackgroundBRepOrchestrator<ElementId>(const BackgroundBRepOrchestrator<ElementId> & )
```


### operator=

```cpp
public BackgroundBRepOrchestrator<ElementId> & operator=(const BackgroundBRepOrchestrator<ElementId> & )
```


### BackgroundBRepOrchestrator

```cpp
public void BackgroundBRepOrchestrator<ElementId>(BackgroundBRepOrchestrator<ElementId> && )
```


### operator=

```cpp
public BackgroundBRepOrchestrator<ElementId> & operator=(BackgroundBRepOrchestrator<ElementId> && )
```


### ~BackgroundBRepOrchestrator

```cpp
public void ~BackgroundBRepOrchestrator<ElementId>()
```


### constraint_modifier

```cpp
public const BackgroundBRepConstraintModifier & constraint_modifier()
```


### BackgroundBRepOrchestrator

```cpp
protected void BackgroundBRepOrchestrator<ElementId>(BackgroundBRepConstraintModifier & constraint_modifier)
```


### constraint_modifier

```cpp
protected BackgroundBRepConstraintModifier & constraint_modifier()
```




