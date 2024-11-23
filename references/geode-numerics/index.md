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

* [ComputationGrid](ComputationGrid.md)
* [CutGridFDMCurvatureMinimization](CutGridFDMCurvatureMinimization.md)
* [CutGridScalarFunction](CutGridScalarFunction.md)
* [CutGrid](CutGrid.md)
* [DataConstraintsManager](DataConstraintsManager.md)
* [DataPointsManager](DataPointsManager.md)
* [FDMCurvatureMinimization](FDMCurvatureMinimization.md)
* [FieldLines](FieldLines.md)
* [FrameFieldParameterization](FrameFieldParameterization.md)
* [FrameFieldSmoother](FrameFieldSmoother.md)
* [FrameField](FrameField.md)
* [FrameTransform](FrameTransform.md)
* [LinearSolver](LinearSolver.md)
* [MeshElement](MeshElement.md)
* [NumericsCoreLibrary](NumericsCoreLibrary.md)
* [NumericsFrameFieldLibrary](NumericsFrameFieldLibrary.md)
* [NumericsScalarFunctionLibrary](NumericsScalarFunctionLibrary.md)
* [NumericsSurfaceLibrary](NumericsSurfaceLibrary.md)
* [uuid](uuid.md)


## Functions

### smooth_attribute_values

```cpp
vector smooth_attribute_values(const Mesh & mesh, VariableAttribute<AttributeType> & attribute, double smoothing_factor, Span vertices_to_treat)
```


 Smooth attribute on mesh points using adjacent vertices. Given attribute should have operator++ and operator*(double) available, as well as generic attribute conversion.

**mesh** [in] Input mesh

**attribute** [in] attribute to smooth

**smoothing_factor** [in] factor between 0 and 1 to control how much adjacent vertices affect value: 0 means no smoothing, 1 means value is computed only from adjacent vertices.

**vertices_to_treat** [in] vertices on which to apply the smoothing.

**return** max ratio between initial and smoothed values, computed from genericable values.

### smooth_attribute_values

```cpp
void smooth_attribute_values(const Mesh & mesh, VariableAttribute<AttributeType> & attribute, double smoothing_factor)
```


### iterative_attribute_values_smoothing

```cpp
void iterative_attribute_values_smoothing(const Mesh & mesh, VariableAttribute<AttributeType> & attribute, double max_change_ratio, index_t max_iterations)
```


 Smooth attribute on mesh points using adjacent vertices. Given attribute should have operator++ and operator*(double) available. Smoothing will be applied iteratively until change ratio is inferior to given max_change_ratio

**mesh** [in] Input mesh

**attribute** [in] attribute to smooth

**max_change_ratio** [in] maximum factor between values from one iteration to the other. Under it iterations will stop.

### convert_surface3d_into_2d

```cpp
unique_ptr convert_surface3d_into_2d(const TriangulatedSurface3D & mesh, basic_string_view attribute_name)
```


 Compute a 2D mesh from a 3D mesh and its parametric coordinates

**mesh** [in] Input triangulated mesh

**attribute_name** [in] The VariableAttribute< Point2D > name which holds the parametric values. Values are stored on the vertices.

### compute_LSCM_parameterization

```cpp
void compute_LSCM_parameterization(const TriangulatedSurface3D & mesh, basic_string_view attribute_name)
```


 Compute Least Squares Conformal Maps

**mesh** [in] Input triangulated mesh

**attribute_name** [in] The VariableAttribute< Point2D > name which holds the parametric values. Values are stored on the vertices.

### mean_plane_around_points

```cpp
OwnerPlane mean_plane_around_points(const PointSet3D & mesh)
```


 Compute mean plane around mesh Points with Least Squares

**mesh** [in] Input mesh

### mean_plane_around_curve_points

```cpp
OwnerPlane mean_plane_around_curve_points(const EdgedCurve3D & mesh)
```


### mean_plane_around_surface_points

```cpp
OwnerPlane mean_plane_around_surface_points(const SurfaceMesh3D & mesh)
```




