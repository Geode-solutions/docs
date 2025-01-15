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

# class GenericMapping


```cpp
Inherits from MappingBase<T1, T2, MultipleValueStorage>
```



## Functions

### GenericMapping

```cpp
public void GenericMapping<T1, T2>()
```


### GenericMapping

```cpp
public void GenericMapping<T1, T2>(GenericMapping<T1, T2> && other)
```


### operator=

```cpp
public GenericMapping<T1, T2> & operator=(GenericMapping<T1, T2> && other)
```


### map

```cpp
public void map(const T1 & in, const T2 & out)
```


### unmap

```cpp
public void unmap(const T1 & in, const T2 & out)
```


### erase_in

```cpp
public void erase_in(const T1 & in)
```


### erase_out

```cpp
public void erase_out(const T2 & out)
```


### size_in

```cpp
public index_t size_in()
```


### size_out

```cpp
public index_t size_out()
```




