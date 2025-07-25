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

# struct CorafinatedSurface


## Members

```cpp
public unique_ptr surface

```

```cpp
public unique_ptr surface_builder

```

```cpp
public BackgroundSurface background

```

```cpp
public BackgroundSurfaceBuilder builder

```

```cpp
public unique_ptr modifier

```

```cpp
public BackgroundSurfaceConstraintModifier constraint_modifier

```

```cpp
public shared_ptr removed_coordinates

```

```cpp
public local_index_t axis_to_remove

```

```cpp
public GenericMapping solid_to_corafinated_vertex_mapping

```

```cpp
public GenericMapping solid_to_corafinated_edge_mapping

```

```cpp
public GenericMapping solid_to_corafinated_facet_mapping

```

```cpp
public unique_ptr intermediate_surface

```

```cpp
public BijectiveMapping solid_to_mesh_vertex_mapping

```

```cpp
public BijectiveMapping solid_to_mesh_edge_mapping

```

```cpp
public BijectiveMapping solid_to_mesh_facet_mapping

```



## Functions

### CorafinatedSurface

```cpp
public void CorafinatedSurface(const CorafinatedSurface & )
```


### operator=

```cpp
public CorafinatedSurface & operator=(const CorafinatedSurface & )
```


### CorafinatedSurface

```cpp
public void CorafinatedSurface()
```


### CorafinatedSurface

```cpp
public void CorafinatedSurface(CorafinatedSurface && other)
```


### ~CorafinatedSurface

```cpp
public void ~CorafinatedSurface()
```


### modifiable_surface

```cpp
public ModifiableObject modifiable_surface()
```


### point3d

```cpp
public Point point3d(index_t vertex)
```


### does_edge_exist

```cpp
public bool does_edge_exist(index_t begin, index_t end)
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


### build_solid_to_corafinated_facet_mapping

```cpp
public void build_solid_to_corafinated_facet_mapping()
```




