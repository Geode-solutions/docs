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

# class ExtractedMeshInfoBuilder


## Functions

### ExtractedMeshInfoBuilder

```cpp
public void ExtractedMeshInfoBuilder<Mesh>(ExtractedMeshInfo<Mesh> & extracted_mesh)
```


### add_mesh

```cpp
public void add_mesh(const BackgroundSolid & background_solid, const ExtractedMeshInfo<Mesh> & other_extracted_mesh)
```


### add_point

```cpp
public index_t add_point(const BackgroundSolid & background_solid, index_t background_vertex)
```


### find_or_create_point

```cpp
public index_t find_or_create_point(const internal::BackgroundSolid & background_solid, index_t background_vertex)
```




