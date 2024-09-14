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

# struct SectionMeshesNegativeElementsInspectionResult


## Members

```cpp
public InspectionIssuesMap negative_polygons

```



## Functions

### string

```cpp
public basic_string string()
```


### inspection_type

```cpp
public basic_string inspection_type()
```



