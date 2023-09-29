# class ScalarFunctionExpliciter3DImpl

```cpp
Defined at ../include/geode/implicit/explicitation/private/scalar_function_expliciter_3d.h#27
```

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

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/private/scalar_function_expliciter_3d.cpp#38
```

### ScalarFunctionExpliciter3DImpl

```cpp
protected void ScalarFunctionExpliciter3DImpl(BackgroundSolid bmesh, string_view scalar_function_name)
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/private/scalar_function_expliciter_3d.cpp#22
```

### ~ScalarFunctionExpliciter3DImpl

```cpp
protected void ~ScalarFunctionExpliciter3DImpl()
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/private/scalar_function_expliciter_3d.cpp#36
```

### inserter

```cpp
protected BackgroundSolidInserter & inserter()
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/private/scalar_function_expliciter_3d.cpp#51
```

### scalar_function_name

```cpp
protected string_view scalar_function_name()
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/private/scalar_function_expliciter_3d.cpp#56
```

### add_inserted_isovalue_to_list

```cpp
protected void add_inserted_isovalue_to_list(double isovalue)
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/private/scalar_function_expliciter_3d.cpp#61
```

### bmesh_solid_with_isovalue_attribute_on_tetrahedra

```cpp
public int bmesh_solid_with_isovalue_attribute_on_tetrahedra()
```

```cpp
Defined at /github/workspace/src/geode/implicit/explicitation/private/scalar_function_expliciter_3d.cpp#67
```



