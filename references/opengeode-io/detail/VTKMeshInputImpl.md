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

# class VTKMeshInputImpl


```cpp
Inherits from VTKInputImpl<Mesh>
```



## Functions

### VTKMeshInputImpl

```cpp
protected void VTKMeshInputImpl<Mesh>(std::string_view filename, const MeshImpl & impl, const char * type)
```


### builder

```cpp
protected MeshBuilder & builder()
```


### are_cell_vertices_valid

```cpp
protected bool are_cell_vertices_valid(absl::Span<const index_t> vertices)
```


### warn_invalid_cells

```cpp
protected void warn_invalid_cells(index_t nb_invalid_cells)
```


### warn_wrong_size_cells

```cpp
protected void warn_wrong_size_cells(index_t nb_wrong_size_cells)
```


### get_cell_vertices

```cpp
protected VTKCells get_cell_vertices(absl::Span<const int64_t> connectivity, std::vector<int64_t> offsets)
```


### piece_vertex

```cpp
protected index_t piece_vertex(int64_t vertex)
```




