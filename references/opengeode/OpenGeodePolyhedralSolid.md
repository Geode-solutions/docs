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

# class OpenGeodePolyhedralSolid


```cpp
Inherits from PolyhedralSolid<3U>
```



# class OpenGeodePolyhedralSolid


```cpp
Inherits from PolyhedralSolid<dimension>
```



## Functions

### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<>(const OpenGeodePolyhedralSolid<> & )
```


### operator=

```cpp
public OpenGeodePolyhedralSolid<> & operator=(const OpenGeodePolyhedralSolid<> & )
```


### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<>()
```


### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<>(OpenGeodePolyhedralSolid<> && other)
```


### operator=

```cpp
public OpenGeodePolyhedralSolid<> & operator=(OpenGeodePolyhedralSolid<> && other)
```


### ~OpenGeodePolyhedralSolid

```cpp
public void ~OpenGeodePolyhedralSolid<>()
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
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPolyhedralSolidKey )
```


### add_polyhedron

```cpp
public void add_polyhedron(Span vertices, Span facets, OGPolyhedralSolidKey )
```


### remove_polyhedra

```cpp
public void remove_polyhedra(const std::vector<bool> & to_delete, OGPolyhedralSolidKey )
```


### permute_polyhedra

```cpp
public void permute_polyhedra(Span permutation, OGPolyhedralSolidKey )
```


### set_polyhedron_adjacent

```cpp
public void set_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet, index_t adjacent_id, OGPolyhedralSolidKey )
```


### set_polyhedron_vertex

```cpp
public void set_polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id, OGPolyhedralSolidKey )
```


### copy_polyhedra

```cpp
public void copy_polyhedra(const OpenGeodePolyhedralSolid<dimension> & solid_mesh, OGPolyhedralSolidKey )
```




