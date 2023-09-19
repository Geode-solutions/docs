# class SectionBuilder


 Class managing modification of a Section**extends** **extends** **extends** **extends** 



```cpp
Inherits from TopologyBuilder, CornersBuilder2D, LinesBuilder2D, SurfacesBuilder2D, ModelBoundariesBuilder2D, IdentifierBuilder
```



## Functions

### SectionBuilder

```cpp
public void SectionBuilder(const SectionBuilder & )
```


### operator=

```cpp
public SectionBuilder & operator=(const SectionBuilder & )
```


### SectionBuilder

```cpp
public void SectionBuilder(Section & section)
```


### SectionBuilder

```cpp
public void SectionBuilder(SectionBuilder && other)
```


### copy

```cpp
public ModelCopyMapping copy(const Section & section)
```


### copy_components

```cpp
public ModelCopyMapping copy_components(const Section & section)
```


### copy_components

```cpp
public void copy_components(ModelCopyMapping & mapping, const Section & section)
```


### copy_component_geometry

```cpp
public void copy_component_geometry(const ModelCopyMapping & mapping, const Section & section)
```


### add_corner

```cpp
public const uuid & add_corner()
```


### add_corner

```cpp
public const uuid & add_corner(const MeshImpl & impl)
```


### add_line

```cpp
public const uuid & add_line()
```


### add_line

```cpp
public const uuid & add_line(const MeshImpl & impl)
```


### add_surface

```cpp
public const uuid & add_surface()
```


### add_surface

```cpp
public const uuid & add_surface(const MeshImpl & impl)
```


### add_model_boundary

```cpp
public const uuid & add_model_boundary()
```


### add_corner

```cpp
public void add_corner(uuid corner_id)
```


### add_corner

```cpp
public void add_corner(uuid corner_id, const MeshImpl & impl)
```


### add_line

```cpp
public void add_line(uuid line_id)
```


### add_line

```cpp
public void add_line(uuid line_id, const MeshImpl & impl)
```


### add_surface

```cpp
public void add_surface(uuid surface_id)
```


### add_surface

```cpp
public void add_surface(uuid surface_id, const MeshImpl & impl)
```


### add_model_boundary

```cpp
public void add_model_boundary(uuid model_boundary_id)
```


### update_corner_mesh

```cpp
public void update_corner_mesh(const Corner2D & corner, std::unique_ptr<PointSet2D> mesh)
```


### update_line_mesh

```cpp
public void update_line_mesh(const Line2D & line, std::unique_ptr<EdgedCurve2D> mesh)
```


### update_surface_mesh

```cpp
public void update_surface_mesh(const Surface2D & surface, std::unique_ptr<SurfaceMesh2D> mesh)
```


### remove_corner

```cpp
public void remove_corner(const Corner2D & corner)
```


### remove_line

```cpp
public void remove_line(const Line2D & line)
```


### remove_surface

```cpp
public void remove_surface(const Surface2D & surface)
```


### remove_model_boundary

```cpp
public void remove_model_boundary(const ModelBoundary2D & boundary)
```


### add_corner_line_boundary_relationship

```cpp
public void add_corner_line_boundary_relationship(const Corner2D & corner, const Line2D & line)
```


### add_line_surface_boundary_relationship

```cpp
public void add_line_surface_boundary_relationship(const Line2D & line, const Surface2D & surface)
```


### add_corner_surface_internal_relationship

```cpp
public void add_corner_surface_internal_relationship(const Corner2D & corner, const Surface2D & surface)
```


### add_line_surface_internal_relationship

```cpp
public void add_line_surface_internal_relationship(const Line2D & line, const Surface2D & surface)
```


### add_line_in_model_boundary

```cpp
public void add_line_in_model_boundary(const Line2D & line, const ModelBoundary2D & boundary)
```




