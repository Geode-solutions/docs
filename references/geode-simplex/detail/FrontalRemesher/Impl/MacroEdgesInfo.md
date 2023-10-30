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

# struct MacroEdgesInfo


## Members

```cpp
public bool new_edge

```

```cpp
public index_t macro_edge_id

```

```cpp
public index_t start

```

```cpp
public index_t end

```

```cpp
public int right

```

```cpp
public int left

```

```cpp
public optional refined_apex

```



## Functions

### MacroEdgesInfo

```cpp
public void MacroEdgesInfo(index_t macro_edge_id_in, index_t start_in, index_t end_in)
```


### MacroEdgesInfo

```cpp
public void MacroEdgesInfo(index_t refined_apex_in)
```


### update

```cpp
public void update(VerticesModifier & modifier)
```




