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

* [BlockMappingIdentifier](BlockMappingIdentifier.md)
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


### build_new_model_boundary

```cpp
optional build_new_model_boundary(const Model & model, typename Model::Builder & builder)
```

### remove_obsolete_model_boundaries

```cpp
vector remove_obsolete_model_boundaries(const Model & model, typename Model::Builder & builder)
```

### build_new_model_boundary

```cpp
optional build_new_model_boundary(const Section & model, SectionBuilder & builder)
```


### build_new_model_boundary

```cpp
optional build_new_model_boundary(const BRep & model, BRepBuilder & builder)
```


### remove_obsolete_model_boundaries

```cpp
vector remove_obsolete_model_boundaries(const Section & model, SectionBuilder & builder)
```


### remove_obsolete_model_boundaries

```cpp
vector remove_obsolete_model_boundaries(const BRep & model, BRepBuilder & builder)
```




