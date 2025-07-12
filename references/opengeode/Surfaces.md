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

# class Surfaces


# class Surfaces


## Records

SurfaceRangeBase

SurfaceRange



## Functions

### Surfaces

```cpp
public void Surfaces<dimension>(const Surfaces<dimension> & )
```


### operator=

```cpp
public Surfaces<dimension> & operator=(const Surfaces<dimension> & )
```


### ~Surfaces

```cpp
public void ~Surfaces<dimension>()
```


### nb_surfaces

```cpp
public index_t nb_surfaces()
```


### nb_active_surfaces

```cpp
public index_t nb_active_surfaces()
```


### has_surface

```cpp
public bool has_surface(const uuid & id)
```


### surface

```cpp
public const Surface<dimension> & surface(const uuid & id)
```


### surfaces

```cpp
public SurfaceRange surfaces()
```


### active_surfaces

```cpp
public SurfaceRange active_surfaces()
```


### components

```cpp
public SurfaceRange components()
```


### save_surfaces

```cpp
public void save_surfaces(basic_string_view directory)
```


### Surfaces

```cpp
protected void Surfaces<dimension>()
```


### Surfaces

```cpp
protected void Surfaces<dimension>(Surfaces<dimension> && other)
```


### operator=

```cpp
protected Surfaces<dimension> & operator=(Surfaces<dimension> && other)
```


### create_surface

```cpp
public const uuid & create_surface(SurfacesBuilderKey key)
```


### create_surface

```cpp
public const uuid & create_surface(const MeshImpl & impl, SurfacesBuilderKey key)
```


### create_surface

```cpp
public void create_surface(uuid surface_id, SurfacesBuilderKey key)
```


### create_surface

```cpp
public void create_surface(uuid surface_id, const MeshImpl & impl, SurfacesBuilderKey key)
```


### delete_surface

```cpp
public void delete_surface(const Surface<dimension> & surface, SurfacesBuilderKey key)
```


### load_surfaces

```cpp
public void load_surfaces(basic_string_view directory, SurfacesBuilderKey key)
```


### modifiable_surfaces

```cpp
public ModifiableSurfaceRange modifiable_surfaces(SurfacesBuilderKey key)
```


### modifiable_surface

```cpp
public Surface<dimension> & modifiable_surface(const uuid & id, SurfacesBuilderKey key)
```




# class Surfaces


