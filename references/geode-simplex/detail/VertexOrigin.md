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

# struct VertexOrigin


## Members

```cpp
public index_t vertex

```

```cpp
public bool is_locked

```



## Functions

### VertexOrigin

```cpp
public void VertexOrigin()
```


### VertexOrigin

```cpp
public void VertexOrigin(index_t vertex_in, bool is_locked_in)
```




