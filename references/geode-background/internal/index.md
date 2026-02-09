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

# namespace internal



## Records

* [BackgroundBRepAllNonMacroVertex](BackgroundBRepAllNonMacroVertex.md)
* [BackgroundBRepBuilder](BackgroundBRepBuilder.md)
* [BackgroundBRepConformityHelpers](BackgroundBRepConformityHelpers.md)
* [BackgroundBRepDecimatorOperator](BackgroundBRepDecimatorOperator.md)
* [BackgroundBRepEpsilonOptimizerException](BackgroundBRepEpsilonOptimizerException.md)
* [BackgroundBRepEpsilonOptimizer](BackgroundBRepEpsilonOptimizer.md)
* [BackgroundBRepGeometricConstraintModifier](BackgroundBRepGeometricConstraintModifier.md)
* [BackgroundBRepInserter](BackgroundBRepInserter.md)
* [BackgroundBRepModifier](BackgroundBRepModifier.md)
* [BackgroundBRepOptimizer](BackgroundBRepOptimizer.md)
* [BackgroundBRep](BackgroundBRep.md)
* [BackgroundEdgeVertices](BackgroundEdgeVertices.md)
* [BackgroundLineBuilder](BackgroundLineBuilder.md)
* [BackgroundLineInserter](BackgroundLineInserter.md)
* [BackgroundLineModifier](BackgroundLineModifier.md)
* [BackgroundLine](BackgroundLine.md)
* [BackgroundMeshImpl](BackgroundMeshImpl.md)
* [BackgroundMeshInsertionException](BackgroundMeshInsertionException.md)
* [BackgroundModelInsertionException](BackgroundModelInsertionException.md)
* [BackgroundPointIntersection](BackgroundPointIntersection.md)
* [BackgroundSolidAspectRatioImprovementSimulator](BackgroundSolidAspectRatioImprovementSimulator.md)
* [BackgroundSolidBlindedQualityOptimizer](BackgroundSolidBlindedQualityOptimizer.md)
* [BackgroundSolidBuilder](BackgroundSolidBuilder.md)
* [BackgroundSolidConstraintModifier](BackgroundSolidConstraintModifier.md)
* [BackgroundSolidEpsilonOptimizerException](BackgroundSolidEpsilonOptimizerException.md)
* [BackgroundSolidEpsilonOptimizerImprovementSimulator](BackgroundSolidEpsilonOptimizerImprovementSimulator.md)
* [BackgroundSolidInserter](BackgroundSolidInserter.md)
* [BackgroundSolidModifier](BackgroundSolidModifier.md)
* [BackgroundSolidOptimizer](BackgroundSolidOptimizer.md)
* [BackgroundSolidOrchestratorImpl](BackgroundSolidOrchestratorImpl.md)
* [BackgroundSolidPainter](BackgroundSolidPainter.md)
* [BackgroundSolidShiftOptimizer](BackgroundSolidShiftOptimizer.md)
* [BackgroundSolid](BackgroundSolid.md)
* [BackgroundSurfaceAllNonMacroVertex](BackgroundSurfaceAllNonMacroVertex.md)
* [BackgroundSurfaceBuilder](BackgroundSurfaceBuilder.md)
* [BackgroundSurfaceConstraintModifier](BackgroundSurfaceConstraintModifier.md)
* [BackgroundSurfaceDecimator](BackgroundSurfaceDecimator.md)
* [BackgroundSurfaceEpsilonOptimizerException](BackgroundSurfaceEpsilonOptimizerException.md)
* [BackgroundSurfaceEpsilonOptimizerImprovementSimulator](BackgroundSurfaceEpsilonOptimizerImprovementSimulator.md)
* [BackgroundSurfaceInserter](BackgroundSurfaceInserter.md)
* [BackgroundSurfaceModifier](BackgroundSurfaceModifier.md)
* [BackgroundSurfaceOptimizer](BackgroundSurfaceOptimizer.md)
* [BackgroundSurfaceOrchestratorImpl](BackgroundSurfaceOrchestratorImpl.md)
* [BackgroundSurfaceShiftOptimizer](BackgroundSurfaceShiftOptimizer.md)
* [BackgroundSurface](BackgroundSurface.md)
* [Background](Background.md)
* [BlockIsovalueInserter](BlockIsovalueInserter.md)
* [CorafinatedLine](CorafinatedLine.md)
* [CorafinatedSurface](CorafinatedSurface.md)
* [DetermineSplitsOrderException](DetermineSplitsOrderException.md)
* [EdgeMacroInfoConfig](EdgeMacroInfoConfig.md)
* [ElementInsertionInfo](ElementInsertionInfo.md)
* [ElementSearch](ElementSearch.md)
* [LineSkin](LineSkin.md)
* [MacroEdgeBackgroundVertices](MacroEdgeBackgroundVertices.md)
* [MacroEdgeInsertionInfo](MacroEdgeInsertionInfo.md)
* [MacroEdgesBuilder](MacroEdgesBuilder.md)
* [MacroEdges](MacroEdges.md)
* [MacroInfo1D](MacroInfo1D.md)
* [MacroInfo2D](MacroInfo2D.md)
* [MacroInfo3D](MacroInfo3D.md)
* [MacroInfoBuilder1D](MacroInfoBuilder1D.md)
* [MacroInfoBuilder2D](MacroInfoBuilder2D.md)
* [MacroInfoBuilder3D](MacroInfoBuilder3D.md)
* [MacroInfoBuilder](MacroInfoBuilder.md)
* [MacroInfo](MacroInfo.md)
* [MultilayerException](MultilayerException.md)
* [ScalarFunctionIsovalue](ScalarFunctionIsovalue.md)
* [Skin](Skin.md)
* [SkipNonMandatory](SkipNonMandatory.md)
* [SkipNothing](SkipNothing.md)
* [SolidSplitInfo](SolidSplitInfo.md)
* [SurfaceElement2Split](SurfaceElement2Split.md)
* [SurfaceSkinSplitsOrder](SurfaceSkinSplitsOrder.md)
* [SurfaceSkin](SurfaceSkin.md)
* [UnconformalElements](UnconformalElements.md)


