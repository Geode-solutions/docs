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


 Class managing modification of a BRep**extends** **extends** **extends** **extends** **extends** **extends** **extends** **extends** **extends** 



```cpp
Inherits from TopologyBuilder, CornersBuilder3D, LinesBuilder3D, SurfacesBuilder3D, BlocksBuilder3D, ModelBoundariesBuilder3D, CornerCollectionsBuilder3D, LineCollectionsBuilder3D, SurfaceCollectionsBuilder3D, BlockCollectionsBuilder3D, IdentifierBuilder
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


### replace_components_meshes_by_others

```cpp
public void replace_components_meshes_by_others(BRep && other, const ModelCopyMapping & mapping)
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


### add_corner_collection

```cpp
public const uuid & add_corner_collection()
```


### add_line_collection

```cpp
public const uuid & add_line_collection()
```


### add_surface_collection

```cpp
public const uuid & add_surface_collection()
```


### add_block_collection

```cpp
public const uuid & add_block_collection()
```


### add_corner

```cpp
public void add_corner(const uuid & corner_id)
```


### add_corner

```cpp
public void add_corner(const uuid & corner_id, const MeshImpl & impl)
```


### add_line

```cpp
public void add_line(const uuid & line_id)
```


### add_line

```cpp
public void add_line(const uuid & line_id, const MeshImpl & impl)
```


### add_surface

```cpp
public void add_surface(const uuid & surface_id)
```


### add_surface

```cpp
public void add_surface(const uuid & surface_id, const MeshImpl & impl)
```


### add_block

```cpp
public void add_block(const uuid & block_id)
```


### add_block

```cpp
public void add_block(const uuid & block_id, const MeshImpl & impl)
```


### add_model_boundary

```cpp
public void add_model_boundary(const uuid & model_boundary_id)
```


### add_corner_collection

```cpp
public void add_corner_collection(const uuid & corner_collection_id)
```


### add_line_collection

```cpp
public void add_line_collection(const uuid & line_collection_id)
```


### add_surface_collection

```cpp
public void add_surface_collection(const uuid & surface_collection_id)
```


### add_block_collection

```cpp
public void add_block_collection(const uuid & block_collection_id)
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
public void update_surface_mesh(const Surface3D & surface, std::unique_ptr<SurfaceMesh3D> mesh)
```


### update_block_mesh

```cpp
public void update_block_mesh(const Block3D & block, std::unique_ptr<SolidMesh3D> mesh)
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


### remove_corner_collection

```cpp
public void remove_corner_collection(const CornerCollection3D & collection)
```


### remove_line_collection

```cpp
public void remove_line_collection(const LineCollection3D & collection)
```


### remove_surface_collection

```cpp
public void remove_surface_collection(const SurfaceCollection3D & collection)
```


### remove_block_collection

```cpp
public void remove_block_collection(const BlockCollection3D & collection)
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


### add_corner_in_corner_collection

```cpp
public void add_corner_in_corner_collection(const Corner3D & corner, const CornerCollection3D & collection)
```


### add_line_in_line_collection

```cpp
public void add_line_in_line_collection(const Line3D & line, const LineCollection3D & collection)
```


### add_surface_in_surface_collection

```cpp
public void add_surface_in_surface_collection(const Surface3D & surface, const SurfaceCollection3D & collection)
```


### add_block_in_block_collection

```cpp
public void add_block_in_block_collection(const Block3D & block, const BlockCollection3D & collection)
```


### set_point

```cpp
public void set_point(index_t unique_vertex, const Point3D & point)
```




