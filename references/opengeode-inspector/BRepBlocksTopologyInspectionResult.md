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

# struct BRepBlocksTopologyInspectionResult


## Members

```cpp
public InspectionIssues blocks_not_meshed

```

```cpp
public InspectionIssues wrong_block_boundary_surface

```

```cpp
public InspectionIssuesMap blocks_not_linked_to_a_unique_vertex

```

```cpp
public InspectionIssues unique_vertices_part_of_two_blocks_and_no_boundary_surface

```

```cpp
public InspectionIssues unique_vertices_with_incorrect_block_cmvs_count

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




