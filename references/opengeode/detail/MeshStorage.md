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

# class MeshStorage


## Functions

### MeshStorage

```cpp
public void MeshStorage<Mesh>()
```


### set_mesh

```cpp
public void set_mesh(uuid new_mesh_uuid, std::unique_ptr<Mesh> mesh)
```


### mesh

```cpp
public const Mesh & mesh()
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh()
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### serialize

```cpp
public void serialize(Archive & archive)
```




