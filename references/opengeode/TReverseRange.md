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

# class TReverseRange


```cpp
Inherits from BaseRange<Type, geode::DecrementOperator>
```



## Functions

### TReverseRange

```cpp
public void TReverseRange<Type>(T1 begin, T2 end)
```


### TReverseRange

```cpp
public void TReverseRange<Type>(T begin)
```


### begin

```cpp
public const TReverseRange<Type> & begin()
```


### end

```cpp
public const TReverseRange<Type> & end()
```


### operator*

```cpp
public Type operator*()
```




