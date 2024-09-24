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

# class BRep


 A BRep (for Boundary Representation) is a 3D model composed of Corners, Lines, Surfaces and Blocks. This class provides classes for range-based iteration on Component boundaries and incidences.**extends** **extends** **extends** **extends** **extends** **extends** **extends** **extends** **extends** 



```cpp
Inherits from Topology, Corners3D, Lines3D, Surfaces3D, Blocks3D, ModelBoundaries3D, CornerCollections3D, LineCollections3D, SurfaceCollections3D, BlockCollections3D, Identifier
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

ItemCornerRange

ItemLineRange

ItemSurfaceRange

ItemBlockRange



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


### clone

```cpp
public BRep clone()
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


### corner_collection_items

```cpp
public ItemCornerRange corner_collection_items(const CornerCollection3D & collection)
```


### line_collection_items

```cpp
public ItemLineRange line_collection_items(const LineCollection3D & collection)
```


### surface_collection_items

```cpp
public ItemSurfaceRange surface_collection_items(const SurfaceCollection3D & collection)
```


### block_collection_items

```cpp
public ItemBlockRange block_collection_items(const BlockCollection3D & collection)
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


### is_corner_collection_item

```cpp
public bool is_corner_collection_item(const Corner3D & surface, const CornerCollection3D & boundary)
```


### is_line_collection_item

```cpp
public bool is_line_collection_item(const Line3D & surface, const LineCollection3D & boundary)
```


### is_surface_collection_item

```cpp
public bool is_surface_collection_item(const Surface3D & surface, const SurfaceCollection3D & boundary)
```


### is_block_collection_item

```cpp
public bool is_block_collection_item(const Block3D & surface, const BlockCollection3D & boundary)
```


### bounding_box

```cpp
public BoundingBox bounding_box()
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
```




