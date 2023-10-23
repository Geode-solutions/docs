# class ModelBuilderFromMeshes

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

### build_wireframe_step

```cpp
public void build_wireframe_step()
```

### build_surfaces

```cpp
public void build_surfaces()
```

### mappings

```cpp
public ModelMappings mappings()
```

### is_corner

```cpp
public bool is_corner(index_t vertex)
```

### ModelBuilderFromMeshes

```cpp
protected void ModelBuilderFromMeshes<Model>(Model & model, absl::Span<const std::reference_wrapper<const PointSet<dimension> > > corners, absl::Span<const std::reference_wrapper<const EdgedCurve<dimension> > > curves, absl::Span<const std::reference_wrapper<const SurfaceMesh<dimension> > > surfaces)
```

# class ModelBuilderFromMeshes

# class ModelBuilderFromMeshes
