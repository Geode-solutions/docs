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

# class MeshFactory


```cpp
Inherits from Factory<MeshImpl, VertexSet>
```



## Functions

### register_mesh

```cpp
public void register_mesh(NamedType type, NamedType key)
```


 Register a mesh implementation to a given mesh type

### register_default_mesh

```cpp
public void register_default_mesh(NamedType type, NamedType key)
```


 Register the default mesh implementation to a given mesh type. This implementation will be used when no specific implementation is required.

### type

```cpp
public const MeshType & type(const MeshImpl & key)
```


### default_impl

```cpp
public const MeshImpl & default_impl(const MeshType & type)
```


### create_mesh

```cpp
public std::unique_ptr<Mesh> create_mesh(const MeshImpl & key)
```


### create_default_mesh

```cpp
public std::unique_ptr<Mesh> create_default_mesh(const MeshType & type)
```




