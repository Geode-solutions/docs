# class BRep

```cpp
Defined at ../../include/geode/model/representation/core/brep.h#61
```

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

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#617
```

### BRep

```cpp
public void BRep(BRep && brep)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#619
```

### operator=

```cpp
public BRep & operator=(BRep && brep)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#630
```

### ~BRep

```cpp
public void ~BRep()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#642
```

### boundaries

```cpp
public BoundaryCornerRange boundaries(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#83
```

### boundaries

```cpp
public BoundaryLineRange boundaries(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#118
```

### boundaries

```cpp
public BoundarySurfaceRange boundaries(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#153
```

### incidences

```cpp
public IncidentLineRange incidences(const Corner3D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#190
```

### incidences

```cpp
public IncidentSurfaceRange incidences(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#225
```

### incidences

```cpp
public IncidentBlockRange incidences(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#262
```

### nb_internal_corners

```cpp
public index_t nb_internal_corners(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#650
```

### internal_corners

```cpp
public InternalCornerRange internal_corners(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#354
```

### nb_internal_lines

```cpp
public index_t nb_internal_lines(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#655
```

### internal_lines

```cpp
public InternalLineRange internal_lines(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#298
```

### nb_internal_corners

```cpp
public index_t nb_internal_corners(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#660
```

### internal_corners

```cpp
public InternalCornerRange internal_corners(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#386
```

### nb_internal_lines

```cpp
public index_t nb_internal_lines(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#665
```

### internal_lines

```cpp
public InternalLineRange internal_lines(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#317
```

### nb_internal_surfaces

```cpp
public index_t nb_internal_surfaces(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#670
```

### internal_surfaces

```cpp
public InternalSurfaceRange internal_surfaces(const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#412
```

### nb_embedding_surfaces

```cpp
public index_t nb_embedding_surfaces(const Corner3D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#675
```

### embedding_surfaces

```cpp
public EmbeddingSurfaceRange embedding_surfaces(const Corner3D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#457
```

### nb_embedding_surfaces

```cpp
public index_t nb_embedding_surfaces(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#680
```

### embedding_surfaces

```cpp
public EmbeddingSurfaceRange embedding_surfaces(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#491
```

### nb_embedding_blocks

```cpp
public index_t nb_embedding_blocks(const Corner3D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#685
```

### embedding_blocks

```cpp
public EmbeddingBlockRange embedding_blocks(const Corner3D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#517
```

### nb_embedding_blocks

```cpp
public index_t nb_embedding_blocks(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#690
```

### embedding_blocks

```cpp
public EmbeddingBlockRange embedding_blocks(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#531
```

### nb_embedding_blocks

```cpp
public index_t nb_embedding_blocks(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#695
```

### embedding_blocks

```cpp
public EmbeddingBlockRange embedding_blocks(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#562
```

### model_boundary_items

```cpp
public ItemSurfaceRange model_boundary_items(const ModelBoundary3D & boundary)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#644
```

### is_closed

```cpp
public bool is_closed(const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#700
```

### is_closed

```cpp
public bool is_closed(const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#705
```

### is_boundary

```cpp
public bool is_boundary(const Corner3D & corner, const Line3D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#710
```

### is_boundary

```cpp
public bool is_boundary(const Line3D & line, const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#715
```

### is_boundary

```cpp
public bool is_boundary(const Surface3D & surface, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#720
```

### is_internal

```cpp
public bool is_internal(const Corner3D & corner, const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#726
```

### is_internal

```cpp
public bool is_internal(const Line3D & line, const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#732
```

### is_internal

```cpp
public bool is_internal(const Corner3D & corner, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#737
```

### is_internal

```cpp
public bool is_internal(const Line3D & line, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#742
```

### is_internal

```cpp
public bool is_internal(const Surface3D & surface, const Block3D & block)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#747
```

### is_model_boundary_item

```cpp
public bool is_model_boundary_item(const Surface3D & surface, const ModelBoundary3D & boundary)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#753
```

### bounding_box

```cpp
public BoundingBox3D bounding_box()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/brep.cpp#759
```

 Compute the bounding box from component meshes

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/model/representation/core/brep.h#400
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/model/representation/core/brep.h#406
```



