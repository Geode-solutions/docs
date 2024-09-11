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

# class SectionComponentMeshesManifold


 Class for inspecting the manifold property in the Component Meshes of a Section.



## Functions

### SectionComponentMeshesManifold

```cpp
public void SectionComponentMeshesManifold(const SectionComponentMeshesManifold & )
```


### operator=

```cpp
public SectionComponentMeshesManifold & operator=(const SectionComponentMeshesManifold & )
```


### SectionComponentMeshesManifold

```cpp
public void SectionComponentMeshesManifold(const Section & section)
```


### ~SectionComponentMeshesManifold

```cpp
public void ~SectionComponentMeshesManifold()
```


### inspect_section_manifold

```cpp
public SectionMeshesManifoldInspectionResult inspect_section_manifold()
```




