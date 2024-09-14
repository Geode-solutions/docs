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

* [AllowedByConstraints](AllowedByConstraints.md)
* [BackgroundBRepBuilder](BackgroundBRepBuilder.md)
* [BackgroundBRepConstraintModifier](BackgroundBRepConstraintModifier.md)
* [BackgroundBRepGenericOptimizer](BackgroundBRepGenericOptimizer.md)
* [BackgroundBRepInserter](BackgroundBRepInserter.md)
* [BackgroundBRepInternalDistanceOptimizer](BackgroundBRepInternalDistanceOptimizer.md)
* [BackgroundBRepModifier](BackgroundBRepModifier.md)
* [BackgroundBRepOrchestrator](BackgroundBRepOrchestrator.md)
* [BackgroundBRep](BackgroundBRep.md)
* [BackgroundInsertionException](BackgroundInsertionException.md)
* [BackgroundOrchestrator](BackgroundOrchestrator.md)
* [BackgroundSolidBuilder](BackgroundSolidBuilder.md)
* [BackgroundSolidConstraintModifier](BackgroundSolidConstraintModifier.md)
* [BackgroundSolidDecimator](BackgroundSolidDecimator.md)
* [BackgroundSolidInserter](BackgroundSolidInserter.md)
* [BackgroundSolidInternalDistanceOptimizer](BackgroundSolidInternalDistanceOptimizer.md)
* [BackgroundSolidModifier](BackgroundSolidModifier.md)
* [BackgroundSolidOptimizer](BackgroundSolidOptimizer.md)
* [BackgroundSolidOrchestrator](BackgroundSolidOrchestrator.md)
* [BackgroundSolidPainter](BackgroundSolidPainter.md)
* [BackgroundSolidShiftOptimizer](BackgroundSolidShiftOptimizer.md)
* [BackgroundSolid](BackgroundSolid.md)
* [BackgroundSurfaceBuilder](BackgroundSurfaceBuilder.md)
* [BackgroundSurfaceInserter](BackgroundSurfaceInserter.md)
* [BackgroundSurfaceModifier](BackgroundSurfaceModifier.md)
* [BackgroundSurfaceOptimizer](BackgroundSurfaceOptimizer.md)
* [BackgroundSurface](BackgroundSurface.md)
* [Background](Background.md)
* [BlindedQualityBackgroundSolidOptimizer](BlindedQualityBackgroundSolidOptimizer.md)
* [BlockElement](BlockElement.md)
* [BlocksAllowedByConstraints](BlocksAllowedByConstraints.md)
* [EdgeMacroInfoConfig](EdgeMacroInfoConfig.md)
* [ElementSearchBuilder](ElementSearchBuilder.md)
* [ElementSearch](ElementSearch.md)
* [ForbiddenSurfaceElements](ForbiddenSurfaceElements.md)
* [FourPointsInternalDistance](FourPointsInternalDistance.md)
* [InternalDistance](InternalDistance.md)
* [MacroInfo2D](MacroInfo2D.md)
* [MacroInfo3D](MacroInfo3D.md)
* [MacroInfoBuilder2D](MacroInfoBuilder2D.md)
* [MacroInfoBuilder3D](MacroInfoBuilder3D.md)
* [MacroInfoBuilder](MacroInfoBuilder.md)
* [MacroInfo](MacroInfo.md)
* [Orchestrator](Orchestrator.md)


## Functions

### repair_background_surface_elements

```cpp
void repair_background_surface_elements(const BackgroundSurface & background, BackgroundSurfaceBuilder & builder, BackgroundSurfaceModifier & modifier, Span triangles, const ForbiddenSurfaceElements & forbidden_elements, Span immuable_vertices)
```


### AbslHashValue

```cpp
H AbslHashValue(H h, const ElementStamp & element_stamp)
```


### minimal_tetrahedron_internal_distance

```cpp
InternalDistance minimal_tetrahedron_internal_distance(const Tetrahedron & tetra)
```


### fast_tetrahedron_internal_distances

```cpp
InlinedVector fast_tetrahedron_internal_distances(const TetrahedralSolid3D & solid, index_t tetrahedron_id, const struct InternalDistance::Options & options)
```


### fast_tetrahedron_internal_distances

