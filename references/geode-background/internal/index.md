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

* [AllNonMacroVertex](AllNonMacroVertex.md)
* [AllowedByConstraints](AllowedByConstraints.md)
* [BackgroundBRepBuilder](BackgroundBRepBuilder.md)
* [BackgroundBRepConstraintModifier](BackgroundBRepConstraintModifier.md)
* [BackgroundBRepDecimatorOperator](BackgroundBRepDecimatorOperator.md)
* [BackgroundBRepGenericOptimizer](BackgroundBRepGenericOptimizer.md)
* [BackgroundBRepInserter](BackgroundBRepInserter.md)
* [BackgroundBRepInternalDistanceOptimizer](BackgroundBRepInternalDistanceOptimizer.md)
* [BackgroundBRepModifier](BackgroundBRepModifier.md)
* [BackgroundBRepOrchestrator](BackgroundBRepOrchestrator.md)
* [BackgroundBRep](BackgroundBRep.md)
* [BackgroundInsertionException](BackgroundInsertionException.md)
* [BackgroundLineBuilder](BackgroundLineBuilder.md)
* [BackgroundLineInserter](BackgroundLineInserter.md)
* [BackgroundLineModifier](BackgroundLineModifier.md)
* [BackgroundLine](BackgroundLine.md)
* [BackgroundOrchestrator](BackgroundOrchestrator.md)
* [BackgroundSolidAspectRatioImprovementSimulator](BackgroundSolidAspectRatioImprovementSimulator.md)
* [BackgroundSolidBlindedQualityOptimizer](BackgroundSolidBlindedQualityOptimizer.md)
* [BackgroundSolidBuilder](BackgroundSolidBuilder.md)
* [BackgroundSolidConstraintModifier](BackgroundSolidConstraintModifier.md)
* [BackgroundSolidDecimator](BackgroundSolidDecimator.md)
* [BackgroundSolidImprovementSimulator](BackgroundSolidImprovementSimulator.md)
* [BackgroundSolidInserter](BackgroundSolidInserter.md)
* [BackgroundSolidInternalDistanceImprovementSimulator](BackgroundSolidInternalDistanceImprovementSimulator.md)
* [BackgroundSolidInternalDistanceOptimizer](BackgroundSolidInternalDistanceOptimizer.md)
* [BackgroundSolidModifier](BackgroundSolidModifier.md)
* [BackgroundSolidOptimizerImprovementSimulator](BackgroundSolidOptimizerImprovementSimulator.md)
* [BackgroundSolidOptimizer](BackgroundSolidOptimizer.md)
* [BackgroundSolidOrchestrator](BackgroundSolidOrchestrator.md)
* [BackgroundSolidPainter](BackgroundSolidPainter.md)
* [BackgroundSolidShiftOptimizer](BackgroundSolidShiftOptimizer.md)
* [BackgroundSolid](BackgroundSolid.md)
* [BackgroundSurfaceBuilder](BackgroundSurfaceBuilder.md)
* [BackgroundSurfaceConstraintModifier](BackgroundSurfaceConstraintModifier.md)
* [BackgroundSurfaceImprovementSimulator](BackgroundSurfaceImprovementSimulator.md)
* [BackgroundSurfaceInserter](BackgroundSurfaceInserter.md)
* [BackgroundSurfaceInternalDistanceImprovementSimulator](BackgroundSurfaceInternalDistanceImprovementSimulator.md)
* [BackgroundSurfaceInternalDistanceOptimizer](BackgroundSurfaceInternalDistanceOptimizer.md)
* [BackgroundSurfaceModifier](BackgroundSurfaceModifier.md)
* [BackgroundSurfaceOptimizer](BackgroundSurfaceOptimizer.md)
* [BackgroundSurfaceOrchestrator](BackgroundSurfaceOrchestrator.md)
* [BackgroundSurface](BackgroundSurface.md)
* [Background](Background.md)
* [BlockElement](BlockElement.md)
* [BlockIsovalueInserter](BlockIsovalueInserter.md)
* [BlocksAllowedByConstraints](BlocksAllowedByConstraints.md)
* [CorafinatedSurface](CorafinatedSurface.md)
* [DetermineSplitsOrderException](DetermineSplitsOrderException.md)
* [EdgeMacroInfoConfig](EdgeMacroInfoConfig.md)
* [Element2Split](Element2Split.md)
* [ElementInsertionInfo](ElementInsertionInfo.md)
* [ElementSearchBuilder](ElementSearchBuilder.md)
* [ElementSearch](ElementSearch.md)
* [FourPointsInternalDistance](FourPointsInternalDistance.md)
* [InternalDistance](InternalDistance.md)
* [MacroEdgeBackgroundVertices](MacroEdgeBackgroundVertices.md)
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
* [Orchestrator](Orchestrator.md)
* [PointsCmp](PointsCmp.md)
* [PointsHash](PointsHash.md)
* [PointsInternalDistanceImpl](PointsInternalDistanceImpl.md)
* [Points](Points.md)
* [ScalarFunctionIsovalue](ScalarFunctionIsovalue.md)
* [Skin](Skin.md)
* [SkipNonMandatory](SkipNonMandatory.md)
* [SkipNothing](SkipNothing.md)
* [ThreePointsInternalDistance](ThreePointsInternalDistance.md)


