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

# struct SolidSwapEdgeValidity


```cpp
Inherits from SolidGeometricalValidity
```



## Members

```cpp
public bool is_one_ring_apex

```

```cpp
public bool is_edge_on_border

```

```cpp
public bool is_apex_on_border

```



## Functions

### operator bool

```cpp
public bool operator bool()
```




