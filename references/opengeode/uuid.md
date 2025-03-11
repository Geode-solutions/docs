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

# class uuid


 128-bit basic UUID type that allows comparison and sorting.



## Members

```cpp
public uint64_t ab

```

```cpp
public uint64_t cd

```



## Functions

### uuid

```cpp
public void uuid()
```


### uuid

```cpp
public void uuid(basic_string_view string)
```


### uuid

```cpp
public void uuid(const uuid & )
```


### uuid

```cpp
public void uuid(uuid && )
```


### operator=

```cpp
public uuid & operator=(uuid && other)
```


### operator=

```cpp
public uuid & operator=(const uuid & other)
```


### ~uuid

```cpp
public void ~uuid()
```


### operator==

```cpp
public bool operator==(const uuid & other)
```


### operator!=

```cpp
public bool operator!=(const uuid & other)
```


### operator<

```cpp
public bool operator<(const uuid & other)
```


### string

```cpp
public basic_string string()
```




