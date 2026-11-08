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

# class GridCoordinateReferenceSystemManagerBuilder


# class GridCoordinateReferenceSystemManagerBuilder


# class GridCoordinateReferenceSystemManagerBuilder


## Functions

### register_coordinate_reference_system

```cpp
public void register_coordinate_reference_system(std::string_view name, std::shared_ptr<GridCoordinateReferenceSystem<dimension>> && crs)
```


### GridCoordinateReferenceSystemManagerBuilder

```cpp
public void GridCoordinateReferenceSystemManagerBuilder<value-parameter-0-0>(LightRegularGrid<dimension> & grid)
```


### delete_coordinate_reference_system

```cpp
public void delete_coordinate_reference_system(std::string_view name)
```


### set_active_coordinate_reference_system

```cpp
public void set_active_coordinate_reference_system(std::string_view name)
```


 Set the active CRS and move the grid geometry to its coordinate system.



