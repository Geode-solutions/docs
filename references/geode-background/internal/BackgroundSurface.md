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

# class BackgroundSurface


```cpp
Inherits from OpenGeodeTriangulatedSurface2D, ElementSearch<TriangulatedSurface2D>, MacroInfo2D
```



## Functions

### BackgroundSurface

```cpp
public void BackgroundSurface()
```


### BackgroundSurface

```cpp
public void BackgroundSurface(TriangulatedSurface2D && surface)
```


### BackgroundSurface

```cpp
public void BackgroundSurface(BackgroundSurface && other)
```


### ~BackgroundSurface

```cpp
public void ~BackgroundSurface()
```


### impl_name_static

```cpp
public NamedType impl_name_static()
```


### impl_name

```cpp
public NamedType impl_name()
```


### clone

```cpp
public BackgroundSurface clone()
```


### clone_surface

```cpp
public unique_ptr clone_surface()
```


### release_surface

```cpp
public OpenGeodeTriangulatedSurface release_surface()
```


### one_border_polygon_edge

```cpp
public PolygonEdge one_border_polygon_edge()
```



