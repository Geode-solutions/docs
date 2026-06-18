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
public void Block<value-parameter-0-0>(const Block<dimension> & )
```


### operator=

```cpp
public Block<dimension> & operator=(const Block<dimension> & )
```


### component_type_static

```cpp
public static ComponentType component_type_static()
```


### Block

```cpp
public void Block<value-parameter-0-0>(Block<dimension> && other)
```


### component_type

```cpp
public ComponentType component_type()
```


### ~Block

```cpp
public void ~Block<value-parameter-0-0>()
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### Block

```cpp
public void Block<value-parameter-0-0>(BlocksKey key)
```


### mesh

```cpp
public const TypedMesh & mesh()
```


### Block

```cpp
public void Block<value-parameter-0-0>(const MeshImpl & impl, BlocksKey key)
```


### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(BlocksKey )
```


### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(BlocksBuilderKey )
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, BlocksKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, BlocksBuilderKey key)
```


### set_block_name

```cpp
public void set_block_name(std::string_view name, BlocksBuilderKey key)
```


### set_block_active

```cpp
public void set_block_active(bool is_active, BlocksBuilderKey key)
```


### steal_mesh

```cpp
public std::unique_ptr<Mesh> steal_mesh(BlocksBuilderKey key)
```




