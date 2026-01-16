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

# class BRepOrchestrator


```cpp
Inherits from ModifiableObjectOrchestrator<BRep, BlockElement<ElementId> >
```



## Functions

### BRepOrchestrator

```cpp
public void BRepOrchestrator<ElementId>(const BRepOrchestrator<ElementId> & )
```


### operator=

```cpp
public BRepOrchestrator<ElementId> & operator=(const BRepOrchestrator<ElementId> & )
```


### BRepOrchestrator

```cpp
public void BRepOrchestrator<ElementId>(BRepOrchestrator<ElementId> && )
```


### operator=

```cpp
public BRepOrchestrator<ElementId> & operator=(BRepOrchestrator<ElementId> && )
```


### ~BRepOrchestrator

```cpp
public void ~BRepOrchestrator<ElementId>()
```


### constraint_modifier

```cpp
public const BRepGeometricConstraintModifier & constraint_modifier()
```


### BRepOrchestrator

```cpp
protected void BRepOrchestrator<ElementId>(BRepGeometricConstraintModifier & constraint_modifier)
```


### constraint_modifier

```cpp
protected BRepGeometricConstraintModifier & constraint_modifier()
```




