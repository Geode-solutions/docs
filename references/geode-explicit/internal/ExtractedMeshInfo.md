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

# struct ExtractedMeshInfo


## Members

```cpp
public std::unique_ptr<Mesh> mesh

```

```cpp
public std::unique_ptr<typename Mesh::Builder> builder

```

```cpp
public shared_ptr vertex_origin

```

```cpp
public shared_ptr component_vertices

```

```cpp
public flat_hash_map background_vertices_to_vertices

```



## Functions

### ExtractedMeshInfo

```cpp
public void ExtractedMeshInfo<Mesh>()
```


### add_point

```cpp
public index_t add_point(const BackgroundSolid & background_solid, index_t background_vertex)
```


### find_or_create_point

```cpp
public index_t find_or_create_point(const internal::BackgroundSolid & background_solid, index_t background_vertex)
```




