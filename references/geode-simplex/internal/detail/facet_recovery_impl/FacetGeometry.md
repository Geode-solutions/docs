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

# class FacetGeometry


 Exact queries on the triangle (a, b, c) between three mesh vertices whose edges are mesh edges.



## Functions

### FacetGeometry

```cpp
public void FacetGeometry(const DelaunayTriangulation & mesh, const Triangle & triangle)
```


### side

```cpp
public int side(index_t vertex)
```


 Sign of the vertex with respect to the triangle plane.

### crosses

```cpp
public bool crosses(index_t v0, index_t v1)
```


 True if the edge crosses the open triangle at one point.

### is_crossed

```cpp
public bool is_crossed(const Tet & tet)
```


 True if the closed tetrahedron meets the open triangle. In a valid mesh where the triangle edges are mesh edges and no vertex lies in the open triangle, this happens iff one of its edges crosses it.

### is_in_triangle

```cpp
public bool is_in_triangle(index_t vertex)
```


### triangle

```cpp
public const Triangle & triangle()
```




