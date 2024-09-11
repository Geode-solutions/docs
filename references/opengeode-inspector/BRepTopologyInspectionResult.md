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

# struct BRepTopologyInspectionResult


## Members

```cpp
public BRepCornersTopologyInspectionResult corners

```

```cpp
public BRepLinesTopologyInspectionResult lines

```

```cpp
public BRepSurfacesTopologyInspectionResult surfaces

```

```cpp
public BRepBlocksTopologyInspectionResult blocks

```

```cpp
public InspectionIssues unique_vertices_not_linked_to_any_component

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




