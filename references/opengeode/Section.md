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

# class Section


 A Section is a 2D model composed of Corners, Lines, and Surfaces. This class provides classes for range-based iteration on Component boundaries and incidences.**extends** **extends** **extends** **extends** **extends** **extends** **extends** 



```cpp
Inherits from Topology, Corners2D, Lines2D, Surfaces2D, ModelBoundaries2D, CornerCollections2D, LineCollections2D, SurfaceCollections2D, Identifier
```



## Records

BoundaryCornerRange

BoundaryLineRange

IncidentLineRange

IncidentSurfaceRange

InternalLineRange

InternalCornerRange

EmbeddingSurfaceRange

ItemCornerRange

ItemLineRange

ItemSurfaceRange



## Functions

### Section

```cpp
public void Section()
```


### Section

```cpp
public void Section(Section && section)
```


### operator=

```cpp
public Section & operator=(Section && section)
```


### ~Section

```cpp
public void ~Section()
```


### clone

```cpp
public Section clone()
```


### boundaries

```cpp
public BoundaryCornerRange boundaries(const Line2D & line)
```


### boundaries

```cpp
public BoundaryLineRange boundaries(const Surface2D & surface)
```


### incidences

```cpp
public IncidentLineRange incidences(const Corner2D & corner)
```


### incidences

```cpp
public IncidentSurfaceRange incidences(const Line2D & line)
```


### nb_internal_corners

```cpp
public index_t nb_internal_corners(const Surface2D & surface)
```


### internal_corners

```cpp
public InternalCornerRange internal_corners(const Surface2D & surface)
```


### nb_internal_lines

```cpp
public index_t nb_internal_lines(const Surface2D & surface)
```


### internal_lines

```cpp
public InternalLineRange internal_lines(const Surface2D & surface)
```


### nb_embedding_surfaces

```cpp
public index_t nb_embedding_surfaces(const Corner2D & corner)
```


### embedding_surfaces

```cpp
public EmbeddingSurfaceRange embedding_surfaces(const Corner2D & corner)
```


### nb_embedding_surfaces

```cpp
public index_t nb_embedding_surfaces(const Line2D & line)
```


### embedding_surfaces

```cpp
public EmbeddingSurfaceRange embedding_surfaces(const Line2D & line)
```


### model_boundary_items

```cpp
public ItemLineRange model_boundary_items(const ModelBoundary2D & boundary)
```


### corner_collection_items

```cpp
public ItemCornerRange corner_collection_items(const CornerCollection2D & collection)
```


### line_collection_items

```cpp
public ItemLineRange line_collection_items(const LineCollection2D & collection)
```


### surface_collection_items

```cpp
public ItemSurfaceRange surface_collection_items(const SurfaceCollection2D & collection)
```


### is_closed

```cpp
public bool is_closed(const Line2D & line)
```


### is_boundary

```cpp
public bool is_boundary(const Corner2D & corner, const Line2D & line)
```


### is_boundary

```cpp
public bool is_boundary(const Line2D & line, const Surface2D & surface)
```


### is_internal

```cpp
public bool is_internal(const Corner2D & corner, const Surface2D & surface)
```


### is_internal

```cpp
public bool is_internal(const Line2D & line, const Surface2D & surface)
```


### is_model_boundary_item

```cpp
public bool is_model_boundary_item(const Line2D & line, const ModelBoundary2D & boundary)
```


### is_corner_collection_item

```cpp
public bool is_corner_collection_item(const Corner2D & surface, const CornerCollection2D & boundary)
```


### is_line_collection_item

```cpp
public bool is_line_collection_item(const Line2D & surface, const LineCollection2D & boundary)
```


### is_surface_collection_item

```cpp
public bool is_surface_collection_item(const Surface2D & surface, const SurfaceCollection2D & boundary)
```


### bounding_box

```cpp
public BoundingBox2D bounding_box()
```


### active_components_bounding_box

```cpp
public BoundingBox2D active_components_bounding_box()
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
```




