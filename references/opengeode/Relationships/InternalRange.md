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

# class InternalRange


```cpp
Inherits from InternalRangeIterator
```



## Functions

### InternalRange

```cpp
public void InternalRange(const Relationships & relationships, const uuid & component_id)
```


### begin

```cpp
public const InternalRange & begin()
```


### end

```cpp
public const InternalRange & end()
```




