# class VariableAttribute


 Read and write interface for boolean variable attribute storage. This class removes the custom storage use by the STL for std::vector of bool.



```cpp
Inherits from ReadOnlyAttribute<_Bool>
```



## Functions

### VariableAttribute

```cpp
public void VariableAttribute(_Bool default_value, AttributeProperties properties, PassKey )
```


### value

```cpp
public const _Bool & value(index_t element)
```


### set_value

```cpp
public void set_value(index_t element, _Bool value)
```


### default_value

```cpp
public _Bool default_value()
```


### modify_value

```cpp
public void modify_value(index_t element, Modifier && modifier)
```


### size

```cpp
public index_t size()
```


### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, PassKey )
```


### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, PassKey )
```


### VariableAttribute

```cpp
protected void VariableAttribute(_Bool default_value, AttributeProperties properties)
```


### VariableAttribute

```cpp
protected void VariableAttribute()
```


### serialize

```cpp
protected void serialize(Archive & archive)
```


### resize

```cpp
protected void resize(index_t size, PassKey )
```


### reserve

```cpp
protected void reserve(index_t capacity, PassKey )
```


### delete_elements

```cpp
protected void delete_elements(const std::vector<_Bool> & to_delete, PassKey )
```


### permute_elements

```cpp
protected void permute_elements(Span permutation, PassKey )
```


### clone

```cpp
protected shared_ptr clone(PassKey )
```


### copy

```cpp
protected void copy(const AttributeBase & attribute, index_t nb_elements, PassKey )
```


### extract

```cpp
protected shared_ptr extract(Span old2new, index_t nb_elements, PassKey )
```


### extract

```cpp
protected shared_ptr extract(const GenericMapping<index_t> & old2new_mapping, index_t nb_elements, PassKey )
```


### delete_elements

```cpp
protected void delete_elements(const int & to_delete, class AttributeBase::AttributeKey )
```


### extract

```cpp
protected std::shared_ptr<AttributeBase> extract(const int & old2new_mapping, index_t nb_elements, class AttributeBase::AttributeKey )
```




# class VariableAttribute


 Read and write interface for variable attribute storage



```cpp
Inherits from ReadOnlyAttribute<T>
```



## Functions

### VariableAttribute

```cpp
public void VariableAttribute<T>(T default_value, AttributeProperties properties, PassKey )
```


### value

```cpp
public const T & value(index_t element)
```


### set_value

```cpp
public void set_value(index_t element, T value)
```


### default_value

```cpp
public T default_value()
```


### modify_value

```cpp
public void modify_value(index_t element, Modifier && modifier)
```


### size

```cpp
public index_t size()
```


### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, PassKey )
```


### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, PassKey )
```


### VariableAttribute

```cpp
protected void VariableAttribute<T>(T default_value, AttributeProperties properties)
```


### VariableAttribute

```cpp
protected void VariableAttribute<T>()
```


### serialize

```cpp
protected void serialize(Archive & archive)
```


### resize

```cpp
protected void resize(index_t size, PassKey )
```


### reserve

```cpp
protected void reserve(index_t capacity, PassKey )
```


### delete_elements

```cpp
protected void delete_elements(const std::vector<_Bool> & to_delete, PassKey )
```


### permute_elements

```cpp
protected void permute_elements(Span permutation, PassKey )
```


### clone

```cpp
protected shared_ptr clone(PassKey )
```


### copy

```cpp
protected void copy(const AttributeBase & attribute, index_t nb_elements, PassKey )
```


### extract

```cpp
protected shared_ptr extract(Span old2new, index_t nb_elements, PassKey )
```


### extract

```cpp
protected shared_ptr extract(const GenericMapping<index_t> & old2new_mapping, index_t nb_elements, PassKey )
```


### delete_elements

```cpp
protected void delete_elements(const int & to_delete, class AttributeBase::AttributeKey )
```


### extract

```cpp
protected std::shared_ptr<AttributeBase> extract(const int & old2new_mapping, index_t nb_elements, class AttributeBase::AttributeKey )
```




