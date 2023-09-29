# class SectionFromSurfaceElementsBuilder

```cpp
Defined at ../include/geode/conversion/model/detail/section_from_surface_builder.h#29
```

 Class to convert a SurfaceMesh2D into a Section.



```cpp
Inherits from WireframeBuilderFromOneMesh<Section, SurfaceMesh2D>
```



## Functions

### SectionFromSurfaceElementsBuilder

```cpp
public void SectionFromSurfaceElementsBuilder(Section & model, SurfaceMesh2D & surface, Span corner_vertices, Span line_edges)
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/section_from_surface_builder.cpp#143
```

### ~SectionFromSurfaceElementsBuilder

```cpp
public void ~SectionFromSurfaceElementsBuilder()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/section_from_surface_builder.cpp#156
```

### build_section_with_surface_mesh

```cpp
public pair build_section_with_surface_mesh()
```

```cpp
Defined at /github/workspace/src/geode/conversion/model/section_from_surface_builder.cpp#161
```

 Builds a Section with meshed Surfaces. This build uses both the surface adjacencies and the given elements to determine the topological components of the resulting Section.



