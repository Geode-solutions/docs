# class SurfaceCurveIntersections

# class SurfaceCurveIntersections

```cpp
Defined at ../include/geode/inspector/criterion/intersections/surface_curve_intersections.h#44
```

 Class for inspecting the intersections of TriangulatedSurfacees



## Functions

### SurfaceCurveIntersections

```cpp
public void SurfaceCurveIntersections<dimension>(const SurfaceCurveIntersections<dimension> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/intersections/surface_curve_intersections.h#46
```

### operator=

```cpp
public SurfaceCurveIntersections<dimension> & operator=(const SurfaceCurveIntersections<dimension> & )
```

```cpp
Defined at ../include/geode/inspector/criterion/intersections/surface_curve_intersections.h#46
```

### SurfaceCurveIntersections

```cpp
public void SurfaceCurveIntersections<dimension>(const TriangulatedSurface<dimension> & surface, const EdgedCurve<dimension> & curve)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/intersections/surface_curve_intersections.cpp#286
```

### SurfaceCurveIntersections

```cpp
public void SurfaceCurveIntersections<dimension>(const TriangulatedSurface<dimension> & mesh, const EdgedCurve<dimension> & curve, bool verbose)
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/intersections/surface_curve_intersections.cpp#294
```

### ~SurfaceCurveIntersections

```cpp
public void ~SurfaceCurveIntersections<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/intersections/surface_curve_intersections.cpp#303
```

### meshes_have_intersections

```cpp
public bool meshes_have_intersections()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/intersections/surface_curve_intersections.cpp#308
```

### nb_intersecting_elements_pair

```cpp
public index_t nb_intersecting_elements_pair()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/intersections/surface_curve_intersections.cpp#315
```

### intersecting_elements

```cpp
public std::vector<std::pair<index_t, index_t> > intersecting_elements()
```

```cpp
Defined at /github/workspace/src/geode/inspector/criterion/intersections/surface_curve_intersections.cpp#323
```



# class SurfaceCurveIntersections

