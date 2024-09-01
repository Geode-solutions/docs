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

# class Block


```cpp
Inherits from Component<3U>
```



# class Block


 Geometric component describing a 3D volume This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Block

```cpp
public void Block<>(const Block<> & )
```


### operator=

```cpp
public Block<> & operator=(const Block<> & )
```


### Block

```cpp
public void Block<>(Block<> && other)
```


### ~Block

```cpp
public void ~Block<>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### component_id

```cpp
public ComponentID component_id()
```


### mesh

```cpp
public const TypedMesh & mesh()
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(BlocksKey )
```


### Block

```cpp
public void Block<>(BlocksKey key)
```


### Block

```cpp
public void Block<>(const MeshImpl & impl, BlocksKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, BlocksKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, BlocksBuilderKey key)
```


### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(BlocksBuilderKey )
```


### set_block_name

```cpp
public void set_block_name(basic_string_view name, BlocksBuilderKey key)
```




