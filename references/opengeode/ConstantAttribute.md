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

# class ConstantAttribute


 Read and write interface for constant attribute storage



```cpp
Inherits from ReadOnlyAttribute<T>
```



## Functions

### ConstantAttribute

```cpp
public void ConstantAttribute<T>(T value, AttributeProperties properties, AttributeBase::AttributeKey )
```


### value

```cpp
public const T & value(index_t )
```


### value

```cpp
public const T & value()
```


### set_value

```cpp
public void set_value(T value)
```


### default_value

```cpp
public const T & default_value()
```


### modify_value

```cpp
public void modify_value(Modifier modifier)
```


### compute_value

```cpp
public void compute_value(index_t , index_t , AttributeBase::AttributeKey )
```


### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & , index_t , AttributeBase::AttributeKey )
```


### resize

```cpp
public void resize(index_t , AttributeBase::AttributeKey )
```


### reserve

```cpp
public void reserve(index_t , AttributeBase::AttributeKey )
```


### delete_elements

```cpp
public void delete_elements(const std::vector<bool> & , AttributeBase::AttributeKey )
```


### permute_elements

```cpp
public void permute_elements(absl::Span<const index_t> , AttributeBase::AttributeKey )
```


### clone

```cpp
public std::shared_ptr<AttributeBase> clone(AttributeBase::AttributeKey )
```


### copy

```cpp
public void copy(const AttributeBase & attribute, index_t , AttributeBase::AttributeKey )
```


### extract

```cpp
public std::shared_ptr<AttributeBase> extract(absl::Span<const index_t> , index_t , AttributeBase::AttributeKey )
```


### extract

```cpp
public std::shared_ptr<AttributeBase> extract(const GenericMapping<index_t> & , index_t , AttributeBase::AttributeKey )
```


### import

```cpp
public void import(absl::Span<const index_t> , const std::shared_ptr<AttributeBase> & from, AttributeBase::AttributeKey )
```


### import

```cpp
public void import(const GenericMapping<index_t> & , const std::shared_ptr<AttributeBase> & from, AttributeBase::AttributeKey )
```


### import

```cpp
public void import(const ReadOnlyAttribute<T> & from)
```




