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

# struct uuid


## Members

```cpp
public array bytes_

```



## Functions

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


### uuid

```cpp
public void uuid()
```


### uuid

```cpp
public void uuid(std::string_view string)
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
public std::string string()
```




