# class SparseAttribute

```cpp
Defined at ../../include/geode/basic/attribute.h#755
```

 Read and write interface for sparse attribute storage. Only store what you use!



```cpp
Inherits from ReadOnlyAttribute<T>
```



## Functions

### SparseAttribute

```cpp
public void SparseAttribute<T>(T default_value, AttributeProperties properties, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#760
```

### value

```cpp
public const T & value(index_t element)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#768
```

### set_value

```cpp
public void set_value(index_t element, T value)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#778
```

### default_value

```cpp
public const T & default_value()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#783
```

### modify_value

```cpp
public void modify_value(index_t element, Modifier && modifier)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#789
```

### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#800
```

### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#807
```

### clone

```cpp
public std::shared_ptr<AttributeBase> clone(class AttributeBase::AttributeKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#883
```

### extract

```cpp
public std::shared_ptr<AttributeBase> extract(absl::Span<const index_t> old2new, index_t nb_elements, class AttributeBase::AttributeKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#912
```



