# class ConstantAttribute

```cpp
Defined at ../../include/geode/basic/attribute.h#228
```

 Read and write interface for constant attribute storage



```cpp
Inherits from ReadOnlyAttribute<T>
```



## Functions

### ConstantAttribute

```cpp
public void ConstantAttribute<T>(T value, AttributeProperties properties, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#233
```

### value

```cpp
public const T & value(index_t )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#240
```

### value

```cpp
public const T & value()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#245
```

### set_value

```cpp
public void set_value(T value)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#250
```

### default_value

```cpp
public T default_value()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#255
```

### modify_value

```cpp
public void modify_value(Modifier && modifier)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#261
```

### compute_value

```cpp
public void compute_value(index_t , index_t , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#267
```

### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & , index_t , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#273
```

### resize

```cpp
public void resize(index_t , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#301
```

### reserve

```cpp
public void reserve(index_t , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#305
```

### delete_elements

```cpp
public void delete_elements(const std::vector<bool> & , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#309
```

### permute_elements

```cpp
public void permute_elements(Span , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#314
```

### clone

```cpp
public shared_ptr clone(PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#319
```

### copy

```cpp
public void copy(const AttributeBase & attribute, index_t , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#328
```

### extract

```cpp
public shared_ptr extract(Span , index_t , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#336
```

### extract

```cpp
public shared_ptr extract(const GenericMapping<index_t> & , index_t , PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#347
```

### delete_elements

```cpp
public void delete_elements(const int & , class AttributeBase::AttributeKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#309
```

### extract

```cpp
public std::shared_ptr<AttributeBase> extract(const int & , index_t , class AttributeBase::AttributeKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#347
```



