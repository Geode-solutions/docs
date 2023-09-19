# class SolidMeshScalarFunctionExpliciter


## Records

Impl



## Functions

### SolidMeshScalarFunctionExpliciter

```cpp
public void SolidMeshScalarFunctionExpliciter(TetrahedralSolid3D && solid, string_view scalar_function_name)
```


### SolidMeshScalarFunctionExpliciter

```cpp
public void SolidMeshScalarFunctionExpliciter(SolidMeshScalarFunctionExpliciter && expliciter)
```


### ~SolidMeshScalarFunctionExpliciter

```cpp
public void ~SolidMeshScalarFunctionExpliciter()
```


### add_scalar_isovalues

```cpp
public void add_scalar_isovalues(absl::Span<const double> scalar_function_values)
```


### add_one_scalar_isovalue

```cpp
public void add_one_scalar_isovalue(double isovalue)
```


### build_brep

```cpp
public BRep build_brep()
```




