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

# class BlockBuilder


## Functions

### BlockBuilder

```cpp
public void BlockBuilder(const Section & model, SectionBuilder & builder)
```


### identify_model_boundaries

```cpp
public void identify_model_boundaries()
```


### identify_blocks

```cpp
public void identify_blocks(SectionMappings & mappings)
```


### add_block_boundaries_in_model

```cpp
public void add_block_boundaries_in_model()
```




# class BlockBuilder


# class BlockBuilder


## Functions

### BlockBuilder

```cpp
public void BlockBuilder(const BRep & model, BRepBuilder & builder)
```


### identify_model_boundaries

```cpp
public void identify_model_boundaries()
```


### identify_blocks

```cpp
public void identify_blocks(BRepMappings & mappings)
```


### transfer_block_meshes

```cpp
public void transfer_block_meshes(const BRep & model, BRepMappings & mappings, const ModelGenericMapping::Mapping & block_mappings)
```


### unset_adjacencies

```cpp
public void unset_adjacencies(const Block3D & block, const std::vector<uuid> & inside_surfaces)
```


### double_occurred_boundary_surfaces

```cpp
public vector double_occurred_boundary_surfaces(Span new_block_ids)
```


### filter_new_block_mesh

```cpp
public void filter_new_block_mesh(const Block3D & old_block, const uuid & new_block_id, Span connected_polyhedra, BRepMappings & mappings)
```


### add_block_boundaries_in_model

```cpp
public void add_block_boundaries_in_model()
```




