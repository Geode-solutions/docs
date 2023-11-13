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

# struct BlockPathVertices


## Members

```cpp
public const Block3D & block

```

```cpp
public index_t begin

```

```cpp
public index_t end

```



## Functions

### BlockPathVertices

```cpp
public void BlockPathVertices(const Block3D & block_in)
```




