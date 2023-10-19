# struct SolidPatch


## Members

```cpp
public Position position

```

```cpp
public index_t edge_id

```

```cpp
public index_t vertex_id

```



## Functions

### SolidPatch

```cpp
public void SolidPatch(const TetrahedralSolid3D & solid, index_t edge_in, Position position_in)
```


### SolidPatch

```cpp
public void SolidPatch(index_t vertex_in)
```


### SolidPatch

```cpp
public void SolidPatch()
```


### is_vertex

```cpp
public bool is_vertex()
```


### is_edge_vertex

```cpp
public bool is_edge_vertex()
```


### is_edge

```cpp
public bool is_edge()
```


### are_same_paths

```cpp
public bool are_same_paths(const SolidPatch & other)
```


### get_vertex_position

```cpp
public Position get_vertex_position(geode::index_t vertex)
```


### get_vertex_index

```cpp
public geode::index_t get_vertex_index()
```




