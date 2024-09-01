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

# struct TSurfData


## Members

```cpp
public index_t OFFSET_START

```

```cpp
public HeaderData header

```

```cpp
public CRSData crs

```

```cpp
public PropHeaderData vertices_properties_header

```

```cpp
public deque points

```

```cpp
public deque triangles

```

```cpp
public deque tface_triangles_offset

```

```cpp
public deque tface_vertices_offset

```

```cpp
public deque bstones

```

```cpp
public deque borders

```

```cpp
public vector vertices_attribute_values

```



## Functions

### tface_id

```cpp
public index_t tface_id(index_t vertex_id)
```




