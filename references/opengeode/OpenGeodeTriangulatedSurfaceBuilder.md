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

# class OpenGeodeTriangulatedSurfaceBuilder


```cpp
Inherits from TriangulatedSurfaceBuilder<3U>
```



# class OpenGeodeTriangulatedSurfaceBuilder


```cpp
Inherits from TriangulatedSurfaceBuilder<2U>
```



# class OpenGeodeTriangulatedSurfaceBuilder


 Implementation class for TriangulatedSurfaceBuilder using OpenGeode data structure



```cpp
Inherits from TriangulatedSurfaceBuilder<dimension>
```



## Functions

### OpenGeodeTriangulatedSurfaceBuilder

```cpp
public void OpenGeodeTriangulatedSurfaceBuilder<dimension>(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodeTriangulatedSurfaceBuilder

```cpp
public void OpenGeodeTriangulatedSurfaceBuilder<dimension>(OpenGeodeTriangulatedSurface<dimension> & mesh)
```


### OpenGeodeTriangulatedSurfaceBuilder

```cpp
public void OpenGeodeTriangulatedSurfaceBuilder<dimension>(OpenGeodeTriangulatedSurfaceBuilder<dimension> && )
```




