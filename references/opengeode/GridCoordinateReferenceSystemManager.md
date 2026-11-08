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

# class GridCoordinateReferenceSystemManager


# class GridCoordinateReferenceSystemManager


## Functions

### GridCoordinateReferenceSystemManager

```cpp
public void GridCoordinateReferenceSystemManager<dimension>()
```


### GridCoordinateReferenceSystemManager

```cpp
public void GridCoordinateReferenceSystemManager<dimension>(GridCoordinateReferenceSystemManager<dimension> && other)
```


### operator=

```cpp
public GridCoordinateReferenceSystemManager<dimension> & operator=(GridCoordinateReferenceSystemManager<dimension> && other)
```


### ~GridCoordinateReferenceSystemManager

```cpp
public void ~GridCoordinateReferenceSystemManager<dimension>()
```


### nb_coordinate_reference_systems

```cpp
public index_t nb_coordinate_reference_systems()
```


### find_coordinate_reference_system

```cpp
public const GridCoordinateReferenceSystem<dimension> & find_coordinate_reference_system(std::string_view name)
```


### active_coordinate_reference_system

```cpp
public const GridCoordinateReferenceSystem<dimension> & active_coordinate_reference_system()
```


 The active CRS coordinate system is always the grid coordinate system.

### active_coordinate_reference_system_name

```cpp
public std::string_view active_coordinate_reference_system_name()
```


### coordinate_reference_system_names

```cpp
public absl::FixedArray<std::string> coordinate_reference_system_names()
```


### coordinate_reference_system_exists

```cpp
public bool coordinate_reference_system_exists(std::string_view name)
```


### register_coordinate_reference_system

```cpp
public void register_coordinate_reference_system(std::string_view name, std::shared_ptr<GridCoordinateReferenceSystem<dimension>> && crs, GridCRSManagerKey )
```


### delete_coordinate_reference_system

```cpp
public void delete_coordinate_reference_system(std::string_view name, GridCRSManagerKey )
```


### set_active_coordinate_reference_system

```cpp
public void set_active_coordinate_reference_system(std::string_view name, GridCRSManagerKey )
```


### set_active_coordinate_system

```cpp
public void set_active_coordinate_system(const CoordinateSystem<dimension> & coordinate_system, LightRegularGridKey )
```


### copy

```cpp
public void copy(const GridCoordinateReferenceSystemManager<dimension> & crs_manager, LightRegularGridKey )
```




# class GridCoordinateReferenceSystemManager


