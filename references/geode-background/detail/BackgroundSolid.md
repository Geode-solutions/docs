# class BackgroundSolid

```cpp
Defined at ../include/geode/background/solid/private/background_solid.h#28
```

```cpp
Inherits from MacroInfo3D
```



## Records

Impl



## Functions

### BackgroundSolid

```cpp
public void BackgroundSolid(TetrahedralSolid3D && solid)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#63
```

### BackgroundSolid

```cpp
public void BackgroundSolid(BackgroundSolid && other)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#55
```

### ~BackgroundSolid

```cpp
public void ~BackgroundSolid()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#89
```

### impl_name_static

```cpp
public MeshImpl impl_name_static()
```

```cpp
Defined at ../include/geode/background/solid/private/background_solid.h#42
```

### impl_name

```cpp
public MeshImpl impl_name()
```

```cpp
Defined at ../include/geode/background/solid/private/background_solid.h#47
```

### clone

```cpp
public BackgroundSolid clone()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#91
```

### clone_solid

```cpp
public int clone_solid()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#99
```

### release_solid

```cpp
public OpenGeodeTetrahedralSolid3D release_solid()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#114
```

### edge_has_incident_component_facet

```cpp
public bool edge_has_incident_component_facet(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#125
```

### edge_incident_component_facets

```cpp
public int edge_incident_component_facets(const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#133
```

### one_border_polyhedron_facet

```cpp
public PolyhedronFacet one_border_polyhedron_facet()
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#141
```

### tetrahedron_target_length

```cpp
public double tetrahedron_target_length(index_t tetrahedron_id)
```

```cpp
Defined at /github/workspace/src/geode/background/solid/background_solid.cpp#171
```



