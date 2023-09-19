# struct PolyhedronVertex


 This struct represents a local vertex in a polyhedron



## Members

```cpp
public index_t polyhedron_id
```

```cpp
public local_index_t vertex_id
```



## Functions

### PolyhedronVertex

```cpp
public void PolyhedronVertex()
```


### PolyhedronVertex

```cpp
public void PolyhedronVertex(index_t polyhedron_id_in, local_index_t vertex_id_in)
```


### operator==

```cpp
public _Bool operator==(const PolyhedronVertex & other)
```


### operator!=

```cpp
public _Bool operator!=(const PolyhedronVertex & other)
```


### operator<

```cpp
public _Bool operator<(const PolyhedronVertex & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




