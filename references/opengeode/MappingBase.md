# class MappingBase

```cpp
Defined at ../../include/geode/basic/mapping.h#37
```

## Functions

### reserve

```cpp
public void reserve(index_t capacity)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#43
```

### has_mapping_input

```cpp
public bool has_mapping_input(const T1 & value)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#49
```

### has_mapping_output

```cpp
public bool has_mapping_output(const T2 & value)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#54
```

### in2out

```cpp
public const Storage<T2> & in2out(const T1 & in)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#59
```

### out2in

```cpp
public const Storage<T1> & out2in(const T2 & out)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#64
```

### in2out_map

```cpp
public const absl::flat_hash_map<T1, Storage<T2> > & in2out_map()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#69
```

### out2in_map

```cpp
public const absl::flat_hash_map<T2, Storage<T1> > & out2in_map()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#74
```

### MappingBase

```cpp
protected void MappingBase<T1, T2, StorageType>()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#80
```

### size_input

```cpp
protected index_t size_input()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#82
```

### size_output

```cpp
protected index_t size_output()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#87
```

### in2out_mapping

```cpp
protected absl::flat_hash_map<T1, Storage<T2> > & in2out_mapping()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#92
```

### out2in_mapping

```cpp
protected absl::flat_hash_map<T2, Storage<T1> > & out2in_mapping()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#97
```



