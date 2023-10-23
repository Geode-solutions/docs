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

# struct SplitInfo


## Members

```cpp
public Mapping mapping

```

```cpp
public SplitSide side

```



## Functions

### SplitInfo

```cpp
public void SplitInfo()
```


### SplitInfo

```cpp
public void SplitInfo(index_t new_id_in, index_t old_id_in, SplitSide side_in)
```


### operator==

```cpp
public bool operator==(const SplitInfo & other)
```


### operator<

```cpp
public bool operator<(const SplitInfo & other)
```




