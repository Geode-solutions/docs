# struct uuid

```cpp
Defined at ../../include/geode/basic/uuid.h#102
```

 128-bit basic UUID type that allows comparison and sorting.



## Members

```cpp
public uint64_t ab

```

```cpp
public uint64_t cd

```



## Functions

### uuid

```cpp
public void uuid()
```

```cpp
Defined at /github/workspace/src/geode/basic/uuid.cpp#53
```

### uuid

```cpp
public void uuid(string_view string)
```

```cpp
Defined at /github/workspace/src/geode/basic/uuid.cpp#123
```

### operator==

```cpp
public bool operator==(const uuid & other)
```

```cpp
Defined at /github/workspace/src/geode/basic/uuid.cpp#66
```

### operator!=

```cpp
public bool operator!=(const uuid & other)
```

```cpp
Defined at /github/workspace/src/geode/basic/uuid.cpp#71
```

### operator<

```cpp
public bool operator<(const uuid & other)
```

```cpp
Defined at /github/workspace/src/geode/basic/uuid.cpp#76
```

### string

```cpp
public basic_string string()
```

```cpp
Defined at /github/workspace/src/geode/basic/uuid.cpp#93
```



