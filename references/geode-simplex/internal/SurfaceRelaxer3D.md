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

# class SurfaceRelaxer3D


## Functions

### SurfaceRelaxer3D

```cpp
public void SurfaceRelaxer3D(const Surface3D & surface, BRepRemeshingData & data)
```


### ~SurfaceRelaxer3D

```cpp
public void ~SurfaceRelaxer3D()
```


### relax

```cpp
public void relax()
```




