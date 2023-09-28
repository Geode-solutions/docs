# class TetrahedralSolidPointFunction

# class TetrahedralSolidPointFunction

# class TetrahedralSolidPointFunction

# class TetrahedralSolidPointFunction

```cpp
Defined at ../../include/geode/mesh/helpers/tetrahedral_solid_point_function.h#39
```

## Functions

### TetrahedralSolidPointFunction

```cpp
public void TetrahedralSolidPointFunction<dimension, point_dimension>(TetrahedralSolidPointFunction<dimension, point_dimension> && other)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_point_function.cpp#110
```

### ~TetrahedralSolidPointFunction

```cpp
public void ~TetrahedralSolidPointFunction<dimension, point_dimension>()
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_point_function.cpp#138
```

### create

```cpp
public TetrahedralSolidPointFunction create(const TetrahedralSolid<dimension> & solid, string_view function_name, Point<point_dimension> value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_point_function.cpp#144
```

 Create a new object function from a TetrahedralSolid, a name, and a value. Throws an exception if an attribute with the same name exists.

### find

```cpp
public TetrahedralSolidPointFunction find(const TetrahedralSolid<dimension> & solid, string_view function_name)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_point_function.cpp#154
```

 Finds an object function that already exists in the given TetrahedralSolid, from its given name. Throws an exception if no attribute with the same name exists.

### set_value

```cpp
public void set_value(index_t vertex_index, Point<point_dimension> value)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_point_function.cpp#163
```

### value

```cpp
public const Point<point_dimension> & value(index_t vertex_index)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_point_function.cpp#170
```

### value

```cpp
public Point<point_dimension> value(const Point<dimension> & point, index_t tetrahedron_id)
```

```cpp
Defined at /github/workspace/src/geode/mesh/helpers/tetrahedral_solid_point_function.cpp#178
```



