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

# class SurfaceMeshFusion


## Functions

### SurfaceMeshFusion

```cpp
public void SurfaceMeshFusion(const geode::BRep & brep, const geode::Surface3D & surface, const geode::Line3D & line)
```


### ~SurfaceMeshFusion

```cpp
public void ~SurfaceMeshFusion()
```


### fuse_on_internal_line

```cpp
public void fuse_on_internal_line(geode::BRepBuilder & brep_builder)
```




