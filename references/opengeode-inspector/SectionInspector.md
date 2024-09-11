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

# class SectionInspector


 Class for inspecting a Section model**extends** 



```cpp
Inherits from AddInspectors<Section, SectionMeshesInspector, SectionTopologyInspector>
```



## Functions

### SectionInspector

```cpp
public void SectionInspector(const SectionInspector & )
```


### operator=

```cpp
public SectionInspector & operator=(const SectionInspector & )
```


### SectionInspector

```cpp
public void SectionInspector(const Section & section)
```


### inspect_section

```cpp
public SectionInspectionResult inspect_section()
```




