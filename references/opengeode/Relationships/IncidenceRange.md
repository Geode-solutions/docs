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

# class IncidenceRange


```cpp
Inherits from IncidenceRangeIterator
```



## Functions

### IncidenceRange

```cpp
public void IncidenceRange(const Relationships & relationships, const uuid & component_id)
```


### begin

```cpp
public const IncidenceRange & begin()
```


### end

```cpp
public const IncidenceRange & end()
```




