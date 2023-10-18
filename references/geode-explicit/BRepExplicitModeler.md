# class BRepExplicitModeler


## Records

Impl



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
public void BRepExplicitModeler(BoundingBox3D bbox)
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


### add_block

```cpp
public void add_block(const BRep & brep, const Block3D & block)
```


### add_brep

```cpp
public void add_brep(const BRep & brep)
```


### paint_volume

```cpp
public void paint_volume(const uuid & volume_uuid, absl::Span<const uuid> bounding_surface_uuids)
```


 Paints the given uuid on the tetrahedra inside the given surfaces.         These surfaces should have already been added

### build

```cpp
public std::tuple<BRep, ModelMappings> build()
```


 Returns the merged BRep (no mesh in Blocks) including all the added curves and surfaces and gives the "input to output" and "output to input" mappings between Surfaces and Lines

### build_painted_volumes

```cpp
public std::tuple<BRep, ModelMappings> build_painted_volumes()
```


 Returns the Merged BRep including the added surfaces and curves around painted volumes only and gives the "input to output" and "output to input" mappings between Surfaces and Lines.

**warning** Generated BRep does not include added Blocks nor PointSets/Corners



