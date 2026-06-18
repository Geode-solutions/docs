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
public void Surface<value-parameter-0-0>(const Surface<dimension> & )
```


### operator=

```cpp
public Surface<dimension> & operator=(const Surface<dimension> & )
```


### Surface

```cpp
public void Surface<value-parameter-0-0>(Surface<dimension> && other)
```


### ~Surface

```cpp
public void ~Surface<value-parameter-0-0>()
```


### component_type_static

```cpp
public static ComponentType component_type_static()
```


### Surface

```cpp
public void Surface<value-parameter-0-0>(SurfacesKey key)
```


### component_type

```cpp
public ComponentType component_type()
```


### Surface

```cpp
public void Surface<value-parameter-0-0>(const MeshImpl & impl, SurfacesKey key)
```


### mesh

```cpp
public const TypedMesh & mesh()
```


### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(SurfacesKey )
```


### modifiable_mesh

```cpp
public TypedMesh & modifiable_mesh(SurfacesBuilderKey )
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
public void set_surface_name(std::string_view name, SurfacesBuilderKey key)
```


### set_surface_active

```cpp
public void set_surface_active(bool active, SurfacesBuilderKey key)
```


### steal_mesh

```cpp
public std::unique_ptr<Mesh> steal_mesh(SurfacesBuilderKey key)
```




