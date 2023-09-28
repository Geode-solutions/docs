# class TetrahedralSolidScalarFunction

```cpp
Defined at ../../include/geode/mesh/helpers/tetrahedral_solid_scalar_function.h#39
```

## Records

Impl



## Functions

### TetrahedralSolidScalarFunction

```cpp
public void TetrahedralSolidScalarFunction<dimension>(TetrahedralSolidScalarFunction<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_scalar_function.cpp#107
```

### ~TetrahedralSolidScalarFunction

```cpp
public void ~TetrahedralSolidScalarFunction<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_scalar_function.cpp#131
```

### create

```cpp
public TetrahedralSolidScalarFunction create(const TetrahedralSolid<dimension> & solid, string_view function_name, double value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_scalar_function.cpp#137
```

 Create a new object function from a TetrahedralSolid, a name, and a value. Throws an exception if an attribute with the same name exists.

### find

```cpp
public TetrahedralSolidScalarFunction find(const TetrahedralSolid<dimension> & solid, string_view function_name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_scalar_function.cpp#147
```

 Finds an object function that already exists in the given TetrahedralSolid, from its given name. Throws an exception if no attribute with the same name exists.

### set_value

```cpp
public void set_value(index_t vertex_index, double value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_scalar_function.cpp#156
```

### value

```cpp
public double value(index_t vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_scalar_function.cpp#163
```

### value

```cpp
public double value(const Point<dimension> & point, index_t tetrahedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_scalar_function.cpp#170
```



# class TetrahedralSolidScalarFunction

