# class MappingBase

```cpp
Defined at ../../include/geode/basic/mapping.h#37
```

## Functions

### MappingBase

```cpp
public void MappingBase<T1, T2, StorageType>(const MappingBase<T1, T2, StorageType> & )
```

```cpp
Defined at ../../include/geode/basic/mapping.h#39
```

### operator=

```cpp
public MappingBase<T1, T2, StorageType> & operator=(const MappingBase<T1, T2, StorageType> & )
```

```cpp
Defined at ../../include/geode/basic/mapping.h#39
```

### reserve

```cpp
public void reserve(index_t capacity)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#45
```

### has_mapping_input

```cpp
public bool has_mapping_input(const T1 & value)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#51
```

### has_mapping_output

```cpp
public bool has_mapping_output(const T2 & value)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#56
```

### in2out

```cpp
public const Storage<T2> & in2out(const T1 & in)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#61
```

### out2in

```cpp
public const Storage<T1> & out2in(const T2 & out)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#66
```

### in2out_map

```cpp
public const absl::flat_hash_map<T1, Storage<T2> > & in2out_map()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#71
```

### out2in_map

```cpp
public const absl::flat_hash_map<T2, Storage<T1> > & out2in_map()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#76
```

### MappingBase

```cpp
protected void MappingBase<T1, T2, StorageType>()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#82
```

### MappingBase

```cpp
protected void MappingBase<T1, T2, StorageType>(MappingBase<T1, T2, StorageType> && other)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#83
```

### operator=

```cpp
protected MappingBase<T1, T2, StorageType> & operator=(MappingBase<T1, T2, StorageType> && other)
```

```cpp
Defined at ../../include/geode/basic/mapping.h#84
```

### size_input

```cpp
protected index_t size_input()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#86
```

### size_output

```cpp
protected index_t size_output()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#91
```

### in2out_mapping

```cpp
protected absl::flat_hash_map<T1, Storage<T2> > & in2out_mapping()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#96
```

### out2in_mapping

```cpp
protected absl::flat_hash_map<T2, Storage<T1> > & out2in_mapping()
```

```cpp
Defined at ../../include/geode/basic/mapping.h#101
```



