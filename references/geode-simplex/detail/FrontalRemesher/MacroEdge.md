# struct MacroEdge

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/frontal.h#32
```

## Members

```cpp
public array values

```

```cpp
public Point<dimension> p0

```

```cpp
public Point<dimension> p1

```

```cpp
public double length

```

```cpp
public double metric

```

```cpp
public double target

```

```cpp
public BorderType border_type

```

```cpp
public index_t id

```

```cpp
public index_t apex

```



## Functions

### MacroEdge

```cpp
public void MacroEdge(const FrontalRemesher<> & remesher, index_t v0, index_t v1, BorderType border_type_in)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2255
```

### operator<

```cpp
public bool operator<(const MacroEdge & rhs)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2277
```

### update

```cpp
public void update(VerticesModifier & modifier)
```

```cpp
Defined at /github/workspace/src/geode/simplex/private/surface/common/private/frontal.cpp#2288
```



## Enums

| enum BorderType |

--

| BORDER |
| NO_BORDER |


```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/frontal.h#34
```



