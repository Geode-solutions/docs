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

# class Corner


```cpp
Inherits from Component<3U>
```



# class Corner


```cpp
Inherits from Component<2U>
```



# class Corner


 Geometric component describing a Point. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Corner

```cpp
public void Corner<>(const Corner<> & )
```


### operator=

```cpp
public Corner<> & operator=(const Corner<> & )
```


### Corner

```cpp
public void Corner<>(Corner<> && other)
```


### ~Corner

```cpp
public void ~Corner<>()
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
public const Mesh & mesh()
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(CornersKey key)
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### Corner

```cpp
public void Corner<>(CornersKey key)
```


### Corner

```cpp
public void Corner<>(const MeshImpl & impl, CornersKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, CornersKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, CornersBuilderKey key)
```


### set_corner_name

```cpp
public void set_corner_name(basic_string_view name, CornersBuilderKey key)
```


### modifiable_mesh

```cpp
public Mesh & modifiable_mesh(CornersBuilderKey key)
```




