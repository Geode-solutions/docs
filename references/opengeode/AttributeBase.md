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

### clone

```cpp
public std::shared_ptr<AttributeBase> clone(AttributeKey )
```

### copy

```cpp
public void copy(const AttributeBase & attribute, index_t nb_elements, AttributeKey )
```

### extract

```cpp
public std::shared_ptr<AttributeBase> extract(absl::Span<const index_t> old2new, index_t nb_elements, AttributeKey )
```

### extract

```cpp
public std::shared_ptr<AttributeBase> extract(const GenericMapping<index_t> & old2new_mapping, index_t nb_elements, AttributeKey )
```

### import

```cpp
public void import(absl::Span<const index_t> old2new, const std::shared_ptr<AttributeBase> & from, AttributeBase::AttributeKey )
```

### import

```cpp
public void import(const GenericMapping<index_t> & old2new_mapping, const std::shared_ptr<AttributeBase> & from, AttributeBase::AttributeKey )
```

### delete_elements

```cpp
public void delete_elements(const std::vector<bool> & to_delete, AttributeKey )
```

### compute_value

```cpp
public void compute_value(index_t from_element, index_t to_element, AttributeKey )
```

### compute_value

```cpp
public void compute_value(const AttributeLinearInterpolation & interpolation, index_t to_element, AttributeKey )
```

### operator=

```cpp
public AttributeBase & operator=(const AttributeBase & )
```


### name

```cpp
public std::string_view name()
```


### properties

```cpp
public const AttributeProperties & properties()
```


### resize

```cpp
public void resize(index_t size, AttributeKey )
```

### reserve

```cpp
public void reserve(index_t capacity, AttributeKey )
```

### permute_elements

```cpp
public void permute_elements(absl::Span<const index_t> permutation, AttributeKey )
```

### set_properties

```cpp
public void set_properties(AttributeProperties new_properties)
```


### set_name

```cpp
public void set_name(std::string_view name, AttributeKey )
```


### type

```cpp
public std::string_view type()
```

### ~AttributeBase

```cpp
public void ~AttributeBase()
```


### AttributeBase

```cpp
protected void AttributeBase(AttributeProperties properties)
```




