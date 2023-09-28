# struct MeshElement

```cpp
Defined at ../../include/geode/mesh/core/mesh_element.h#32
```

## Members

```cpp
public uuid mesh_id

```

```cpp
public index_t element_id

```



## Functions

### MeshElement

```cpp
public void MeshElement(uuid mesh_id_in, index_t element_id_in)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_element.h#34
```

### operator==

```cpp
public bool operator==(const MeshElement & other)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_element.h#39
```

### operator!=

```cpp
public bool operator!=(const MeshElement & other)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_element.h#44
```

### serialize

```cpp
public void serialize(Archive & archive)
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_element.h#50
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at ../../include/geode/mesh/core/mesh_element.h#60
```



