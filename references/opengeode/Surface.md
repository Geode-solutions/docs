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

# class Surface


```cpp
Inherits from Component<3U>
```



# class Surface


```cpp
Inherits from Component<2U>
```



# class Surface


 Geometric component describing a Surface. This component is described by a mesh.



```cpp
Inherits from Component<dimension>
```



## Functions

### Surface

```cpp
public void Surface<>(const Surface<> & )
```


### operator=

```cpp
public Surface<> & operator=(const Surface<> & )
```


### Surface

```cpp
public void Surface<>(Surface<> && other)
```


### ~Surface

```cpp
public void ~Surface<>()
```


### component_type_static

```cpp
public NamedType component_type_static()
```


### component_type

```cpp
public NamedType component_type()
```


### mesh

```cpp
public const TypedMesh & mesh()
```


### Surface

```cpp
public void Surface<>(SurfacesKey key)
```


### Surface

```cpp
public void Surface<>(const MeshImpl & impl, SurfacesKey key)
```


### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(SurfacesKey )
```


### mesh_type

```cpp
public const MeshImpl & mesh_type()
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, SurfacesKey key)
```


### set_mesh

```cpp
public void set_mesh(std::unique_ptr<Mesh> mesh, SurfacesBuilderKey key)
```


### set_surface_name

```cpp
public void set_surface_name(basic_string_view name, SurfacesBuilderKey key)
```


### set_surface_active

```cpp
public void set_surface_active(bool active, SurfacesBuilderKey key)
```


### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(SurfacesBuilderKey )
```


### steal_mesh

```cpp
public std::unique_ptr<Mesh> steal_mesh(SurfacesBuilderKey key)
```




