# class SurfaceMeshMerger


```cpp
Inherits from VertexMerger<SurfaceMesh<2U> >
```



# class SurfaceMeshMerger


```cpp
Inherits from VertexMerger<SurfaceMesh<dimension> >
```



## Records

PolygonOrigin



## Functions

### SurfaceMeshMerger

```cpp
public void SurfaceMeshMerger<dimension>(absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces, double epsilon)
```


### ~SurfaceMeshMerger

```cpp
public void ~SurfaceMeshMerger<dimension>()
```


### merge

```cpp
public int merge()
```


### polygon_in_merged

```cpp
public index_t polygon_in_merged(index_t surface, index_t polygon)
```


### polygon_origins

```cpp
public const int & polygon_origins(index_t polygon)
```




# class SurfaceMeshMerger


```cpp
Inherits from VertexMerger<SurfaceMesh<3U> >
```



