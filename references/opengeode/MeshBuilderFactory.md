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

# class MeshBuilderFactory


```cpp
Inherits from Factory<MeshImpl, VertexSetBuilder, VertexSet &, MeshBuilderFactoryKey>
```



## Functions

### register_mesh_builder

```cpp
public void register_mesh_builder(NamedType key)
```


### create_mesh_builder

```cpp
public std::unique_ptr<MeshBuilder> create_mesh_builder(Mesh & mesh)
```


### create_mesh_builder

```cpp
public int create_mesh_builder(Mesh & mesh)
```




