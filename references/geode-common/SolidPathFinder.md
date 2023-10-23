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

# class SolidPathFinder


 The objective of this class is to find paths inside TetrahedralSolid3D. As an example, this class is able to find a rectilinear path between two vertices. This class may be derived for custom path findings.



## Functions

### SolidPathFinder

```cpp
public void SolidPathFinder(const TetrahedralSolid3D & solid, index_t begin, index_t end)
```


 Find a rectilinear path between two vertices.

**begin** [in] Index of the cut starting vertex

**end** [in] Index of the cut ending vertex.

### find_path

```cpp
public std::vector<SolidPath> find_path()
```


### edge_exist

```cpp
protected bool edge_exist()
```


### stop_propagation

```cpp
protected bool stop_propagation(const SolidPath & path)
```


### adjacent_opposite_vertex

```cpp
protected PolyhedronVertex adjacent_opposite_vertex(const PolyhedronFacet & facet)
```


### opposite_facet

```cpp
protected PolyhedronFacet opposite_facet(const PolyhedronVertex & vertex)
```


### opposite_vertex

```cpp
protected PolyhedronVertex opposite_vertex(const PolyhedronFacet & facet)
```


### facet_triangle

```cpp
protected Triangle3D facet_triangle(const PolyhedronFacet & facet)
```


### edge_segment

```cpp
protected Segment edge_segment(index_t edge_id)
```


### find_path_intersection_with_facet

```cpp
protected absl::optional<SolidPath> find_path_intersection_with_facet(const PolyhedronFacet & facet)
```


### find_first_path

```cpp
protected SolidPath find_first_path()
```


### find_next_path

```cpp
protected SolidPath find_next_path(index_t current)
```


### find_next_facet

```cpp
protected SolidPath find_next_facet(const PolyhedronFacet & facet_from)
```


### next_intersection

```cpp
protected SolidPath next_intersection(const SolidPath & previous_path, const SolidPath & current_path)
```


### solid

```cpp
protected const TetrahedralSolid3D & solid()
```


### begin

```cpp
protected index_t begin()
```


### end

```cpp
protected index_t end()
```


### begin_to_end

```cpp
protected const Segment3D & begin_to_end()
```




