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

# class CoordinateReferenceSystemManager


## Functions

### CoordinateReferenceSystemManager

```cpp
public void CoordinateReferenceSystemManager<dimension>()
```


### CoordinateReferenceSystemManager

```cpp
public void CoordinateReferenceSystemManager<dimension>(CoordinateReferenceSystemManager<dimension> && other)
```


### ~CoordinateReferenceSystemManager

```cpp
public void ~CoordinateReferenceSystemManager<dimension>()
```


### nb_coordinate_reference_systems

```cpp
public index_t nb_coordinate_reference_systems()
```


### find_coordinate_reference_system

```cpp
public const CoordinateReferenceSystem<dimension> & find_coordinate_reference_system(string_view name)
```


### active_coordinate_reference_system

```cpp
public const CoordinateReferenceSystem<dimension> & active_coordinate_reference_system()
```


### active_coordinate_reference_system_name

```cpp
public string_view active_coordinate_reference_system_name()
```


### coordinate_reference_system_names

```cpp
public FixedArray coordinate_reference_system_names()
```


### coordinate_reference_system_exists

```cpp
public bool coordinate_reference_system_exists(string_view name)
```


### register_coordinate_reference_system

```cpp
public void register_coordinate_reference_system(string_view name, std::shared_ptr<CoordinateReferenceSystem<dimension> > && crs, CRSManagerKey )
```


### delete_coordinate_reference_system

```cpp
public void delete_coordinate_reference_system(string_view name, CRSManagerKey )
```


### set_active_coordinate_reference_system

```cpp
public void set_active_coordinate_reference_system(string_view name, CRSManagerKey )
```


### modifiable_active_coordinate_reference_system

```cpp
public CoordinateReferenceSystem<dimension> & modifiable_active_coordinate_reference_system(CRSManagerKey )
```


### modifiable_coordinate_reference_system

```cpp
public CoordinateReferenceSystem<dimension> & modifiable_coordinate_reference_system(string_view name, CRSManagerKey )
```




# class CoordinateReferenceSystemManager


# class CoordinateReferenceSystemManager


# class CoordinateReferenceSystemManager


