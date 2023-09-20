# class EdgedCurveMerger


```cpp
Inherits from VertexMerger<EdgedCurve<3U> >
```



# class EdgedCurveMerger


```cpp
Inherits from VertexMerger<EdgedCurve<2U> >
```



# class EdgedCurveMerger


```cpp
Inherits from VertexMerger<EdgedCurve<dimension> >
```



## Records

EdgeOrigin



## Functions

### EdgedCurveMerger

```cpp
public void EdgedCurveMerger<dimension>(absl::Span<const std::reference_wrapper<const EdgedCurve<dimension> > > curves, double epsilon)
```


### ~EdgedCurveMerger

```cpp
public void ~EdgedCurveMerger<dimension>()
```


### merge

```cpp
public std::unique_ptr<EdgedCurve<dimension> > merge()
```


### edge_in_merged

```cpp
public index_t edge_in_merged(index_t curve, index_t edge)
```


### edge_origins

```cpp
public const EdgeOrigins & edge_origins(index_t edge)
```




