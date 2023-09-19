# namespace geode



## Namespaces

* [detail](detail/index.md)


## Records

* [BRepMappings](BRepMappings.md)
* [ImplicitDataManager](ImplicitDataManager.md)
* [ImplicitExplicitationLibrary](ImplicitExplicitationLibrary.md)
* [ImplicitIOLibrary](ImplicitIOLibrary.md)
* [ImplicitImplicitationLibrary](ImplicitImplicitationLibrary.md)
* [ImplicitInsertionLibrary](ImplicitInsertionLibrary.md)
* [ImplicitModelerLibrary](ImplicitModelerLibrary.md)
* [ImplicitStructuralModelHorizonExpliciter](ImplicitStructuralModelHorizonExpliciter.md)
* [ImplicitStructuralModeler](ImplicitStructuralModeler.md)
* [ModelMappings](ModelMappings.md)
* [RegularGridScalarFunctionComputer](RegularGridScalarFunctionComputer.md)
* [RegularGridScalarFunctionExpliciter2D](RegularGridScalarFunctionExpliciter2D.md)
* [RegularGridScalarFunctionExpliciter3D](RegularGridScalarFunctionExpliciter3D.md)
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




## Enums

| enum class GridScalarFunctionComputerType |

--

| FDM_laplacian_minimization |
| FDM_hessian_minimization |
| FDM_curvature_minimization |
| FDM_boundaryfree_laplacian_minimization |
| FDM_boundaryfree_hessian_minimization |
| FDM_boundaryfree_curvature_minimization |




