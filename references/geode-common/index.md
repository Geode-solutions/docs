<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# namespace geode



## Namespaces

* [detail](detail/index.md)
* [internal](internal/index.md)


## Records

* [AnisotropicMetric](AnisotropicMetric.md)
* [AxedAnisotropicGridMetric](AxedAnisotropicGridMetric.md)
* [BRepCollapseEdgeValidity](BRepCollapseEdgeValidity.md)
* [BRepCutter](BRepCutter.md)
* [BRepEdgeTShape](BRepEdgeTShape.md)
* [BRepElementsAfterCollapseEdge](BRepElementsAfterCollapseEdge.md)
* [BRepElementsAfterMovePoint](BRepElementsAfterMovePoint.md)
* [BRepElementsAfterSplitCollapse](BRepElementsAfterSplitCollapse.md)
* [BRepElementsAfterSwapEdge](BRepElementsAfterSwapEdge.md)
* [BRepFacetTShape](BRepFacetTShape.md)
* [BRepGeometricConstraintModifier](BRepGeometricConstraintModifier.md)
* [BRepGeometricModifier](BRepGeometricModifier.md)
* [BRepGridMetric](BRepGridMetric.md)
* [BRepImprovementSimulator](BRepImprovementSimulator.md)
* [BRepInternalDistanceImprovementSimulator](BRepInternalDistanceImprovementSimulator.md)
* [BRepInternalDistanceOptimizer](BRepInternalDistanceOptimizer.md)
* [BRepModifier](BRepModifier.md)
* [BRepMovePointValidity](BRepMovePointValidity.md)
* [BRepOptimizer](BRepOptimizer.md)
* [BRepOrchestrator](BRepOrchestrator.md)
* [BRepSplitEdgeValidity](BRepSplitEdgeValidity.md)
* [BRepSplitTriangleValidity](BRepSplitTriangleValidity.md)
* [BRepSwapEdgeValidity](BRepSwapEdgeValidity.md)
* [BRepSwapFacetValidity](BRepSwapFacetValidity.md)
* [BlockCollapseEdgeValidities](BlockCollapseEdgeValidities.md)
* [BlockElement](BlockElement.md)
* [BlockForbiddenInfos](BlockForbiddenInfos.md)
* [BlockMovePointValidities](BlockMovePointValidities.md)
* [BlockPatchVertices](BlockPatchVertices.md)
* [BlockPathVertices](BlockPathVertices.md)
* [BlockSplitEdgeValidities](BlockSplitEdgeValidities.md)
* [BlockSplitFacetValidities](BlockSplitFacetValidities.md)
* [BlockSwapEdgeValidities](BlockSwapEdgeValidities.md)
* [BlockSwapFacetValidities](BlockSwapFacetValidities.md)
* [CommonCoreLibrary](CommonCoreLibrary.md)
* [CommonCutterModelLibrary](CommonCutterModelLibrary.md)
* [CommonCutterSolidLibrary](CommonCutterSolidLibrary.md)
* [CommonCutterSurfaceLibrary](CommonCutterSurfaceLibrary.md)
* [CommonHelpersLibrary](CommonHelpersLibrary.md)
* [CommonMetricLibrary](CommonMetricLibrary.md)
* [CommonModifierCommonLibrary](CommonModifierCommonLibrary.md)
* [CommonModifierEdgedCurveLibrary](CommonModifierEdgedCurveLibrary.md)
* [CommonModifierGraphLibrary](CommonModifierGraphLibrary.md)
* [CommonModifierModelLibrary](CommonModifierModelLibrary.md)
* [CommonModifierPointSetLibrary](CommonModifierPointSetLibrary.md)
* [CommonModifierSolidLibrary](CommonModifierSolidLibrary.md)
* [CommonModifierSurfaceLibrary](CommonModifierSurfaceLibrary.md)
* [CommonOrchestratorCommonLibrary](CommonOrchestratorCommonLibrary.md)
* [CommonOrchestratorModelLibrary](CommonOrchestratorModelLibrary.md)
* [CommonOrchestratorSolidLibrary](CommonOrchestratorSolidLibrary.md)
* [CommonOrchestratorSurfaceLibrary](CommonOrchestratorSurfaceLibrary.md)
* [ComponentMeshVertexInclusionQuery](ComponentMeshVertexInclusionQuery.md)
* [ConstantMetric](ConstantMetric.md)
* [ConstraintModifier](ConstraintModifier.md)
* [CustomGridMetric](CustomGridMetric.md)
* [CutPatchException](CutPatchException.md)
* [CutPathException](CutPathException.md)
* [EdgeSplit](EdgeSplit.md)
* [EdgedCurveCollapseEdgeValidity](EdgedCurveCollapseEdgeValidity.md)
* [EdgedCurveModifier](EdgedCurveModifier.md)
* [EdgedCurveMovePointValidity](EdgedCurveMovePointValidity.md)
* [EdgedCurveSplitEdgeValidity](EdgedCurveSplitEdgeValidity.md)
* [EdgedCurveTopologicalValidity](EdgedCurveTopologicalValidity.md)
* [EdgesModifier](EdgesModifier.md)
* [FacetSplit](FacetSplit.md)
* [FacetsModifier](FacetsModifier.md)
* [FileLicenseChecker](FileLicenseChecker.md)
* [ForbiddenEdges](ForbiddenEdges.md)
* [ForbiddenFacets](ForbiddenFacets.md)
* [ForbiddenInfos](ForbiddenInfos.md)
* [ForbiddenTriangles](ForbiddenTriangles.md)
* [FrontCycle](FrontCycle.md)
* [FrontEdge](FrontEdge.md)
* [GeometricSolidPath](GeometricSolidPath.md)
* [GeometricSurfacePath](GeometricSurfacePath.md)
* [GraphModifier](GraphModifier.md)
* [GridMetric](GridMetric.md)
* [ImmuableEdges](ImmuableEdges.md)
* [ImmuableVertices](ImmuableVertices.md)
* [InternalDistance](InternalDistance.md)
* [Invalidity](Invalidity.md)
* [IsotropicMetric](IsotropicMetric.md)
* [LineCollapseEdgeValidities](LineCollapseEdgeValidities.md)
* [Mapping](Mapping.md)
* [Metric](Metric.md)
* [ModelCollapseEdgeValidity](ModelCollapseEdgeValidity.md)
* [ModelCollapsePolygonEdgeInfo](ModelCollapsePolygonEdgeInfo.md)
* [ModelElementsAfterCollapseEdge](ModelElementsAfterCollapseEdge.md)
* [ModelElementsAfterSwapEdge](ModelElementsAfterSwapEdge.md)
* [ModelMovePointValidity](ModelMovePointValidity.md)
* [ModelSplitEdgeValidity](ModelSplitEdgeValidity.md)
* [ModelSplitPolygonEdgeInfo](ModelSplitPolygonEdgeInfo.md)
* [ModelSplitTriangleInfo](ModelSplitTriangleInfo.md)
* [ModelSplitTriangleValidity](ModelSplitTriangleValidity.md)
* [ModelSwapEdgeInfo](ModelSwapEdgeInfo.md)
* [ModelSwapEdgeValidity](ModelSwapEdgeValidity.md)
* [ModifiableObjectOrchestrator](ModifiableObjectOrchestrator.md)
* [ModifiableObject](ModifiableObject.md)
* [ModifiedElements](ModifiedElements.md)
* [ModifiedTetrahedron](ModifiedTetrahedron.md)
* [ModifiedTriangle](ModifiedTriangle.md)
* [Modifier](Modifier.md)
* [ModuleLicenseChecker](ModuleLicenseChecker.md)
* [MultiMapping](MultiMapping.md)
* [Orchestrator](Orchestrator.md)
* [PartitionnerParameters](PartitionnerParameters.md)
* [PatchFrontEdge](PatchFrontEdge.md)
* [Path](Path.md)
* [PointSetModifier](PointSetModifier.md)
* [PointsCmp](PointsCmp.md)
* [PointsHash](PointsHash.md)
* [Points](Points.md)
* [PolygonEdgeSplit](PolygonEdgeSplit.md)
* [PolygonEdge](PolygonEdge.md)
* [PolyhedronFacetEdge](PolyhedronFacetEdge.md)
* [PolyhedronFacet](PolyhedronFacet.md)
* [PreviousPaths](PreviousPaths.md)
* [SectionCollapseEdgeValidity](SectionCollapseEdgeValidity.md)
* [SectionElementsAfterCollapseEdge](SectionElementsAfterCollapseEdge.md)
* [SectionElementsAfterSwapEdge](SectionElementsAfterSwapEdge.md)
* [SectionGeometricModifier](SectionGeometricModifier.md)
* [SectionMovePointValidity](SectionMovePointValidity.md)
* [SectionSplitEdgeValidity](SectionSplitEdgeValidity.md)
* [SectionSwapEdgeValidity](SectionSwapEdgeValidity.md)
* [SolidBorderPathFinder](SolidBorderPathFinder.md)
* [SolidCollapseEdgeValidity](SolidCollapseEdgeValidity.md)
* [SolidCutPatchInfo](SolidCutPatchInfo.md)
* [SolidCutPathInfo](SolidCutPathInfo.md)
* [SolidEdgeTShape](SolidEdgeTShape.md)
* [SolidGeometricalValidity](SolidGeometricalValidity.md)
* [SolidGridMetric](SolidGridMetric.md)
* [SolidMovePointValidity](SolidMovePointValidity.md)
* [SolidPatch](SolidPatch.md)
* [SolidPatcher](SolidPatcher.md)
* [SolidPathFinder](SolidPathFinder.md)
* [SolidPath](SolidPath.md)
* [SolidSplitEdgeValidity](SolidSplitEdgeValidity.md)
* [SolidSplitFacetValidity](SolidSplitFacetValidity.md)
* [SolidSplitTetrahedronValidity](SolidSplitTetrahedronValidity.md)
* [SolidSwapEdgeValidity](SolidSwapEdgeValidity.md)
* [SolidSwapFacetValidity](SolidSwapFacetValidity.md)
* [SolidSwapPatchInfo](SolidSwapPatchInfo.md)
* [SolidSwapPathInfo](SolidSwapPathInfo.md)
* [SolidTopologicalValidity](SolidTopologicalValidity.md)
* [SolidVertexTopologicalValidity](SolidVertexTopologicalValidity.md)
* [SplitCollapseEdgeTetrahedraAfter](SplitCollapseEdgeTetrahedraAfter.md)
* [SplitCollapseTetrahedraAfter](SplitCollapseTetrahedraAfter.md)
* [SplitCollapseTrianglesAfter](SplitCollapseTrianglesAfter.md)
* [SplitInfo](SplitInfo.md)
* [SurfaceCollapseEdgeValidities](SurfaceCollapseEdgeValidities.md)
* [SurfaceCollapseEdgeValidity](SurfaceCollapseEdgeValidity.md)
* [SurfaceCutPathException](SurfaceCutPathException.md)
* [SurfaceCutPathInfo](SurfaceCutPathInfo.md)
* [SurfaceEdge](SurfaceEdge.md)
* [SurfaceGeometricalValidity](SurfaceGeometricalValidity.md)
* [SurfaceMovePointValidities](SurfaceMovePointValidities.md)
* [SurfaceMovePointValidity](SurfaceMovePointValidity.md)
* [SurfacePathFinder](SurfacePathFinder.md)
* [SurfacePath](SurfacePath.md)
* [SurfaceSegmentFinder2D](SurfaceSegmentFinder2D.md)
* [SurfaceSegmentFinder3D](SurfaceSegmentFinder3D.md)
* [SurfaceSegmentFinder](SurfaceSegmentFinder.md)
* [SurfaceSplitEdgeValidities](SurfaceSplitEdgeValidities.md)
* [SurfaceSplitEdgeValidity](SurfaceSplitEdgeValidity.md)
* [SurfaceSplitTriangleValidities](SurfaceSplitTriangleValidities.md)
* [SurfaceSplitTriangleValidity](SurfaceSplitTriangleValidity.md)
* [SurfaceSwapEdgeValidities](SurfaceSwapEdgeValidities.md)
* [SurfaceSwapEdgeValidity](SurfaceSwapEdgeValidity.md)
* [SurfaceSwapFacetValidities](SurfaceSwapFacetValidities.md)
* [SurfaceTopologicalValidity](SurfaceTopologicalValidity.md)
* [SwapEdgeTetrahedraAfter](SwapEdgeTetrahedraAfter.md)
* [SwapTetrahedraAfter](SwapTetrahedraAfter.md)
* [SwapTrianglesAfter](SwapTrianglesAfter.md)
* [TetrahedraAfter](TetrahedraAfter.md)
* [TetrahedraModifier](TetrahedraModifier.md)
* [TetrahedralSolidConstraintModifier](TetrahedralSolidConstraintModifier.md)
* [TetrahedralSolidEpsilonModifier](TetrahedralSolidEpsilonModifier.md)
* [TetrahedralSolidImprovementSimulator3D](TetrahedralSolidImprovementSimulator3D.md)
* [TetrahedralSolidInternalDistanceImprovementSimulator](TetrahedralSolidInternalDistanceImprovementSimulator.md)
* [TetrahedralSolidInternalDistanceOptimizer](TetrahedralSolidInternalDistanceOptimizer.md)
* [TetrahedralSolidModifier](TetrahedralSolidModifier.md)
* [TetrahedralSolidOptimizerImprovementSimulator](TetrahedralSolidOptimizerImprovementSimulator.md)
* [TetrahedralSolidOptimizer](TetrahedralSolidOptimizer.md)
* [TetrahedralSolidOrchestrator](TetrahedralSolidOrchestrator.md)
* [TetrahedralSolidShiftOptimizer](TetrahedralSolidShiftOptimizer.md)
* [TrianglesAfter](TrianglesAfter.md)
* [TrianglesModifier](TrianglesModifier.md)
* [TriangulatedSurfaceConstraintModifier](TriangulatedSurfaceConstraintModifier.md)
* [TriangulatedSurfaceDecimatorOperator](TriangulatedSurfaceDecimatorOperator.md)
* [TriangulatedSurfaceDecimator](TriangulatedSurfaceDecimator.md)
* [TriangulatedSurfaceEpsilonModifier](TriangulatedSurfaceEpsilonModifier.md)
* [TriangulatedSurfaceImprovementSimulator](TriangulatedSurfaceImprovementSimulator.md)
* [TriangulatedSurfaceInternalDistanceImprovementSimulator](TriangulatedSurfaceInternalDistanceImprovementSimulator.md)
* [TriangulatedSurfaceInternalDistanceOptimizer](TriangulatedSurfaceInternalDistanceOptimizer.md)
* [TriangulatedSurfaceModifier](TriangulatedSurfaceModifier.md)
* [TriangulatedSurfaceOptimizerImprovementSimulator](TriangulatedSurfaceOptimizerImprovementSimulator.md)
* [TriangulatedSurfaceOptimizer](TriangulatedSurfaceOptimizer.md)
* [TriangulatedSurfaceOrchestrator](TriangulatedSurfaceOrchestrator.md)
* [TriangulatedSurfaceShiftOptimizer](TriangulatedSurfaceShiftOptimizer.md)
* [VerticesModifier](VerticesModifier.md)
* [uuid](uuid.md)


