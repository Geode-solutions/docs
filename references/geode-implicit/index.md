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

* [BRepMappings](BRepMappings.md)
* [BoxModelFromTopography](BoxModelFromTopography.md)
* [ClosedSurfacesFromCurves](ClosedSurfacesFromCurves.md)
* [ComputationGrid](ComputationGrid.md)
* [CrossSectionImplicitationParameters](CrossSectionImplicitationParameters.md)
* [CrossSectionImpliciter](CrossSectionImpliciter.md)
* [CutGridFDMCurvatureMinimization](CutGridFDMCurvatureMinimization.md)
* [CutGridScalarFunction](CutGridScalarFunction.md)
* [CutGrid](CutGrid.md)
* [DataConstraintsManager](DataConstraintsManager.md)
* [DataPointsManager](DataPointsManager.md)
* [EdgeVertex](EdgeVertex.md)
* [GradientDataManager](GradientDataManager.md)
* [GridScalarFunctionExpliciter2D](GridScalarFunctionExpliciter2D.md)
* [GridScalarFunctionExpliciter3D](GridScalarFunctionExpliciter3D.md)
* [HorizonsStack](HorizonsStack.md)
* [ImplicitExplicitationLibrary](ImplicitExplicitationLibrary.md)
* [ImplicitIOLibrary](ImplicitIOLibrary.md)
* [ImplicitImplicitationLibrary](ImplicitImplicitationLibrary.md)
* [ImplicitModelFromSolid](ImplicitModelFromSolid.md)
* [ImplicitModelFromStructuralModel](ImplicitModelFromStructuralModel.md)
* [ImplicitScalarFunctionLibrary](ImplicitScalarFunctionLibrary.md)
* [ImplicitStructuralModelHorizonExpliciter](ImplicitStructuralModelHorizonExpliciter.md)
* [ImplicitWorkflowsLibrary](ImplicitWorkflowsLibrary.md)
* [ImplicitationParameters](ImplicitationParameters.md)
* [ModelComponentToSectionComponentMapping](ModelComponentToSectionComponentMapping.md)
* [ScalarFunctionComputer](ScalarFunctionComputer.md)
* [SingleSurfaceFromVertices](SingleSurfaceFromVertices.md)
* [SolidMeshScalarFunctionExpliciter](SolidMeshScalarFunctionExpliciter.md)
* [StructuralModelImplicitationParameters](StructuralModelImplicitationParameters.md)
* [StructuralModelImpliciter](StructuralModelImpliciter.md)
* [StructuralModelToCrossSectionMapping](StructuralModelToCrossSectionMapping.md)
* [TangentialDataManager](TangentialDataManager.md)
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




