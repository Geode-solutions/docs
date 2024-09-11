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

# class EdgedCurveColocation


# class EdgedCurveColocation


# class EdgedCurveColocation


 Class for inspecting the colocation of points in an EdgedCurve



## Functions

### EdgedCurveColocation

```cpp
public void EdgedCurveColocation<dimension>(const EdgedCurveColocation<dimension> & )
```


### operator=

```cpp
public EdgedCurveColocation<dimension> & operator=(const EdgedCurveColocation<dimension> & )
```


### EdgedCurveColocation

```cpp
public void EdgedCurveColocation<dimension>(const EdgedCurve<dimension> & mesh)
```


### ~EdgedCurveColocation

```cpp
public void ~EdgedCurveColocation<dimension>()
```


### mesh_has_colocated_points

```cpp
public bool mesh_has_colocated_points()
```


### colocated_points_groups

```cpp
public InspectionIssues colocated_points_groups()
```




