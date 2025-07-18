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

# struct CorafinatedLine


## Members

```cpp
public unique_ptr line

```

```cpp
public unique_ptr line_builder

```

```cpp
public BackgroundLine background

```

```cpp
public BackgroundLineBuilder builder

```

```cpp
public unique_ptr modifier

```

```cpp
public shared_ptr removed_coordinates

```

```cpp
public local_index_t axis_to_keep

```

```cpp
public GenericMapping solid_to_corafinated_vertex_mapping

```

```cpp
public GenericMapping solid_to_corafinated_edge_mapping

```

```cpp
public unique_ptr intermediate_line

```

```cpp
public BijectiveMapping solid_to_mesh_vertex_mapping

```

```cpp
public BijectiveMapping solid_to_mesh_edge_mapping

```



## Functions

### CorafinatedLine

```cpp
public void CorafinatedLine(const CorafinatedLine & )
```


### operator=

```cpp
public CorafinatedLine & operator=(const CorafinatedLine & )
```


### CorafinatedLine

```cpp
public void CorafinatedLine()
```


### CorafinatedLine

```cpp
public void CorafinatedLine(CorafinatedLine && other)
```


### ~CorafinatedLine

```cpp
public void ~CorafinatedLine()
```


### modifiable_line

```cpp
public ModifiableObject modifiable_line()
```


### point3d

```cpp
public Point point3d(index_t vertex)
```


### build_solid_to_corafinated_mappings

```cpp
public void build_solid_to_corafinated_mappings()
```


### build_solid_to_corafinated_vertex_mapping

```cpp
public void build_solid_to_corafinated_vertex_mapping()
```


### build_solid_to_corafinated_edge_mapping

```cpp
public void build_solid_to_corafinated_edge_mapping()
```




