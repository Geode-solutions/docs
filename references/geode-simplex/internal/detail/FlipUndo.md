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

# struct FlipUndo


 Everything needed to restore the mesh, bit for bit, as it was before a flip.



## Members

```cpp
public index_t nb_tets

```

```cpp
public index_t nb_free_tets

```

```cpp
public InlinedVector free_tets_tail

```

```cpp
public InlinedVector slots

```

```cpp
public InlinedVector adjacents

```

```cpp
public InlinedVector vertex_tets

```



## Records

Slot



