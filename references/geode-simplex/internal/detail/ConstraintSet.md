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

# class ConstraintSet


 Constraint edges and triangles that must never be removed from the mesh once present. Lookup only (iteration order is never used).



## Functions

### add_edge

```cpp
public void add_edge(index_t v0, index_t v1)
```


### add_triangle

```cpp
public void add_triangle(const std::array<index_t, 3> & triangle)
```


### remove_edge

```cpp
public void remove_edge(index_t v0, index_t v1)
```


### remove_triangle

```cpp
public void remove_triangle(const std::array<index_t, 3> & triangle)
```


### has_edge

```cpp
public bool has_edge(index_t v0, index_t v1)
```


### has_triangle

```cpp
public bool has_triangle(const std::array<index_t, 3> & triangle)
```


### is_preserved

```cpp
public bool is_preserved(const DelaunayTriangulation & mesh, absl::Span<const index_t> old_tets, absl::Span<const std::array<index_t, 4>> new_tets)
```


 True if replacing old_tets by new_tets keeps every constraint edge and triangle present in old_tets (the boundary of old_tets being kept).



