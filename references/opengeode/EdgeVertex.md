# struct EdgeVertex


 This struct represents a graph edge endpoint



## Members

```cpp
public index_t edge_id

```

```cpp
public local_index_t vertex_id

```



## Functions

### EdgeVertex

```cpp
public void EdgeVertex()
```


### EdgeVertex

```cpp
public void EdgeVertex(index_t edge_id_in, local_index_t vertex_id_in)
```


### operator==

```cpp
public bool operator==(const EdgeVertex & other)
```


### operator!=

```cpp
public bool operator!=(const EdgeVertex & other)
```


### operator<

```cpp
public bool operator<(const EdgeVertex & other)
```


### opposite

```cpp
public EdgeVertex opposite()
```


### string

```cpp
public basic_string string()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




