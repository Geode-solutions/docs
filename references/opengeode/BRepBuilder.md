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

# class BRepBuilder


 Class managing modification of a BRep**extends** **extends** **extends** **extends** **extends** 



```cpp
Inherits from TopologyBuilder, CornersBuilder3D, LinesBuilder3D, SurfacesBuilder3D, BlocksBuilder3D, ModelBoundariesBuilder3D, IdentifierBuilder
```



## Functions

### BRepBuilder

```cpp
public void BRepBuilder(const BRepBuilder & )
```


### operator=

```cpp
public BRepBuilder & operator=(const BRepBuilder & )
```


### BRepBuilder

```cpp
public void BRepBuilder(BRep & brep)
```


### BRepBuilder

```cpp
public void BRepBuilder(BRepBuilder && other)
```


### copy

```cpp
public ModelCopyMapping copy(const BRep & brep)
```


### copy_components

```cpp
public ModelCopyMapping copy_components(const BRep & brep)
```


### copy_components

```cpp
public void copy_components(ModelCopyMapping & mapping, const BRep & brep)
```


### copy_component_geometry

```cpp
public void copy_component_geometry(const ModelCopyMapping & mapping, const BRep & brep)
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


### add_block

```cpp
public const uuid & add_block()
```


### add_block

```cpp
public const uuid & add_block(const MeshImpl & impl)
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


### add_block

```cpp
public void add_block(uuid block_id)
```


### add_block

```cpp
public void add_block(uuid block_id, const MeshImpl & impl)
```


### add_model_boundary

```cpp
public void add_model_boundary(uuid model_boundary_id)
```


### update_corner_mesh

```cpp
public void update_corner_mesh(const Corner3D & corner, std::unique_ptr<PointSet3D> mesh)
```


### update_line_mesh

```cpp
public void update_line_mesh(const Line3D & line, std::unique_ptr<EdgedCurve3D> mesh)
```


### update_surface_mesh

```cpp
public void update_surface_mesh(const Surface3D & surface, unique_ptr mesh)
```


### update_block_mesh

```cpp
public void update_block_mesh(const Block3D & block, unique_ptr mesh)
```


### remove_corner

```cpp
public void remove_corner(const Corner3D & corner)
```


### remove_line

```cpp
public void remove_line(const Line3D & line)
```


### remove_surface

```cpp
public void remove_surface(const Surface3D & surface)
```


### remove_block

```cpp
public void remove_block(const Block3D & block)
```


### remove_model_boundary

```cpp
public void remove_model_boundary(const ModelBoundary3D & boundary)
```


### add_corner_line_boundary_relationship

```cpp
public void add_corner_line_boundary_relationship(const Corner3D & corner, const Line3D & line)
```


### add_line_surface_boundary_relationship

```cpp
public void add_line_surface_boundary_relationship(const Line3D & line, const Surface3D & surface)
```


### add_surface_block_boundary_relationship

```cpp
public void add_surface_block_boundary_relationship(const Surface3D & surface, const Block3D & block)
```


### add_corner_surface_internal_relationship

```cpp
public void add_corner_surface_internal_relationship(const Corner3D & corner, const Surface3D & surface)
```


### add_line_surface_internal_relationship

```cpp
public void add_line_surface_internal_relationship(const Line3D & line, const Surface3D & surface)
```


### add_corner_block_internal_relationship

```cpp
public void add_corner_block_internal_relationship(const Corner3D & corner, const Block3D & block)
```


### add_line_block_internal_relationship

```cpp
public void add_line_block_internal_relationship(const Line3D & line, const Block3D & block)
```


### add_surface_block_internal_relationship

```cpp
public void add_surface_block_internal_relationship(const Surface3D & surface, const Block3D & block)
```


### add_surface_in_model_boundary

```cpp
public void add_surface_in_model_boundary(const Surface3D & surface, const ModelBoundary3D & boundary)
```




