# class EdgedCurve

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#192
```

```cpp
Inherits from Graph, CoordinateReferenceSystemManagers<2U>
```



# class EdgedCurve

```cpp
Defined at ../../include/geode/mesh/core/edged_curve.h#44
```

```cpp
Inherits from Graph, CoordinateReferenceSystemManagers<dimension>
```



## Functions

### ~EdgedCurve

```cpp
public void ~EdgedCurve<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#90
```

### create

```cpp
public std::unique_ptr<EdgedCurve<dimension> > create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#95
```

### create

```cpp
public std::unique_ptr<EdgedCurve<dimension> > create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#102
```

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#109
```

### clone

```cpp
public std::unique_ptr<EdgedCurve<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#157
```

### edge_length

```cpp
public double edge_length(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#115
```

### edge_barycenter

```cpp
public Point<dimension> edge_barycenter(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#123
```

### segment

```cpp
public Segment<dimension> segment(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#178
```

### texture_manager

```cpp
public TextureManager1D texture_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#186
```

### bounding_box

```cpp
public BoundingBox<dimension> bounding_box()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#167
```

 Compute the bounding box from mesh vertices

### EdgedCurve

```cpp
protected void EdgedCurve<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#66
```

### EdgedCurve

```cpp
protected void EdgedCurve<dimension>(EdgedCurve<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#71
```

### operator=

```cpp
protected EdgedCurve<dimension> & operator=(EdgedCurve<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#79
```



# class EdgedCurve

```cpp
Defined at /github/workspace/src/geode/mesh/core/edged_curve.cpp#193
```

```cpp
Inherits from Graph, CoordinateReferenceSystemManagers<3U>
```



