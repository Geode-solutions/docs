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

# struct BRepFacetTShape


## Members

```cpp
public flat_hash_map tshapes

```



## Functions

### BRepFacetTShape

```cpp
public void BRepFacetTShape()
```


### tshape

```cpp
public const std::optional<PolyhedronVertex> & tshape(const Block3D & block)
```




