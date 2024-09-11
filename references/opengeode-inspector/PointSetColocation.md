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

# class PointSetColocation


# class PointSetColocation


# class PointSetColocation


 Class for inspecting the colocation of points in a PointSet



## Functions

### PointSetColocation

```cpp
public void PointSetColocation<dimension>(const PointSetColocation<dimension> & )
```


### operator=

```cpp
public PointSetColocation<dimension> & operator=(const PointSetColocation<dimension> & )
```


### PointSetColocation

```cpp
public void PointSetColocation<dimension>(const PointSet<dimension> & mesh)
```


### ~PointSetColocation

```cpp
public void ~PointSetColocation<dimension>()
```


### mesh_has_colocated_points

```cpp
public bool mesh_has_colocated_points()
```


### colocated_points_groups

```cpp
public InspectionIssues colocated_points_groups()
```




