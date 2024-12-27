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

# struct BRepRemeshInternalOptions


## Members

```cpp
public bool repair_lines

```

```cpp
public bool relax_lines

```

```cpp
public bool repair_surfaces

```

```cpp
public bool relax_surfaces

```

```cpp
public bool relax_blocks

```

```cpp
public bool mesh

```


