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

# class FaultRange


```cpp
Inherits from FaultRangeBase
```



## Functions

### FaultRange

```cpp
public void FaultRange(const Faults<> & faults)
```


### begin

```cpp
public const FaultRange & begin()
```


### end

```cpp
public const FaultRange & end()
```


### operator*

```cpp
public const Fault<dimension> & operator*()
```




