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

# class DoRepairDuplication


```cpp
Inherits from DoRepair
```



## Functions

### DoRepairDuplication

```cpp
public void DoRepairDuplication(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const PolygonEdge & edge, const Surface3D & triangles_surface, const PolygonEdge & triangle_edge)
```


### apply

```cpp
public int apply()
```




