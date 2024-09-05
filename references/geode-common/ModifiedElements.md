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

# struct ModifiedElements


## Members

```cpp
public vector removed_corners

```

```cpp
public vector removed_lines

```

```cpp
public vector removed_surfaces

```

```cpp
public vector removed_blocks

```

```cpp
public optional fused_on

```



