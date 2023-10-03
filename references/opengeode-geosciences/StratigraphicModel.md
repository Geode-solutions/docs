# class StratigraphicModel

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/stratigraphic_model.h#49
```

 A Stratigraphic Model is an ImplicitStructuralModel where each block also has a specific attribute to store the stratigraphic coordinates of its vertices.



```cpp
Inherits from ImplicitStructuralModel
```



## Records

Impl



## Functions

### StratigraphicModel

```cpp
public void StratigraphicModel()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#478
```

### StratigraphicModel

```cpp
public void StratigraphicModel(StratigraphicModel && implicit_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#483
```

### StratigraphicModel

```cpp
public void StratigraphicModel(ImplicitStructuralModel && structural_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#490
```

### StratigraphicModel

```cpp
public void StratigraphicModel(StructuralModel && structural_model)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#497
```

### ~StratigraphicModel

```cpp
public void ~StratigraphicModel()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#503
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/stratigraphic_model.h#67
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../include/geode/geosciences/implicit/representation/core/stratigraphic_model.h#72
```

### stratigraphic_coordinates

```cpp
public StratigraphicPoint3D stratigraphic_coordinates(const Block3D & block, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#505
```

 Return the stratigraphic coordinates of the point at the given vertex of the given block.

### stratigraphic_coordinates

```cpp
public absl::optional<StratigraphicPoint3D> stratigraphic_coordinates(const Block3D & block, const Point3D & geometric_point)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#511
```

 Return the stratigraphic coordinates of the point, computed in the polyhedron containing the given point in the given block, if there is any.

### stratigraphic_coordinates

```cpp
public StratigraphicPoint3D stratigraphic_coordinates(const Block3D & block, const Point3D & geometric_point, index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#519
```

 Return the stratigraphic coordinates of the point, computed in the given polyhedron of the given block.

### geometric_coordinates

```cpp
public absl::optional<Point3D> geometric_coordinates(const Block3D & block, const StratigraphicPoint3D & stratigraphic_point)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#528
```

 Return the geometric coordinates of the point, computed from its stratigraphic coordinates in the polyhedron containing the given coordinates in the stratigraphic space in the given block, if there is any.

### geometric_coordinates

```cpp
public Point3D geometric_coordinates(const Block3D & block, const StratigraphicPoint3D & stratigraphic_point, index_t polyhedron_id)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#536
```

 Return the geometric coordinates of the point, computed from its stratigraphic coordinates in the given polyhedron of the given block.

### stratigraphic_containing_polyhedron

```cpp
public absl::optional<index_t> stratigraphic_containing_polyhedron(const Block3D & block, const StratigraphicPoint3D & stratigraphic_point)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#544
```

 Returns the block polyhedron containing the given stratigraphic point, if there is any.

### stratigraphic_surface

```cpp
public int stratigraphic_surface(const Block3D & block, const Surface3D & surface)
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#553
```

### stratigraphic_bounding_box

```cpp
public BoundingBox3D stratigraphic_bounding_box()
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#560
```

### initialize_stratigraphic_query_trees

```cpp
public void initialize_stratigraphic_query_trees(StratigraphicModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#565
```

### instantiate_stratigraphic_location_on_blocks

```cpp
public void instantiate_stratigraphic_location_on_blocks(StratigraphicModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#571
```

### set_stratigraphic_location

```cpp
public void set_stratigraphic_location(const Block3D & block, index_t vertex_id, stratigraphic_location_type value, StratigraphicModelBuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/geosciences/implicit/representation/core/stratigraphic_model.cpp#585
```



