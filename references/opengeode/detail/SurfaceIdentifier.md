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

# class SurfaceIdentifier

# class SurfaceIdentifier

# class SurfaceIdentifier


## Functions

### SurfaceIdentifier

```cpp
public void SurfaceIdentifier<dimension>(const SurfaceIdentifier<dimension> & )
```


### operator=

```cpp
public SurfaceIdentifier<dimension> & operator=(const SurfaceIdentifier<dimension> & )
```


### SurfaceIdentifier

```cpp
public void SurfaceIdentifier<dimension>(SurfaceIdentifier<dimension> && )
```


### operator=

```cpp
public SurfaceIdentifier<dimension> & operator=(SurfaceIdentifier<dimension> && )
```


### SurfaceIdentifier

```cpp
public void SurfaceIdentifier<dimension>(const SurfaceMesh<dimension> & surface)
```


### ~SurfaceIdentifier

```cpp
public void ~SurfaceIdentifier<dimension>()
```


### identify_polygons

```cpp
public index_t identify_polygons()
```


### polygon_identifier

```cpp
public index_t polygon_identifier(index_t polygon)
```


### identified_connected_polygons

```cpp
public absl::FixedArray<std::vector<index_t> > identified_connected_polygons()
```