## Functions

### carve_background_surface

```cpp
CleanMappings carve_background_surface(ModifiableObject background_surface)
```


### allowed_collapse_edge_by_macro_info

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge)
```


### allowed_collapse_edge_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_mandatory_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge)
```


### allowed_collapse_edge_vertex_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### allowed_collapse_edge_vertex_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_mandatory_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```

### is_swap_edge_allowed_by_macro_info

```cpp
bool is_swap_edge_allowed_by_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### is_swap_edge_allowed_by_mandatory_macro_info

```cpp
bool is_swap_edge_allowed_by_mandatory_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### is_edge_removal_allowed

```cpp
bool is_edge_removal_allowed(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```

### is_edge_removal_allowed_by_mandatory_macro_info

```cpp
bool is_edge_removal_allowed_by_mandatory_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### allowed_split_collapse_edge_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge_by_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### allowed_split_collapse_edge_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge_by_mandatory_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### allowed_collapse_edge_vertex_by_mandatory_macro_info_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_mandatory_macro_info_by_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### is_edge_removal_allowed_by_macro_info

```cpp
bool is_edge_removal_allowed_by_macro_info(const BackgroundSurface & surface, const PolygonEdge & edge, const std::optional<PolygonVertex> & tshape_apex)
```


### decimate_background_surface

```cpp
void decimate_background_surface(BackgroundSurfaceConstraintModifier & constraint_modifier, const TriangulatedSurfaceDecimatorOperator2D & decimator_operator)
```


### optimize_background_surface_elements

```cpp
void optimize_background_surface_elements(BackgroundSurfaceConstraintModifier & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator2D & improvement_simulator, index_t first_element)
```


### epsilon_optimize_background_surface_elements

```cpp
void epsilon_optimize_background_surface_elements(BackgroundSurfaceConstraintModifier & constraint_modifier, Span triangles)
```


### shift_optimize_background_solid_elements

```cpp
void shift_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator, Span elements)
```


### blinded_quality_optimize_background_solid_elements

```cpp
void blinded_quality_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator, Span elements)
```


### allowed_collapse_edge_by_macro_info

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge)
```


### allowed_collapse_edge_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge)
```


### allowed_collapse_edge_vertex_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### allowed_collapse_edge_vertex_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### allowed_collapse_facet_vertex_by_macro_info

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_collapse_facet_vertex_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### allowed_collapse_facet_vertex_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_collapse_facet_vertex_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### allowed_collapse_edge_edge_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_collapse_edge_edge_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```


### is_swap_edge_allowed_by_macro_info

```cpp
bool is_swap_edge_allowed_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### is_swap_edge_allowed_by_mandatory_macro_info

```cpp
bool is_swap_edge_allowed_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### is_swap_facet_allowed_by_macro_info

```cpp
bool is_swap_facet_allowed_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### is_swap_facet_allowed_by_mandatory_macro_info

```cpp
bool is_swap_facet_allowed_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### is_edge_removal_allowed_by_macro_info

```cpp
bool is_edge_removal_allowed_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, const std::optional<SolidEdgeTShape> & tshape)
```


### is_edge_removal_allowed_by_mandatory_macro_info

```cpp
bool is_edge_removal_allowed_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, const std::optional<SolidEdgeTShape> & tshape)
```


### allowed_split_collapse_edge_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### allowed_split_collapse_edge_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const std::optional<SolidEdgeTShape> & tshape)
```


### allowed_split_collapse_facet_by_macro_info

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_split_collapse_facet_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### allowed_split_collapse_facet_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_split_collapse_facet_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacet & facet, const std::optional<PolyhedronVertex> & tshape_apex)
```


### allowed_split_split_collapse_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_split_split_collapse_by_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```


### allowed_split_split_collapse_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_split_split_collapse_by_mandatory_macro_info(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```


