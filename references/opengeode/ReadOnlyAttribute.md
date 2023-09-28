# class ReadOnlyAttribute

```cpp
Defined at ../../include/geode/basic/attribute.h#168
```

 Read only attribute interface that does not need to know the underlying attribute storage type.



```cpp
Inherits from AttributeBase
```



## Functions

### value

```cpp
public const T & value(index_t element)
```

### type

```cpp
public string_view type()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#175
```

### generic_value

```cpp
public float generic_value(index_t element)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#180
```

### generic_item_value

```cpp
public float generic_item_value(index_t element, local_index_t item)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#186
```

### is_genericable

```cpp
public bool is_genericable()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#193
```

### nb_items

```cpp
public local_index_t nb_items()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#198
```

### ReadOnlyAttribute

```cpp
protected void ReadOnlyAttribute<T>(AttributeProperties properties)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#204
```



