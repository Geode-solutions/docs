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

# class TriangulatedSurfaceEpsilonModifier


```cpp
Inherits from TriangulatedSurfaceModifier<3U>
```



# class TriangulatedSurfaceEpsilonModifier


```cpp
Inherits from TriangulatedSurfaceModifier<2U>
```



# class TriangulatedSurfaceEpsilonModifier


```cpp
Inherits from TriangulatedSurfaceModifier<dimension>
```



## Functions

### TriangulatedSurfaceEpsilonModifier

```cpp
public void TriangulatedSurfaceEpsilonModifier<dimension>(const TriangulatedSurface<dimension> & surface, TriangulatedSurfaceBuilder<dimension> & builder)
```


### ~TriangulatedSurfaceEpsilonModifier

```cpp
public void ~TriangulatedSurfaceEpsilonModifier<dimension>()
```


### insert_point_in_triangle

```cpp
public std::tuple<POSITION, SplitTriangleInfo> insert_point_in_triangle(index_t triangle_id, const Point<dimension> & point)
```


 Insert a point in a triangle either by spliting the triangle into three new ones, or by snapping the point on an edge (two new triangles) or a vertex (no new triangles).

**triangle_id** [in] Index of the triangle to split.

**point** [in] Coordinates of the split point.

**warning** Split triangle is set as inactive but not deleted.

**return** in the following order: the position of the split vertex, the information regarding the modifications.

### insert_point_on_edge

```cpp
public std::tuple<POSITION, SplitPolygonEdgeInfo> insert_point_on_edge(const PolygonEdge & edge, const Point<dimension> & point)
```


 Insert a point on an edge either by spliting the edge into two new ones, or by snapping the point on a vertex (no new edges).

**edge** [in] Index of the PolygonEdge to split.

**point** [in] Coordinates of the split point.

**warning** Potential split triangles are set as inactive but not deleted.

**return** in the following order: the position of the split vertex, the information regarding the modifications.



