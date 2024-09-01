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

# class MeshModifierFactory


```cpp
Inherits from Factory<MeshImpl, VerticesModifier, const VertexSet &, VertexSetBuilder &, MeshModifierFactoryKey>
```



## Functions

### register_mesh_modifier

```cpp
public void register_mesh_modifier(NamedType key)
```


### create_mesh_modifier

```cpp
public std::unique_ptr<MeshModifier> create_mesh_modifier(const Mesh & mesh, typename Mesh::Builder & builder)
```




