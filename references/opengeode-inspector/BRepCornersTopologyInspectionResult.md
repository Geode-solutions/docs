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

# struct BRepCornersTopologyInspectionResult


## Members

```cpp
public InspectionIssues corners_not_meshed

```

```cpp
public InspectionIssuesMap corners_not_linked_to_a_unique_vertex

```

```cpp
public InspectionIssues unique_vertices_linked_to_multiple_corners

```

```cpp
public InspectionIssues unique_vertices_linked_to_multiple_internals_corner

```

```cpp
public InspectionIssues unique_vertices_linked_to_not_internal_nor_boundary_corner

```

```cpp
public InspectionIssues unique_vertices_liked_to_not_boundary_line_corner

```



## Functions

### nb_issues

```cpp
public index_t nb_issues()
```


### string

```cpp
public basic_string string()
```


### inspection_type

```cpp
public basic_string inspection_type()
```




