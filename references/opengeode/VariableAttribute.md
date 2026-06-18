<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class VariableAttribute


 Read and write interface for boolean variable attribute storage. This class removes the custom storage use by the STL for std::vector of bool.



```cpp
Inherits from ReadOnlyAttribute<_Bool>
```



## Functions

### VariableAttribute

```cpp
public void VariableAttribute(bool default_value, AttributeProperties properties, AttributeBase::AttributeKey )
```


### value

```cpp
public const bool & value(index_t element)
```


### set_value

```cpp
public void set_value(index_t element, bool value)
```


### default_value

```cpp
public bool default_value()
```


### modify_value

```cpp
public void modify_value(index_t element, Modifier modifier)
```


### size

```cpp
public index_t size()
```


### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, AttributeBase::AttributeKey )
```


### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, AttributeBase::AttributeKey )
```


### VariableAttribute

```cpp
protected void VariableAttribute(bool default_value, AttributeProperties properties)
```


### VariableAttribute

```cpp
protected void VariableAttribute()
```


### serialize

```cpp
protected void serialize(Archive & serializer)
```


### resize

```cpp
protected void resize(index_t size, AttributeBase::AttributeKey )
```


### reserve

```cpp
protected void reserve(index_t capacity, AttributeBase::AttributeKey )
```


### delete_elements

```cpp
protected void delete_elements(const std::vector<bool> & to_delete, AttributeBase::AttributeKey )
```


### permute_elements

```cpp
protected void permute_elements(absl::Span<const index_t> permutation, AttributeBase::AttributeKey )
```


### clone

```cpp
protected std::shared_ptr<AttributeBase> clone(AttributeBase::AttributeKey )
```


### copy

```cpp
protected void copy(const AttributeBase & attribute, index_t nb_elements, AttributeBase::AttributeKey )
```


### extract

```cpp
protected std::shared_ptr<AttributeBase> extract(absl::Span<const index_t> old2new, index_t nb_elements, AttributeBase::AttributeKey )
```


### extract

```cpp
protected std::shared_ptr<AttributeBase> extract(const GenericMapping<index_t> & old2new_mapping, index_t nb_elements, AttributeBase::AttributeKey )
```


### import

```cpp
protected void import(absl::Span<const index_t> old2new, const std::shared_ptr<AttributeBase> & from, AttributeBase::AttributeKey )
```


### import

```cpp
protected void import(const GenericMapping<index_t> & old2new_mapping, const std::shared_ptr<AttributeBase> & from, AttributeBase::AttributeKey )
```


### import

```cpp
protected void import(absl::Span<const index_t> old2new, const ReadOnlyAttribute<bool> & from)
```


### import

```cpp
protected void import(const GenericMapping<index_t> & old2new_mapping, const ReadOnlyAttribute<bool> & from)
```




# class VariableAttribute


 Read and write interface for variable attribute storage



```cpp
Inherits from ReadOnlyAttribute<T>
```



## Functions

### VariableAttribute

```cpp
public void VariableAttribute<T>(T default_value, AttributeProperties properties, AttributeBase::AttributeKey )
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
public void modify_value(index_t element, Modifier modifier)
```


### size

```cpp
public index_t size()
```


### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, AttributeBase::AttributeKey )
```


### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, AttributeBase::AttributeKey )
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
protected void serialize(Archive & serializer)
```


### resize

```cpp
protected void resize(index_t size, AttributeBase::AttributeKey )
```


### reserve

```cpp
protected void reserve(index_t capacity, AttributeBase::AttributeKey )
```


### delete_elements

```cpp
protected void delete_elements(const std::vector<bool> & to_delete, AttributeBase::AttributeKey )
```


### permute_elements

```cpp
protected void permute_elements(absl::Span<const index_t> permutation, AttributeBase::AttributeKey )
```


### clone

```cpp
protected std::shared_ptr<AttributeBase> clone(AttributeBase::AttributeKey )
```


### copy

```cpp
protected void copy(const AttributeBase & attribute, index_t nb_elements, AttributeBase::AttributeKey )
```


### extract

```cpp
protected std::shared_ptr<AttributeBase> extract(absl::Span<const index_t> old2new, index_t nb_elements, AttributeBase::AttributeKey )
```


### extract

```cpp
protected std::shared_ptr<AttributeBase> extract(const GenericMapping<index_t> & old2new_mapping, index_t nb_elements, AttributeBase::AttributeKey )
```


### import

```cpp
protected void import(absl::Span<const index_t> old2new, const std::shared_ptr<AttributeBase> & from, AttributeBase::AttributeKey )
```


### import

```cpp
protected void import(const GenericMapping<index_t> & old2new_mapping, const std::shared_ptr<AttributeBase> & from, AttributeBase::AttributeKey )
```


### import

```cpp
protected void import(absl::Span<const index_t> old2new, const ReadOnlyAttribute<T> & from)
```


### import

```cpp
protected void import(const GenericMapping<index_t> & old2new_mapping, const ReadOnlyAttribute<T> & from)
```




