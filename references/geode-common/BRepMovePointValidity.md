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

# struct BRepMovePointValidity


```cpp
Inherits from ModelMovePointValidity3D
```



## Members

```cpp
public BlockMovePointValidities block_validities

```



## Functions

### operator bool

```cpp
public bool operator bool()
```




