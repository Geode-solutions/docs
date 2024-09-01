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

# class CoordinateReferenceSystemManagerBuilder


# class CoordinateReferenceSystemManagerBuilder


## Functions

### CoordinateReferenceSystemManagerBuilder

```cpp
public void CoordinateReferenceSystemManagerBuilder<dimension>(CoordinateReferenceSystemManager<dimension> & crs_manager)
```


### register_coordinate_reference_system

```cpp
public void register_coordinate_reference_system(basic_string_view name, std::shared_ptr<CoordinateReferenceSystem<dimension> > && crs)
```


### delete_coordinate_reference_system

```cpp
public void delete_coordinate_reference_system(basic_string_view name)
```


### set_active_coordinate_reference_system

```cpp
public void set_active_coordinate_reference_system(basic_string_view name)
```


### active_coordinate_reference_system

```cpp
public CoordinateReferenceSystem<dimension> & active_coordinate_reference_system()
```


### coordinate_reference_system

```cpp
public CoordinateReferenceSystem<dimension> & coordinate_reference_system(basic_string_view name)
```




# class CoordinateReferenceSystemManagerBuilder


# class CoordinateReferenceSystemManagerBuilder


