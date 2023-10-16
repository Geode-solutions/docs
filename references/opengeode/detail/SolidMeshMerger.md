# class SolidMeshMerger


```cpp
Inherits from VertexMerger<SolidMesh<3U> >
```



# class SolidMeshMerger


```cpp
Inherits from VertexMerger<SolidMesh<dimension> >
```



## Records

PolyhedronOrigin



## Functions

### SolidMeshMerger

```cpp
public void SolidMeshMerger<dimension>(absl::Span<const std::reference_wrapper<const SolidMesh<dimension> > > solids, double epsilon)
```


### ~SolidMeshMerger

```cpp
public void ~SolidMeshMerger<dimension>()
```


### merge

```cpp
public std::unique_ptr<SolidMesh<dimension> > merge()
```


### polyhedron_in_merged

```cpp
public index_t polyhedron_in_merged(index_t solid, index_t polyhedron)
```


### polyhedron_origins

```cpp
public const PolyhedronOrigins & polyhedron_origins(index_t polyhedron)
```




