# class SectionBuilder

```cpp
Defined at ../../include/geode/model/representation/builder/section_builder.h#67
```

 Class managing modification of a Section**extends** **extends** **extends** **extends** 



```cpp
Inherits from TopologyBuilder, CornersBuilder2D, LinesBuilder2D, SurfacesBuilder2D, ModelBoundariesBuilder2D, IdentifierBuilder
```



## Functions

### SectionBuilder

```cpp
public void SectionBuilder(const SectionBuilder & )
```

```cpp
Defined at ../../include/geode/model/representation/builder/section_builder.h#74
```

### operator=

```cpp
public SectionBuilder & operator=(const SectionBuilder & )
```

```cpp
Defined at ../../include/geode/model/representation/builder/section_builder.h#74
```

### SectionBuilder

```cpp
public void SectionBuilder(Section & section)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#40
```

### SectionBuilder

```cpp
public void SectionBuilder(SectionBuilder && other)
```

```cpp
Defined at ../../include/geode/model/representation/builder/section_builder.h#80
```

### copy

```cpp
public ModelCopyMapping copy(const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#51
```

### copy_components

```cpp
public ModelCopyMapping copy_components(const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#67
```

### copy_components

```cpp
public void copy_components(ModelCopyMapping & mapping, const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#81
```

### copy_component_geometry

```cpp
public void copy_component_geometry(const ModelCopyMapping & mapping, const Section & section)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#94
```

### add_corner

```cpp
public const uuid & add_corner()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#109
```

### add_corner

```cpp
public const uuid & add_corner(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#116
```

### add_line

```cpp
public const uuid & add_line()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#123
```

### add_line

```cpp
public const uuid & add_line(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#130
```

### add_surface

```cpp
public const uuid & add_surface()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#137
```

### add_surface

```cpp
public const uuid & add_surface(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#144
```

### add_model_boundary

```cpp
public const uuid & add_model_boundary()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#151
```

### add_corner

```cpp
public void add_corner(uuid corner_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#157
```

### add_corner

```cpp
public void add_corner(uuid corner_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#162
```

### add_line

```cpp
public void add_line(uuid line_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#167
```

### add_line

```cpp
public void add_line(uuid line_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#172
```

### add_surface

```cpp
public void add_surface(uuid surface_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#177
```

### add_surface

```cpp
public void add_surface(uuid surface_id, const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#182
```

### add_model_boundary

```cpp
public void add_model_boundary(uuid model_boundary_id)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#187
```

### update_corner_mesh

```cpp
public void update_corner_mesh(const Corner2D & corner, std::unique_ptr<PointSet2D> mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#192
```

### update_line_mesh

```cpp
public void update_line_mesh(const Line2D & line, std::unique_ptr<EdgedCurve2D> mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#200
```

### update_surface_mesh

```cpp
public void update_surface_mesh(const Surface2D & surface, std::unique_ptr<SurfaceMesh2D> mesh)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#208
```

### remove_corner

```cpp
public void remove_corner(const Corner2D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#216
```

### remove_line

```cpp
public void remove_line(const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#223
```

### remove_surface

```cpp
public void remove_surface(const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#230
```

### remove_model_boundary

```cpp
public void remove_model_boundary(const ModelBoundary2D & boundary)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#237
```

### add_corner_line_boundary_relationship

```cpp
public void add_corner_line_boundary_relationship(const Corner2D & corner, const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#244
```

### add_line_surface_boundary_relationship

```cpp
public void add_line_surface_boundary_relationship(const Line2D & line, const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#250
```

### add_corner_surface_internal_relationship

```cpp
public void add_corner_surface_internal_relationship(const Corner2D & corner, const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#256
```

### add_line_surface_internal_relationship

```cpp
public void add_line_surface_internal_relationship(const Line2D & line, const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#262
```

### add_line_in_model_boundary

```cpp
public void add_line_in_model_boundary(const Line2D & line, const ModelBoundary2D & boundary)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/builder/section_builder.cpp#268
```



