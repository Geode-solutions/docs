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

# class OpenGeodeHybridSolid


```cpp
Inherits from HybridSolid<dimension>
```



## Records

Impl



## Functions

### OpenGeodeHybridSolid

```cpp
public void OpenGeodeHybridSolid<dimension>(const OpenGeodeHybridSolid<dimension> & )
```


### operator=

```cpp
public OpenGeodeHybridSolid<dimension> & operator=(const OpenGeodeHybridSolid<dimension> & )
```


### OpenGeodeHybridSolid

```cpp
public void OpenGeodeHybridSolid<dimension>()
```


### OpenGeodeHybridSolid

```cpp
public void OpenGeodeHybridSolid<dimension>(OpenGeodeHybridSolid<dimension> && other)
```


### operator=

```cpp
public OpenGeodeHybridSolid<dimension> & operator=(OpenGeodeHybridSolid<dimension> && other)
```


### ~OpenGeodeHybridSolid

```cpp
public void ~OpenGeodeHybridSolid<dimension>()
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
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### set_vertex

```cpp
public void set_vertex(index_t vertex_id, Point<dimension> point, OGHybridSolidKey )
```


### set_polyhedron_vertex

```cpp
public void set_polyhedron_vertex(const PolyhedronVertex & polyhedron_vertex, index_t vertex_id, OGHybridSolidKey )
```


### set_polyhedron_adjacent

```cpp
public void set_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet, index_t adjacent_id, OGHybridSolidKey )
```


### add_tetrahedron

```cpp
public void add_tetrahedron(const std::array<index_t, 4> & vertices, OGHybridSolidKey )
```


### add_hexahedron

```cpp
public void add_hexahedron(const std::array<index_t, 8> & vertices, OGHybridSolidKey )
```


### add_prism

```cpp
public void add_prism(const std::array<index_t, 6> & vertices, OGHybridSolidKey )
```


### add_pyramid

```cpp
public void add_pyramid(const std::array<index_t, 5> & vertices, OGHybridSolidKey )
```


### remove_polyhedra

```cpp
public void remove_polyhedra(const std::vector<bool> & to_delete, OGHybridSolidKey )
```

### permute_polyhedra

```cpp
public void permute_polyhedra(Span permutation, OGHybridSolidKey )
```


### copy_polyhedra

```cpp
public void copy_polyhedra(const OpenGeodeHybridSolid<dimension> & solid_mesh, OGHybridSolidKey )
```


### get_polyhedron_adjacent

```cpp
public absl::optional<index_t> get_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```


### remove_polyhedra

```cpp
public void remove_polyhedra(const int & to_delete, OGHybridSolidKey )
```


### polyhedron_edges_vertices

```cpp
public PolyhedronEdgesVertices polyhedron_edges_vertices(index_t polyhedron)
```


### polyhedron_facets_vertices

```cpp
public PolyhedronFacetsVertices polyhedron_facets_vertices(index_t polyhedron)
```




# class OpenGeodeHybridSolid

