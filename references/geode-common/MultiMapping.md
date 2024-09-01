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

# struct MultiMapping


## Members

```cpp
public index_t new_id

```

```cpp
public InlinedVector old_id

```



## Functions

### MultiMapping

```cpp
public void MultiMapping()
```


### MultiMapping

```cpp
public void MultiMapping(index_t new_id_in, InlinedVector old_id_in)
```


### MultiMapping

```cpp
public void MultiMapping(Mapping mapping)
```


### operator==

```cpp
public bool operator==(const MultiMapping<index_t> & other)
```


### string

```cpp
public basic_string string()
```




# struct MultiMapping


## Members

```cpp
public Type new_id

```

```cpp
public absl::InlinedVector<Type, 1> old_id

```



## Functions

### MultiMapping

```cpp
public void MultiMapping<Type>()
```


### MultiMapping

```cpp
public void MultiMapping<Type>(Type new_id_in, absl::InlinedVector<Type, 1> old_id_in)
```


### MultiMapping

```cpp
public void MultiMapping<Type>(Mapping<Type> mapping)
```


### operator==

```cpp
public bool operator==(const MultiMapping<Type> & other)
```




