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

# class SectionComponentMeshesAdjacency


 Class for inspecting the adjacency of the surface edges in the Component Meshes of a Section.



## Functions

### SectionComponentMeshesAdjacency

```cpp
public void SectionComponentMeshesAdjacency(const SectionComponentMeshesAdjacency & )
```


### operator=

```cpp
public SectionComponentMeshesAdjacency & operator=(const SectionComponentMeshesAdjacency & )
```


### SectionComponentMeshesAdjacency

```cpp
public void SectionComponentMeshesAdjacency(const Section & model)
```


### ~SectionComponentMeshesAdjacency

```cpp
public void ~SectionComponentMeshesAdjacency()
```


### inspect_section_meshes_adjacencies

```cpp
public SectionMeshesAdjacencyInspectionResult inspect_section_meshes_adjacencies()
```




