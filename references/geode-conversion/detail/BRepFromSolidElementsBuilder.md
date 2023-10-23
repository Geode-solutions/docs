# class BRepFromSolidElementsBuilder

Class that converts a SolidMesh3D into a BRep.

```cpp
Inherits from WireframeBuilderFromOneMesh<BRep, SolidMesh3D>
```

## Records

Impl

## Functions

### BRepFromSolidElementsBuilder

```cpp
public void BRepFromSolidElementsBuilder(BRep & model, SolidMesh3D & solid, Span corner_vertices, Span line_edges, Span surface_facets)
```

### ~BRepFromSolidElementsBuilder

```cpp
public void ~BRepFromSolidElementsBuilder()
```

### build_brep_without_block_mesh

```cpp
public std::pair<VertexIndexMapping, IndexToModelMeshElementsMapping> build_brep_without_block_mesh()
```

Builds a BRep with no mesh in the Blocks. This build uses only the given elements to determine the topological components of the resulting BRep.

### build_brep_with_block_mesh

```cpp
public std::pair<VertexIndexMapping, IndexToBRepMeshElementsMapping> build_brep_with_block_mesh()
```

Builds a BRep with meshed Blocks. This build uses both the solid adjacencies and the given elements to determine the topological components of the resulting BRep.

### is_corner

```cpp
public bool is_corner(index_t vertex)
```
