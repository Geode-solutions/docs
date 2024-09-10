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


### build

```cpp
public tuple build()
```


 Returns the merged BRep (no mesh in Blocks) including all the added curves and surfaces and gives the "input to output" and "output to input" mappings between Surfaces and Lines



