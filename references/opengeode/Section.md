# class Section

```cpp
Defined at ../../include/geode/model/representation/core/section.h#59
```

 A Section is a 2D model composed of Corners, Lines, and Surfaces. This class provides classes for range-based iteration on Component boundaries and incidences.**extends** **extends** **extends** **extends** 



```cpp
Inherits from Topology, Corners2D, Lines2D, Surfaces2D, ModelBoundaries2D, Identifier
```



## Records

BoundaryCornerRange

BoundaryLineRange

IncidentLineRange

IncidentSurfaceRange

InternalLineRange

InternalCornerRange

EmbeddingSurfaceRange

ItemLineRange



## Functions

### Section

```cpp
public void Section()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#417
```

### Section

```cpp
public void Section(Section && section)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#419
```

### operator=

```cpp
public Section & operator=(Section && section)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#429
```

### ~Section

```cpp
public void ~Section()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#440
```

### boundaries

```cpp
public BoundaryCornerRange boundaries(const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#81
```

### boundaries

```cpp
public BoundaryLineRange boundaries(const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#119
```

### incidences

```cpp
public IncidentLineRange incidences(const Corner2D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#157
```

### incidences

```cpp
public IncidentSurfaceRange incidences(const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#195
```

### nb_internal_corners

```cpp
public index_t nb_internal_corners(const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#448
```

### internal_corners

```cpp
public InternalCornerRange internal_corners(const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#280
```

### nb_internal_lines

```cpp
public index_t nb_internal_lines(const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#453
```

### internal_lines

```cpp
public InternalLineRange internal_lines(const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#235
```

### nb_embedding_surfaces

```cpp
public index_t nb_embedding_surfaces(const Corner2D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#458
```

### embedding_surfaces

```cpp
public EmbeddingSurfaceRange embedding_surfaces(const Corner2D & corner)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#326
```

### nb_embedding_surfaces

```cpp
public index_t nb_embedding_surfaces(const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#463
```

### embedding_surfaces

```cpp
public EmbeddingSurfaceRange embedding_surfaces(const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#332
```

### model_boundary_items

```cpp
public ItemLineRange model_boundary_items(const ModelBoundary2D & boundary)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#442
```

### is_closed

```cpp
public bool is_closed(const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#468
```

### is_boundary

```cpp
public bool is_boundary(const Corner2D & corner, const Line2D & line)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#473
```

### is_boundary

```cpp
public bool is_boundary(const Line2D & line, const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#479
```

### is_internal

```cpp
public bool is_internal(const Corner2D & corner, const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#485
```

### is_internal

```cpp
public bool is_internal(const Line2D & line, const Surface2D & surface)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#491
```

### is_model_boundary_item

```cpp
public bool is_model_boundary_item(const Line2D & line, const ModelBoundary2D & boundary)
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#497
```

### bounding_box

```cpp
public BoundingBox2D bounding_box()
```

```cpp
Defined at /github/workspace/src/geode/model/representation/core/section.cpp#503
```

 Compute the bounding box from component meshes

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/model/representation/core/section.h#281
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/model/representation/core/section.h#287
```



