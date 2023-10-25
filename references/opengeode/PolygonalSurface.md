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

# class PolygonalSurface


```cpp
Inherits from SurfaceMesh<2U>
```



# class PolygonalSurface


```cpp
Inherits from SurfaceMesh<3U>
```



# class PolygonalSurface


 Interface class for Surface made up with polygons (triangles, quads, ...) of arbitrary dimension.



```cpp
Inherits from SurfaceMesh<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > create()
```


 Create a new PolygonalSurface using default data structure.

### create

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > create(const MeshImpl & impl)
```


 Create a new PolygonalSurface using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<PolygonalSurface<dimension> > clone()
```


### PolygonalSurface

```cpp
protected void PolygonalSurface<dimension>()
```


### PolygonalSurface

```cpp
protected void PolygonalSurface<dimension>(PolygonalSurface<dimension> && other)
```


### operator=

```cpp
protected PolygonalSurface<dimension> & operator=(PolygonalSurface<dimension> && other)
```




