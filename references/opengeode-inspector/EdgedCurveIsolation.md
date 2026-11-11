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

# class EdgedCurveIsolation


# class EdgedCurveIsolation


# class EdgedCurveIsolation


 Class for inspecting the vertices of a EdgedCurve that are not in any edge



## Functions

### EdgedCurveIsolation

```cpp
public void EdgedCurveIsolation<dimension>(const EdgedCurveIsolation<dimension> & )
```


### operator=

```cpp
public EdgedCurveIsolation<dimension> & operator=(const EdgedCurveIsolation<dimension> & )
```


### EdgedCurveIsolation

```cpp
public void EdgedCurveIsolation<dimension>(const EdgedCurve<dimension> & mesh)
```


### ~EdgedCurveIsolation

```cpp
public void ~EdgedCurveIsolation<dimension>()
```


### mesh_has_isolated_vertices

```cpp
public bool mesh_has_isolated_vertices()
```


### isolated_vertices

```cpp
public InspectionIssues<index_t> isolated_vertices()
```




