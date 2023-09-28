# class PolyhedralSolid

```cpp
Defined at /github/workspace/src/geode/mesh/core/polyhedral_solid.cpp#76
```

```cpp
Inherits from SolidMesh<3U>
```



# class PolyhedralSolid

```cpp
Defined at ../../include/geode/mesh/core/polyhedral_solid.h#46
```

 This class represents a 3D Solid made up with polyhedra and provides mesh functionnalities.



```cpp
Inherits from SolidMesh<dimension>
```



## Functions

### PolyhedralSolid

```cpp
public void PolyhedralSolid<dimension>(const PolyhedralSolid<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/polyhedral_solid.h#48
```

### operator=

```cpp
public PolyhedralSolid<dimension> & operator=(const PolyhedralSolid<dimension> & )
```

```cpp
Defined at ../../include/geode/mesh/core/polyhedral_solid.h#48
```

### create

```cpp
public std::unique_ptr<PolyhedralSolid<dimension> > create()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/polyhedral_solid.cpp#33
```

 Create a new PolyhedralSolid using default data structure.

### create

```cpp
public std::unique_ptr<PolyhedralSolid<dimension> > create(const MeshImpl & impl)
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/polyhedral_solid.cpp#41
```

 Create a new PolyhedralSolid using a specified data structure.

**impl** [in] Data structure implementation.

### type_name_static

```cpp
public NamedType type_name_static()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/polyhedral_solid.cpp#48
```

### clone

```cpp
public std::unique_ptr<PolyhedralSolid<dimension> > clone()
```

```cpp
Defined at /github/workspace/src/geode/mesh/core/polyhedral_solid.cpp#54
```

### PolyhedralSolid

```cpp
protected void PolyhedralSolid<dimension>()
```

```cpp
Defined at ../../include/geode/mesh/core/polyhedral_solid.h#72
```

### PolyhedralSolid

```cpp
protected void PolyhedralSolid<dimension>(PolyhedralSolid<dimension> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/polyhedral_solid.h#73
```

### operator=

```cpp
protected PolyhedralSolid<dimension> & operator=(PolyhedralSolid<dimension> && other)
```

```cpp
Defined at ../../include/geode/mesh/core/polyhedral_solid.h#74
```



