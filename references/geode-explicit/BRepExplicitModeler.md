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

# class BRepExplicitModeler


## Records

Parameters

FailedElements



## Functions

### BRepExplicitModeler

```cpp
public void BRepExplicitModeler(const BRepExplicitModeler & )
```


### operator=

```cpp
public BRepExplicitModeler & operator=(const BRepExplicitModeler & )
```


### BRepExplicitModeler

```cpp
public void BRepExplicitModeler(BRep & brep, const Parameters & parameters)
```


### ~BRepExplicitModeler

```cpp
public void ~BRepExplicitModeler()
```


### add_point_set

```cpp
public void add_point_set(std::unique_ptr<PointSet3D> && mesh)
```


### add_curve

```cpp
public void add_curve(std::unique_ptr<EdgedCurve3D> && mesh)
```


### add_triangulated_surface

```cpp
public void add_triangulated_surface(std::unique_ptr<TriangulatedSurface3D> && mesh)
```


### process

```cpp
public FailedElements process()
```


 Compute all intersections between input BRep meshes, and return the list of not processed elements (e.g. because of process failure). These failing elements are returned as both input and output failing elements. Should be empty if build mode is strict. Output elements will be empty if build mode is best effort with deletion.



## Enums

| enum class ERROR_HANDLING_MODE |

--

| strict |
| best_effort |
| best_effort_with_deletion |





