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

# class GridCoordinateReferenceSystem


 Coordinate reference system of a LightRegularGrid: the grid geometry (origin and directions) expressed in this reference system.



## Functions

### GridCoordinateReferenceSystem

```cpp
public void GridCoordinateReferenceSystem<dimension>(CoordinateSystem<dimension> coordinate_system)
```


### ~GridCoordinateReferenceSystem

```cpp
public void ~GridCoordinateReferenceSystem<dimension>()
```


### clone

```cpp
public std::unique_ptr<GridCoordinateReferenceSystem<dimension>> clone()
```


### type_name_static

```cpp
public static CRSType type_name_static()
```


### type_name

```cpp
public CRSType type_name()
```


### coordinate_system

```cpp
public const CoordinateSystem<dimension> & coordinate_system()
```


### set_coordinate_system

```cpp
public void set_coordinate_system(CoordinateSystem<dimension> coordinate_system)
```


### GridCoordinateReferenceSystem

```cpp
protected void GridCoordinateReferenceSystem<dimension>()
```


### GridCoordinateReferenceSystem

```cpp
protected void GridCoordinateReferenceSystem<dimension>(const GridCoordinateReferenceSystem<dimension> & other)
```


### register_grid_coordinate_reference_system_type

```cpp
public static void register_grid_coordinate_reference_system_type(PContext & context, std::string_view name)
```




# class GridCoordinateReferenceSystem


# class GridCoordinateReferenceSystem


