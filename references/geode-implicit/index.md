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
* [CrossSectionImpliciter](CrossSectionImpliciter.md)
* [EdgeVertex](EdgeVertex.md)
* [GridScalarFunctionExpliciter2D](GridScalarFunctionExpliciter2D.md)
* [GridScalarFunctionExpliciter3D](GridScalarFunctionExpliciter3D.md)
* [ImplicitExplicitationLibrary](ImplicitExplicitationLibrary.md)
* [ImplicitIOLibrary](ImplicitIOLibrary.md)
* [ImplicitImplicitationLibrary](ImplicitImplicitationLibrary.md)
* [ImplicitInsertionLibrary](ImplicitInsertionLibrary.md)
* [ImplicitModelFromSolid](ImplicitModelFromSolid.md)
* [ImplicitModelFromStructuralModel](ImplicitModelFromStructuralModel.md)
* [ImplicitStructuralModelHorizonExpliciter](ImplicitStructuralModelHorizonExpliciter.md)
* [ImplicitWorkflowsLibrary](ImplicitWorkflowsLibrary.md)
* [ModelComponentToSectionComponentMapping](ModelComponentToSectionComponentMapping.md)
* [ModelMappings](ModelMappings.md)
* [ScalarFunctionComputer](ScalarFunctionComputer.md)
* [SolidMeshScalarFunctionExpliciter](SolidMeshScalarFunctionExpliciter.md)
* [StratigraphicModelInserter](StratigraphicModelInserter.md)
* [StratigraphicSectionInserter](StratigraphicSectionInserter.md)
* [StructuralModelImpliciter](StructuralModelImpliciter.md)
* [StructuralModelToCrossSectionMapping](StructuralModelToCrossSectionMapping.md)
* [uuid](uuid.md)


## Functions

### extract_implicit_cross_section_from_axis

```cpp
tuple extract_implicit_cross_section_from_axis(const ImplicitStructuralModel & model, local_index_t axis_direction, double axis_coordinate)
```


### extract_stratigraphic_section_from_axis

```cpp
tuple extract_stratigraphic_section_from_axis(const StratigraphicModel & model, local_index_t axis_direction, double axis_coordinate)
```




