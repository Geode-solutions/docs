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

# struct PolygonEdgeGroup


## Members

```cpp
public PolygonEdge edge

```

```cpp
public PolygonEdge next_edge

```

```cpp
public PolygonEdge previous_edge

```

```cpp
public optional next_adjacent

```

```cpp
public optional previous_adjacent

```



