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

* [ColocationImpl](ColocationImpl.md)
* [ComponentMeshesAdjacency](ComponentMeshesAdjacency.md)
* [ComponentMeshesDegeneration](ComponentMeshesDegeneration.md)
* [ComponentMeshesManifold](ComponentMeshesManifold.md)
* [DegenerationImpl](DegenerationImpl.md)


## Functions

### brep_blocks_are_meshed

```cpp
bool brep_blocks_are_meshed(const BRep & brep)
```


### section_surfaces_are_meshed

```cpp
bool section_surfaces_are_meshed(const Section & section)
```


### components_uuids

```cpp
vector components_uuids(const Model & model, index_t unique_vertex_index, const geode::ComponentType & type)
```


### model_component_vertices_are_associated_to_unique_vertices

```cpp
bool model_component_vertices_are_associated_to_unique_vertices(const Model & model, const ComponentID & component_id, const Mesh & component_mesh)
```


### model_component_vertices_not_associated_to_unique_vertices

```cpp
InspectionIssues model_component_vertices_not_associated_to_unique_vertices(const Model & model, const ComponentID & component_id, const Mesh & component_mesh)
```