## Functions

### carve_background_surface

```cpp
CleanMappings carve_background_surface(ModifiableObject background_surface)
```


### minimal_tetrahedron_internal_distance

```cpp
InternalDistance minimal_tetrahedron_internal_distance(const Tetrahedron & tetra)
```


### minimal_triangle_internal_distance

```cpp
InternalDistance minimal_triangle_internal_distance(const Triangle2D & triangle)
```


### fast_tetrahedron_internal_distances

```cpp
InternalDistances fast_tetrahedron_internal_distances(const TetrahedralSolid3D & solid, index_t tetrahedron_id, const struct InternalDistance::Options & options)
```


### fast_triangle_internal_distances

```cpp
InternalDistances fast_triangle_internal_distances(const TriangulatedSurface2D & surface, index_t triangle_id, const struct InternalDistance::Options & options)
```


### fast_tetrahedron_internal_distances

```cpp
InternalDistances fast_tetrahedron_internal_distances(const Tetrahedron & tetra, const struct InternalDistance::Options & options)
```


### fast_triangle_internal_distances

```cpp
InternalDistances fast_triangle_internal_distances(const Triangle2D & triangle, const struct InternalDistance::Options & options)
```


### has_internal_distance_below_epsilon

```cpp
bool has_internal_distance_below_epsilon(const Tetrahedron & tetra)
```


### has_internal_distance_below_epsilon

```cpp
bool has_internal_distance_below_epsilon(const Triangle2D & triangle)
```


### tetrahedron_status

```cpp
ELEMENT_STATUS tetrahedron_status(const Tetrahedron & tetrahedron)
```


### triangle_status

```cpp
ELEMENT_STATUS triangle_status(const Triangle2D & triangle)
```


### compute_number_of_negative_tetrahedra

```cpp
optional compute_number_of_negative_tetrahedra(absl::Span<const Tetrahedron> tetrahedra)
```


### compute_number_of_negative_tetrahedra

```cpp
optional compute_number_of_negative_tetrahedra(absl::Span<const ModifiedTetrahedron> tetrahedra)
```


### compute_number_of_negative_triangles

```cpp
optional compute_number_of_negative_triangles(Span triangles)
```


### compute_number_of_negative_triangles

```cpp
optional compute_number_of_negative_triangles(Span triangles)
```


### edge_from_internal_distance

```cpp
PolyhedronFacetEdge edge_from_internal_distance(const SolidMesh3D & solid, index_t tetrahedron_id, const InternalDistance & idistance)
```


### edge_from_internal_distance

```cpp
PolygonEdge edge_from_internal_distance(const SurfaceMesh2D & surface, index_t triangle_id, const InternalDistance & idistance)
```


### allowed_collapse_vertex_vertex

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_vertex_vertex(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge, const class BackgroundSurfaceConstraintModifier::Constraints & constraints)
```


### allowed_collapse_vertex_vertex_by_constraints

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_vertex_vertex_by_constraints(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge, const class BackgroundSurfaceConstraintModifier::Constraints & constraints)
```


### allowed_collapse_edge_vertex

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge, const class BackgroundSurfaceConstraintModifier::Constraints & constraints)
```


### allowed_collapse_edge_vertex_by_constraints

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_constraints(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge, const class BackgroundSurfaceConstraintModifier::Constraints & constraints)
```


### is_swap_edge_allowed

```cpp
bool is_swap_edge_allowed(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge, const class BackgroundSurfaceConstraintModifier::Constraints & constraints)
```


### is_swap_edge_allowed_by_constraints

```cpp
bool is_swap_edge_allowed_by_constraints(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge, const class BackgroundSurfaceConstraintModifier::Constraints & constraints)
```


### is_edge_removal_allowed

```cpp
bool is_edge_removal_allowed(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge)
```


### is_edge_removal_allowed_by_constraints

