# class BackgroundBRep

```cpp
Defined at ../include/geode/background/brep/private/background_brep.h#29
```

```cpp
Inherits from BRep
```



## Functions

### BackgroundBRep

```cpp
public void BackgroundBRep(BRep && brep)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep.cpp#44
```

### release_brep

```cpp
public BRep release_brep()
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep.cpp#52
```

### component_vertices

```cpp
public const std::vector<MeshVertex> & component_vertices(const Block3D & block, index_t vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep.cpp#59
```

### is_vertex_part_of_component_vertices

```cpp
public bool is_vertex_part_of_component_vertices(const Block3D & block, index_t vertex_id, const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep.cpp#66
```

### is_vertex_part_of_component_vertices

```cpp
public bool is_vertex_part_of_component_vertices(index_t unique_vertex_id, const uuid & id)
```

```cpp
Defined at /github/workspace/src/geode/background/brep/background_brep.cpp#73
```



