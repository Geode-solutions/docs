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

# class FrameField


## Functions

### FrameField

```cpp
public void FrameField(BRep & brep)
```


### FrameField

```cpp
public void FrameField(FrameField && other)
```


### ~FrameField

```cpp
public void ~FrameField()
```


### brep

```cpp
public const BRep & brep()
```


### solid

```cpp
public const TetrahedralSolid3D & solid()
```


### block_element

```cpp
public const MeshElement & block_element(index_t tetrahedron)
```


### frame

```cpp
public const Frame3D & frame(index_t vertex)
```


### set_frame

```cpp
public void set_frame(index_t vertex, Frame frame)
```




