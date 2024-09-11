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

# class SectionComponentMeshesNegativeElements


 Class for inspecting the negativeelements of elements in the Component Meshes of a Section.



## Functions

### SectionComponentMeshesNegativeElements

```cpp
public void SectionComponentMeshesNegativeElements(const SectionComponentMeshesNegativeElements & )
```


### operator=

```cpp
public SectionComponentMeshesNegativeElements & operator=(const SectionComponentMeshesNegativeElements & )
```


### SectionComponentMeshesNegativeElements

```cpp
public void SectionComponentMeshesNegativeElements(const Section & section)
```


### ~SectionComponentMeshesNegativeElements

```cpp
public void ~SectionComponentMeshesNegativeElements()
```


### inspect_negative_elements

```cpp
public SectionMeshesNegativeElementsInspectionResult inspect_negative_elements()
```




