# class RayTracing3D

```cpp
Defined at ../../include/geode/mesh/helpers/ray_tracing.h#44
```

## Records

PolygonDistance

Impl



## Functions

### RayTracing3D

```cpp
public void RayTracing3D(const SurfaceMesh3D & mesh, const Ray3D & ray)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/ray_tracing.cpp#309
```

### RayTracing3D

```cpp
public void RayTracing3D(const SurfaceMesh3D & mesh, const InfiniteLine3D & infinite_line)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/ray_tracing.cpp#314
```

### RayTracing3D

```cpp
public void RayTracing3D(RayTracing3D && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/ray_tracing.cpp#320
```

### ~RayTracing3D

```cpp
public void ~RayTracing3D()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/ray_tracing.cpp#325
```

### closest_polygon

```cpp
public absl::optional<PolygonDistance> closest_polygon()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/ray_tracing.cpp#327
```

### closest_polygons

```cpp
public absl::optional<absl::FixedArray<PolygonDistance> > closest_polygons(index_t size)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/ray_tracing.cpp#333
```

### all_intersections

```cpp
public vector all_intersections()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/ray_tracing.cpp#339
```

### operator()

```cpp
public bool operator()(index_t polygon_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/ray_tracing.cpp#345
```



