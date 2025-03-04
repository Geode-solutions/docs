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

# class BRepModelerMappingsBuilder


## Functions

### BRepModelerMappingsBuilder

```cpp
public void BRepModelerMappingsBuilder(const geode::BRep & brep, const geode::internal::BackgroundSolid & background, Span points_sets_uuids, Span curves_uuids, Span surfaces_uuids)
```


### ~BRepModelerMappingsBuilder

```cpp
public void ~BRepModelerMappingsBuilder()
```


### build_mappings_from_background

```cpp
public ModelMappings build_mappings_from_background(const SolidElementsIndices & model_elements, const geode::VertexIndexMapping & vertex_index_mappings, const geode::IndexToModelMeshElementsMapping & index_to_meshes_mappings)
```




