# class VertexMerger

# class VertexMerger

# class VertexMerger

# class VertexMerger

# class VertexMerger

# class VertexMerger


## Records

VertexOrigin



## Functions

### vertex_in_merged

```cpp
```cpp
public index_t vertex_in_merged(index_t mesh, index_t vertex)
```
```


### vertex_origins

```cpp
```cpp
public const VertexOrigins & vertex_origins(index_t vertex)
```
```


### VertexMerger

```cpp
```cpp
protected void VertexMerger<Mesh>(absl::Span<const std::reference_wrapper<const Mesh> > meshes, double epsilon)
```
```


### ~VertexMerger

```cpp
```cpp
protected void ~VertexMerger<Mesh>()
```
```


### meshes

```cpp
```cpp
protected absl::Span<const std::reference_wrapper<const Mesh> > meshes()
```
```


### mesh

```cpp
```cpp
protected const Mesh & mesh()
```
```


### steal_mesh

```cpp
```cpp
protected std::unique_ptr<Mesh> steal_mesh()
```
```


### builder

```cpp
```cpp
protected Builder & builder()
```
```


### create_points

```cpp
```cpp
protected void create_points()
```
```



