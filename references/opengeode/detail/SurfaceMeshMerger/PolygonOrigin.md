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

# struct PolygonOrigin


## Members

```cpp
public index_t surface

```

```cpp
public index_t polygon

```



## Functions

### PolygonOrigin

```cpp
public void PolygonOrigin(index_t surface_in, index_t polygon_in)
```


### operator==

```cpp
public bool operator==(const PolygonOrigin & other)
```




