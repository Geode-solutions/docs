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

# class MLOutputImpl


## Members

```cpp
public static const index_t OFFSET_START

```

```cpp
public static const char EOL

```

```cpp
public static const char SPACE

```



## Functions

### unclassified_tsurfs

```cpp
protected std::vector<uuid> unclassified_tsurfs()
```

### write_file

```cpp
public void write_file()
```


### MLOutputImpl

```cpp
protected void MLOutputImpl<Model>(std::string_view filename, const Model & model)
```


### component_id

```cpp
protected index_t & component_id()
```


### components

```cpp
protected absl::flat_hash_map<uuid, index_t> & components()
```


### file

```cpp
protected std::ofstream & file()
```


### write_geological_tsurfs

```cpp
protected void write_geological_tsurfs()
```

### write_geological_tfaces

```cpp
protected void write_geological_tfaces()
```

### write_geological_regions

```cpp
protected void write_geological_regions()
```

### write_geological_model_surfaces

```cpp
protected void write_geological_model_surfaces()
```

### ~MLOutputImpl

```cpp
public void ~MLOutputImpl<Model>()
```


### write_key_triangle

```cpp
protected void write_key_triangle(const Component & component)
```


### write_tsurfs

```cpp
protected void write_tsurfs()
```


### write_tfaces

```cpp
protected void write_tfaces()
```


### write_universe

```cpp
protected void write_universe()
```


### write_regions

```cpp
protected void write_regions()
```


### write_model_components

```cpp
protected void write_model_components()
```


### write_surface

```cpp
protected index_t write_surface(const Surface3D & surface, const index_t current_offset)
```


### process_surface_edge

```cpp
protected void process_surface_edge(const Surface3D & surface, const PolygonEdge & edge, const index_t current_offset, std::vector<std::array<index_t, 2>> & line_starts)
```


### add_corners_and_line_starts

```cpp
protected void add_corners_and_line_starts(const Surface3D & surface, const index_t current_offset, std::vector<std::array<index_t, 2>> & line_starts)
```


### find_boundary_corners_and_line_starts

```cpp
protected void find_boundary_corners_and_line_starts(const ModelBoundary3D & surface_collection, std::vector<std::array<index_t, 2>> & line_starts)
```


### find_corners_and_line_starts

```cpp
protected void find_corners_and_line_starts(const ItemRange & item_range, std::vector<std::array<index_t, 2>> & line_starts)
```


### find_corners_and_line_starts_for_unclassified_surface

```cpp
protected std::vector<std::array<index_t, 2>> find_corners_and_line_starts_for_unclassified_surface(const uuid & surface_id)
```


### write_corners

```cpp
protected void write_corners(absl::Span<const std::array<index_t, 2>> line_starts)
```


### write_line_starts

```cpp
protected void write_line_starts(index_t current_offset, absl::Span<const std::array<index_t, 2>> line_starts)
```


### write_model_surfaces

```cpp
protected void write_model_surfaces()
```


### component_name

```cpp
protected std::string component_name(const Component & component)
```




