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
public int points

```

```cpp
public int triangles

```

```cpp
public int tface_triangles_offset

```

```cpp
public int tface_vertices_offset

```

```cpp
public int bstones

```

```cpp
public int borders

```

```cpp
public int vertices_attribute_values

```



## Functions

### tface_id

```cpp
public index_t tface_id(index_t vertex_id)
```




