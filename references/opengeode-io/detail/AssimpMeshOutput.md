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

# class AssimpMeshOutput


## Functions

### AssimpMeshOutput

```cpp
public void AssimpMeshOutput<SurfaceMesh>(string_view filename, const SurfaceMesh & surface_mesh, string_view assimp_export_id)
```


### build_assimp_scene

```cpp
public void build_assimp_scene()
```


### write_file

```cpp
public void write_file()
```




