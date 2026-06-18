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



## Members

```cpp
public static const auto dim

```



# class OpenGeodePolyhedralSolid


```cpp
Inherits from PolyhedralSolid<dimension>
```



## Members

```cpp
public static const auto dim

```



## Functions

### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<value-parameter-0-0>(const OpenGeodePolyhedralSolid<dimension> & )
```


### operator=

```cpp
public OpenGeodePolyhedralSolid<dimension> & operator=(const OpenGeodePolyhedralSolid<dimension> & )
```


### impl_name_static

```cpp
public static MeshImpl impl_name_static()
```


### impl_name

```cpp
public MeshImpl impl_name()
```


### type_name

```cpp
public MeshType type_name()
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### native_extension

```cpp
public std::string_view native_extension()
```


### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<value-parameter-0-0>()
```


### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<value-parameter-0-0>(OpenGeodePolyhedralSolid<dimension> && other)
```


### operator=

```cpp
public OpenGeodePolyhedralSolid<dimension> & operator=(OpenGeodePolyhedralSolid<dimension> && other)
```


### ~OpenGeodePolyhedralSolid

```cpp
public void ~OpenGeodePolyhedralSolid<value-parameter-0-0>()
```


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPolyhedralSolidKey )
```


### add_polyhedron

```cpp
public void add_polyhedron(absl::Span<const index_t> vertices, absl::Span<const std::vector<local_index_t>> facets, OGPolyhedralSolidKey )
```


### remove_polyhedra

```cpp
public void remove_polyhedra(const std::vector<bool> & to_delete, OGPolyhedralSolidKey )
```


### permute_polyhedra

```cpp
public void permute_polyhedra(absl::Span<const index_t> permutation, OGPolyhedralSolidKey )
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




