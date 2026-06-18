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

# class TriangulatedSurface


```cpp
Inherits from SurfaceMesh<3U>
```



## Members

```cpp
public static const auto dim

```



# class TriangulatedSurface


```cpp
Inherits from SurfaceMesh<2U>
```



## Members

```cpp
public static const auto dim

```



# class TriangulatedSurface


 Interface class for Surface of arbitrary dimension made up with triangles only.



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
public static std::unique_ptr<TriangulatedSurface<dimension>> create()
```


 Create a new TriangulatedSurface using default data structure.

### create

```cpp
public static std::unique_ptr<TriangulatedSurface<dimension>> create(const MeshImpl & impl)
```


 Create a new TriangulatedSurface using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public static MeshType type_name_static()
```


### clone

```cpp
public std::unique_ptr<TriangulatedSurface<dimension>> clone()
```


### TriangulatedSurface

```cpp
protected void TriangulatedSurface<value-parameter-0-0>()
```


### TriangulatedSurface

```cpp
protected void TriangulatedSurface<value-parameter-0-0>(TriangulatedSurface<dimension> && other)
```


### triangle

```cpp
public Triangle<dimension> triangle(index_t triangle_id)
```


### operator=

```cpp
protected TriangulatedSurface<dimension> & operator=(TriangulatedSurface<dimension> && other)
```




