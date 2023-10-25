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

# class TriangulatedSurfaceBuilder


```cpp
Inherits from SurfaceMeshBuilder<2U>
```



# class TriangulatedSurfaceBuilder


```cpp
Inherits from SurfaceMeshBuilder<3U>
```



# class TriangulatedSurfaceBuilder


 Interface class to represent the builder of a TriangulatedSurface



```cpp
Inherits from SurfaceMeshBuilder<dimension>
```



## Functions

### create

```cpp
public int create(TriangulatedSurface<dimension> & mesh)
```


 Create the builder associated with a TriangulatedSurface.

**mesh** [in] The TriangulatedSurface to build/modify

### create_triangle

```cpp
public index_t create_triangle(const std::array<index_t, 3> & vertices)
```


 Create a new triangle from three vertices.

**vertices** [in] The three vertices defining the triangle to create

**return** the index of the created triangle

### create_triangles

```cpp
public index_t create_triangles(index_t nb)
```


 Create new triangles.

**nb** [in] Number of triangles to create

**return** the index of the first created triangle

### reserve_triangles

```cpp
public void reserve_triangles(index_t nb)
```


 Reserve storage for new triangles without creating them.

**nb** [in] Number of triangles to reserve

### copy

```cpp
public void copy(const TriangulatedSurface<dimension> & triangulated_surface)
```


### TriangulatedSurfaceBuilder

```cpp
protected void TriangulatedSurfaceBuilder<dimension>(TriangulatedSurface<dimension> & mesh)
```




