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

# struct MacroEdgeInsertionInfo


## Members

```cpp
public std::vector<BackgroundPointIntersection<dimension> > sub_edge_boundaries

```

```cpp
public std::vector<SUB_EDGE_LOCATION> sub_edges_locations

```



## Functions

### MacroEdgeInsertionInfo

```cpp
public void MacroEdgeInsertionInfo<dimension>()
```


### MacroEdgeInsertionInfo

```cpp
public void MacroEdgeInsertionInfo<dimension>(const Mesh & mesh, const BackgroundEdgeVertices & edge_vertices)
```


### update_vertices

```cpp
public void update_vertices(const VerticesModifier & modifier)
```


### sort

```cpp
public void sort(const Segment<dimension> & segment)
```


### insertion_status

```cpp
public INSERTION_STATUS insertion_status(const Segment<dimension> & segment)
```




## Enums

| enum class SUB_EDGE_LOCATION |

--

| undetermined |
| outside |
| inside |
| border |





# struct MacroEdgeInsertionInfo


## Members

```cpp
public vector sub_edge_boundaries

```

```cpp
public vector sub_edges_locations

```



# struct MacroEdgeInsertionInfo


## Members

```cpp
public vector sub_edge_boundaries

```

```cpp
public vector sub_edges_locations

```



