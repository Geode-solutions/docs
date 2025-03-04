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

* [BMeshEdgeOnIntersection](BMeshEdgeOnIntersection.md)
* [BRepMappings](BRepMappings.md)
* [BoxModelFromTopography](BoxModelFromTopography.md)
* [ClosedSurfacesFromCurves](ClosedSurfacesFromCurves.md)
* [CrossSectionImpliciter](CrossSectionImpliciter.md)
* [EdgeVertex](EdgeVertex.md)
* [GridScalarFunctionExpliciter2D](GridScalarFunctionExpliciter2D.md)
* [GridScalarFunctionExpliciter3D](GridScalarFunctionExpliciter3D.md)
* [HorizonsStack](HorizonsStack.md)
* [ImplicitExplicitationLibrary](ImplicitExplicitationLibrary.md)
* [ImplicitIOLibrary](ImplicitIOLibrary.md)
* [ImplicitImplicitationLibrary](ImplicitImplicitationLibrary.md)
* [ImplicitInsertionLibrary](ImplicitInsertionLibrary.md)
* [ImplicitModelFromSolid](ImplicitModelFromSolid.md)
* [ImplicitModelFromStructuralModel](ImplicitModelFromStructuralModel.md)
* [ImplicitStructuralModelHorizonExpliciter](ImplicitStructuralModelHorizonExpliciter.md)
* [ImplicitWorkflowsLibrary](ImplicitWorkflowsLibrary.md)
* [ImplicitationParameters](ImplicitationParameters.md)
* [ModelComponentToSectionComponentMapping](ModelComponentToSectionComponentMapping.md)
* [ModelMappings](ModelMappings.md)
* [ScalarFunctionComputer](ScalarFunctionComputer.md)
* [SingleSurfaceFromVertices](SingleSurfaceFromVertices.md)
* [SolidMeshScalarFunctionExpliciter](SolidMeshScalarFunctionExpliciter.md)
* [StratigraphicLine](StratigraphicLine.md)
* [StratigraphicModelInserter](StratigraphicModelInserter.md)
* [StratigraphicSectionInserter](StratigraphicSectionInserter.md)
* [StratigraphicSolidPathFinder](StratigraphicSolidPathFinder.md)
* [StratigraphicSurfaceCutter](StratigraphicSurfaceCutter.md)
* [StratigraphicSurface](StratigraphicSurface.md)
* [StructuralModelImpliciter](StructuralModelImpliciter.md)
* [StructuralModelToCrossSectionMapping](StructuralModelToCrossSectionMapping.md)
* [SurfaceCutByBoundaries](SurfaceCutByBoundaries.md)
* [SurfacePartXYZConverter](SurfacePartXYZConverter.md)
* [SurfacePart](SurfacePart.md)
* [SurfacePartsStitcher](SurfacePartsStitcher.md)
* [SurfaceStitcher](SurfaceStitcher.md)
* [uuid](uuid.md)


## Functions

### extract_implicit_cross_section_from_axis

```cpp
tuple extract_implicit_cross_section_from_axis(const ImplicitStructuralModel & model, local_index_t axis_direction, double axis_coordinate)
```


### extract_implicit_cross_section_from_plane

```cpp
tuple extract_implicit_cross_section_from_plane(const ImplicitStructuralModel & model, const Plane & section_plane)
```


### extract_stratigraphic_section_from_axis

```cpp
tuple extract_stratigraphic_section_from_axis(const StratigraphicModel & model, local_index_t axis_direction, double axis_coordinate)
```


### lists_have_common_intersections

```cpp
bool lists_have_common_intersections(Span first_edges_list, Span second_edges_list)
```


### has_surface_parts_on_other_side

```cpp
bool has_surface_parts_on_other_side(Span cut_surface_parts, index_t surface_part_id, const uuid & cutting_surface_id)
```


### surface_on_interior_side

```cpp
optional surface_on_interior_side(Span cut_surface_parts)
```


### surface_parts_on_other_side

```cpp
vector surface_parts_on_other_side(Span cut_surface_parts, index_t surface_part_id, const uuid & cutting_surface_id)
```


### surface_parts_common_intersections

```cpp
vector surface_parts_common_intersections(const SurfacePart & surface_part_to_stitch, const SurfacePart & surface_to_stitch_on, const uuid & cutting_surface_id, absl::FixedArray<index_t> & vertices_mapping)
```


### remove_stitched_surface_parts

```cpp
void remove_stitched_surface_parts(std::vector<SurfacePart> & cut_surface_parts)
```


### solid_path_to_string

```cpp
basic_string solid_path_to_string(const SolidPath & path)
```




## Enums

| enum class SURFACE_ORIENTATION |

--

| towards_block |
| opposite_to_block |
| no_orientation |





