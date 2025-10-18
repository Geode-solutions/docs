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

# struct VertexCMVsByComponent


## Members

```cpp
public vector block_cmvs

```

```cpp
public vector surface_cmvs

```

```cpp
public vector line_cmvs

```

```cpp
public vector corner_cmvs

```



