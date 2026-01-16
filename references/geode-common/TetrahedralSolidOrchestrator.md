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

# class TetrahedralSolidOrchestrator


```cpp
Inherits from ModifiableObjectOrchestrator<TetrahedralSolid3D, ElementId>
```



## Functions

### TetrahedralSolidOrchestrator

```cpp
public void TetrahedralSolidOrchestrator<ElementId>(const TetrahedralSolidOrchestrator<ElementId> & )
```


### operator=

```cpp
public TetrahedralSolidOrchestrator<ElementId> & operator=(const TetrahedralSolidOrchestrator<ElementId> & )
```


### TetrahedralSolidOrchestrator

```cpp
public void TetrahedralSolidOrchestrator<ElementId>(TetrahedralSolidOrchestrator<ElementId> && )
```


### operator=

```cpp
public TetrahedralSolidOrchestrator<ElementId> & operator=(TetrahedralSolidOrchestrator<ElementId> && )
```


### ~TetrahedralSolidOrchestrator

```cpp
public void ~TetrahedralSolidOrchestrator<ElementId>()
```


### constraint_modifier

```cpp
public const TetrahedralSolidConstraintModifier & constraint_modifier()
```


### TetrahedralSolidOrchestrator

```cpp
protected void TetrahedralSolidOrchestrator<ElementId>(TetrahedralSolidConstraintModifier & constraint_modifier)
```


### constraint_modifier

```cpp
protected TetrahedralSolidConstraintModifier & constraint_modifier()
```




