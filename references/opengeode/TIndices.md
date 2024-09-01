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

# class TIndices


```cpp
Inherits from BaseRange<Type, IncrementOperator>
```



## Functions

### TIndices

```cpp
public void TIndices<Type>(const Container & container)
```


### begin

```cpp
public const TIndices<Type> & begin()
```


### end

```cpp
public const TIndices<Type> & end()
```


### operator*

```cpp
public Type operator*()
```




