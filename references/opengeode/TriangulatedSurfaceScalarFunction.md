# class TriangulatedSurfaceScalarFunction

# class TriangulatedSurfaceScalarFunction

# class TriangulatedSurfaceScalarFunction

```cpp
Defined at ../../include/geode/mesh/helpers/triangulated_surface_scalar_function.h#39
```

## Records

Impl



## Functions

### TriangulatedSurfaceScalarFunction

```cpp
public void TriangulatedSurfaceScalarFunction<dimension>(TriangulatedSurfaceScalarFunction<dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/triangulated_surface_scalar_function.cpp#107
```

### ~TriangulatedSurfaceScalarFunction

```cpp
public void ~TriangulatedSurfaceScalarFunction<dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/triangulated_surface_scalar_function.cpp#134
```

### create

```cpp
public TriangulatedSurfaceScalarFunction create(const TriangulatedSurface<dimension> & solid, string_view function_name, double value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/triangulated_surface_scalar_function.cpp#140
```

 Create a new object function from a TriangulatedSurface, a name, and a value. Throws an exception if an attribute with the same name exists.

### find

```cpp
public TriangulatedSurfaceScalarFunction find(const TriangulatedSurface<dimension> & solid, string_view function_name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/triangulated_surface_scalar_function.cpp#150
```

 Finds an object function that already exists in the given TriangulatedSurface, from its given name. Throws an exception if no attribute with the same name exists.

### set_value

```cpp
public void set_value(index_t vertex_index, double value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/triangulated_surface_scalar_function.cpp#159
```

### value

```cpp
public double value(index_t vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/triangulated_surface_scalar_function.cpp#166
```

### value

```cpp
public double value(const Point<dimension> & point, index_t tetrahedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/triangulated_surface_scalar_function.cpp#173
```



