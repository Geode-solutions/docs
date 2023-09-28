# class BRepExplicitModeler

```cpp
Defined at ../include/geode/explicit/brep/brep_explicit_modeler.h#38
```

## Records

Impl



## Functions

### BRepExplicitModeler

```cpp
public void BRepExplicitModeler(const BRepExplicitModeler & )
```

```cpp
Defined at ../include/geode/explicit/brep/brep_explicit_modeler.h#40
```

### operator=

```cpp
public BRepExplicitModeler & operator=(const BRepExplicitModeler & )
```

```cpp
Defined at ../include/geode/explicit/brep/brep_explicit_modeler.h#40
```

### BRepExplicitModeler

```cpp
public void BRepExplicitModeler(BoundingBox3D bbox)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3213
```

### ~BRepExplicitModeler

```cpp
public void ~BRepExplicitModeler()
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3218
```

### add_point_set

```cpp
public void add_point_set(const PointSet3D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3222
```

### add_curve

```cpp
public void add_curve(const EdgedCurve3D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3227
```

### add_triangulated_surface

```cpp
public void add_triangulated_surface(const TriangulatedSurface3D & mesh)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3232
```

### add_corner

```cpp
public void add_corner(const Corner3D & corner)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3238
```

### add_line

```cpp
public void add_line(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3243
```

### add_surface

```cpp
public void add_surface(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3248
```

### add_block

```cpp
public void add_block(const BRep & brep, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3254
```

### add_brep

```cpp
public void add_brep(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3260
```

### paint_volume

```cpp
public void paint_volume(const uuid & volume_uuid, absl::Span<const uuid> bounding_surface_uuids)
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3291
```

 Paints the given uuid on the tetrahedra inside the given surfaces.         These surfaces should have already been added

### build

```cpp
public std::tuple<BRep, ModelMappings> build()
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3280
```

 Returns the merged BRep (no mesh in Blocks) including all the added curves and surfaces and gives the "input to output" and "output to input" mappings between Surfaces and Lines

### build_painted_volumes

```cpp
public std::tuple<BRep, ModelMappings> build_painted_volumes()
```

```cpp
Defined at /github/workspace/src/geode/explicit/brep/brep_explicit_modeler.cpp#3285
```

 Returns the Merged BRep including the added surfaces and curves around painted volumes only and gives the "input to output" and "output to input" mappings between Surfaces and Lines.

**warning** Generated BRep does not include added Blocks nor PointSets/Corners



