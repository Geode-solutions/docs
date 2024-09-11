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

# struct SurfaceInspectionResult


## Members

```cpp
public InspectionIssues polygon_edges_with_wrong_adjacency

```

```cpp
public InspectionIssues colocated_points_groups

```

```cpp
public InspectionIssues degenerated_edges

```

```cpp
public InspectionIssues degenerated_polygons

```

```cpp
public InspectionIssues non_manifold_edges

```

```cpp
public InspectionIssues non_manifold_vertices

```

```cpp
public InspectionIssues intersecting_elements

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




