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


### get_cell_vertices

```cpp
protected absl::FixedArray<std::vector<index_t>> get_cell_vertices(absl::Span<const int64_t> connectivity, absl::Span<const int64_t> offsets)
```