```cpp
bool is_edge_removal_allowed_by_constraints(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge)
```


### allowed_split_collapse_edge

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge, const class BackgroundSurfaceConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_edge_by_constraints

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_split_collapse_edge_by_constraints(const ModifiableBackgroundSurface & surface, const PolygonEdge & edge, const class BackgroundSurfaceConstraintModifier::Constraints & constraints)
```


### decimate_background_surface

```cpp
void decimate_background_surface(BackgroundSurfaceConstraintModifier & constraint_modifier)
```


### epsilon_optimize_background_surface_elements

```cpp
void epsilon_optimize_background_surface_elements(BackgroundSurfaceConstraintModifier & constraint_modifier, Span triangles)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const ElementStamp & element_stamp)
```


### optimize_background_surface_elements

```cpp
void optimize_background_surface_elements(BackgroundSurfaceConstraintModifier & constraint_modifier, index_t first_element)
```


### simplify_background_surface_multilayers

```cpp
optional simplify_background_surface_multilayers(BackgroundSurfaceConstraintModifier & constraint_modifier, Span triangles, const InfiniteLine2D & line)
```


### detect_coplanar_multilayers

```cpp
std::tuple<std::vector<geode::index_t>, OwnerInfiniteLine2D> detect_coplanar_multilayers(const BackgroundSurface & surface, index_t triangle_id)
```


### does_split_edge_improve_metric

```cpp
bool does_split_edge_improve_metric(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, const Point3D & split_point, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### does_collapse_edge_improve_metric

```cpp
bool does_collapse_edge_improve_metric(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, const local_index_t apex, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### does_collapse_edge_improve_metric

```cpp
bool does_collapse_edge_improve_metric(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, const Point3D & collapse_point, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### does_swap_edge_improve_metric

```cpp
bool does_swap_edge_improve_metric(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### does_swap_facet_improve_metric

```cpp
bool does_swap_facet_improve_metric(const BackgroundSolid & solid, const PolyhedronFacet & facet, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### does_split_collapse_edge_improve_metric

```cpp
bool does_split_collapse_edge_improve_metric(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const Point3D & point, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### does_split_collapse_facet_improve_metric

```cpp
bool does_split_collapse_facet_improve_metric(const BackgroundSolid & solid, const PolyhedronFacet & facet, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### does_split_collapse_facet_improve_metric

```cpp
bool does_split_collapse_facet_improve_metric(const BackgroundSolid & solid, const PolyhedronFacet & facet, const Point3D & point, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### does_split_split_collapse_edge_improve_metric

```cpp
bool does_split_split_collapse_edge_improve_metric(const BackgroundSolid & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point, const BackgroundSolidImprovementSimulator & improvement_simulator)
```


### optimize_background_solid_elements

```cpp
void optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, const BackgroundSolidInternalDistanceImprovementSimulator & improvement_simulator, Span elements)
```


### shift_optimize_background_solid_elements

```cpp
void shift_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, const BackgroundSolidInternalDistanceImprovementSimulator & improvement_simulator, Span elements)
```


### blinded_quality_optimize_background_solid_elements

```cpp
void blinded_quality_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, const BackgroundSolidInternalDistanceImprovementSimulator & improvement_simulator, Span elements)
```


### allowed_collapse_vertex_vertex

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_vertex_vertex(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_collapse_vertex_vertex_by_constraints

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_vertex_vertex_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_collapse_edge_vertex

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_collapse_edge_vertex_by_constraints

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_collapse_facet_vertex

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_collapse_facet_vertex(const ModifiableBackgroundSolid & solid, const PolyhedronFacet & facet, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_collapse_facet_vertex_by_constraints

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_collapse_facet_vertex_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacet & facet, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_collapse_edge_edge

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_collapse_edge_edge(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```


### is_swap_edge_allowed

```cpp
bool is_swap_edge_allowed(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### is_swap_facet_allowed

```cpp
bool is_swap_facet_allowed(const ModifiableBackgroundSolid & solid, const PolyhedronFacet & facet, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### is_edge_removal_allowed

```cpp
bool is_edge_removal_allowed(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge)
```


### allowed_split_collapse_edge

```cpp
AllowedByConstraints allowed_split_collapse_edge(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_edge_by_constraints

```cpp
AllowedByConstraints allowed_split_collapse_edge_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_facet

```cpp
AllowedByConstraints allowed_split_collapse_facet(const ModifiableBackgroundSolid & solid, const PolyhedronFacet & facet, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_split_collapse_facet_by_constraints

```cpp
AllowedByConstraints allowed_split_collapse_facet_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacet & facet, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_split_split_collapse

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_split_split_collapse(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_split_split_collapse_by_constraints

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_split_split_collapse_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### is_edge_removal_allowed_by_constraints

```cpp
bool is_edge_removal_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge)
```


### is_swap_edge_allowed_by_constraints

```cpp
bool is_swap_edge_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### is_swap_facet_allowed_by_constraints

```cpp
bool is_swap_facet_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacet & facet, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### epsilon_optimize_background_solid_elements

```cpp
vector epsilon_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, Span tetrahedra)
```


### find_unique_facet_normals

```cpp
vector find_unique_facet_normals(const geode::internal::BackgroundSolid & background, const absl::flat_hash_set<geode::PolyhedronFacet> & incident_facets_on_border)
```


### determine_splits_order

```cpp
vector determine_splits_order(const CorafinatedSurface & corafinated_surface, Skin & skin)
```


### find_split_orders

```cpp
array find_split_orders(CorafinatedSurface & corafinated_surface, Skins & skins)
```


 Find the order of the splits between the corafinated surface and the skins. The corafinated surface may be modified to be able to find a correct split order for all skins.

### simplify_background_solid_multilayers

```cpp
vector simplify_background_solid_multilayers(BackgroundSolidConstraintModifier & constraint_modifier, Span tetrahedra, const Plane & plane)
```


### detect_coplanar_multilayers

```cpp
optional detect_coplanar_multilayers(const BackgroundSolid & solid, index_t tetrahedron_id)
```


### simplify_background_solid_macro_edge

```cpp
void simplify_background_solid_macro_edge(BackgroundSolidConstraintModifier & constraint_modifier, index_t first_element, const MeshEdge & macro_edge)
```


### simplify_background_solid_macro_facet

```cpp
void simplify_background_solid_macro_facet(BackgroundSolidConstraintModifier & constraint_modifier, index_t first_element, const MeshPolygon & macro_facet)
```


### does_collapse_edge_improve_metric

```cpp
bool does_collapse_edge_improve_metric(const BackgroundSurface & surface, const PolygonEdge & edge, const Point2D & collapse_point, const BackgroundSurfaceImprovementSimulator & improvement_simulator)
```


### does_swap_edge_improve_metric

```cpp
bool does_swap_edge_improve_metric(const BackgroundSurface & surface, const PolygonEdge & edge, const BackgroundSurfaceImprovementSimulator & improvement_simulator)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const BlockElement<ElementId> & element)
```


### optimize_background_brep_elements

```cpp
vector optimize_background_brep_elements(BackgroundBRepConstraintModifier & constraint_modifier, Span tetrahedra)
```


### allowed_collapse_vertex_vertex

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_vertex_vertex(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### allowed_collapse_edge_vertex

```cpp
ALLOWED_COLLAPSE_EDGE_VERTEX allowed_collapse_edge_vertex(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### allowed_collapse_facet_vertex

```cpp
ALLOWED_COLLAPSE_FACET_VERTEX allowed_collapse_facet_vertex(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### allowed_collapse_edge_edge

```cpp
ALLOWED_COLLAPSE_EDGE_EDGE allowed_collapse_edge_edge(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1)
```


### is_swap_edge_allowed

```cpp
bool is_swap_edge_allowed(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### is_swap_facet_allowed

```cpp
bool is_swap_facet_allowed(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### is_edge_removal_allowed

```cpp
bool is_edge_removal_allowed(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge)
```


### is_move_point_allowed

```cpp
bool is_move_point_allowed(const ModifiableBackgroundBRep & brep, index_t unique_vertex, const Point3D & position_to, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### is_split_collapse_edge_allowed_by_constraints

```cpp
BlocksAllowedByConstraints is_split_collapse_edge_allowed_by_constraints(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### is_split_collapse_facet_allowed_by_constraints

```cpp
BlocksAllowedByConstraints is_split_collapse_facet_allowed_by_constraints(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacet & facet, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### is_split_split_collapse_allowed_by_constraints

```cpp
bool is_split_split_collapse_allowed_by_constraints(const ModifiableBackgroundBRep & brep, const Block3D & block, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point, const class BackgroundBRepConstraintModifier::Constraints & constraints)
```


### decimate_background_brep

```cpp
void decimate_background_brep(BackgroundBRepConstraintModifier & constraint_modifier, const BackgroundBRepDecimatorOperator & decimator_operator)
```


### epsilon_optimize_background_brep_elements

```cpp
vector epsilon_optimize_background_brep_elements(BackgroundBRepConstraintModifier & constraint_modifier, Span tetrahedra)
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





