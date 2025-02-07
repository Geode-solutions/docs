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

# class PolygonalSurfaceBuilder


```cpp
Inherits from SurfaceMeshBuilder<2U>
```



# class PolygonalSurfaceBuilder


```cpp
Inherits from SurfaceMeshBuilder<3U>
```



# class PolygonalSurfaceBuilder


 Interface class to represent the builder of a PolygonalSurface



```cpp
Inherits from SurfaceMeshBuilder<dimension>
```



## Functions

### PolygonalSurfaceBuilder

```cpp
public void PolygonalSurfaceBuilder<dimension>(PolygonalSurfaceBuilder<dimension> && )
```


### create

```cpp
public std::unique_ptr<PolygonalSurfaceBuilder<dimension> > create(PolygonalSurface<dimension> & mesh)
```


 Create the builder associated with a PolygonalSurface.

**mesh** [in] The PolygonalSurface to build/modify

### copy

```cpp
public void copy(const PolygonalSurface<dimension> & surface_mesh)
```


### PolygonalSurfaceBuilder

```cpp
protected void PolygonalSurfaceBuilder<dimension>(PolygonalSurface<dimension> & mesh)
```




