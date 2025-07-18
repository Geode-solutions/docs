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

# class BRepSolidModeler


## Functions

### BRepSolidModeler

```cpp
public void BRepSolidModeler(const BRepSolidModeler & )
```


### operator=

```cpp
public BRepSolidModeler & operator=(const BRepSolidModeler & )
```


### BRepSolidModeler

```cpp
public void BRepSolidModeler(std::unique_ptr<TetrahedralSolid3D> && solid)
```


### BRepSolidModeler

```cpp
public void BRepSolidModeler(BRepSolidModeler && other)
```


### ~BRepSolidModeler

```cpp
public void ~BRepSolidModeler()
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


### paint_volume

```cpp
public void paint_volume(const uuid & volume_uuid, Span bounding_surface_uuids)
```


 Paints the given uuid on the tetrahedra inside the given surfaces. These surfaces should have already been added.

### build

```cpp
public tuple build()
```


 Returns the BRep from the initial solid cut by the added points, curves and surfaces and gives the "input to output" and "output to input" mappings between the Solid, Surfaces and Lines and the BRep.

### build_painted_volumes

```cpp
public tuple build_painted_volumes()
```


 Returns the BRep from the initial solid cut by the added points, curves and surfaces and gives the "input to output" and "output to input" mappings between the Solid, Surfaces and Lines and the BRep. Everything outside of the painted volumes will not be included in the BRep.



