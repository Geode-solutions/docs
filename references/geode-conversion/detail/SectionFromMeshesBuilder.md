# class SectionFromMeshesBuilder

```cpp
Defined at ../include/geode/conversion/model/detail/section_from_meshes_builder.h#29
```

```cpp
Inherits from ModelBuilderFromMeshes<Section>
```



## Functions

### SectionFromMeshesBuilder

```cpp
public void SectionFromMeshesBuilder(Section & brep, absl::Span<const std::reference_wrapper<const PointSet2D> > corners, absl::Span<const std::reference_wrapper<const EdgedCurve2D> > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh2D> > surfaces)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/section_from_meshes_builder.cpp#46
```

### ~SectionFromMeshesBuilder

```cpp
public void ~SectionFromMeshesBuilder()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/section_from_meshes_builder.cpp#59
```

### build_section

```cpp
public ModelMappings build_section()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/section_from_meshes_builder.cpp#63
```



