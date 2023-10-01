# class SolidPathFinder

```cpp
Defined at ../include/geode/common/cutter/solid/path_finder.h#78
```

 The objective of this class is to find paths inside TetrahedralSolid3D. As an example, this class is able to find a rectilinear path between two vertices. This class may be derived for custom path findings.



## Functions

### SolidPathFinder

```cpp
public void SolidPathFinder(const TetrahedralSolid3D & solid, index_t begin, index_t end)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#217
```

 Find a rectilinear path between two vertices.

**begin** [in] Index of the cut starting vertex

**end** [in] Index of the cut ending vertex.

### find_path

```cpp
public std::vector<SolidPath> find_path()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#226
```

### edge_exist

```cpp
protected bool edge_exist()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#271
```

### stop_propagation

```cpp
protected bool stop_propagation(const SolidPath & path)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#259
```

### adjacent_opposite_vertex

```cpp
protected PolyhedronVertex adjacent_opposite_vertex(const PolyhedronFacet & facet)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#289
```

### opposite_facet

```cpp
protected PolyhedronFacet opposite_facet(const PolyhedronVertex & vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#299
```

### opposite_vertex

```cpp
protected PolyhedronVertex opposite_vertex(const PolyhedronFacet & facet)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#305
```

### facet_triangle

```cpp
protected Triangle3D facet_triangle(const PolyhedronFacet & facet)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#315
```

### edge_segment

```cpp
protected Segment edge_segment(index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#323
```

### find_path_intersection_with_facet

```cpp
protected absl::optional<SolidPath> find_path_intersection_with_facet(const PolyhedronFacet & facet)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#329
```

### find_first_path

```cpp
protected SolidPath find_first_path()
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#343
```

### find_next_path

```cpp
protected SolidPath find_next_path(index_t current)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#349
```

### find_next_facet

```cpp
protected SolidPath find_next_facet(const PolyhedronFacet & facet_from)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#368
```

### next_intersection

```cpp
protected SolidPath next_intersection(const SolidPath & previous_path, const SolidPath & current_path)
```

```cpp
Defined at /github/workspace/src/geode/common/cutter/solid/path_finder.cpp#390
```

### solid

```cpp
protected const TetrahedralSolid3D & solid()
```

```cpp
Defined at ../include/geode/common/cutter/solid/path_finder.h#119
```

### begin

```cpp
protected index_t begin()
```

```cpp
Defined at ../include/geode/common/cutter/solid/path_finder.h#124
```

### end

```cpp
protected index_t end()
```

```cpp
Defined at ../include/geode/common/cutter/solid/path_finder.h#129
```

### begin_to_end

```cpp
protected const Segment3D & begin_to_end()
```

```cpp
Defined at ../include/geode/common/cutter/solid/path_finder.h#134
```



