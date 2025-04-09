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
public void ConstantAttribute<T>(T value, AttributeProperties properties, PassKey )
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
public void modify_value(Modifier && modifier)
```


### compute_value

```cpp
public void compute_value(index_t , index_t , PassKey )
```


### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & , index_t , PassKey )
```


### resize

```cpp
public void resize(index_t , PassKey )
```


### reserve

```cpp
public void reserve(index_t , PassKey )
```


### delete_elements

```cpp
public void delete_elements(const std::vector<bool> & , PassKey )
```


### permute_elements

```cpp
public void permute_elements(Span , PassKey )
```


### clone

```cpp
public shared_ptr clone(PassKey )
```


### copy

```cpp
public void copy(const AttributeBase & attribute, index_t , PassKey )
```


### extract

```cpp
public shared_ptr extract(Span , index_t , PassKey )
```


### extract

```cpp
public shared_ptr extract(const GenericMapping<index_t> & , index_t , PassKey )
```


### import

```cpp
public void import(Span , const std::shared_ptr<AttributeBase> & from, PassKey )
```


### import

```cpp
public void import(const GenericMapping<index_t> & , const std::shared_ptr<AttributeBase> & from, PassKey )
```


### import

```cpp
public void import(const ReadOnlyAttribute<T> & from)
```




