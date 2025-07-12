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

# class ModelerMappingsBuilder


# class ModelerMappingsBuilder


# class ModelerMappingsBuilder


## Functions

### ModelerMappingsBuilder

```cpp
public void ModelerMappingsBuilder<Model, BackgroundMesh>(const Model & model, const BackgroundMesh & background, Span points_sets_uuids, Span curves_uuids)
```


### ~ModelerMappingsBuilder

```cpp
public void ~ModelerMappingsBuilder<Model, BackgroundMesh>()
```


### mappings_from_background

```cpp
public typename TypedModelMappings<Model>::type mappings_from_background(const MeshElementsIndices & model_elements, const VertexIndexMapping & vertex_index_mappings, const IndexToModelMeshElementsMapping & index_to_meshes_mappings)
```


### model

```cpp
protected const Model & model()
```


### background

```cpp
protected const BackgroundMesh & background()
```




