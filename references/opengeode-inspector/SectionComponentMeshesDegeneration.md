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

# class SectionComponentMeshesDegeneration


 Class for inspecting the degeneration of elements in the Component Meshes of a Section.



## Functions

### SectionComponentMeshesDegeneration

```cpp
public void SectionComponentMeshesDegeneration(const SectionComponentMeshesDegeneration & )
```


### operator=

```cpp
public SectionComponentMeshesDegeneration & operator=(const SectionComponentMeshesDegeneration & )
```


### SectionComponentMeshesDegeneration

```cpp
public void SectionComponentMeshesDegeneration(const Section & section)
```


### ~SectionComponentMeshesDegeneration

```cpp
public void ~SectionComponentMeshesDegeneration()
```


### inspect_elements_degeneration

```cpp
public SectionMeshesDegenerationInspectionResult inspect_elements_degeneration()
```




