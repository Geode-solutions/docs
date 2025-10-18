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

# struct ElementInsertionInfo


## Members

```cpp
public flat_hash_map info

```



## Functions

### ElementInsertionInfo

```cpp
public void ElementInsertionInfo()
```


### add

```cpp
public void add(INSERTION_STATUS insertion_status, geode::index_t element_id)
```




## Enums

| enum class INSERTION_STATUS |

--

| inserted |
| partially_inserted |
| on_border |
| outside |
| degenerated |
| failed |
| not_inserted |





