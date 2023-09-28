# class Blocks

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#389
```

# class Blocks

```cpp
Defined at ../../include/geode/model/mixin/core/blocks.h#46
```

 Storage class providing range loop to iterate on Blocks



## Records

BlockRangeBase

BlockRange



## Functions

### Blocks

```cpp
public void Blocks<dimension>(const Blocks<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/blocks.h#48
```

### operator=

```cpp
public Blocks<dimension> & operator=(const Blocks<dimension> & )
```

```cpp
Defined at ../../include/geode/model/mixin/core/blocks.h#48
```

### ~Blocks

```cpp
public void ~Blocks<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#65
```

### nb_blocks

```cpp
public index_t nb_blocks()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#77
```

### has_block

```cpp
public bool has_block(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#83
```

### block

```cpp
public const Block<dimension> & block(const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#89
```

 Access to an unmodifiable Block by its unique index

### blocks

```cpp
public BlockRange blocks()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#245
```

### save_blocks

```cpp
public void save_blocks(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#101
```

 Save each Block in a file located in the specified directory

### Blocks

```cpp
protected void Blocks<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#54
```

### Blocks

```cpp
protected void Blocks<dimension>(Blocks<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#59
```

### operator=

```cpp
protected Blocks<dimension> & operator=(Blocks<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/blocks.cpp#70
```



