# namespace geode



## Namespaces

* [detail](detail/index.md)


## Records

* [ComputationGrid](ComputationGrid.md)
* [CutGridFDMCurvatureMinimization](CutGridFDMCurvatureMinimization.md)
* [CutGrid](CutGrid.md)
* [DataConstraintsManager](DataConstraintsManager.md)
* [DataPointsManager](DataPointsManager.md)
* [FDMCurvatureMinimization](FDMCurvatureMinimization.md)
* [FieldLines](FieldLines.md)
* [FrameFieldParameterization](FrameFieldParameterization.md)
* [FrameFieldSmoother](FrameFieldSmoother.md)
* [FrameField](FrameField.md)
* [FrameTransform](FrameTransform.md)
* [NumericsFrameFieldLibrary](NumericsFrameFieldLibrary.md)
* [NumericsScalarFunctionLibrary](NumericsScalarFunctionLibrary.md)
* [NumericsSurfaceLibrary](NumericsSurfaceLibrary.md)
* [uuid](uuid.md)


## Functions

### compute_LSCM_parameterization

```cpp
void compute_LSCM_parameterization(const TriangulatedSurface3D & mesh, string_view attribute_name)
```

```cpp
Defined at /github/workspace/src/geode/numerics/surface/lscm.cpp#377
```

 Compute Least Squares Conformal Maps

**mesh** [in] Input triangulated mesh

**attribute_name** [in] The VariableAttribute< Point2D > name which holds the parametric values. Values are stored on the vertices.

### convert_surface3d_into_2d

```cpp
std::unique_ptr<TriangulatedSurface2D> convert_surface3d_into_2d(const TriangulatedSurface3D & mesh, string_view attribute_name)
```

```cpp
Defined at /github/workspace/src/geode/numerics/surface/convert.cpp#16
```

 Compute a 2D mesh from a 3D mesh and its parametric coordinates

**mesh** [in] Input triangulated mesh

**attribute_name** [in] The VariableAttribute< Point2D > name which holds the parametric values. Values are stored on the vertices.



