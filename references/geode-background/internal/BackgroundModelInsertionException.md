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

# struct BackgroundModelInsertionException


```cpp
Inherits from OpenGeodeException
```



## Members

```cpp
public flat_hash_map info

```



## Functions

### BackgroundModelInsertionException

```cpp
public void BackgroundModelInsertionException(BlockElementInsertionInfo && insertion_info, const Args &... message)
```




