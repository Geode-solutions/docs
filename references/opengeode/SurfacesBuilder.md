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

# class SurfacesBuilder


# class SurfacesBuilder


# class SurfacesBuilder


## Functions

### create_surface

```cpp
protected const uuid & create_surface()
```


### surface_mesh_builder

```cpp
public std::unique_ptr<typename Mesh::Builder> surface_mesh_builder(const Surface<dimension> & surface)
```


 Get a pointer to the builder of a Surface mesh

**surface** [in] Surface component to get the builder of

### load_surfaces

```cpp
public void load_surfaces(std::string_view directory)
```


### SurfacesBuilder

```cpp
protected void SurfacesBuilder<value-parameter-0-0>(Surfaces<dimension> & surfaces)
```


### set_surface_name

```cpp
public void set_surface_name(const Surface<dimension> & surface, std::string_view name)
```


### set_surface_active

```cpp
public void set_surface_active(const Surface<dimension> & surface, bool active)
```


### steal_surface_mesh

```cpp
public std::unique_ptr<SurfaceMesh<dimension>> steal_surface_mesh(const Surface<dimension> & surface)
```


### create_surface

```cpp
protected const uuid & create_surface(const MeshImpl & impl)
```


### create_surface

```cpp
protected void create_surface(uuid surface_id)
```


### create_surface

```cpp
protected void create_surface(uuid surface_id, const MeshImpl & impl)
```


### delete_surface

```cpp
protected void delete_surface(const Surface<dimension> & surface)
```


### set_surface_mesh

```cpp
protected void set_surface_mesh(const uuid & id, std::unique_ptr<SurfaceMesh<dimension>> mesh)
```


### modifiable_surface_mesh

```cpp
protected SurfaceMesh<dimension> & modifiable_surface_mesh(const uuid & id)
```




