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

# struct EdgeStamp


## Members

```cpp
public PolygonEdge edge

```

```cpp
public geode::index_t stamp

```



## Functions

### EdgeStamp

```cpp
public void EdgeStamp(PolygonEdge edge_in, geode::index_t stamp_in)
```




