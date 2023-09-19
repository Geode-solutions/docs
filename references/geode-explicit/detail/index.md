# namespace detail



## Records

* [ModelerMetric](ModelerMetric.md)


## Functions

### build_solid

```cpp
int build_solid(const BoundingBox3D & bbox, const Metric3D & metric)
```


### compute_grid

```cpp
int compute_grid(const BoundingBox<dimension> & bbox, double cell_size, _Bool adapt_bbox_to_cell_size)
```

### build_surface

```cpp
int build_surface(const BoundingBox2D & bbox, const Metric2D & metric)
```


### compute_grid

```cpp
std::unique_ptr<RegularGrid<dimension> > compute_grid(const BoundingBox<dimension> & bbox, double cell_size, _Bool adapt_bbox_to_cell_size)
```




