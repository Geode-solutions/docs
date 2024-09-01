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

# class BRepModifier


## Functions

### BRepModifier

```cpp
public void BRepModifier(const BRep & brep, BRepBuilder & builder)
```


### BRepModifier

```cpp
public void BRepModifier(BRepModifier && other)
```


### operator=

```cpp
public BRepModifier & operator=(BRepModifier && other)
```


### ~BRepModifier

```cpp
public void ~BRepModifier()
```


### fuse_lines_on_corner

```cpp
public ModifiedElements fuse_lines_on_corner(const Corner3D & corner)
```


### fuse_surfaces_on_line

```cpp
public ModifiedElements fuse_surfaces_on_line(const Line3D & line)
```


### fuse_blocks_on_surface

```cpp
public ModifiedElements fuse_blocks_on_surface(const Surface3D & surface)
```




