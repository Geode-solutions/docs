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

# class BlockTetgenMesher


```cpp
Inherits from TetgenMesher
```



## Functions

### BlockTetgenMesher

```cpp
public void BlockTetgenMesher(const BRep & brep, BRepBuilder & builder, const Block3D & block, Span internal_points)
```


### ~BlockTetgenMesher

```cpp
public void ~BlockTetgenMesher()
```


### tetrahedralize

```cpp
public tuple tetrahedralize()
```




