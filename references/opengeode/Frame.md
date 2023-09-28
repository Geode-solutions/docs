# class Frame

# class Frame

# class Frame

```cpp
Defined at ../../include/geode/geometry/frame.h#32
```

## Functions

### Frame

```cpp
public void Frame<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/geometry/frame.cpp#85
```

### Frame

```cpp
public void Frame<dimension>(std::array<Vector<dimension>, dimension> directions)
```

```cpp
Defined at /github/workspace/src/geode/geometry/frame.cpp#96
```

### direction

```cpp
public const Vector<dimension> & direction(local_index_t index)
```

```cpp
Defined at /github/workspace/src/geode/geometry/frame.cpp#103
```

### set_direction

```cpp
public void set_direction(local_index_t index, Vector<dimension> direction)
```

```cpp
Defined at /github/workspace/src/geode/geometry/frame.cpp#110
```

### inverse

```cpp
public Frame inverse()
```

```cpp
Defined at /github/workspace/src/geode/geometry/frame.cpp#117
```

### operator+

```cpp
public Frame operator+(const Frame<dimension> & rhs)
```

```cpp
Defined at /github/workspace/src/geode/geometry/frame.cpp#126
```

### rescale

```cpp
public Frame rescale(double length)
```

```cpp
Defined at /github/workspace/src/geode/geometry/frame.cpp#138
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at /github/workspace/src/geode/geometry/frame.cpp#149
```



# class Frame

