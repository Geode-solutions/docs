# class Corners

```cpp
Defined at ../../include/geode/model/mixin/core/corners.h#46
```

 Storage class providing range loop to iterate on Corners



## Records

CornerRangeBase

CornerRange



## Functions

### Corners

```cpp
public void Corners<>(const Corners<> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corners.h#48
```

### operator=

```cpp
public Corners<> & operator=(const Corners<> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/corners.h#48
```

### ~Corners

```cpp
public void ~Corners<>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#58
```

### nb_corners

```cpp
public index_t nb_corners()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#77
```

### has_corner

```cpp
public bool has_corner(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#71
```

### corner

```cpp
public const Corner<dimension> & corner(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#83
```

 Access to an unmodifiable Corner by its unique index

### corners

```cpp
public CornerRange corners()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#152
```

### save_corners

```cpp
public void save_corners(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#97
```

 Save each Corner in a file located in the specified directory

### Corners

```cpp
protected void Corners<>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#47
```

### Corners

```cpp
protected void Corners<>(Corners<> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#52
```

### operator=

```cpp
protected Corners<> & operator=(Corners<> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#63
```



# class Corners

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#353
```

# class Corners

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/corners.cpp#352
```

