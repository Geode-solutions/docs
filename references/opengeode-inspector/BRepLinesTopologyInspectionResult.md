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

# struct BRepLinesTopologyInspectionResult


## Members

```cpp
public InspectionIssues lines_not_meshed

```

```cpp
public InspectionIssues unique_vertices_linked_to_line_with_wrong_relationship_to_surface

```

```cpp
public InspectionIssuesMap lines_not_linked_to_a_unique_vertex

```

```cpp
public InspectionIssues unique_vertices_linked_to_a_line_with_invalid_embeddings

```

```cpp
public InspectionIssues unique_vertices_linked_to_a_single_and_invalid_line

```

```cpp
public InspectionIssues unique_vertices_linked_to_several_lines_but_not_linked_to_a_corner

```

```cpp
public InspectionIssuesMap line_edges_with_wrong_component_edges_around

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




