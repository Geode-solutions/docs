# class OpenGeodePolyhedralSolid

# class OpenGeodePolyhedralSolid


```cpp
Inherits from PolyhedralSolid<dimension>
```



## Records

Impl



## Functions

### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<dimension>(const OpenGeodePolyhedralSolid<dimension> & )
```


### operator=

```cpp
public OpenGeodePolyhedralSolid<dimension> & operator=(const OpenGeodePolyhedralSolid<dimension> & )
```


### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<dimension>()
```


### OpenGeodePolyhedralSolid

```cpp
public void OpenGeodePolyhedralSolid<dimension>(OpenGeodePolyhedralSolid<dimension> && other)
```


### operator=

```cpp
public OpenGeodePolyhedralSolid<dimension> & operator=(OpenGeodePolyhedralSolid<dimension> && other)
```


### ~OpenGeodePolyhedralSolid

```cpp
public void ~OpenGeodePolyhedralSolid<dimension>()
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
public void set_vertex(index_t vertex_id, Point<dimension> point, OGPolyhedralSolidKey )
```


### add_polyhedron

```cpp
public void add_polyhedron(Span vertices, absl::Span<const std::vector<local_index_t> > facets, OGPolyhedralSolidKey )
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


### get_polyhedron_adjacent

```cpp
public absl::optional<index_t> get_polyhedron_adjacent(const PolyhedronFacet & polyhedron_facet)
```


### remove_polyhedra

```cpp
public void remove_polyhedra(const int & to_delete, OGPolyhedralSolidKey )
```


### add_polyhedron

```cpp
public void add_polyhedron(Span vertices, int facets, OGPolyhedralSolidKey )
```