### optimize_background_solid_elements

```cpp
void optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, const TetrahedralSolidInternalDistanceImprovementSimulator & improvement_simulator, Span elements)
```


### do_corafinated_solid_splits

```cpp
void do_corafinated_solid_splits(const CorafinatedLine & corafinated_line, LineSkins & skins)
```


### find_split_orders

```cpp
InlinedVector find_split_orders(CorafinatedSurface & corafinated_surface, SurfaceSkins & skins)
```


 Find the order of the splits between the corafinated surface and the skins. The corafinated surface may be modified to be able to find a correct split order for all skins.

### do_corafinated_solid_splits

```cpp
SolidSplitInfo do_corafinated_solid_splits(CorafinatedSurface & corafinated_surface, SurfaceSkinSplitsOrders & split_orders)
```


### vertex_skins_solid_mapping

```cpp
BijectiveMapping vertex_skins_solid_mapping(const CorafinatedSurface & corafinated_surface, geode::internal::BackgroundSolidBuilder & solid_builder, const SurfaceSkins & skins)
```


### vertex_skins_solid_mapping

```cpp
BijectiveMapping vertex_skins_solid_mapping(const CorafinatedSurface & corafinated_surface, const SurfaceSkins & skins)
```


### epsilon_optimize_background_solid_elements

```cpp
vector epsilon_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, TetrahedralSolidBuilder3D & builder, Span tetrahedra)
```


### simplify_background_solid_multilayers

```cpp
vector simplify_background_solid_multilayers(BackgroundSolidConstraintModifier & constraint_modifier, TetrahedralSolidBuilder3D & builder, Span tetrahedra, const Plane & plane)
```


### detect_coplanar_multilayers

```cpp
optional detect_coplanar_multilayers(const TetrahedralSolid3D & solid, index_t tetrahedron_id)
```


### shift_optimize_background_surface_elements

```cpp
void shift_optimize_background_surface_elements(BackgroundSurfaceConstraintModifier & constraint_modifier, const TriangulatedSurfaceInternalDistanceImprovementSimulator2D & improvement_simulator, index_t first_element)
```


### optimize_background_brep_elements

```cpp
vector optimize_background_brep_elements(BackgroundBRepGeometricConstraintModifier & constraint_modifier, const BRepInternalDistanceImprovementSimulator & improvement_simulator, Span tetrahedra)
```


### allowed_collapse_edge_by_macro_info

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge)
```


### allowed_collapse_edge_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_edge_by_mandatory_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge)
```


### allowed_collapse_edge_vertex_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes)
```


### allowed_collapse_edge_vertex_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_mandatory_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes)
```


### allowed_collapse_facet_vertex_by_macro_info

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_collapse_facet_vertex_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
```


### allowed_collapse_facet_vertex_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_collapse_facet_vertex_by_mandatory_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
```


### allowed_collapse_edge_edge_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_collapse_edge_edge_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```


### is_swap_edge_allowed_by_macro_info

```cpp
bool is_swap_edge_allowed_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes)
```


### is_swap_facet_allowed_by_macro_info

```cpp
bool is_swap_facet_allowed_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
```


### is_edge_removal_allowed_by_macro_info

```cpp
bool is_edge_removal_allowed_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const BRepEdgeTShape & tshapes)
```


### is_move_point_allowed_by_macro_info

```cpp
bool is_move_point_allowed_by_macro_info(const BackgroundBRep & brep, index_t unique_vertex)
```


### allowed_split_collapse_edge_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes)
```


### allowed_split_collapse_edge_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge_by_mandatory_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const BRepEdgeTShape & tshapes)
```


### allowed_split_collapse_facet_by_macro_info

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_split_collapse_facet_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
```


### allowed_split_collapse_facet_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_split_collapse_facet_by_mandatory_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const BRepFacetTShape & tshape_apexes)
```


### allowed_split_split_collapse_by_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_split_split_collapse_by_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```


### allowed_split_split_collapse_by_mandatory_macro_info

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_split_split_collapse_by_mandatory_macro_info(const BackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```


### decimate_background_brep

```cpp
void decimate_background_brep(BackgroundBRepGeometricConstraintModifier & constraint_modifier, const BackgroundBRepDecimatorOperator & decimator_operator)
```


### epsilon_optimize_background_brep_elements

```cpp
vector epsilon_optimize_background_brep_elements(BackgroundBRepGeometricConstraintModifier & constraint_modifier, BRepBuilder & brep_builder, Span tetrahedra)
```


### add_macro_info

```cpp
void add_macro_info(geode::VariableAttribute<std::vector<MacroInfo> > & attribute, const MacroInfo & macro_info, index_t background_mesh_element_id)
```


### remove_macro_info

```cpp
void remove_macro_info(geode::VariableAttribute<std::vector<MacroInfo> > & attribute, const MacroInfo & macro_info, index_t background_mesh_element_id)
```




## Enums

| enum class MACRO_INFO_TAG |

--

| empty |
| egal |
| included |
| fixed |
| other |





