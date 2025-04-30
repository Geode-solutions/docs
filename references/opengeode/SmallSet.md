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

# class SmallSet


## Functions

### SmallSet

```cpp
public void SmallSet<Type, capacity>()
```


### SmallSet

```cpp
public void SmallSet<Type, capacity>(std::initializer_list<Type> elements)
```


### SmallSet

```cpp
public void SmallSet<Type, capacity>(const SmallSet<Type, capacity> & other)
```


### SmallSet

```cpp
public void SmallSet<Type, capacity>(SmallSet<Type, capacity> && other)
```


### operator=

```cpp
public SmallSet<Type, capacity> & operator=(const SmallSet<Type, capacity> & other)
```


### operator=

```cpp
public SmallSet<Type, capacity> & operator=(SmallSet<Type, capacity> && other)
```


### ~SmallSet

```cpp
public void ~SmallSet<Type, capacity>()
```


### size

```cpp
public auto size()
```


### empty

```cpp
public auto empty()
```


### begin

```cpp
public auto begin()
```


### end

```cpp
public auto end()
```


### contains

```cpp
public auto contains(const Type & element)
```


### insert

```cpp
public auto insert(const Type & element)
```


### erase

```cpp
public auto erase(const Type & element)
```


### at

```cpp
public auto at(index_t index)
```


### at

```cpp
public auto at(index_t index)
```


### operator==

```cpp
public auto operator==(const SmallSet<Type, capacity> & other)
```


### operator!=

```cpp
public auto operator!=(const SmallSet<Type, capacity> & other)
```


### data

```cpp
public const Type * data()
```




