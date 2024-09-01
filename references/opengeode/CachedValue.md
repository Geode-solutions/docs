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

# class CachedValue


## Functions

### operator()

```cpp
public const ReturnType & operator()(CachedFunction<Args...> computer, Args &&... args)
```


### operator!=

```cpp
public bool operator!=(const CachedValue<ReturnType> & other)
```


### reset

```cpp
public void reset()
```


### computed

```cpp
public bool computed()
```


### value

```cpp
public const ReturnType & value()
```




