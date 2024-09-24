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

# struct GmshId2Uuids


## Members

```cpp
public flat_hash_map elementary_ids

```

```cpp
public flat_hash_map physical_ids

```



## Functions

### GmshId2Uuids

```cpp
public void GmshId2Uuids()
```


### contains_elementary_id

```cpp
public bool contains_elementary_id(const GmshElementID & elementary_id)
```


### contains_physical_id

```cpp
public bool contains_physical_id(const GmshElementID & physical_id)
```




