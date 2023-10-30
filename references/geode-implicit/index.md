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


## Records

* [BRepMappings](BRepMappings.md)
* [CutSurfaceGrid](CutSurfaceGrid.md)
* [GridScalarFunctionExpliciter2D](GridScalarFunctionExpliciter2D.md)
* [GridScalarFunctionExpliciter3D](GridScalarFunctionExpliciter3D.md)
* [ImplicitBlockModeler](ImplicitBlockModeler.md)
* [ImplicitDataManager](ImplicitDataManager.md)
* [ImplicitExplicitationLibrary](ImplicitExplicitationLibrary.md)
* [ImplicitIOLibrary](ImplicitIOLibrary.md)
* [ImplicitImplicitationLibrary](ImplicitImplicitationLibrary.md)
* [ImplicitInsertionLibrary](ImplicitInsertionLibrary.md)
* [ImplicitModelerLibrary](ImplicitModelerLibrary.md)
* [ImplicitStructuralModelHorizonExpliciter](ImplicitStructuralModelHorizonExpliciter.md)
* [ImplicitStructuralModeler](ImplicitStructuralModeler.md)
* [ModelMappings](ModelMappings.md)
* [ScalarFunctionComputer](ScalarFunctionComputer.md)
* [SolidMeshScalarFunctionExpliciter](SolidMeshScalarFunctionExpliciter.md)
* [StratigraphicModelInserter](StratigraphicModelInserter.md)
* [StratigraphicSectionInserter](StratigraphicSectionInserter.md)
* [uuid](uuid.md)


## Functions

### extract_implicit_cross_section_from_axis

```cpp
ImplicitCrossSection extract_implicit_cross_section_from_axis(const ImplicitStructuralModel & model, local_index_t axis_direction, double axis_coordinate)
```


### extract_stratigraphic_section_from_axis

```cpp
StratigraphicSection extract_stratigraphic_section_from_axis(const StratigraphicModel & model, local_index_t axis_direction, double axis_coordinate)
```




