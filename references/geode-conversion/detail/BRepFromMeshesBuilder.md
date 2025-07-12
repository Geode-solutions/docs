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

# class BRepFromMeshesBuilder


```cpp
Inherits from ModelBuilderFromMeshes<BRep>
```



## Functions

### BRepFromMeshesBuilder

```cpp
public void BRepFromMeshesBuilder(BRep & brep, Span corners, Span curves, Span surfaces)
```


### ~BRepFromMeshesBuilder

```cpp
public void ~BRepFromMeshesBuilder()
```


### build_brep_without_blocks

```cpp
public BRepMappings build_brep_without_blocks()
```


### build_brep_with_blocks

```cpp
public BRepMappings build_brep_with_blocks()
```