## Functions

### extract_mappings_from_split_info

```cpp
absl::FixedArray<Mapping<index_t> > extract_mappings_from_split_info(absl::Span<const SplitInfo> split_info)
```


### update_vertex_mappings

```cpp
void update_vertex_mappings(std::vector<geode::VertexMultiMapping> & vertex_multi_mappings, const geode::VertexMultiMapping & collapse_mapping)
```


### add_mappings_in_multi_mappings

```cpp
void add_mappings_in_multi_mappings(std::vector<MultiMapping<T> > & multi_mappings, absl::Span<const MultiMapping<T> > new_mappings)
```


### process_mapping_element

```cpp
void process_mapping_element(const geode::Mapping<T> & element, absl::flat_hash_set<T> & to_remove, absl::flat_hash_map<T, T> & new_to_old, const T & )
```


### process_mapping_element

```cpp
void process_mapping_element(geode::MultiMapping<T> & element, absl::flat_hash_set<T> & to_remove, absl::flat_hash_map<T, absl::InlinedVector<T, 1> > & new_to_olds, const T & no_value)
```


### update_mappings

```cpp
void update_mappings(std::vector<MappingType> & mappings, NewToOldMap & new_to_old, const T & no_value)
```


### update_mappings

```cpp
void update_mappings(std::vector<geode::Mapping<T> > & mappings, const T & no_value)
```


