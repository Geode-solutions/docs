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

# class PImpl


## Functions

### PImpl

```cpp
public void PImpl<T>(const PImpl<T> & )
```


### operator=

```cpp
public PImpl<T> & operator=(const PImpl<T> & )
```


### PImpl

```cpp
public void PImpl<T>(Args &&... )
```


### PImpl

```cpp
public void PImpl<T>(PImpl<T> && other)
```


### ~PImpl

```cpp
public void ~PImpl<T>()
```


### operator=

```cpp
public PImpl<T> & operator=(PImpl<T> && other)
```


### reset

```cpp
public void reset()
```


### operator->

```cpp
public T * operator->()
```


### operator->

```cpp
public const T * operator->()
```


### operator*

```cpp
public T & operator*()
```


### operator*

```cpp
public const T & operator*()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




