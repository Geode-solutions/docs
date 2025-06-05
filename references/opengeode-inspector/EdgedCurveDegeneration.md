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

# class EdgedCurveDegeneration


# class EdgedCurveDegeneration


# class EdgedCurveDegeneration


 Class for inspecting the degeneration of an EdgedCurve



## Functions

### EdgedCurveDegeneration

```cpp
public void EdgedCurveDegeneration<dimension>(const EdgedCurveDegeneration<dimension> & )
```


### operator=

```cpp
public EdgedCurveDegeneration<dimension> & operator=(const EdgedCurveDegeneration<dimension> & )
```


### EdgedCurveDegeneration

```cpp
public void EdgedCurveDegeneration<dimension>(const EdgedCurve<dimension> & mesh)
```


### ~EdgedCurveDegeneration

```cpp
public void ~EdgedCurveDegeneration<dimension>()
```


### is_mesh_degenerated

```cpp
public bool is_mesh_degenerated()
```


### degenerated_edges

```cpp
public InspectionIssues degenerated_edges()
```


### small_edges

```cpp
public InspectionIssues small_edges(double threshold)
```




