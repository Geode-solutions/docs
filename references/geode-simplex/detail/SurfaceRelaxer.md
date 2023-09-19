# class SurfaceRelaxer


## Records

ElementStamp

EdgeData

PolygonData

SwapingData



## Functions

### SurfaceRelaxer

```cpp
```cpp
public void SurfaceRelaxer<Model>(const Model & model, ModelModifier & modifier, const Surface<dimension> & surface, const SurfaceRelaxerOptions<dimension> & options)
```
```


### ~SurfaceRelaxer

```cpp
```cpp
public void ~SurfaceRelaxer<Model>()
```
```


### relax

```cpp
```cpp
public void relax()
```
```


### save

```cpp
```cpp
public void save()
```
```


### is_fixed

```cpp
```cpp
protected _Bool is_fixed(index_t vertex)
```
```


### model

```cpp
```cpp
protected const Model & model()
```
```


### surface

```cpp
```cpp
protected const Surface<dimension> & surface()
```
```


### mesh

```cpp
```cpp
protected const SurfaceMesh<dimension> & mesh()
```
```


### optimal_point

```cpp
```cpp
public Point2D optimal_point(const PolygonsAroundVertex & polygons)
```
```


### optimal_point

```cpp
```cpp
public Point2D optimal_point(const Point2D & point0, const Point2D & point1)
```
```


### compute_angles

```cpp
```cpp
public std::pair<double, double> compute_angles(const PolygonData & data)
```
```




