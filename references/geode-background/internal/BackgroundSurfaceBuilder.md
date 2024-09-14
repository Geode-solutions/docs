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

# class BackgroundSurfaceBuilder


```cpp
Inherits from OpenGeodeTriangulatedSurfaceBuilder2D, internal::ElementSearchBuilder<TriangulatedSurface2D>, MacroInfoBuilder2D
```



## Functions

### BackgroundSurfaceBuilder

```cpp
public void BackgroundSurfaceBuilder(VertexSet & vertex_set, MeshBuilderFactoryKey )
```


### BackgroundSurfaceBuilder

```cpp
public void BackgroundSurfaceBuilder(BackgroundSurface & background)
```


### ~BackgroundSurfaceBuilder

```cpp
public void ~BackgroundSurfaceBuilder()
```


### copy

```cpp
public void copy(const BackgroundSurface & source)
```



