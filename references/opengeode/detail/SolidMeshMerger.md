# class SolidMeshMerger


```cpp
```cpp
Inherits from VertexMerger<SolidMesh<3U> >
```
```



# class SolidMeshMerger


```cpp
```cpp
Inherits from VertexMerger<SolidMesh<dimension> >
```
```



## Records

PolyhedronOrigin



## Functions

### SolidMeshMerger

```cpp
```cpp
public void SolidMeshMerger<dimension>(absl::Span<const std::reference_wrapper<const SolidMesh<dimension> > > solids, double epsilon)
```
```


### ~SolidMeshMerger

```cpp
```cpp
public void ~SolidMeshMerger<dimension>()
```
```


### merge

```cpp
```cpp
public std::unique_ptr<SolidMesh<dimension> > merge()
```
```


### polyhedron_in_merged

```cpp
```cpp
public index_t polyhedron_in_merged(index_t solid, index_t polyhedron)
```
```


### polyhedron_origins

```cpp
```cpp
public const PolyhedronOrigins & polyhedron_origins(index_t polyhedron)
```
```




