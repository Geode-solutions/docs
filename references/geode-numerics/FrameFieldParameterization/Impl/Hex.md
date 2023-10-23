# struct Hex

## Members

```cpp
public std::array<Point3D, NB_HEX_VERTICES> uvw

```

```cpp
public std::array<Point3D, NB_HEX_VERTICES> xyz

```

```cpp
public std::array<index_t, NB_HEX_VERTICES> containing_element

```

```cpp
public BoundingBox3D bbox

```

```cpp
public int visited

```

```cpp
public int local_parameterization

```

## Functions

### Hex

```cpp
public void Hex(const Point3D & center)
```

### is_complete

```cpp
public bool is_complete()
```

### done

```cpp
public bool done(local_index_t vertex)
```

### is_visited

```cpp
public bool is_visited(index_t element)
```
