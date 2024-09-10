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

# class BRepExplicitModelerRemainingException


```cpp
Inherits from OpenGeodeException
```



## Functions

### BRepExplicitModelerRemainingException

```cpp
public void BRepExplicitModelerRemainingException(BRep && brep, ModelMappings && mappings, const MeshElementsMap & remaining_elements)
```


### BRepExplicitModelerRemainingException

```cpp
public void BRepExplicitModelerRemainingException(BRepExplicitModelerRemainingException && other)
```


### brep

```cpp
public const BRep & brep()
```


### mappings

```cpp
public const ModelMappings & mappings()
```


### remaining_elements

```cpp
public const MeshElements & remaining_elements()
```


### release_brep_and_mappings

```cpp
public tuple release_brep_and_mappings()
```




