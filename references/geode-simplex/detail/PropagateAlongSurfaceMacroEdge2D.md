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

# class PropagateAlongSurfaceMacroEdge2D


```cpp
Inherits from PropagateAlongSurfaceMacroEdge<2>
```



## Functions

### PropagateAlongSurfaceMacroEdge2D

```cpp
public void PropagateAlongSurfaceMacroEdge2D(const FrontalRemesher<2> & remesher, index_t begin, index_t end)
```




