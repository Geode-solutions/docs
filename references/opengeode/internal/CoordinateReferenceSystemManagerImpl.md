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

# class CoordinateReferenceSystemManagerImpl


 Named CRS storage shared by the mesh and grid CRS managers



## Functions

### nb_coordinate_reference_systems

```cpp
public index_t nb_coordinate_reference_systems()
```


### find_coordinate_reference_system

```cpp
public const CRS & find_coordinate_reference_system(std::string_view name)
```


### active_coordinate_reference_system

```cpp
public const CRS & active_coordinate_reference_system()
```


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
public void register_coordinate_reference_system(std::string_view name, std::shared_ptr<CRS> && crs)
```


### delete_coordinate_reference_system

```cpp
public void delete_coordinate_reference_system(std::string_view name)
```


### set_active_coordinate_reference_system

```cpp
public void set_active_coordinate_reference_system(std::string_view name)
```


### modifiable_active_coordinate_reference_system

```cpp
public CRS & modifiable_active_coordinate_reference_system()
```


### modifiable_coordinate_reference_system

```cpp
public CRS & modifiable_coordinate_reference_system(std::string_view name)
```


### has_active_coordinate_reference_system

```cpp
protected bool has_active_coordinate_reference_system()
```


### copy

```cpp
protected void copy(const CoordinateReferenceSystemManagerImpl<CRS> & other)
```


 Replace the stored CRSs by clones of the given ones

### serialize_coordinate_reference_systems

```cpp
protected void serialize_coordinate_reference_systems(Archive & archive)
```




