# class BRepFromMeshesBuilder


```cpp
```cpp
Inherits from ModelBuilderFromMeshes<BRep>
```
```



## Functions

### BRepFromMeshesBuilder

```cpp
```cpp
public void BRepFromMeshesBuilder(BRep & brep, absl::Span<const std::reference_wrapper<const PointSet3D> > corners, absl::Span<const std::reference_wrapper<const EdgedCurve3D> > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh3D> > surfaces)
```
```


### ~BRepFromMeshesBuilder

```cpp
```cpp
public void ~BRepFromMeshesBuilder()
```
```


### build_brep_without_blocks

```cpp
```cpp
public ModelMappings build_brep_without_blocks()
```
```


### build_brep_with_blocks

```cpp
```cpp
public ModelMappings build_brep_with_blocks()
```
```




