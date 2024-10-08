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

# struct VSetData


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
public vector vertices_attribute_values

```



