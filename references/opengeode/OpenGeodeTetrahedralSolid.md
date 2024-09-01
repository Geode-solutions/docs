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

# class OpenGeodeTetrahedralSolid


```cpp
Inherits from TetrahedralSolid<dimension>
```



## Functions

### OpenGeodeTetrahedralSolid

```cpp
public void OpenGeodeTetrahedralSolid<>(const OpenGeodeTetrahedralSolid<> & )
```


### operator=

```cpp
public OpenGeodeTetrahedralSolid<> & operator=(const OpenGeodeTetrahedralSolid<> & )
```


### OpenGeodeTetrahedralSolid

```cpp
public void OpenGeodeTetrahedralSolid<>()
```


### OpenGeodeTetrahedralSolid

```cpp
public void OpenGeodeTetrahedralSolid<>(OpenGeodeTetrahedralSolid<> && other)
```


### operator=

```cpp
public OpenGeodeTetrahedralSolid<> & operator=(OpenGeodeTetrahedralSolid<> && other)
```


### ~OpenGeodeTetrahedralSolid

```cpp
public void ~OpenGeodeTetrahedralSolid<>()
```


### impl_name_static

```cpp
public NamedType impl_name_static()
```


### impl_name

```cpp
public NamedType impl_name()
```


### type_name

```cpp
public NamedType type_name()
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
```


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGTetrahedralSolidKey )
```


### set_polyhedron_vertex

```cpp
public void set_polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id, OGTetrahedralSolidKey )
```


### set_polyhedron_adjacent

```cpp
public void set_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet, index_t adjacent_id, OGTetrahedralSolidKey )
```


### add_tetrahedron

```cpp
public void add_tetrahedron(const std::array<index_t, 4> & vertices, OGTetrahedralSolidKey )
```




# class OpenGeodeTetrahedralSolid


```cpp
Inherits from TetrahedralSolid<3U>
```



