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

# class BackgroundSolidBuilder


```cpp
Inherits from OpenGeodeTetrahedralSolidBuilder3D, ElementSearchBuilder<TetrahedralSolid3D>, MacroInfoBuilder3D
```



## Functions

### BackgroundSolidBuilder

```cpp
public void BackgroundSolidBuilder(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### BackgroundSolidBuilder

```cpp
public void BackgroundSolidBuilder(BackgroundSolid & background)
```


### ~BackgroundSolidBuilder

```cpp
public void ~BackgroundSolidBuilder()
```


### copy

```cpp
public void copy(const BackgroundSolid & source)
```




