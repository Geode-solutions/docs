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
public void BRepExplicitModeler()
```


### BRepExplicitModeler

```cpp
public void BRepExplicitModeler(const BRep & brep)
```


### ~BRepExplicitModeler

```cpp
public void ~BRepExplicitModeler()
```


### add_point_set

```cpp
public void add_point_set(const PointSet3D & mesh)
```


### add_curve

```cpp
public void add_curve(const EdgedCurve3D & mesh)
```


### add_triangulated_surface

```cpp
public void add_triangulated_surface(const TriangulatedSurface3D & mesh)
```


### add_corner

```cpp
public void add_corner(const Corner3D & corner)
```


### add_line

```cpp
public void add_line(const Line3D & line)
```


### add_surface

```cpp
public void add_surface(const Surface3D & surface)
```


### add_brep

```cpp
public void add_brep(const BRep & brep)
```


### process

```cpp
public void process(const Parameters & parameters)
```


 Compute all intersections between input Meshes

### get_surface

```cpp
public unique_ptr get_surface(const uuid & surface_id)
```


 Creates a clone of the (modified) triangulated surface with given surface_id. Returns nullptr if the surface_id does not exist.

**surface_id** [in] the id of the surface to retrieve

**return** the triangulated surface (or nullptr if not found)

### get_curve

```cpp
public unique_ptr get_curve(const uuid & curve_id)
```


 Creates a clone of the (modified) curve with given curve_id. Returns nullptr if the curve_id does not exist.

**curve_id** [in] the id of the curve to retrieve

**return** the curve (or nullptr if not found)

### get_point_set

```cpp
public unique_ptr get_point_set(const uuid & point_set_id)
```


 Creates a clone of the (modified) point set with given         point_set_id. Returns nullptr if the point_set_id does not exist.

**point_set_id** [in] the id of the point set to retrieve

**return** the point set (or nullptr if not found)

### build

```cpp
public tuple build(const Parameters & parameters)
```


 Returns the merged BRep (no mesh in Blocks) including all the added curves and surfaces and gives the "input to output" and "output to input" mappings between Surfaces and Lines

**details** calls process() then creates the model



