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

# class BlocksBuilderFromSolid


## Functions

### BlocksBuilderFromSolid

```cpp
public void BlocksBuilderFromSolid(BRep & brep, const SolidMesh3D & solid)
```


### ~BlocksBuilderFromSolid

```cpp
public void ~BlocksBuilderFromSolid()
```


### build_blocks_step

```cpp
public pair build_blocks_step()
```




