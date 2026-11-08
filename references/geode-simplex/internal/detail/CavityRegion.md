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

# struct CavityRegion


 Polyhedral region to tetrahedralize, bounded by oriented triangles: the region is on the positive side of each of them (a triangle given in both orientations is an internal wall that must stay a facet).



## Members

```cpp
public vector boundary

```

```cpp
public vector inner_vertices

```

```cpp
public vector required_edges

```



