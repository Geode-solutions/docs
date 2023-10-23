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

# struct SolidCutPathInfo


## Members

```cpp
public int vertices

```

```cpp
public int along_path

```

```cpp
public int across_path

```

```cpp
public int facets

```

```cpp
public int tetrahedra

```

```cpp
public int small_edges

```



