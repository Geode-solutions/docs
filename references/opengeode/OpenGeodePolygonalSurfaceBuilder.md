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

# class OpenGeodePolygonalSurfaceBuilder


 Implementation class for PolygonalSurfaceBuilder using OpenGeode data structure



```cpp
Inherits from PolygonalSurfaceBuilder<dimension>
```



## Functions

### OpenGeodePolygonalSurfaceBuilder

```cpp
public void OpenGeodePolygonalSurfaceBuilder<dimension>(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### OpenGeodePolygonalSurfaceBuilder

```cpp
public void OpenGeodePolygonalSurfaceBuilder<dimension>(OpenGeodePolygonalSurface<dimension> & mesh)
```


### OpenGeodePolygonalSurfaceBuilder

```cpp
public void OpenGeodePolygonalSurfaceBuilder<dimension>(OpenGeodePolygonalSurfaceBuilder<dimension> && )
```




# class OpenGeodePolygonalSurfaceBuilder


```cpp
Inherits from PolygonalSurfaceBuilder<3U>
```



# class OpenGeodePolygonalSurfaceBuilder


```cpp
Inherits from PolygonalSurfaceBuilder<2U>
```



