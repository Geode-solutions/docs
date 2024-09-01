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

# class BRepCutter


```cpp
Inherits from BRepGeometricModifier
```



## Functions

### BRepCutter

```cpp
public void BRepCutter(const BRepCutter & )
```


### operator=

```cpp
public BRepCutter & operator=(const BRepCutter & )
```


### BRepCutter

```cpp
public void BRepCutter(const BRep & brep, BRepBuilder & builder)
```


### BRepCutter

```cpp
public void BRepCutter(BRepCutter && other)
```


### operator=

```cpp
public BRepCutter & operator=(BRepCutter && other)
```


### ~BRepCutter

```cpp
public void ~BRepCutter()
```


### swap_along_path

```cpp
public SolidSwapPathInfo swap_along_path(const BlockPathVertices & path)
```


### swap_along_patch

```cpp
public SolidSwapPatchInfo swap_along_patch(const BlockPatchVertices & patch)
```