### update_multi_mappings

```cpp
void update_multi_mappings(std::vector<geode::MultiMapping<T> > & multi_mappings, const T & no_value)
```


### new_indices

```cpp
vector new_indices(absl::Span<const MappingType> mappings)
```


### swap_along_patch

```cpp
SolidSwapPatchInfo swap_along_patch(const TetrahedralSolid3D & solid, TetrahedralSolidModifier & modifier, Span patch_vertices, const Triangle3D & macro_triangle)
```


### swap_along_path

```cpp
SolidSwapPathInfo swap_along_path(const TetrahedralSolid3D & solid, TetrahedralSolidModifier & modifier, index_t begin, index_t end)
```


### is_move_point_valid

```cpp
bool is_move_point_valid(const EdgedCurve<dimension> & mesh, index_t vertex, const Point<dimension> & point)
```


### move_point_validity

```cpp
EdgedCurveMovePointValidity move_point_validity(const EdgedCurve<dimension> & mesh, index_t vertex, const Point<dimension> & point)
```


### is_split_edge_valid

```cpp
bool is_split_edge_valid(const EdgedCurve<dimension> & mesh, index_t edge_id, const Point<dimension> & point)
```


### split_edge_validity

```cpp
EdgedCurveSplitEdgeValidity split_edge_validity(const EdgedCurve<dimension> & mesh, index_t edge_id, const Point<dimension> & point)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const EdgedCurve<dimension> & mesh, index_t edge_id, const Point<dimension> & point)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const EdgedCurve<dimension> & mesh, index_t edge_id, local_index_t apex)
```


### collapse_edge_validity

```cpp
EdgedCurveCollapseEdgeValidity collapse_edge_validity(const EdgedCurve<dimension> & mesh, index_t edge_id, const Point<dimension> & point)
```


### dummy_triangle

```cpp
Triangle<dimension> dummy_triangle()
```


### is_split_triangle_valid

```cpp
bool is_split_triangle_valid(const TriangulatedSurface<dimension> & mesh, index_t triangle_id, const Point<dimension> & point)
```


 Check if a triangle split will keep the mesh valid, meaning the signs of the triangle areas are positive. The split is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**triangle_id** [in] Index of the triangle to split.

**point** [in] Coordinates of the split point.

**return** true if split will keep mesh valid.

### split_triangle_validity

```cpp
SurfaceSplitTriangleValidity<dimension> split_triangle_validity(const TriangulatedSurface<dimension> & mesh, index_t triangle_id, const Point<dimension> & point)
```


### is_split_edge_valid

```cpp
bool is_split_edge_valid(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, const Point<dimension> & point)
```


 Check if an edge split will keep the mesh valid, meaning the signs of the triangle areas are positive. The split is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge** [in] Index of the PolygonEdge to split.

**point** [in] Coordinates of the split point.

**return** true if split will keep mesh valid.

### split_edge_validity

```cpp
SurfaceSplitEdgeValidity<dimension> split_edge_validity(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, const Point<dimension> & point)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, const Point<dimension> & point)
```


 Check if an edge collapse will keep the mesh valid, meaning the signs of the triangle areas are positive, and mesh remains manifold. The collapse is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge** [in] Index of the PolygonEdge to collapse.

**point** [in] Coordinates of the collapse point.

**return** true if collapse will keep mesh valid.

### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, local_index_t apex)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const TriangulatedSurface<dimension> & mesh, index_t edge_id, const Point<dimension> & point)
```


 Check if an edge collapse will keep the mesh valid, meaning the signs of the triangle areas are positive, and mesh remains manifold. The collapse is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge_id** [in] Unique index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

**return** true if collapse will keep mesh valid.

### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const TriangulatedSurface<dimension> & mesh, index_t edge_id, local_index_t apex)
```


### collapse_edge_validity

```cpp
SurfaceCollapseEdgeValidity<dimension> collapse_edge_validity(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, const Point<dimension> & point)
```


 Check if an edge collapse will keep the mesh valid, meaning the signs of the triangle areas are positive, and mesh remains manifold. The collapse is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge** [in] Index of the PolygonEdge to collapse.

**point** [in] Coordinates of the collapse point.

**return** all the information about validity issues this collapse would generate.

### collapse_edge_validity

```cpp
SurfaceCollapseEdgeValidity<dimension> collapse_edge_validity(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, local_index_t apex)
```


### collapse_edge_validity

```cpp
SurfaceCollapseEdgeValidity<dimension> collapse_edge_validity(const TriangulatedSurface<dimension> & mesh, index_t edge_id, const Point<dimension> & point)
```


 Check if an edge collapse will keep the mesh valid, meaning the signs of the triangle areas are positive, and mesh remains manifold. The collapse is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge_id** [in] Unique index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

**return** all the information about validity issues this collapse would generate.

### collapse_edge_validity

```cpp
SurfaceCollapseEdgeValidity<dimension> collapse_edge_validity(const TriangulatedSurface<dimension> & mesh, index_t edge_id, local_index_t apex)
```


### is_swap_edge_valid

```cpp
bool is_swap_edge_valid(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge)
```


 Check if an edge swap will keep the mesh valid, meaning the sign of the triangle areas are positive. The swap is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge** [in] Index of the PolygonEdge to swap.

**return** true if swap edge will keep mesh valid.

### swap_edge_validity

```cpp
SurfaceSwapEdgeValidity<dimension> swap_edge_validity(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge)
```


### is_move_point_valid

```cpp
bool is_move_point_valid(const TriangulatedSurface<dimension> & mesh, index_t vertex, const Point<dimension> & point)
```


 Check if a vertex relocation will keep the mesh valid, meaning the sign of the triangle areas are positive. The relocation is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**vertex** [in] Index of the vertex to relocate.

**point** [in] Coordinates of the destination point.

**return** true if vertex relocation will keep mesh valid.

### move_point_validity

```cpp
SurfaceMovePointValidity<dimension> move_point_validity(const TriangulatedSurface<dimension> & mesh, index_t vertex, const Point<dimension> & point)
```


### triangles_after_split_triangle

```cpp
std::array<Triangle<dimension>, 3> triangles_after_split_triangle(const TriangulatedSurface<dimension> & mesh, index_t triangle_id, const Point<dimension> & point)
```


 Return the three triangles resulting from a triangle split. The split is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**triangle_id** [in] Index of the triangle on which simulate split.

