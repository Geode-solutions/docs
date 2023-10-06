# class BackgroundBRepModifier

```cpp
Defined at ../include/geode/background/brep/private/background_brep_modifier.h#24
```

```cpp
Inherits from BackgroundBRepBuilder, BRepGeometricModifier
```



## Functions

### BackgroundBRepModifier

```cpp
public void BackgroundBRepModifier(BackgroundBRep & background_brep)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#181
```

### ~BackgroundBRepModifier

```cpp
public void ~BackgroundBRepModifier()
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#189
```

### split_tetrahedron

```cpp
public BRepSplitTetrahedronInfo split_tetrahedron(const Block3D & block, index_t tetrahedron, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#193
```

### split_facet

```cpp
public BRepSplitTriangleInfo split_facet(const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#200
```

### split_triangle

```cpp
public BRepSplitTriangleInfo split_triangle(const Surface3D & surface, index_t triangle, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#207
```

### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#214
```

### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#221
```

### split_edge

```cpp
public BRepSplitPolygonEdgeInfo split_edge(const Line3D & line, index_t edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#228
```

### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#235
```

### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#242
```

### collapse_edge

```cpp
public BRepCollapsePolygonEdgeInfo collapse_edge(const Line3D & line, index_t edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#249
```

### clean_background_brep

```cpp
public CleanMappings clean_background_brep()
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_modifier.cpp#256
```



