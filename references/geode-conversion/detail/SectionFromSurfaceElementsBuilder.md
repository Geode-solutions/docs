# class SectionFromSurfaceElementsBuilder

Class to convert a SurfaceMesh2D into a Section.

```cpp
Inherits from WireframeBuilderFromOneMesh<Section, SurfaceMesh2D>
```

## Functions

### SectionFromSurfaceElementsBuilder

```cpp
public void SectionFromSurfaceElementsBuilder(Section & model, SurfaceMesh2D & surface, Span corner_vertices, Span line_edges)
```

### ~SectionFromSurfaceElementsBuilder

```cpp
public void ~SectionFromSurfaceElementsBuilder()
```

### build_section_with_surface_mesh

```cpp
public pair build_section_with_surface_mesh()
```

Builds a Section with meshed Surfaces. This build uses both the surface adjacencies and the given elements to determine the topological components of the resulting Section.
