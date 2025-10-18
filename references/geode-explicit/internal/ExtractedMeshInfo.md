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
public shared_ptr incident_macro_edges

```

```cpp
public shared_ptr incident_macro_facets

```

```cpp
public BijectiveMapping background_vertices_to_vertices

```



## Functions

### ExtractedMeshInfo

```cpp
public void ExtractedMeshInfo<Mesh>()
```


### ExtractedMeshInfo

```cpp
public void ExtractedMeshInfo<Mesh>(ExtractedMeshInfo<Mesh> && )
```


### operator=

```cpp
public ExtractedMeshInfo<Mesh> & operator=(ExtractedMeshInfo<Mesh> && )
```


### ~ExtractedMeshInfo

```cpp
public void ~ExtractedMeshInfo<Mesh>()
```


### initialize_base_attributes

```cpp
public void initialize_base_attributes()
```




