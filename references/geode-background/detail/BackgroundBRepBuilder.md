# class BackgroundBRepBuilder

```cpp
Defined at ../include/geode/background/brep/private/background_brep_builder.h#26
```

```cpp
Inherits from BRepBuilder
```



## Functions

### BackgroundBRepBuilder

```cpp
public void BackgroundBRepBuilder(BackgroundBRep & background_brep)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_builder.cpp#48
```

### ~BackgroundBRepBuilder

```cpp
public void ~BackgroundBRepBuilder()
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_builder.cpp#55
```

### background_solid_builder

```cpp
public std::unique_ptr<BackgroundSolidBuilder> background_solid_builder(const uuid & block_id)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_builder.cpp#59
```

### copy

```cpp
public void copy(const BackgroundBRep & source)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_builder.cpp#66
```

### convert_blocks_to_background_solid

```cpp
public void convert_blocks_to_background_solid()
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_builder.cpp#71
```

### convert_blocks_to_tetrahedral_solid

```cpp
public void convert_blocks_to_tetrahedral_solid()
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_builder.cpp#88
```

### add_macro_vertex_info

```cpp
public void add_macro_vertex_info(const uuid & component_uuid, index_t macro_vertex_id, index_t unique_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_builder.cpp#106
```

### update_vertices

```cpp
public void update_vertices(const BRepCollapsePolygonEdgeInfo & info)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep_builder.cpp#126
```



