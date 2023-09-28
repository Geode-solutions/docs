# class VariableAttribute

```cpp
Defined at ../../include/geode/basic/attribute.h#560
```

 Read and write interface for boolean variable attribute storage. This class removes the custom storage use by the STL for std::vector of bool.



```cpp
Inherits from ReadOnlyAttribute<_Bool>
```



## Functions

### VariableAttribute

```cpp
public void VariableAttribute(bool default_value, AttributeProperties properties, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#566
```

### value

```cpp
public const bool & value(index_t element)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#573
```

### set_value

```cpp
public void set_value(index_t element, bool value)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#578
```

### default_value

```cpp
public bool default_value()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#583
```

### modify_value

```cpp
public void modify_value(index_t element, Modifier && modifier)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#589
```

### size

```cpp
public index_t size()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#594
```

### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#600
```

### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#607
```

### VariableAttribute

```cpp
protected void VariableAttribute(bool default_value, AttributeProperties properties)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#615
```

### VariableAttribute

```cpp
protected void VariableAttribute()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#622
```

### serialize

```cpp
protected void serialize(Archive & archive)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#626
```

### resize

```cpp
protected void resize(index_t size, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#640
```

### reserve

```cpp
protected void reserve(index_t capacity, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#651
```

### delete_elements

```cpp
protected void delete_elements(const std::vector<bool> & to_delete, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#656
```

### permute_elements

```cpp
protected void permute_elements(Span permutation, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#662
```

### clone

```cpp
protected shared_ptr clone(PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#668
```

### copy

```cpp
protected void copy(const AttributeBase & attribute, index_t nb_elements, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#679
```

### extract

```cpp
protected shared_ptr extract(Span old2new, index_t nb_elements, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#696
```

### extract

```cpp
protected shared_ptr extract(const GenericMapping<index_t> & old2new_mapping, index_t nb_elements, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#721
```

### delete_elements

```cpp
protected void delete_elements(const int & to_delete, class AttributeBase::AttributeKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#656
```

### extract

```cpp
protected std::shared_ptr<AttributeBase> extract(const int & old2new_mapping, index_t nb_elements, class AttributeBase::AttributeKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#721
```



# class VariableAttribute

```cpp
Defined at ../../include/geode/basic/attribute.h#366
```

 Read and write interface for variable attribute storage



```cpp
Inherits from ReadOnlyAttribute<T>
```



## Functions

### VariableAttribute

```cpp
public void VariableAttribute<T>(T default_value, AttributeProperties properties, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#371
```

### value

```cpp
public const T & value(index_t element)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#379
```

### set_value

```cpp
public void set_value(index_t element, T value)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#384
```

### default_value

```cpp
public T default_value()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#389
```

### modify_value

```cpp
public void modify_value(index_t element, Modifier && modifier)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#395
```

### size

```cpp
public index_t size()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#400
```

### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#406
```

### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#413
```

### VariableAttribute

```cpp
protected void VariableAttribute<T>(T default_value, AttributeProperties properties)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#421
```

### VariableAttribute

```cpp
protected void VariableAttribute<T>()
```

```cpp
Defined at ../../include/geode/basic/attribute.h#428
```

### serialize

```cpp
protected void serialize(Archive & archive)
```

```cpp
Defined at ../../include/geode/basic/attribute.h#431
```

### resize

```cpp
protected void resize(index_t size, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#448
```

### reserve

```cpp
protected void reserve(index_t capacity, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#459
```

### delete_elements

```cpp
protected void delete_elements(const std::vector<bool> & to_delete, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#464
```

### permute_elements

```cpp
protected void permute_elements(Span permutation, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#470
```

### clone

```cpp
protected shared_ptr clone(PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#476
```

### copy

```cpp
protected void copy(const AttributeBase & attribute, index_t nb_elements, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#486
```

### extract

```cpp
protected shared_ptr extract(Span old2new, index_t nb_elements, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#503
```

### extract

```cpp
protected shared_ptr extract(const GenericMapping<index_t> & old2new_mapping, index_t nb_elements, PassKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#527
```

### delete_elements

```cpp
protected void delete_elements(const int & to_delete, class AttributeBase::AttributeKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#464
```

### extract

```cpp
protected std::shared_ptr<AttributeBase> extract(const int & old2new_mapping, index_t nb_elements, class AttributeBase::AttributeKey )
```

```cpp
Defined at ../../include/geode/basic/attribute.h#527
```



