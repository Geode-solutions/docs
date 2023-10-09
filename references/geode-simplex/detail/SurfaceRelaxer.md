# class SurfaceRelaxer

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#44
```

## Records

ElementStamp

EdgeData

PolygonData

SwapingData



## Functions

### SurfaceRelaxer

```cpp
public void SurfaceRelaxer<Model>(const Model & model, ModelModifier & modifier, const Surface<dimension> & surface, const SurfaceRelaxerOptions<dimension> & options)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#115
```

### ~SurfaceRelaxer

```cpp
public void ~SurfaceRelaxer<Model>()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#148
```

### relax

```cpp
public void relax()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#158
```

### save

```cpp
public void save()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#178
```

### is_fixed

```cpp
protected bool is_fixed(index_t vertex)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#194
```

### model

```cpp
protected const Model & model()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#199
```

### surface

```cpp
protected const Surface<dimension> & surface()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#204
```

### mesh

```cpp
protected const SurfaceMesh<dimension> & mesh()
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#209
```

### optimal_point

```cpp
public Point2D optimal_point(const PolygonsAroundVertex & polygons)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#320
```

### optimal_point

```cpp
public Point2D optimal_point(const Point2D & point0, const Point2D & point1)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#341
```

### compute_angles

```cpp
public std::pair<double, double> compute_angles(const PolygonData & data)
```

```cpp
Defined at ../../include/geode/simplex/private/surface/common/private/relaxer.h#715
```



