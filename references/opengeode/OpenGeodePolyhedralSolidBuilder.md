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

# class OpenGeodePolyhedralSolidBuilder


 Implementation class for PolyhedralSolidBuilder using OpenGeode data structure



```cpp
Inherits from PolyhedralSolidBuilder<dimension>
```



## Functions

### OpenGeodePolyhedralSolidBuilder

```cpp
public void OpenGeodePolyhedralSolidBuilder<dimension>(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodePolyhedralSolidBuilder

```cpp
public void OpenGeodePolyhedralSolidBuilder<dimension>(OpenGeodePolyhedralSolid<dimension> & mesh)
```


### OpenGeodePolyhedralSolidBuilder

```cpp
public void OpenGeodePolyhedralSolidBuilder<dimension>(OpenGeodePolyhedralSolidBuilder<dimension> && )
```




# class OpenGeodePolyhedralSolidBuilder


```cpp
Inherits from PolyhedralSolidBuilder<3U>
```



