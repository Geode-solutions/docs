# struct PolygonEdge


 This struct represents an edge in a polygon



## Members

```cpp
public index_t polygon_id
```

```cpp
public local_index_t edge_id
```



## Functions

### PolygonEdge

```cpp
public void PolygonEdge()
```


### PolygonEdge

```cpp
public void PolygonEdge(index_t polygon_id_in, local_index_t edge_id_in)
```


### PolygonEdge

```cpp
public void PolygonEdge(PolygonVertex polygon_vertex)
```


### operator==

```cpp
public _Bool operator==(const PolygonEdge & other)
```


### operator!=

```cpp
public _Bool operator!=(const PolygonEdge & other)
```


### operator<

```cpp
public _Bool operator<(const PolygonEdge & other)
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




