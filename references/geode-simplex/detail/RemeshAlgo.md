# class RemeshAlgo


## Records

Impl



## Functions

### RemeshAlgo

```cpp
```cpp
protected void RemeshAlgo<dimension>(const Metric<dimension> & metric, absl::Span<const index_t> lock_vertices)
```
```


### ~RemeshAlgo

```cpp
```cpp
protected void ~RemeshAlgo<dimension>()
```
```


### common_output

```cpp
```cpp
protected RemeshedSurface<dimension> common_output()
```
```


### remeshed

```cpp
```cpp
protected const TriangulatedSurface<dimension> & remeshed()
```
```


### remeshed_builder

```cpp
```cpp
protected TriangulatedSurfaceBuilder<dimension> & remeshed_builder()
```
```


### lock_vertices

```cpp
```cpp
protected absl::Span<const index_t> lock_vertices()
```
```


### set_mapping

```cpp
```cpp
protected void set_mapping(std::vector<VertexOrigin> && mapping)
```
```

### add_mapping

```cpp
```cpp
protected void add_mapping(index_t background_vertex, _Bool is_locked)
```
```


### metric

```cpp
```cpp
protected const Metric<dimension> & metric()
```
```


### set_mapping

```cpp
```cpp
public void set_mapping(int && mapping)
```
```




# class RemeshAlgo

# class RemeshAlgo

