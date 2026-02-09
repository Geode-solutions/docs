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

# namespace internal



## Records

* [BlocksBuilderFromSolid](BlocksBuilderFromSolid.md)


## Functions

### add_block_boundaries_as_surfaces_in_model

```cpp
void add_block_boundaries_as_surfaces_in_model(const BRep & model, BRepBuilder & builder)
```


### identify_blocks

```cpp
void identify_blocks(const BRep & model, BRepBuilder & builder, BRepMappings & mappings)
```