**point** [in] Coordinates of the split point.

### triangles_after_split_edge

```cpp
TrianglesAfter<dimension> triangles_after_split_edge(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, const Point<dimension> & point)
```


 Return all the triangles resulting from a triangle edge split. The split is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge** [in] Index of the PolygonEdge to split.

**point** [in] Coordinates of the split point.

### triangles_after_collapse_edge

```cpp
TrianglesAfter<dimension> triangles_after_collapse_edge(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, const Point<dimension> & point)
```


 Return all the triangles resulting from a triangle edge collapse. The collapse is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge** [in] Index of the PolygonEdge to collapse.

**point** [in] Coordinates of the collapse point.

### triangles_after_collapse_edge

```cpp
TrianglesAfter<dimension> triangles_after_collapse_edge(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge, local_index_t apex)
```


### triangles_after_collapse_edge

```cpp
TrianglesAfter<dimension> triangles_after_collapse_edge(const TriangulatedSurface<dimension> & mesh, index_t edge_id, const Point<dimension> & point)
```


 Return all the triangles resulting from a triangle edge collapse. The collapse is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge_id** [in] Unique index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

### triangles_after_collapse_edge

```cpp
TrianglesAfter<dimension> triangles_after_collapse_edge(const TriangulatedSurface<dimension> & mesh, index_t edge_id, local_index_t apex)
```


### triangles_after_swap_edge

```cpp
SwapTrianglesAfter<dimension> triangles_after_swap_edge(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge)
```


 Return all the triangles resulting from an edge swap. The swap is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge** [in] Index of the PolygonEdge to swap.

### triangles_after_move_point

```cpp
TrianglesAfter<dimension> triangles_after_move_point(const TriangulatedSurface<dimension> & mesh, index_t vertex, const Point<dimension> & point)
```


 Return all the triangles resulting from a vertex relocation. The vertex relocation is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**vertex** [in] Index of the vertex to relocate.

**point** [in] Coordinates of the destination point.

### triangles_after_split_collapse_edge

```cpp
SplitCollapseTrianglesAfter<dimension> triangles_after_split_collapse_edge(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge)
```


 Return all the triangles resulting from a split collapse edge. The split collapse edge is not applied.

**mesh** [in] Triangulated mesh on which simulate operation.

**edge** [in] Index of the PolygonEdge to swap.

### determine_cuts

```cpp
std::vector<GeometricSurfacePath2D> determine_cuts(const TriangulatedSurface2D & surface, absl::Span<const SurfacePath> path_splits)
```


### determine_cuts

```cpp
std::vector<GeometricSurfacePath3D> determine_cuts(const TriangulatedSurface3D & surface, const Plane & plane, absl::Span<const SurfacePath> path_splits)
```


### cut_along_path

```cpp
SurfaceCutPathInfo<dimension> cut_along_path(const TriangulatedSurface<dimension> & surface, TriangulatedSurfaceModifier<dimension> & modifier, absl::Span<const GeometricSurfacePath<dimension> > path_splits)
```


### cut_along_path

```cpp
SurfaceCutPathInfo<2> cut_along_path(const TriangulatedSurface2D & surface, TriangulatedSurfaceModifier2D & modifier, index_t begin, index_t end)
```


### cut_along_path

```cpp
SurfaceCutPathInfo cut_along_path(BRepGeometricModifier & modifier, const Surface3D & surface, Span path_splits)
```


### edge_tshape_apex

```cpp
optional edge_tshape_apex(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge)
```


### facet_tshape_apex

```cpp
optional facet_tshape_apex(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet)
```


### edge_tshape_apex

```cpp
BRepEdgeTShape edge_tshape_apex(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge)
```


### facet_tshape_apex

```cpp
BRepFacetTShape facet_tshape_apex(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet)
```


### combined_allowed

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX combined_allowed(ALLOWED_COLLAPSE_VERTEX_VERTEX lhs, ALLOWED_COLLAPSE_VERTEX_VERTEX rhs)
```


### combined_allowed

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX combined_allowed(ALLOWED_COLLAPSE_EDGE_VERTEX lhs, ALLOWED_COLLAPSE_EDGE_VERTEX rhs)
```


### combined_allowed

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX combined_allowed(ALLOWED_COLLAPSE_FACET_VERTEX lhs, ALLOWED_COLLAPSE_FACET_VERTEX rhs)
```


### combined_allowed

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE combined_allowed(ALLOWED_COLLAPSE_EDGE_EDGE lhs, ALLOWED_COLLAPSE_EDGE_EDGE rhs)
```


