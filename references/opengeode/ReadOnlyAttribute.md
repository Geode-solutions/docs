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

# class ReadOnlyAttribute


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
public basic_string_view type()
```


### generic_value

```cpp
public float generic_value(index_t element)
```


### generic_item_value

```cpp
public float generic_item_value(index_t element, local_index_t item)
```


### is_genericable

```cpp
public bool is_genericable()
```


### nb_items

```cpp
public local_index_t nb_items()
```


### ReadOnlyAttribute

```cpp
protected void ReadOnlyAttribute<T>(AttributeProperties properties)
```




