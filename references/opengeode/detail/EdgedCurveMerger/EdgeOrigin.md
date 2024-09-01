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

# struct EdgeOrigin


## Members

```cpp
public index_t curve

```

```cpp
public index_t edge

```



## Functions

### EdgeOrigin

```cpp
public void EdgeOrigin(index_t curve_in, index_t edge_in)
```


### operator==

```cpp
public bool operator==(const EdgeOrigin & other)
```




