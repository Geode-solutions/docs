# class SparseAttribute


 Read and write interface for sparse attribute storage. Only store what you use!



```cpp
Inherits from ReadOnlyAttribute<T>
```



## Functions

### SparseAttribute

```cpp
public void SparseAttribute<T>(T default_value, AttributeProperties properties, PassKey )
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
public const T & default_value()
```


### modify_value

```cpp
public void modify_value(index_t element, Modifier && modifier)
```


### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, PassKey )
```


### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, PassKey )
```


### clone

```cpp
public std::shared_ptr<AttributeBase> clone(class AttributeBase::AttributeKey )
```


### extract

```cpp
public std::shared_ptr<AttributeBase> extract(absl::Span<const index_t> old2new, index_t nb_elements, class AttributeBase::AttributeKey )
```