```cpp
InlinedVector fast_tetrahedron_internal_distances(const Tetrahedron & tetra, const struct InternalDistance::Options & options)
```


### has_internal_distance_below_epsilon

```cpp
bool has_internal_distance_below_epsilon(const Tetrahedron & tetra)
```


### tetrahedron_volume_status

```cpp
TETRAHEDRON_VOLUME_STATUS tetrahedron_volume_status(const geode::Tetrahedron & tetrahedron)
```


### compute_number_of_negative_tetrahedra

```cpp
optional compute_number_of_negative_tetrahedra(Span tetrahedra)
```


### compute_number_of_negative_tetrahedra

```cpp
optional compute_number_of_negative_tetrahedra(Span tetrahedra)
```


### optimize_background_solid_elements

```cpp
void optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, index_t first_element)
```


### allowed_collapse_vertex_vertex_considering_border_conditions

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_vertex_vertex_considering_border_conditions(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### allowed_collapse_vertex_vertex

```cpp
ALLOWED_COLLAPSE_VERTEX_VERTEX allowed_collapse_vertex_vertex(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### is_collapse_vertex_vertex_allowed_by_constraints

```cpp
bool is_collapse_vertex_vertex_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, const geode::index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
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


### is_split_collapse_edge_allowed_by_constraints

```cpp
AllowedByConstraints is_split_collapse_edge_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### is_split_collapse_facet_allowed_by_constraints

```cpp
AllowedByConstraints is_split_collapse_facet_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacet & facet, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### is_split_split_collapse_allowed_by_constraints

```cpp
bool is_split_split_collapse_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge0, const PolyhedronFacetEdge & edge1, const Point3D & point, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### is_edge_removal_allowed_by_constraints

```cpp
bool is_edge_removal_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge)
```


### is_swap_edge_allowed_by_constraints

```cpp
bool is_swap_edge_allowed_by_constraints(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, index_t apex, const class BackgroundSolidConstraintModifier::Constraints & constraints)
```


### find_incident_facets_on_border

```cpp
flat_hash_set find_incident_facets_on_border(const geode::internal::BackgroundSolid & background, const geode::index_t vertex_from)
```


### find_unique_facet_normals

```cpp
vector find_unique_facet_normals(const geode::internal::BackgroundSolid & background, const absl::flat_hash_set<geode::PolyhedronFacet> & incident_facets_on_border)
```


### count_nb_surface_orientations

```cpp
geode::index_t count_nb_surface_orientations(const std::vector<geode::Vector3D> & unique_facet_normals)
```


### is_collapse_vertex_vertex_allowed_by_border_conditions

```cpp
bool is_collapse_vertex_vertex_allowed_by_border_conditions(const ModifiableBackgroundSolid & solid, const PolyhedronFacetEdge & edge, const geode::index_t vertex_from)
```


### epsilon_optimize_background_solid_elements

```cpp
vector epsilon_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, Span tetrahedra)
```


### epsilon_optimize_background_solid_elements

```cpp
vector epsilon_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, index_t first_element)
```


### shift_optimize_background_solid_elements

```cpp
void shift_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, index_t first_element)
```


### simplify_background_solid_macro_edge

```cpp
void simplify_background_solid_macro_edge(BackgroundSolidConstraintModifier & constraint_modifier, index_t first_element, const MeshEdge & macro_edge)
```


### simplify_background_solid_macro_facet

```cpp
void simplify_background_solid_macro_facet(BackgroundSolidConstraintModifier & constraint_modifier, index_t first_element, const MeshPolygon & macro_facet)
```


### blinded_quality_optimize_background_solid_elements

```cpp
void blinded_quality_optimize_background_solid_elements(BackgroundSolidConstraintModifier & constraint_modifier, index_t first_element)
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
void decimate_background_brep(ModifiableObject brep, BackgroundBRepBuilder & builder)
```


### epsilon_optimize_background_brep_elements

```cpp
vector epsilon_optimize_background_brep_elements(BackgroundBRepConstraintModifier & constraint_modifier, Span tetrahedra)
```




## Enums

| enum class MACRO_INFO_TAG |

--

| empty |
| egal |
| included |
| fixed |
| other |



| enum class TETRAHEDRON_VOLUME_STATUS |

--

| positive |
| negative |
| invalid |



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




