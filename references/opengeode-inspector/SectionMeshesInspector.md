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

# class SectionMeshesInspector


 Class for inspecting a Section model**extends** 



```cpp
Inherits from SectionUniqueVerticesColocation, SectionComponentMeshesAdjacency, SectionComponentMeshesColocation, SectionComponentMeshesDegeneration, SectionComponentMeshesManifold, SectionComponentMeshesNegativeElements, SectionMeshesIntersections
```



## Functions

### SectionMeshesInspector

```cpp
public void SectionMeshesInspector(const SectionMeshesInspector & )
```


### operator=

```cpp
public SectionMeshesInspector & operator=(const SectionMeshesInspector & )
```


### SectionMeshesInspector

```cpp
public void SectionMeshesInspector(const Section & section)
```


### inspect_section_meshes

```cpp
public SectionMeshesInspectionResult inspect_section_meshes()
```




