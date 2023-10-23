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

# struct Mapping


## Members

```cpp
public Type new_id

```

```cpp
public Type old_id

```



## Functions

### Mapping

```cpp
public void Mapping<Type>()
```


### Mapping

```cpp
public void Mapping<Type>(Type new_id_in, Type old_id_in)
```


### operator==

```cpp
public bool operator==(const Mapping<Type> & other)
```


### operator<

```cpp
public bool operator<(const Mapping<Type> & other)
```




# struct Mapping


## Members

```cpp
public index_t new_id

```

```cpp
public index_t old_id

```



## Functions

### Mapping

```cpp
public void Mapping()
```


### Mapping

```cpp
public void Mapping(index_t new_id_in, index_t old_id_in)
```


### operator==

```cpp
public bool operator==(const Mapping<index_t> & other)
```


### operator<

```cpp
public bool operator<(const Mapping<index_t> & other)
```


### string

```cpp
public basic_string string()
```




