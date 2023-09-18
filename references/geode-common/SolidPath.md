# struct SolidPath


## Members

public Position position

public PolyhedronFacet facet

public index_t vertex_id



## Functions

### SolidPath

```cpp
public void SolidPath(const TetrahedralSolid3D & solid, PolyhedronFacet facet_in, Position position_in)
```


### SolidPath

```cpp
public void SolidPath(index_t vertex_in)
```


### SolidPath

```cpp
public void SolidPath()
```


### is_vertex

```cpp
public _Bool is_vertex()
```


### is_facet_vertex

```cpp
public _Bool is_facet_vertex()
```


### is_edge

```cpp
public _Bool is_edge()
```


### is_facet

```cpp
public _Bool is_facet()
```


### are_same_paths

```cpp
public _Bool are_same_paths(const TetrahedralSolid3D & solid, const SolidPath & other)
```


### get_vertex_position

```cpp
public Position get_vertex_position(geode::local_index_t vertex)
```


### get_edge_position

```cpp
public Position get_edge_position(geode::local_index_t edge)
```


### get_edge_index

```cpp
public geode::local_index_t get_edge_index()
```


### get_vertex_index

```cpp
public geode::local_index_t get_vertex_index()
```


### get_edge_vertex_id

```cpp
public geode::local_index_t get_edge_vertex_id(geode::local_index_t vertex)
```