### allowed_collapse_edge_by_constraints

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_constraints(const ModifiableBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const class BRepGeometricConstraintModifier::Constraints & constraints)
```


### is_swap_edge_allowed_by_constraints

```cpp
bool is_swap_edge_allowed_by_constraints(const ModifiableBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes, const class BRepGeometricConstraintModifier::Constraints & constraints)
```

### is_swap_facet_allowed_by_constraints

```cpp
bool is_swap_facet_allowed_by_constraints(const ModifiableBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes, const class BRepGeometricConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_edge_by_constraints

```cpp
tuple allowed_split_collapse_edge_by_constraints(const ModifiableBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes, const class BRepGeometricConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_facet_by_constraints

```cpp
tuple allowed_split_collapse_facet_by_constraints(const ModifiableBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes, const class BRepGeometricConstraintModifier::Constraints & constraints)
```


### allowed_collapse_edge_by_constraints

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_constraints(const ModifiableTetrahedralSolid & solid, const PolyhedronFacetEdge & edge, const class TetrahedralSolidConstraintModifier::Constraints & constraints)
```


### is_swap_edge_allowed_by_constraints

```cpp
bool is_swap_edge_allowed_by_constraints(const ModifiableTetrahedralSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape, const class TetrahedralSolidConstraintModifier::Constraints & constraints)
```


### is_swap_facet_allowed_by_constraints

```cpp
bool is_swap_facet_allowed_by_constraints(const ModifiableTetrahedralSolid & solid, const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex, const class TetrahedralSolidConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_edge_by_constraints

```cpp
tuple allowed_split_collapse_edge_by_constraints(const ModifiableTetrahedralSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape, const class TetrahedralSolidConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_facet_by_constraints

```cpp
tuple allowed_split_collapse_facet_by_constraints(const ModifiableTetrahedralSolid & solid, const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex, const class TetrahedralSolidConstraintModifier::Constraints & constraints)
```


### is_move_point_allowed_by_constraints

```cpp
bool is_move_point_allowed_by_constraints(const ModifiableTetrahedralSolid & solid, index_t vertex, const class TetrahedralSolidConstraintModifier::Constraints & constraints)
```


### is_split_tetrahedron_valid

```cpp
bool is_split_tetrahedron_valid(const TetrahedralSolid3D & mesh, index_t tetrahedron_id, const Point3D & point)
```


 Check if a tetrahedron split will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**tetrahedron_id** [in] Index of the tetrahedron to split.

**point** [in] Coordinates of the split point.

**return** true if split will keep mesh valid.

### split_tetrahedron_validity

```cpp
SolidSplitTetrahedronValidity split_tetrahedron_validity(const TetrahedralSolid3D & mesh, index_t tetrahedron_id, const Point3D & point)
```


### is_split_facet_valid

```cpp
bool is_split_facet_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet, const Point3D & point)
```


 Check if a facet split will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**facet** [in] Index of the PolyhedronFacet to split.

**point** [in] Coordinates of the split point.

**return** true if split will keep mesh valid.

### is_split_facet_valid

```cpp
bool is_split_facet_valid(const TetrahedralSolid3D & mesh, index_t facet_id, const Point3D & point)
```


 Check if a facet split will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**facet_id** [in] Unique index of the facet to split.

**point** [in] Coordinates of the split point.

**return** true if split will keep mesh valid.

### split_facet_validity

```cpp
SolidSplitFacetValidity split_facet_validity(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet, const Point3D & point)
```


### split_facet_validity

```cpp
SolidSplitFacetValidity split_facet_validity(const TetrahedralSolid3D & mesh, index_t facet_id, const Point3D & point)
```


### is_split_edge_valid

```cpp
bool is_split_edge_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Check if an edge split will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge** [in] Index of the PolyhedronFacetEdge to split.

**point** [in] Coordinates of the split point.

**return** true if split will keep mesh valid.

### is_split_edge_valid

```cpp
bool is_split_edge_valid(const TetrahedralSolid3D & mesh, index_t edge_id, const Point3D & point)
```


 Check if an edge split will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge_id** [in] Unique index of the edge to split.

**point** [in] Coordinates of the split point.

**return** true if split will keep mesh valid.

### split_edge_validity

```cpp
SolidSplitEdgeValidity split_edge_validity(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### split_edge_validity

```cpp
SolidSplitEdgeValidity split_edge_validity(const TetrahedralSolid3D & mesh, index_t edge_id, const Point3D & point)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Check if an edge collapse will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The collapse is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge** [in] Index of the PolyhedronFacetEdge to collapse.

**point** [in] Coordinates of the collapse point.

**return** true if collapse will keep mesh valid.

### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, local_index_t apex)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const TetrahedralSolid3D & mesh, index_t edge_id, const Point3D & point)
```


 Check if an edge collapse will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The collapse is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge_id** [in] Unique index of the edge to collapse.

**point** [in] Coordinates of the collapse point.

**return** true if collapse will keep mesh valid.

### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const TetrahedralSolid3D & mesh, index_t edge_id, local_index_t apex)
```


### does_collapse_edge_create_topological_invalidities

```cpp
SolidVertexTopologicalValidity does_collapse_edge_create_topological_invalidities(const geode::TetrahedralSolid3D & mesh, const geode::PolyhedronFacetEdge & edge)
```


### does_split_collapse_edge_create_topological_invalidities

```cpp
SolidVertexTopologicalValidity does_split_collapse_edge_create_topological_invalidities(const geode::TetrahedralSolid3D & mesh, const geode::PolyhedronFacetEdge & edge, index_t apex)
```


### does_split_collapse_facet_create_topological_invalidities

```cpp
SolidVertexTopologicalValidity does_split_collapse_facet_create_topological_invalidities(const geode::TetrahedralSolid3D & mesh, const geode::PolyhedronFacet & facet)
```


### collapse_edge_validity

```cpp
SolidCollapseEdgeValidity collapse_edge_validity(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### collapse_edge_validity

```cpp
SolidCollapseEdgeValidity collapse_edge_validity(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, local_index_t apex)
```


### collapse_edge_validity

```cpp
SolidCollapseEdgeValidity collapse_edge_validity(const TetrahedralSolid3D & mesh, index_t edge_id, const Point3D & point)
```


### collapse_edge_validity

```cpp
SolidCollapseEdgeValidity collapse_edge_validity(const TetrahedralSolid3D & mesh, index_t edge_id, local_index_t apex)
```


### is_split_collapse_edge_valid

```cpp
bool is_split_collapse_edge_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, index_t apex)
```


### is_split_collapse_edge_valid

```cpp
bool is_split_collapse_edge_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, index_t apex, const Point3D & point)
```


### is_split_collapse_facet_valid

```cpp
bool is_split_collapse_facet_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet)
```


### is_split_collapse_facet_valid

```cpp
bool is_split_collapse_facet_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet, const Point3D & point)
```


### is_split_split_collapse_valid

```cpp
bool is_split_split_collapse_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point)
```


### is_swap_facet_valid

```cpp
bool is_swap_facet_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet)
```


 Check if a facet swap will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The swap is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**facet** [in] Index of the PolyhedronFacet to swap.

**return** true if swap facet will keep mesh valid.

### swap_facet_validity

```cpp
SolidSwapFacetValidity swap_facet_validity(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet)
```


### is_swap_edge_valid

```cpp
bool is_swap_edge_valid(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, index_t apex)
```


 Check if an edge swap will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The swap is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge** [in] Index of the PolyhedronFacetEdge to swap.

**apex** [in] Index of the vertex used as the new facets fan common vertex.

**return** true if swap edge will keep mesh valid.

### swap_edge_validity

```cpp
SolidSwapEdgeValidity swap_edge_validity(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, index_t apex)
```


### is_move_point_valid

```cpp
bool is_move_point_valid(const TetrahedralSolid3D & mesh, index_t vertex, const Point3D & point)
```


 Check if a vertex relocation will keep the mesh valid, meaning the signs of the tetrahedra volumes are positive. The vertex relocation is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**vertex** [in] Index of the vertex to relocate.

**point** [in] Coordinates of the destination point.

**return** true if vertex relocation will keep mesh valid.

### move_point_validity

```cpp
SolidMovePointValidity move_point_validity(const TetrahedralSolid3D & mesh, index_t vertex, const Point3D & point)
```


### tetrahedra_after_split_tetrahedron

```cpp
std::array<Tetrahedron, 4> tetrahedra_after_split_tetrahedron(const TetrahedralSolid3D & mesh, index_t tetrahedron_id, const Point3D & point)
```


 Return the four tetrahedra resulting from a tetrahedron split. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**tetrahedron_id** [in] Index of the tetrahedron on which simulate split.

**point** [in] Coordinates of the split point.

### tetrahedra_after_split_facet

```cpp
TetrahedraAfter tetrahedra_after_split_facet(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet, const Point3D & point)
```


 Return all the tetrahedra resulting from a facet split. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**facet** [in] Index of the PolyhedronFacet on which simulate split.

**point** [in] Coordinates of the split point.

### tetrahedra_after_split_facet

```cpp
TetrahedraAfter tetrahedra_after_split_facet(const TetrahedralSolid3D & mesh, index_t facet_id, const Point3D & point)
```


 Return all the tetrahedra resulting from a facet split. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**facet_id** [in] Unique index of the facet on which simulate split.

**point** [in] Coordinates of the split point.

### tetrahedra_after_split_collapse_facet

```cpp
SplitCollapseTetrahedraAfter tetrahedra_after_split_collapse_facet(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet)
```


### tetrahedra_after_split_collapse_facet

```cpp
SplitCollapseTetrahedraAfter tetrahedra_after_split_collapse_facet(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet, const Point3D & point)
```


### tetrahedra_after_split_edge

```cpp
TetrahedraAfter tetrahedra_after_split_edge(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Return all the tetrahedra resulting from an edge split. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge** [in] Index of the PolyhedronFacetEdge on which simulate split.

**point** [in] Coordinates of the split point.

### tetrahedra_after_split_edge

```cpp
TetrahedraAfter tetrahedra_after_split_edge(const TetrahedralSolid3D & mesh, index_t edge_id, const Point3D & point)
```


 Return all the tetrahedra resulting from an edge split. The split is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge_id** [in] Unique index of the edge on which simulate split.

**point** [in] Coordinates of the split point.

### tetrahedra_after_split_collapse_edge

```cpp
SplitCollapseEdgeTetrahedraAfter tetrahedra_after_split_collapse_edge(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, index_t vertex)
```


 Return all the tetrahedra resulting from an edge split and edge collapse. The split-collapse operations are not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge** [in] Index of the PolyhedronFacetEdge on which simulate split.

**vertex** [in] Index towards which the split vertex is collapse on.

### tetrahedra_after_split_collapse_edge

```cpp
SplitCollapseEdgeTetrahedraAfter tetrahedra_after_split_collapse_edge(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, index_t vertex, const Point3D & point)
```


### tetrahedra_after_split_split_collapse

```cpp
TetrahedraAfter tetrahedra_after_split_split_collapse(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & collapse_point)
```


 Return all the tetrahedra resulting from a double edge split and edge collapse. The split-collapse operations are not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge0** [in] Index of the first PolyhedronFacetEdge on which simulate split.

**edge1** [in] Index of the second PolyhedronFacetEdge on which simulate split.

**vertex** [in] Index towards which the split vertex is collapse on.

### tetrahedra_after_collapse_edge

```cpp
TetrahedraAfter tetrahedra_after_collapse_edge(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Return all the tetrahedra resulting from an edge collapse. The collapse is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge** [in] Index of the PolyhedronFacetEdge on which simulate collapse.

**point** [in] Coordinates of the collapse point.

### tetrahedra_after_collapse_edge

```cpp
TetrahedraAfter tetrahedra_after_collapse_edge(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, local_index_t apex)
```


### tetrahedra_after_collapse_edge

```cpp
TetrahedraAfter tetrahedra_after_collapse_edge(const TetrahedralSolid3D & mesh, index_t edge_id, const Point3D & point)
```


 Return all the tetrahedra resulting from an edge collapse. The collapse is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge_id** [in] Unique index of the edge on which simulate collapse.

**point** [in] Coordinates of the collapse point.

### tetrahedra_after_collapse_edge

```cpp
TetrahedraAfter tetrahedra_after_collapse_edge(const TetrahedralSolid3D & mesh, index_t edge_id, local_index_t apex)
```


### tetrahedra_after_swap_facet

```cpp
SwapTetrahedraAfter tetrahedra_after_swap_facet(const TetrahedralSolid3D & mesh, const PolyhedronFacet & facet)
```


 Return the three tetrahedra resulting from a facet swap. The swap is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**facet** [in] Index of the PolyhedronFacet on which simulate swap.

**point** [in] Coordinates of the swap point.

### tetrahedra_after_swap_edge

```cpp
SwapEdgeTetrahedraAfter tetrahedra_after_swap_edge(const TetrahedralSolid3D & mesh, const PolyhedronFacetEdge & edge, index_t apex)
```


 Return all the tetrahedra resulting from an edge swap. The swap is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**edge** [in] Index of the PolyhedronFacetEdge on which simulate swap.

**apex** [in] Index of the vertex used as the new facets fan common vertex.

### tetrahedra_after_move_point

```cpp
TetrahedraAfter tetrahedra_after_move_point(const TetrahedralSolid3D & mesh, index_t vertex, const Point3D & point)
```


 Return all the tetrahedra resulting from a vertex relocation. The vertex relocation is not applied.

**mesh** [in] Tetrahedral mesh on which simulate operation.

**vertex** [in] Index of the vertex to relocate.

**point** [in] Coordinates of the destination point.

### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, local_index_t apex)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const BRep & brep, const Line3D & line, index_t edge, const Point3D & point)
```


### is_split_collapse_facet_valid

```cpp
bool is_split_collapse_facet_valid(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```


### is_split_collapse_facet_valid

```cpp
bool is_split_collapse_facet_valid(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet)
```


### collapse_edge_validity

```cpp
BRepCollapseEdgeValidity collapse_edge_validity(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### collapse_edge_validity

```cpp
BRepCollapseEdgeValidity collapse_edge_validity(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, local_index_t apex)
```


### collapse_edge_validity

```cpp
BRepCollapseEdgeValidity collapse_edge_validity(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```


### collapse_edge_validity

```cpp
BRepCollapseEdgeValidity collapse_edge_validity(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge, local_index_t apex)
```


### collapse_edge_validity

```cpp
BRepCollapseEdgeValidity collapse_edge_validity(const BRep & brep, const Line3D & line, index_t edge, const Point3D & point)
```


### is_split_split_collapse_valid

```cpp
bool is_split_split_collapse_valid(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point)
```


### is_split_collapse_edge_valid

```cpp
bool is_split_collapse_edge_valid(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const index_t apex)
```


### is_split_collapse_edge_valid

```cpp
bool is_split_collapse_edge_valid(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const index_t apex, const Point3D & point)
```


### is_split_edge_valid

```cpp
bool is_split_edge_valid(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### is_split_edge_valid

```cpp
bool is_split_edge_valid(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```


### is_split_edge_valid

```cpp
bool is_split_edge_valid(const BRep & brep, const Line3D & line, index_t edge, const Point3D & point)
```


### split_edge_validity

```cpp
BRepSplitEdgeValidity split_edge_validity(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### split_edge_validity

```cpp
BRepSplitEdgeValidity split_edge_validity(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```


### split_edge_validity

```cpp
BRepSplitEdgeValidity split_edge_validity(const BRep & brep, const Line3D & line, index_t edge, const Point3D & point)
```


### is_split_facet_valid

```cpp
bool is_split_facet_valid(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```


### is_split_triangle_valid

```cpp
bool is_split_triangle_valid(const BRep & brep, const Surface3D & surface, index_t triangle, const Point3D & point)
```


### split_facet_validity

```cpp
BRepSplitTriangleValidity split_facet_validity(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```


### split_triangle_validity

```cpp
BRepSplitTriangleValidity split_triangle_validity(const BRep & brep, const Surface3D & surface, index_t triangle, const Point3D & point)
```


### is_swap_facet_valid

```cpp
bool is_swap_facet_valid(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet)
```


### swap_facet_validity

```cpp
BRepSwapFacetValidity swap_facet_validity(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet)
```


### is_swap_edge_valid

```cpp
bool is_swap_edge_valid(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex)
```


### is_swap_edge_valid

```cpp
bool is_swap_edge_valid(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge)
```


 The chosen apex is the opposite vertex of the given PolygonEdge

### swap_edge_validity

```cpp
BRepSwapEdgeValidity swap_edge_validity(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex)
```


### swap_edge_validity

```cpp
BRepSwapEdgeValidity swap_edge_validity(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge)
```


 The chosen apex is the opposite vertex of the given PolygonEdge

### is_move_point_valid

```cpp
bool is_move_point_valid(const BRep & brep, index_t unique_vertex, const Point3D & point)
```


### move_point_validity

```cpp
BRepMovePointValidity move_point_validity(const BRep & brep, index_t unique_vertex, const Point3D & point)
```


### elements_after_collapse_edge

```cpp
BRepElementsAfterCollapseEdge elements_after_collapse_edge(const BRep & brep, const Line3D & line, index_t edge, const Point3D & point)
```


### elements_after_collapse_edge

```cpp
BRepElementsAfterCollapseEdge elements_after_collapse_edge(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge, const Point3D & point)
```


### elements_after_collapse_edge

```cpp
BRepElementsAfterCollapseEdge elements_after_collapse_edge(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & point)
```


### elements_after_swap_edge

```cpp
BRepElementsAfterSwapEdge elements_after_swap_edge(const BRep & brep, const Surface3D & surface, const PolygonEdge & edge)
```


### elements_after_swap_edge

```cpp
BRepElementsAfterSwapEdge elements_after_swap_edge(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex)
```


### elements_after_move_point

```cpp
BRepElementsAfterMovePoint elements_after_move_point(const BRep & brep, index_t unique_vertex, const Point3D & point)
```


### elements_after_split_collapse_facet

```cpp
BRepElementsAfterSplitCollapse elements_after_split_collapse_facet(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet, const Point3D & point)
```


### elements_after_split_collapse_facet

```cpp
BRepElementsAfterSplitCollapse elements_after_split_collapse_facet(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet)
```


### are_component_mesh_vertices_included

```cpp
bool are_component_mesh_vertices_included(const ComponentMeshVertexInclusionQuery & query)
```


### are_split_collapse_block_facets_valids

```cpp
bool are_split_collapse_block_facets_valids(const BRep & brep, const Block3D & initial_block, const PolyhedronFacet & initial_facet, const geode::struct BRepComponentMeshPolygons::BlockPolygons & block_polygons, const geode::index_t facet_opposite_vertex)
```


### elements_after_block_facets_split_collapse

```cpp
void elements_after_block_facets_split_collapse(const BRep & brep, const geode::struct BRepComponentMeshPolygons::BlockPolygons & block_triangles, const Block3D & initial_block, const PolyhedronFacet & initial_facet, const Point3D & point, BRepElementsAfterSplitCollapse & result)
```


### elements_after_block_facets_split_collapse

```cpp
void elements_after_block_facets_split_collapse(const BRep & brep, const geode::struct BRepComponentMeshPolygons::BlockPolygons & block_triangles, const Block3D & initial_block, const PolyhedronFacet & initial_facet, BRepElementsAfterSplitCollapse & result)
```


### does_split_edge_improve_metric

```cpp
bool does_split_edge_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacetEdge & edge, const Point3D & split_point, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_split_facet_improve_metric

```cpp
bool does_split_facet_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacet & facet, const Point3D & apex_point, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_move_point_improve_metric

```cpp
bool does_move_point_improve_metric(const TetrahedralSolid3D & solid, const index_t point_to_relocate_local_id, const Point3D & new_point, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_collapse_edge_improve_metric

```cpp
bool does_collapse_edge_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacetEdge & edge, const local_index_t apex, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_collapse_edge_improve_metric

```cpp
bool does_collapse_edge_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacetEdge & edge, const Point3D & collapse_point, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_swap_edge_improve_metric

```cpp
bool does_swap_edge_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacetEdge & edge, index_t apex, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_swap_facet_improve_metric

```cpp
bool does_swap_facet_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacet & facet, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_split_collapse_edge_improve_metric

```cpp
bool does_split_collapse_edge_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacetEdge & edge, index_t apex, const Point3D & point, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_split_collapse_facet_improve_metric

```cpp
bool does_split_collapse_facet_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacet & facet, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_split_collapse_facet_improve_metric

```cpp
bool does_split_collapse_facet_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacet & facet, const Point3D & point, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_split_split_collapse_edge_improve_metric

```cpp
bool does_split_split_collapse_edge_improve_metric(const TetrahedralSolid3D & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### does_split_edge_improve_metric

```cpp
bool does_split_edge_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & split_point, const BRepImprovementSimulator & improvement_simulator)
```


### does_collapse_edge_improve_metric

```cpp
bool does_collapse_edge_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const local_index_t apex, const BRepImprovementSimulator & improvement_simulator)
```


### does_collapse_edge_improve_metric

```cpp
bool does_collapse_edge_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const Point3D & collapse_point, const BRepImprovementSimulator & improvement_simulator)
```


### does_swap_edge_improve_metric

```cpp
bool does_swap_edge_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepImprovementSimulator & improvement_simulator)
```


### does_swap_facet_improve_metric

```cpp
bool does_swap_facet_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepImprovementSimulator & improvement_simulator)
```


### does_split_collapse_edge_improve_metric

```cpp
bool does_split_collapse_edge_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const Point3D & point, const BRepImprovementSimulator & improvement_simulator)
```


### does_split_collapse_edge_improve_metric

```cpp
bool does_split_collapse_edge_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepImprovementSimulator & improvement_simulator)
```


### does_split_collapse_facet_improve_metric

```cpp
bool does_split_collapse_facet_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet, const Point3D & point, const BRepImprovementSimulator & improvement_simulator)
```


### does_split_collapse_facet_improve_metric

```cpp
bool does_split_collapse_facet_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepImprovementSimulator & improvement_simulator)
```


### does_split_split_collapse_edge_improve_metric

```cpp
bool does_split_split_collapse_edge_improve_metric(const BRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point, const BRepImprovementSimulator & improvement_simulator)
```


### does_move_point_improve_metric

```cpp
bool does_move_point_improve_metric(const BRep & brep, const Block3D & block, const index_t & vertex, const Point3D & point, const BRepImprovementSimulator & improvement_simulator)
```


### cut_along_path

```cpp
SolidCutPathInfo cut_along_path(const TetrahedralSolid3D & solid, TetrahedralSolidModifier & modifier, Span path_splits)
```


 Perform a TetrahedralSolid3D rectilinear cut between two vertices given where to split the tetrahedra.

**begin** [in] Index of the cut starting vertex

**end** [in] Index of the cut ending vertex

**path_splits** [in] Ordered list of Path splits

**warning** Cut tetrahedra are set as inactive but not deleted.

### cut_along_path

```cpp
SolidCutPathInfo cut_along_path(const TetrahedralSolid3D & solid, TetrahedralSolidModifier & modifier, index_t begin, index_t end)
```


### cut_along_patch

```cpp
SolidCutPatchInfo cut_along_patch(const TetrahedralSolid3D & solid, TetrahedralSolidModifier & modifier, Span boundary_edges, const Triangle3D & triangle)
```


 Perform a TetrahedralSolid3D planar cut along a triangle given its boundary edges. These boundary edges are oriented solid edges.

**solid** [in] TetrahedralSolid to cut

**builder** [in] Builder of the Solid

**boundary_edges** [in] List of oriented Patch boundary as solid edges

**triangle** [in] The triangle corresponding to the patch to insert in solid

**warning** Cut tetrahedra are set as inactive but not deleted.

### determine_cuts

```cpp
vector determine_cuts(const TetrahedralSolid3D & solid, Span path_splits)
```


### determine_cuts

```cpp
vector determine_cuts(const TetrahedralSolid3D & solid, const Plane & plane, Span path_splits)
```


### minimal_tetrahedron_internal_distance

```cpp
InternalDistance minimal_tetrahedron_internal_distance(const Tetrahedron & tetra)
```


### minimal_triangle_internal_distance

```cpp
InternalDistance minimal_triangle_internal_distance(const Triangle<dimension> & triangle)
```


### fast_tetrahedron_internal_distances

```cpp
InlinedVector fast_tetrahedron_internal_distances(const TetrahedralSolid3D & solid, index_t tetrahedron_id, const struct InternalDistance::Options & options)
```


### fast_triangle_internal_distances

```cpp
InlinedVector fast_triangle_internal_distances(const TriangulatedSurface<dimension> & surface, index_t triangle_id, const struct InternalDistance::Options & options)
```


### fast_tetrahedron_internal_distances

```cpp
InlinedVector fast_tetrahedron_internal_distances(const Tetrahedron & tetra, const struct InternalDistance::Options & options)
```


### fast_triangle_internal_distances

```cpp
InlinedVector fast_triangle_internal_distances(const Triangle<dimension> & triangle, const struct InternalDistance::Options & options)
```


### has_internal_distance_below_epsilon

```cpp
bool has_internal_distance_below_epsilon(const Tetrahedron & tetra)
```


### has_internal_distance_below_epsilon

```cpp
bool has_internal_distance_below_epsilon(const Triangle<dimension> & triangle)
```


### tetrahedron_status

```cpp
ELEMENT_STATUS tetrahedron_status(const Tetrahedron & tetrahedron)
```


### triangle_status

```cpp
ELEMENT_STATUS triangle_status(const Triangle<dimension> & triangle)
```


### compute_number_of_negative_tetrahedra

```cpp
optional compute_number_of_negative_tetrahedra(Span tetrahedra)
```


### compute_number_of_negative_tetrahedra

```cpp
optional compute_number_of_negative_tetrahedra(Span tetrahedra)
```


### compute_number_of_negative_triangles

```cpp
optional compute_number_of_negative_triangles(absl::Span<const Triangle<dimension> > triangles)
```


### compute_number_of_negative_triangles

```cpp
optional compute_number_of_negative_triangles(absl::Span<const ModifiedTriangle<dimension> > triangles)
```


### edge_from_internal_distance

```cpp
PolyhedronFacetEdge edge_from_internal_distance(const SolidMesh3D & solid, index_t tetrahedron_id, const InternalDistance & idistance)
```


### edge_from_internal_distance

```cpp
PolygonEdge edge_from_internal_distance(const SurfaceMesh<dimension> & surface, index_t triangle_id, const InternalDistance & idistance)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const Points<dimension, nb_points> & points)
```


### allowed_collapse_edge_by_constraints

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_constraints(const ModifiableTriangulatedSurface<dimension> & surface, const PolygonEdge & edge, const typename TriangulatedSurfaceConstraintModifier<dimension>::Constraints & constraints)
```


