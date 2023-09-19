# class EdgedCurveMerger


```cpp
```cpp
Inherits from VertexMerger<EdgedCurve<3U> >
```
```



# class EdgedCurveMerger


```cpp
```cpp
Inherits from VertexMerger<EdgedCurve<2U> >
```
```



# class EdgedCurveMerger


```cpp
```cpp
Inherits from VertexMerger<EdgedCurve<dimension> >
```
```



## Records

EdgeOrigin



## Functions

### EdgedCurveMerger

```cpp
```cpp
public void EdgedCurveMerger<dimension>(absl::Span<const std::reference_wrapper<const EdgedCurve<dimension> > > curves, double epsilon)
```
```


### ~EdgedCurveMerger

```cpp
```cpp
public void ~EdgedCurveMerger<dimension>()
```
```


### merge

```cpp
```cpp
public std::unique_ptr<EdgedCurve<dimension> > merge()
```
```


### edge_in_merged

```cpp
```cpp
public index_t edge_in_merged(index_t curve, index_t edge)
```
```


### edge_origins

```cpp
```cpp
public const EdgeOrigins & edge_origins(index_t edge)
```
```




