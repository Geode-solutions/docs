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

# class CoordinateReferenceSystemManagersBuilder


## Functions

### CoordinateReferenceSystemManagersBuilder

```cpp
public void CoordinateReferenceSystemManagersBuilder<dimension>(CoordinateReferenceSystemManagers<dimension> & crs_managers)
```


### coordinate_reference_system_manager_builder1D

```cpp
public CoordinateReferenceSystemManagerBuilder1D coordinate_reference_system_manager_builder1D()
```


### coordinate_reference_system_manager_builder2D

```cpp
public CoordinateReferenceSystemManagerBuilder2D coordinate_reference_system_manager_builder2D()
```


### coordinate_reference_system_manager_builder3D

```cpp
public CoordinateReferenceSystemManagerBuilder3D coordinate_reference_system_manager_builder3D()
```


### main_coordinate_reference_system_manager_builder

```cpp
public CoordinateReferenceSystemManagerBuilder<dimension> main_coordinate_reference_system_manager_builder()
```


### set_point

```cpp
public void set_point(index_t vertex, Point<dimension> point)
```


 Set coordinates to a vertex. This vertex should be created before. It will be set in the active CRS.

**vertex_id** [in] The vertex, in [0, nb_vertices()-1].

**point** [in] The vertex coordinates



# class CoordinateReferenceSystemManagersBuilder


# class CoordinateReferenceSystemManagersBuilder


