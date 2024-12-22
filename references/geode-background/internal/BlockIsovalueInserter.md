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

# class BlockIsovalueInserter


## Functions

### BlockIsovalueInserter

```cpp
public void BlockIsovalueInserter(internal::BackgroundBRepModifier & bbrep_modifier, const Block3D & block, const internal::BackgroundSolid & background_solid, internal::BackgroundSolidBuilder & backsolid_builder, ScalarFunctionIsovalue & function_isovalue)
```


### ~BlockIsovalueInserter

```cpp
public void ~BlockIsovalueInserter()
```


### insert_isovalue_on_tetrahedron

```cpp
public bool insert_isovalue_on_tetrahedron(index_t tetrahedron_id)
```




