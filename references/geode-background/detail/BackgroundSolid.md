# class BackgroundSolid


```cpp
Inherits from MacroInfo3D
```



## Records

Impl



## Functions

### BackgroundSolid

```cpp
public void BackgroundSolid(TetrahedralSolid3D && solid)
```


### BackgroundSolid

```cpp
public void BackgroundSolid(BackgroundSolid && other)
```


### ~BackgroundSolid

```cpp
public void ~BackgroundSolid()
```


### impl_name_static

```cpp
public MeshImpl impl_name_static()
```


### impl_name

```cpp
public MeshImpl impl_name()
```


### clone

```cpp
public BackgroundSolid clone()
```


### clone_solid

```cpp
public int clone_solid()
```


### release_solid

```cpp
public OpenGeodeTetrahedralSolid3D release_solid()
```


### edge_has_incident_component_facet

```cpp
public bool edge_has_incident_component_facet(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```


### edge_incident_component_facets

```cpp
public int edge_incident_component_facets(const std::array<index_t, 2> & edge_vertices)
```


### one_border_polyhedron_facet

```cpp
public PolyhedronFacet one_border_polyhedron_facet()
```


### tetrahedron_target_length

```cpp
public double tetrahedron_target_length(index_t tetrahedron_id)
```




