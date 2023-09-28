# class RegularGrid

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_surface.h#39
```

```cpp
Inherits from SurfaceMesh<2>, Grid<2>
```



## Functions

### create

```cpp
public std::unique_ptr<RegularGrid2D> create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_surface.cpp#33
```

 Create a new RegularGrid using default data structure.

### create

```cpp
public std::unique_ptr<RegularGrid2D> create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_surface.cpp#39
```

 Create a new RegularGrid using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_surface.cpp#45
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_surface.h#62
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_surface.h#67
```

### cell_attribute_manager

```cpp
public AttributeManager & cell_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_surface.cpp#58
```

### grid_vertex_attribute_manager

```cpp
public AttributeManager & grid_vertex_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_surface.cpp#63
```

### clone

```cpp
public std::unique_ptr<RegularGrid2D> clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_surface.cpp#50
```

### RegularGrid

```cpp
protected void RegularGrid()
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_surface.h#80
```

### RegularGrid

```cpp
protected void RegularGrid(RegularGrid<2> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_surface.h#81
```

### operator=

```cpp
protected RegularGrid<2> & operator=(RegularGrid<2> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_surface.h#82
```



# class RegularGrid

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_solid.h#41
```

```cpp
Inherits from SolidMesh<3>, Grid<3>
```



## Functions

### create

```cpp
public std::unique_ptr<RegularGrid3D> create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_solid.cpp#33
```

 Create a new RegularGrid using default data structure.

### create

```cpp
public std::unique_ptr<RegularGrid3D> create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_solid.cpp#39
```

 Create a new RegularGrid using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_solid.cpp#45
```

### native_extension

```cpp
public string_view native_extension()
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_solid.h#64
```

### native_extension_static

```cpp
public string_view native_extension_static()
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_solid.h#69
```

### cell_attribute_manager

```cpp
public AttributeManager & cell_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_solid.cpp#58
```

### grid_vertex_attribute_manager

```cpp
public AttributeManager & grid_vertex_attribute_manager()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_solid.cpp#63
```

### clone

```cpp
public std::unique_ptr<RegularGrid3D> clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/regular_grid_solid.cpp#50
```

### RegularGrid

```cpp
protected void RegularGrid()
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_solid.h#82
```

### RegularGrid

```cpp
protected void RegularGrid(RegularGrid<3> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_solid.h#83
```

### operator=

```cpp
protected RegularGrid<3> & operator=(RegularGrid<3> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/regular_grid_solid.h#84
```



# class RegularGrid

