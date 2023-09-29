# class ModelBuilderFromMeshes

```cpp
Defined at ../include/geode/conversion/model/detail/model_builder_from_meshes.h#27
```

```cpp
Inherits from CornersLinesBuilder<Model>
```



## Records

Impl



## Functions

### ~ModelBuilderFromMeshes

```cpp
public void ~ModelBuilderFromMeshes<Model>()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/model_builder_from_meshes.cpp#836
```

### build_wireframe_step

```cpp
public void build_wireframe_step()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/model_builder_from_meshes.cpp#841
```

### build_surfaces

```cpp
public void build_surfaces()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/model_builder_from_meshes.cpp#847
```

### mappings

```cpp
public ModelMappings mappings()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/model_builder_from_meshes.cpp#853
```

### is_corner

```cpp
public bool is_corner(index_t vertex)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/model_builder_from_meshes.cpp#859
```

### ModelBuilderFromMeshes

```cpp
protected void ModelBuilderFromMeshes<Model>(Model & model, absl::Span<const std::reference_wrapper<const PointSet<dimension> > > corners, absl::Span<const std::reference_wrapper<const EdgedCurve<dimension> > > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/model_builder_from_meshes.cpp#820
```



# class ModelBuilderFromMeshes

# class ModelBuilderFromMeshes

