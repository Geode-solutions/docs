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

### load_surfaces

```cpp
public void load_surfaces(basic_string_view directory)
```


### surface_mesh_builder

```cpp
public std::unique_ptr<typename Mesh::Builder> surface_mesh_builder(const uuid & id)
```


 Get a pointer to the builder of a Surface mesh

**id** [in] Unique index of the Surface

### set_surface_name

```cpp
public void set_surface_name(const uuid & id, basic_string_view name)
```


### set_surface_active

```cpp
public void set_surface_active(const uuid & id, bool active)
```


### SurfacesBuilder

```cpp
protected void SurfacesBuilder<>(Surfaces<dimension> & surfaces)
```


### create_surface

```cpp
protected const uuid & create_surface()
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
protected void set_surface_mesh(const uuid & id, std::unique_ptr<SurfaceMesh<dimension> > mesh)
```


### modifiable_surface_mesh

```cpp
protected SurfaceMesh<dimension> & modifiable_surface_mesh(const uuid & id)
```


### steal_surface_mesh

```cpp
protected std::unique_ptr<SurfaceMesh<dimension> > steal_surface_mesh(const uuid & id)
```




