# class EdgedCurveBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/edged_curve_builder.cpp#82
```

```cpp
Inherits from GraphBuilder, CoordinateReferenceSystemManagersBuilder<2U>
```



# class EdgedCurveBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/edged_curve_builder.cpp#83
```

```cpp
Inherits from GraphBuilder, CoordinateReferenceSystemManagersBuilder<3U>
```



# class EdgedCurveBuilder

```cpp
Defined at ../../include/geode/mesh/builder/edged_curve_builder.h#42
```

 Interface class to represent the builder of a EdgedCurve



```cpp
Inherits from GraphBuilder, CoordinateReferenceSystemManagersBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<EdgedCurveBuilder<dimension> > create(EdgedCurve<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/edged_curve_builder.cpp#42
```

 Create the builder associated with an EdgedCurve.

**mesh** [in] The EdgedCurve to build/modify

### create_point

```cpp
public index_t create_point(Point<dimension> point)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/edged_curve_builder.cpp#50
```

 Create a new point with associated coordinates.

**point** [in] The point to create

**return** the index of the created point

### copy

```cpp
public void copy(const EdgedCurve<dimension> & edged_curve)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/edged_curve_builder.cpp#60
```

### EdgedCurveBuilder

```cpp
protected void EdgedCurveBuilder<dimension>(EdgedCurve<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/edged_curve_builder.cpp#33
```



