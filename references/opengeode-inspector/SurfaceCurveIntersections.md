# class SurfaceCurveIntersections

# class SurfaceCurveIntersections

Class for inspecting the intersections of TriangulatedSurfacees

## Functions

### SurfaceCurveIntersections

```cpp
public void SurfaceCurveIntersections<dimension>(const SurfaceCurveIntersections<dimension> & )
```

### operator=

```cpp
public SurfaceCurveIntersections<dimension> & operator=(const SurfaceCurveIntersections<dimension> & )
```

### SurfaceCurveIntersections

```cpp
public void SurfaceCurveIntersections<dimension>(const TriangulatedSurface<dimension> & surface, const EdgedCurve<dimension> & curve)
```

### SurfaceCurveIntersections

```cpp
public void SurfaceCurveIntersections<dimension>(const TriangulatedSurface<dimension> & mesh, const EdgedCurve<dimension> & curve, bool verbose)
```

### ~SurfaceCurveIntersections

```cpp
public void ~SurfaceCurveIntersections<dimension>()
```

### meshes_have_intersections

```cpp
public bool meshes_have_intersections()
```

### nb_intersecting_elements_pair

```cpp
public index_t nb_intersecting_elements_pair()
```

### intersecting_elements

```cpp
public std::vector<std::pair<index_t, index_t> > intersecting_elements()
```

# class SurfaceCurveIntersections
