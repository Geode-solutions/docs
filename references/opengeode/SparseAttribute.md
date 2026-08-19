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

# class SparseAttribute


 Read and write interface for sparse attribute storage. Only store what you use!



```cpp
Inherits from ReadOnlyAttribute<T>
```



## Functions

### SparseAttribute

```cpp
public void SparseAttribute<T>(AttributeValues<T> default_values, std::string_view name, AttributeProperties properties, AttributeBase::AttributeKey )
```


### value

```cpp
public const T & value(index_t element)
```


### has_value

```cpp
public bool has_value(index_t element)
```


### set_value

```cpp
public void set_value(index_t element, T value)
```


### default_values

```cpp
public const AttributeValues<T> & default_values()
```


### modify_value

```cpp
public void modify_value(index_t element, Modifier modifier)
```


### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, AttributeBase::AttributeKey )
```


### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, AttributeBase::AttributeKey )
```




