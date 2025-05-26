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

# struct BRepSurfacesTopologyInspectionResult


## Members

```cpp
public InspectionIssues surfaces_not_meshed

```

```cpp
public InspectionIssuesMap surfaces_not_linked_to_a_unique_vertex

```

```cpp
public InspectionIssues unique_vertices_linked_to_a_surface_with_invalid_embbedings

```

```cpp
public InspectionIssues unique_vertices_linked_to_several_and_invalid_surfaces

```

```cpp
public InspectionIssues unique_vertices_linked_to_a_line_but_is_not_on_a_surface_border

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




