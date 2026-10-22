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

# class VTUInputImpl


```cpp
Inherits from VTKMeshInputImpl<Mesh>
```



## Functions

### VTUInputImpl

```cpp
protected void VTUInputImpl<Mesh>(std::string_view filename, const geode::MeshImpl & impl)
```


### read_cell_types

```cpp
protected std::vector<uint8_t> read_cell_types(const pugi::xml_node & piece, index_t nb_cells)
```


### read_cells

```cpp
protected std::tuple<VTKCells, std::vector<uint8_t>> read_cells(const pugi::xml_node & piece, index_t nb_cells)
```




