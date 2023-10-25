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

# class CutAlongInternalSurfaces


## Functions

### CutAlongInternalSurfaces

```cpp
public void CutAlongInternalSurfaces(BRep & model)
```


### CutAlongInternalSurfaces

```cpp
public void CutAlongInternalSurfaces(const BRep & model, BRepBuilder & builder)
```


### ~CutAlongInternalSurfaces

```cpp
public void ~CutAlongInternalSurfaces()
```


### cut_all_blocks

```cpp
public vector cut_all_blocks()
```


### cut_block

```cpp
public vector cut_block(const Block3D & block)
```




