# namespace geode



## Namespaces

* [detail](detail/index.md)


## Records

* [DataConstraintsManager](DataConstraintsManager.md)
* [DataPointsManager](DataPointsManager.md)
* [FieldLines](FieldLines.md)
* [FrameFieldParameterization](FrameFieldParameterization.md)
* [FrameFieldSmoother](FrameFieldSmoother.md)
* [FrameField](FrameField.md)
* [FrameTransform](FrameTransform.md)
* [GridDerivativesMinimization](GridDerivativesMinimization.md)
* [GridFDMBoundaryFreeCurvatureMinimization](GridFDMBoundaryFreeCurvatureMinimization.md)
* [GridFDMBoundaryFreeHessianMinimization](GridFDMBoundaryFreeHessianMinimization.md)
* [GridFDMBoundaryFreeLaplacianMinimization](GridFDMBoundaryFreeLaplacianMinimization.md)
* [GridFDMCurvatureMinimization](GridFDMCurvatureMinimization.md)
* [GridFDMHessianMinimization](GridFDMHessianMinimization.md)
* [GridFDMLaplacianMinimization](GridFDMLaplacianMinimization.md)
* [NumericsFrameFieldLibrary](NumericsFrameFieldLibrary.md)
* [NumericsScalarFunctionLibrary](NumericsScalarFunctionLibrary.md)
* [NumericsSurfaceLibrary](NumericsSurfaceLibrary.md)
* [uuid](uuid.md)


## Functions

### compute_LSCM_parameterization

```cpp
void compute_LSCM_parameterization(const TriangulatedSurface3D & mesh, string_view attribute_name)
```


 Compute Least Squares Conformal Maps

**mesh** [in] Input triangulated mesh

**attribute_name** [in] The VariableAttribute< Point2D > name which holds the parametric values. Values are stored on the vertices.

### create_scalar_function_computer

```cpp
std::unique_ptr<GridDerivativesMinimization<dimension> > create_scalar_function_computer(GridScalarFunctionComputerType , const Grid<dimension> & grid, const DataConstraintsManager<dimension> & data_constraints)
```


### convert_surface3d_into_2d

```cpp
std::unique_ptr<TriangulatedSurface2D> convert_surface3d_into_2d(const TriangulatedSurface3D & mesh, string_view attribute_name)
```


 Compute a 2D mesh from a 3D mesh and its parametric coordinates

**mesh** [in] Input triangulated mesh

**attribute_name** [in] The VariableAttribute< Point2D > name which holds the parametric values. Values are stored on the vertices.



## Enums

| enum class GridScalarFunctionComputerType |

--

| FDM_laplacian_minimization |
| FDM_hessian_minimization |
| FDM_curvature_minimization |
| FDM_boundaryfree_laplacian_minimization |
| FDM_boundaryfree_hessian_minimization |
| FDM_boundaryfree_curvature_minimization |





