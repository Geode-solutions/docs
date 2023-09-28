# struct EdgeVertex

```cpp
Defined at ../../include/geode/mesh/core/graph.h#46
```

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

```cpp
Defined at ../../include/geode/mesh/core/graph.h#48
```

### EdgeVertex

```cpp
public void EdgeVertex(index_t edge_id_in, local_index_t vertex_id_in)
```

```cpp
Defined at ../../include/geode/mesh/core/graph.h#49
```

### operator==

```cpp
public bool operator==(const EdgeVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/graph.h#53
```

### operator!=

```cpp
public bool operator!=(const EdgeVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/graph.h#57
```

### operator<

```cpp
public bool operator<(const EdgeVertex & other)
```

```cpp
Defined at ../../include/geode/mesh/core/graph.h#61
```

### opposite

```cpp
public EdgeVertex opposite()
```

```cpp
Defined at ../../include/geode/mesh/core/graph.h#69
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/mesh/core/graph.h#74
```

### serialize

```cpp
public void serialize(Archive & archive)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/graph.cpp#130
```