### is_swap_edge_allowed_by_constraints

```cpp
bool is_swap_edge_allowed_by_constraints(const ModifiableTriangulatedSurface<dimension> & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex, const typename TriangulatedSurfaceConstraintModifier<dimension>::Constraints & constraints)
```


### allowed_split_collapse_edge_by_constraints

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge_by_constraints(const ModifiableTriangulatedSurface<dimension> & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex, const typename TriangulatedSurfaceConstraintModifier<dimension>::Constraints & constraints)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const ElementStamp & element_stamp)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const SurfaceEdge<dimension> & surface_edge)
```


### decimate_triangulated_surface

```cpp
void decimate_triangulated_surface(TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier, const TriangulatedSurfaceDecimatorOperator<dimension> & decimator_operator)
```


### does_collapse_edge_improve_metric

```cpp
bool does_collapse_edge_improve_metric(const TriangulatedSurface<dimension> & surface, const PolygonEdge & edge, const Point<dimension> & collapse_point, const TriangulatedSurfaceImprovementSimulator<dimension> & improvement_simulator)
```


### does_swap_edge_improve_metric

```cpp
bool does_swap_edge_improve_metric(const TriangulatedSurface<dimension> & surface, const PolygonEdge & edge, const TriangulatedSurfaceImprovementSimulator<dimension> & improvement_simulator)
```


### optimize_triangulated_surface_elements

```cpp
void optimize_triangulated_surface_elements(TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator<dimension> & improvement_simulator, index_t first_element)
```


### shift_optimize_triangulated_surface_elements

```cpp
void shift_optimize_triangulated_surface_elements(TriangulatedSurfaceConstraintModifier<dimension> & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator<dimension> & improvement_simulator, index_t first_element)
```


### minimal_metric

```cpp
double minimal_metric(const CustomGridMetric3D & metric, const Tetrahedron & tetrahedron)
```

### compute_constant_metric_from_maximal_edge_length

```cpp
ConstantMetric compute_constant_metric_from_maximal_edge_length(const SolidMesh3D & mesh)
```


### compute_grid_metric_from_maximal_edge_length

```cpp
SolidGridMetric compute_grid_metric_from_maximal_edge_length(const SolidMesh3D & mesh)
```


### colocalise_brep_unique_vertices

```cpp
void colocalise_brep_unique_vertices(ModifiableObject model, BRepBuilder & builder)
```


### colocalise_section_unique_vertices

```cpp
void colocalise_section_unique_vertices(ModifiableObject model, SectionBuilder & builder)
```


### mesh_partitionner

```cpp
FixedArray mesh_partitionner(const EdgedCurve<dimension> & mesh, const PartitionnerParameters & parameters)
```


### mesh_partitionner

```cpp
FixedArray mesh_partitionner(const SurfaceMesh<dimension> & mesh, const PartitionnerParameters & parameters)
```


### mesh_partitionner

```cpp
FixedArray mesh_partitionner(const SolidMesh3D & mesh, const PartitionnerParameters & parameters)
```


### edge_tshape_apex

```cpp
optional edge_tshape_apex(const TriangulatedSurface<dimension> & mesh, const PolygonEdge & edge)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const Section & section, const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```


### is_collapse_edge_valid

```cpp
bool is_collapse_edge_valid(const Section & section, const Line2D & line, index_t edge, const Point2D & point)
```


### collapse_edge_validity

```cpp
SectionCollapseEdgeValidity collapse_edge_validity(const Section & section, const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```


### collapse_edge_validity

```cpp
SectionCollapseEdgeValidity collapse_edge_validity(const Section & section, const Line2D & line, index_t edge, const Point2D & point)
```


### is_split_edge_valid

```cpp
bool is_split_edge_valid(const Section & section, const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```


### is_split_edge_valid

```cpp
bool is_split_edge_valid(const Section & section, const Line2D & line, index_t edge, const Point2D & point)
```


### split_edge_validity

```cpp
SectionSplitEdgeValidity split_edge_validity(const Section & section, const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```

### split_edge_validity

```cpp
SectionSplitEdgeValidity split_edge_validity(const Section & section, const Line2D & line, index_t edge, const Point2D & point)
```

### is_swap_edge_valid

```cpp
bool is_swap_edge_valid(const Section & section, const Surface2D & surface, const PolygonEdge & edge)
```


### swap_edge_validity

```cpp
SectionSwapEdgeValidity swap_edge_validity(const Section & section, const Surface2D & surface, const PolygonEdge & edge)
```

### is_move_point_valid

```cpp
bool is_move_point_valid(const Section & section, index_t unique_vertex, const Point2D & point)
```


### move_point_validity

```cpp
SectionMovePointValidity move_point_validity(const Section & section, index_t unique_vertex, const Point2D & point)
```

### elements_after_collapse_edge

```cpp
SectionElementsAfterCollapseEdge elements_after_collapse_edge(const Section & section, const Line2D & line, index_t edge, const Point2D & point)
```


### elements_after_collapse_edge

```cpp
SectionElementsAfterCollapseEdge elements_after_collapse_edge(const Section & section, const Surface2D & surface, const PolygonEdge & edge, const Point2D & point)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const BlockElement<ElementId> & element)
```


### optimize_brep_elements

```cpp
vector optimize_brep_elements(BRepGeometricConstraintModifier & constraint_modifier, const BRepInternalDistanceImprovementSimulator & improvement_simulator, Span tetrahedra)
```




## Enums

| enum class SPLIT_SIDE |

--

| left |
| right |



| enum class ALLOWED_COLLAPSE_VERTEX_VERTEX |

--

| none |
| from_vertex0 |
| from_vertex1 |
| from_both |



| enum class ALLOWED_COLLAPSE_EDGE_VERTEX |

--

| none |
| from_edge |
| from_vertex |
| from_both |



| enum class ALLOWED_COLLAPSE_FACET_VERTEX |

--

| none |
| from_facet |
| from_vertex |
| from_both |



| enum class ALLOWED_COLLAPSE_EDGE_EDGE |

--

| none |
| from_edge0 |
| from_edge1 |
| from_both |



| enum class POSITION |

--

| outside |
| inside |
| vertex0 |
| vertex1 |
| vertex2 |
| vertex3 |
| edge0 |
| edge1 |
| edge2 |
| edge01 |
| edge02 |
| edge03 |
| edge12 |
| edge13 |
| edge23 |
| facet0 |
| facet1 |
| facet2 |
| facet3 |
| parallel |




