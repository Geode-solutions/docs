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



## Members

```cpp
public static const auto dim

```



# class PolygonalSurface


```cpp
Inherits from SurfaceMesh<3U>
```



## Members

```cpp
public static const auto dim

```



# class PolygonalSurface


 Interface class for Surface made up with polygons (triangles, quads, ...) of arbitrary dimension.



```cpp
Inherits from SurfaceMesh<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### create

```cpp
public static std::unique_ptr<PolygonalSurface<dimension>> create()
```


 Create a new PolygonalSurface using default data structure.

### create

```cpp
public static std::unique_ptr<PolygonalSurface<dimension>> create(const MeshImpl & impl)
```


 Create a new PolygonalSurface using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public static MeshType type_name_static()
```


### clone

```cpp
public std::unique_ptr<PolygonalSurface<dimension>> clone()
```


### PolygonalSurface

```cpp
protected void PolygonalSurface<value-parameter-0-0>()
```


### PolygonalSurface

```cpp
protected void PolygonalSurface<value-parameter-0-0>(PolygonalSurface<dimension> && other)
```


### operator=

```cpp
protected PolygonalSurface<dimension> & operator=(PolygonalSurface<dimension> && other)
```




