# class ScalarFunctionExpliciter3DImpl


## Functions

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


### ScalarFunctionExpliciter3DImpl

```cpp
protected void ScalarFunctionExpliciter3DImpl(BackgroundSolid bmesh, string_view scalar_function_name)
```


### ~ScalarFunctionExpliciter3DImpl

```cpp
protected void ~ScalarFunctionExpliciter3DImpl()
```


### inserter

```cpp
protected BackgroundSolidInserter & inserter()
```


### scalar_function_name

```cpp
protected string_view scalar_function_name()
```


### add_inserted_isovalue_to_list

```cpp
protected void add_inserted_isovalue_to_list(double isovalue)
```


### bmesh_solid_with_isovalue_attribute_on_tetrahedra

```cpp
public int bmesh_solid_with_isovalue_attribute_on_tetrahedra()
```




