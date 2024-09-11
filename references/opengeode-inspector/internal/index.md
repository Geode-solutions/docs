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


### brep_component_vertices_not_associated_to_unique_vertices

```cpp
InspectionIssues brep_component_vertices_not_associated_to_unique_vertices(const BRep & brep, const ComponentID & component_id, const VertexSet & component_mesh)
```


### section_component_vertices_are_associated_to_unique_vertices

```cpp
InspectionIssues section_component_vertices_are_associated_to_unique_vertices(const Section & section, const ComponentID & component_id, const VertexSet & component_mesh)
```




