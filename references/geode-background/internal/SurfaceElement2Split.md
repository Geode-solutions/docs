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

# struct SurfaceElement2Split


## Members

```cpp
public InlinedVector skin_vertices

```

```cpp
public index_t corafinated_vertex

```

```cpp
public TYPE type

```



## Functions

### SurfaceElement2Split

```cpp
public void SurfaceElement2Split()
```


### string

```cpp
public basic_string string()
```




## Enums

| enum class TYPE |

--

| none |
| split_edge |
| split_polygon |
| split_collapse |





