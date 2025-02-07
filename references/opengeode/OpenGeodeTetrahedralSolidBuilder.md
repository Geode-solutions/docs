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

# class OpenGeodeTetrahedralSolidBuilder


 Implementation class for TetrahedralSolidBuilder using OpenGeode data structure



```cpp
Inherits from TetrahedralSolidBuilder<dimension>
```



## Functions

### OpenGeodeTetrahedralSolidBuilder

```cpp
public void OpenGeodeTetrahedralSolidBuilder<dimension>(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodeTetrahedralSolidBuilder

```cpp
public void OpenGeodeTetrahedralSolidBuilder<dimension>(OpenGeodeTetrahedralSolid<dimension> & mesh)
```


### OpenGeodeTetrahedralSolidBuilder

```cpp
public void OpenGeodeTetrahedralSolidBuilder<dimension>(OpenGeodeTetrahedralSolidBuilder<dimension> && )
```




# class OpenGeodeTetrahedralSolidBuilder


```cpp
Inherits from TetrahedralSolidBuilder<3U>
```



