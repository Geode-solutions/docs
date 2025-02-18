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

# class BijectiveMapping


```cpp
Inherits from MappingBase<T1, T2, OneValueStorage>
```



## Functions

### BijectiveMapping

```cpp
public void BijectiveMapping<T1, T2>()
```


### BijectiveMapping

```cpp
public void BijectiveMapping<T1, T2>(BijectiveMapping<T1, T2> & )
```


### operator=

```cpp
public BijectiveMapping<T1, T2> & operator=(BijectiveMapping<T1, T2> & )
```


### BijectiveMapping

```cpp
public void BijectiveMapping<T1, T2>(BijectiveMapping<T1, T2> && )
```


### operator=

```cpp
public BijectiveMapping<T1, T2> & operator=(BijectiveMapping<T1, T2> && )
```


### map

```cpp
public void map(const T1 & in, const T2 & out)
```


### erase_in

```cpp
public void erase_in(const T1 & in)
```


### erase_out

```cpp
public void erase_out(const T2 & out)
```


### size

```cpp
public index_t size()
```




