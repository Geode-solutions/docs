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

# struct SolidSwapEdgeInfo


## Members

```cpp
public vector inactive_tetrahedra

```

```cpp
public vector new_tetrahedra

```

```cpp
public vector modified

```

```cpp
public vector added

```

```cpp
public vector removed

```



