# class BRepFromMeshesBuilder

```cpp
Defined at ../include/geode/conversion/model/detail/brep_from_meshes_builder.h#27
```

```cpp
Inherits from ModelBuilderFromMeshes<BRep>
```



## Functions

### BRepFromMeshesBuilder

```cpp
public void BRepFromMeshesBuilder(BRep & brep, absl::Span<const std::reference_wrapper<const PointSet3D> > corners, absl::Span<const std::reference_wrapper<const EdgedCurve3D> > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh3D> > surfaces)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/brep_from_meshes_builder.cpp#54
```

### ~BRepFromMeshesBuilder

```cpp
public void ~BRepFromMeshesBuilder()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/brep_from_meshes_builder.cpp#66
```

### build_brep_without_blocks

```cpp
public ModelMappings build_brep_without_blocks()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/brep_from_meshes_builder.cpp#70
```

### build_brep_with_blocks

```cpp
public ModelMappings build_brep_with_blocks()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/brep_from_meshes_builder.cpp#75
```



