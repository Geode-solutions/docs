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

# struct RelocationSide


 Part of the relocation cavity between split triangles: its boundary triangles and the (parent) triangles it is bounded by, all seeing the side positively. Walls are canonical.



## Members

```cpp
public vector boundary

```

```cpp
public vector walls

```



## Functions

### is_slit

```cpp
public bool is_slit()
```


 The side sees a triangle from both sides: the split segment is a free edge of its triangles. The reverse of the canonical (a, b, c) is (a, c, b).



