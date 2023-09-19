# class PGP3D


## Records

Constraint



## Functions

### PGP3D

```cpp
```cpp
```cpp
```cpp
public void PGP3D(class FrameFieldParameterization::Impl & impl, double mesh_size)
```
```
```
```


### compute_parameterization

```cpp
```cpp
```cpp
```cpp
public void compute_parameterization()
```
```
```
```


### parametric_coordinates_in_first_basis

```cpp
```cpp
```cpp
```cpp
public TetrahedronCornerParam parametric_coordinates_in_first_basis(const Block3D & block, const SolidMesh3D & solid, index_t tetrahedron)
```
```
```
```


### translation

```cpp
```cpp
```cpp
```cpp
public Vector3D translation(index_t i, index_t j)
```
```
```
```


### integer_dimension

```cpp
```cpp
```cpp
```cpp
public absl::optional<local_index_t> integer_dimension(const std::array<Point<dim>, dim> & param3d)
```
```
```
```


### integer_value

```cpp
```cpp
```cpp
```cpp
public absl::optional<double> integer_value(double value)
```
```
```
```


### compute_constant

```cpp
```cpp
```cpp
```cpp
public Vector3D compute_constant(index_t vertex_i, index_t vertex_j, const FrameTransform3D & mapping)
```
```
```
```




