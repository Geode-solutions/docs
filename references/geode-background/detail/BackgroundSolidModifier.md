# class BackgroundSolidModifier

```cpp
Defined at ../include/geode/background/solid/private/background_solid_modifier.h#24
```

```cpp
Inherits from BackgroundSolidBuilder, TetrahedralSolidModifier
```



## Functions

### BackgroundSolidModifier

```cpp
public void BackgroundSolidModifier(BackgroundSolid & mesh)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#178
```

### ~BackgroundSolidModifier

```cpp
public void ~BackgroundSolidModifier()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#187
```

### split_tetrahedron

```cpp
public SolidSplitInfo split_tetrahedron(index_t tetrahedron_id, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#191
```

### split_facet

```cpp
public SolidSplitInfo split_facet(const PolyhedronFacet & facet, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#198
```

### split_edge

```cpp
public SolidSplitEdgeInfo split_edge(index_t edge_id, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#205
```

### split_edge

```cpp
public SolidSplitEdgeInfo split_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#212
```

### collapse_edge

```cpp
public SolidCollapseEdgeInfo collapse_edge(index_t edge_id, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#219
```

### collapse_edge

```cpp
public SolidCollapseEdgeInfo collapse_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#226
```

### swap_facet

```cpp
public SolidSwapFacetInfo swap_facet(const PolyhedronFacet & facet)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#233
```

### swap_edge

```cpp
public SolidSwapEdgeInfo swap_edge(const PolyhedronFacetEdge & edge, index_t apex)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#239
```

### set_updated_vertex

```cpp
public void set_updated_vertex(const VertexMultiMapping & mapping)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#251
```

### clean_background_solid

```cpp
public void clean_background_solid()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid_modifier.cpp#246
```



