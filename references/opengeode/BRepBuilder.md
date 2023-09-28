# class BRepBuilder

```cpp
Defined at ../../include/geode/model/representation/builder/brep_builder.h#73
```

 Class managing modification of a BRep**extends** **extends** **extends** **extends** **extends** 



```cpp
Inherits from TopologyBuilder, CornersBuilder3D, LinesBuilder3D, SurfacesBuilder3D, BlocksBuilder3D, ModelBoundariesBuilder3D, IdentifierBuilder
```



## Functions

### BRepBuilder

```cpp
public void BRepBuilder(const BRepBuilder & )
```

```cpp
Defined at ../../include/geode/model/representation/builder/brep_builder.h#81
```

### operator=

```cpp
public BRepBuilder & operator=(const BRepBuilder & )
```

```cpp
Defined at ../../include/geode/model/representation/builder/brep_builder.h#81
```

### BRepBuilder

```cpp
public void BRepBuilder(BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#42
```

### BRepBuilder

```cpp
public void BRepBuilder(BRepBuilder && other)
```

```cpp
Defined at ../../include/geode/model/representation/builder/brep_builder.h#87
```

### copy

```cpp
public ModelCopyMapping copy(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#54
```

### copy_components

```cpp
public ModelCopyMapping copy_components(const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#70
```

### copy_components

```cpp
public void copy_components(ModelCopyMapping & mapping, const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#86
```

### copy_component_geometry

```cpp
public void copy_component_geometry(const ModelCopyMapping & mapping, const BRep & brep)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#101
```

### add_corner

```cpp
public const uuid & add_corner()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#118
```

### add_corner

```cpp
public const uuid & add_corner(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#125
```

### add_line

```cpp
public const uuid & add_line()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#132
```

### add_line

```cpp
public const uuid & add_line(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#139
```

### add_surface

```cpp
public const uuid & add_surface()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#146
```

### add_surface

```cpp
public const uuid & add_surface(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#153
```

### add_block

```cpp
public const uuid & add_block()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#160
```

### add_block

```cpp
public const uuid & add_block(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#167
```

### add_model_boundary

```cpp
public const uuid & add_model_boundary()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#174
```

### add_corner

```cpp
public void add_corner(uuid corner_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#180
```

### add_corner

```cpp
public void add_corner(uuid corner_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#185
```

### add_line

```cpp
public void add_line(uuid line_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#190
```

### add_line

```cpp
public void add_line(uuid line_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#195
```

### add_surface

```cpp
public void add_surface(uuid surface_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#200
```

### add_surface

```cpp
public void add_surface(uuid surface_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#205
```

### add_block

```cpp
public void add_block(uuid block_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#210
```

### add_block

```cpp
public void add_block(uuid block_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#215
```

### add_model_boundary

```cpp
public void add_model_boundary(uuid model_boundary_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#220
```

### update_corner_mesh

```cpp
public void update_corner_mesh(const Corner3D & corner, std::unique_ptr<PointSet3D> mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#225
```

### update_line_mesh

```cpp
public void update_line_mesh(const Line3D & line, std::unique_ptr<EdgedCurve3D> mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#233
```

### update_surface_mesh

```cpp
public void update_surface_mesh(const Surface3D & surface, unique_ptr mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#241
```

### update_block_mesh

```cpp
public void update_block_mesh(const Block3D & block, unique_ptr mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#249
```

### remove_corner

```cpp
public void remove_corner(const Corner3D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#257
```

### remove_line

```cpp
public void remove_line(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#264
```

### remove_surface

```cpp
public void remove_surface(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#271
```

### remove_block

```cpp
public void remove_block(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#278
```

### remove_model_boundary

```cpp
public void remove_model_boundary(const ModelBoundary3D & boundary)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#285
```

### add_corner_line_boundary_relationship

```cpp
public void add_corner_line_boundary_relationship(const Corner3D & corner, const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#291
```

### add_line_surface_boundary_relationship

```cpp
public void add_line_surface_boundary_relationship(const Line3D & line, const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#297
```

### add_surface_block_boundary_relationship

```cpp
public void add_surface_block_boundary_relationship(const Surface3D & surface, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#303
```

### add_corner_surface_internal_relationship

```cpp
public void add_corner_surface_internal_relationship(const Corner3D & corner, const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#315
```

### add_line_surface_internal_relationship

```cpp
public void add_line_surface_internal_relationship(const Line3D & line, const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#309
```

### add_corner_block_internal_relationship

```cpp
public void add_corner_block_internal_relationship(const Corner3D & corner, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#321
```

### add_line_block_internal_relationship

```cpp
public void add_line_block_internal_relationship(const Line3D & line, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#327
```

### add_surface_block_internal_relationship

```cpp
public void add_surface_block_internal_relationship(const Surface3D & surface, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#333
```

### add_surface_in_model_boundary

```cpp
public void add_surface_in_model_boundary(const Surface3D & surface, const ModelBoundary3D & boundary)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/brep_builder.cpp#339
```



