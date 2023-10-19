# class SurfacePathFinder


 The objective of this class is to find paths inside TrianguledSurface< dimension >. This class may be derived for custom path findings.



## Functions

### SurfacePathFinder

```cpp
public void SurfacePathFinder<dimension>(const SurfacePathFinder<dimension> & )
```


### operator=

```cpp
public SurfacePathFinder<dimension> & operator=(const SurfacePathFinder<dimension> & )
```


### SurfacePathFinder

```cpp
public void SurfacePathFinder<dimension>(SurfacePathFinder<dimension> && )
```


### operator=

```cpp
public SurfacePathFinder<dimension> & operator=(SurfacePathFinder<dimension> && )
```


### ~SurfacePathFinder

```cpp
public void ~SurfacePathFinder<dimension>()
```


### SurfacePathFinder

```cpp
protected void SurfacePathFinder<dimension>(const TriangulatedSurface<dimension> & surface)
```


### adjacent_opposite_vertex

```cpp
protected PolygonVertex adjacent_opposite_vertex(const PolygonEdge & edge)
```


### edge_segment

```cpp
protected Segment<dimension> edge_segment(const PolygonEdge & edge)
```


### surface

```cpp
protected const TriangulatedSurface<dimension> & surface()
```




# class SurfacePathFinder

# class SurfacePathFinder

