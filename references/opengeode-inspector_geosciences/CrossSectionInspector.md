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

# class CrossSectionInspector


 Class for inspecting a CrossSection**extends** 



```cpp
Inherits from AddInspectors<CrossSection, SectionInspector, CrossSectionGeologyInspector>
```



## Functions

### CrossSectionInspector

```cpp
public void CrossSectionInspector(const CrossSection & model)
```


### inspect_cross_section

```cpp
public CrossSectionInspectionResult inspect_cross_section()
```


### CrossSectionInspector

```cpp
public void CrossSectionInspector(const CrossSectionInspector & )
```


### operator=

```cpp
public CrossSectionInspector & operator=(const CrossSectionInspector & )
```




