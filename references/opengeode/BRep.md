# class BRep


 A BRep (for Boundary Representation) is a 3D model composed of Corners, Lines, Surfaces and Blocks. This class provides classes for range-based iteration on Component boundaries and incidences.**extends** **extends** **extends** **extends** **extends** 



```cpp
Inherits from Topology, Corners3D, Lines3D, Surfaces3D, Blocks3D, ModelBoundaries3D, Identifier
```



## Records

BoundaryCornerRange

BoundaryLineRange

BoundarySurfaceRange

IncidentLineRange

IncidentSurfaceRange

IncidentBlockRange

InternalCornerRange

InternalLineRange

InternalSurfaceRange

EmbeddingSurfaceRange

EmbeddingBlockRange

ItemSurfaceRange



## Functions

### BRep

```cpp
public void BRep()
```


### BRep

```cpp
public void BRep(BRep && brep)
```


### operator=

```cpp
public BRep & operator=(BRep && brep)
```


### ~BRep

```cpp
public void ~BRep()
```


### boundaries

```cpp
public BoundaryCornerRange boundaries(const Line3D & line)
```


### boundaries

```cpp
public BoundaryLineRange boundaries(const Surface3D & surface)
```


### boundaries

```cpp
public BoundarySurfaceRange boundaries(const Block3D & block)
```


### incidences

```cpp
public IncidentLineRange incidences(const Corner3D & corner)
```


### incidences

```cpp
public IncidentSurfaceRange incidences(const Line3D & line)
```


### incidences

```cpp
public IncidentBlockRange incidences(const Surface3D & surface)
```


### nb_internal_corners

```cpp
public index_t nb_internal_corners(const Surface3D & surface)
```


### internal_corners

```cpp
public InternalCornerRange internal_corners(const Surface3D & surface)
```


### nb_internal_lines

```cpp
public index_t nb_internal_lines(const Surface3D & surface)
```


### internal_lines

```cpp
public InternalLineRange internal_lines(const Surface3D & surface)
```


### nb_internal_corners

```cpp
public index_t nb_internal_corners(const Block3D & block)
```


### internal_corners

```cpp
public InternalCornerRange internal_corners(const Block3D & block)
```


### nb_internal_lines

```cpp
public index_t nb_internal_lines(const Block3D & block)
```


### internal_lines

```cpp
public InternalLineRange internal_lines(const Block3D & block)
```


### nb_internal_surfaces

```cpp
public index_t nb_internal_surfaces(const Block3D & block)
```


### internal_surfaces

```cpp
public InternalSurfaceRange internal_surfaces(const Block3D & block)
```


### nb_embedding_surfaces

```cpp
public index_t nb_embedding_surfaces(const Corner3D & corner)
```


### embedding_surfaces

```cpp
public EmbeddingSurfaceRange embedding_surfaces(const Corner3D & corner)
```


### nb_embedding_surfaces

```cpp
public index_t nb_embedding_surfaces(const Line3D & line)
```


### embedding_surfaces

```cpp
public EmbeddingSurfaceRange embedding_surfaces(const Line3D & line)
```


### nb_embedding_blocks

```cpp
public index_t nb_embedding_blocks(const Corner3D & corner)
```


### embedding_blocks

```cpp
public EmbeddingBlockRange embedding_blocks(const Corner3D & corner)
```


### nb_embedding_blocks

```cpp
public index_t nb_embedding_blocks(const Line3D & line)
```


### embedding_blocks

```cpp
public EmbeddingBlockRange embedding_blocks(const Line3D & line)
```


### nb_embedding_blocks

```cpp
public index_t nb_embedding_blocks(const Surface3D & surface)
```


### embedding_blocks

```cpp
public EmbeddingBlockRange embedding_blocks(const Surface3D & surface)
```


### model_boundary_items

```cpp
public ItemSurfaceRange model_boundary_items(const ModelBoundary3D & boundary)
```


### is_closed

```cpp
public bool is_closed(const Line3D & line)
```


### is_closed

```cpp
public bool is_closed(const Surface3D & surface)
```


### is_boundary

```cpp
public bool is_boundary(const Corner3D & corner, const Line3D & line)
```


### is_boundary

```cpp
public bool is_boundary(const Line3D & line, const Surface3D & surface)
```


### is_boundary

```cpp
public bool is_boundary(const Surface3D & surface, const Block3D & block)
```


### is_internal

```cpp
public bool is_internal(const Corner3D & corner, const Surface3D & surface)
```


### is_internal

```cpp
public bool is_internal(const Line3D & line, const Surface3D & surface)
```


### is_internal

```cpp
public bool is_internal(const Corner3D & corner, const Block3D & block)
```


### is_internal

```cpp
public bool is_internal(const Line3D & line, const Block3D & block)
```


### is_internal

```cpp
public bool is_internal(const Surface3D & surface, const Block3D & block)
```


### is_model_boundary_item

```cpp
public bool is_model_boundary_item(const Surface3D & surface, const ModelBoundary3D & boundary)
```


### bounding_box

```cpp
public BoundingBox3D bounding_box()
```


 Compute the bounding box from component meshes

### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```




