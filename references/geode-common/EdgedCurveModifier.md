# class EdgedCurveModifier

# class EdgedCurveModifier

```cpp
Defined at ../include/geode/common/modifier/edged_curve/edged_curve_modifier.h#22
```

```cpp
Inherits from VerticesModifier
```



## Functions

### EdgedCurveModifier

```cpp
public void EdgedCurveModifier<dimension>(const EdgedCurve<dimension> & curve, EdgedCurveBuilder<dimension> & builder)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#247
```

### EdgedCurveModifier

```cpp
public void EdgedCurveModifier<dimension>(EdgedCurveModifier<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#255
```

### ~EdgedCurveModifier

```cpp
public void ~EdgedCurveModifier<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#263
```

### is_edge_active

```cpp
public bool is_edge_active(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#275
```

### collapse_edge

```cpp
public index_t collapse_edge(index_t edge_id, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#282
```

 Collapse an edge.

**edge_id** [in] Index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

**return** the index of the collapse vertex.

### split_edge

```cpp
public index_t split_edge(index_t edge_id, const Point<dimension> & point)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#289
```

 Split an edge.

**edge_id** [in] Index of the edge to split.

**point** [in] Coordinates of the new point.

**return** the index of the new vertex.

### clean_edges

```cpp
public int clean_edges()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#303
```

 Clean up the mesh removing inactive edges

**return** old2new mappings for edges

### clean_vertices

```cpp
public int clean_vertices()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#309
```

 Clean up the mesh removing isolated vertices

**return** old2new mappings for vertices

### curve

```cpp
protected const EdgedCurve<dimension> & curve()
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/edged_curve/edged_curve_modifier.cpp#268
```

### clean

```cpp
public std::tuple<std::vector<index_t>, std::vector<index_t> > clean()
```

 Clean up the mesh removing inactive edges, isolated vertices.

**return** old2new mappings for edges and vertices.



# class EdgedCurveModifier

