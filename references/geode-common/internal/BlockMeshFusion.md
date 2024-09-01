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

# class BlockMeshFusion


## Functions

### BlockMeshFusion

```cpp
public void BlockMeshFusion(const geode::BRep & brep, const geode::Block3D & block, const geode::Surface3D & surface)
```


### ~BlockMeshFusion

```cpp
public void ~BlockMeshFusion()
```


### fuse_on_internal_surface

```cpp
public void fuse_on_internal_surface(geode::BRepBuilder & brep_builder)
```




