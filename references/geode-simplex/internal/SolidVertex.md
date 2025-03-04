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

# struct SolidVertex


## Members

```cpp
public geode::index_t vertex

```



## Functions

### SolidVertex

```cpp
public void SolidVertex(geode::index_t vertex_in)
```


### operator==

```cpp
public bool operator==(const SolidVertex & other)
```


### string

```cpp
public basic_string string()
```




