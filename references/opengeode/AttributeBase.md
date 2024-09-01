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

# class AttributeBase


 Base class defining the virtual API used by the AttributeManager.



## Functions

### AttributeBase

```cpp
public void AttributeBase(const AttributeBase & )
```


### operator=

```cpp
public AttributeBase & operator=(const AttributeBase & )
```


### ~AttributeBase

```cpp
public void ~AttributeBase()
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

### type

```cpp
public basic_string_view type()
```

### name

```cpp
public basic_string_view name()
```


### properties

```cpp
public const AttributeProperties & properties()
```


### set_properties

```cpp
public void set_properties(AttributeProperties new_properties)
```


### set_name

```cpp
public void set_name(basic_string_view name, PassKey )
```


### clone

```cpp
public shared_ptr clone(PassKey )
```

### copy

```cpp
public void copy(const AttributeBase & attribute, index_t nb_elements, PassKey )
```

### extract

```cpp
public shared_ptr extract(Span old2new, index_t nb_elements, PassKey )
```

### extract

```cpp
public shared_ptr extract(const GenericMapping<index_t> & old2new_mapping, index_t nb_elements, PassKey )
```

### resize

```cpp
public void resize(index_t size, PassKey )
```

### reserve

```cpp
public void reserve(index_t capacity, PassKey )
```

### delete_elements

```cpp
public void delete_elements(const std::vector<bool> & to_delete, PassKey )
```

### permute_elements

```cpp
public void permute_elements(Span permutation, PassKey )
```

### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, PassKey )
```

### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, PassKey )
```

### AttributeBase

```cpp
protected void AttributeBase(AttributeProperties properties)
```




