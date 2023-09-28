# class TetrahedralSolidBuilder

```cpp
Defined at ../../include/geode/mesh/builder/tetrahedral_solid_builder.h#40
```

```cpp
Inherits from SolidMeshBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<TetrahedralSolidBuilder<dimension> > create(TetrahedralSolid<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/tetrahedral_solid_builder.cpp#46
```

### create_tetrahedron

```cpp
public index_t create_tetrahedron(const std::array<index_t, 4> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/tetrahedral_solid_builder.cpp#69
```

 Create a new tetrahedron from four vertices.

**vertices** [in] The four vertices defining the tetrahedron to create

**return** the index of the created tetrahedron

### create_tetrahedra

```cpp
public index_t create_tetrahedra(index_t nb)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/tetrahedral_solid_builder.cpp#99
```

 Create new tetrahedra.

**nb** [in] Number of tetrahedra to create

**return** the index of the first created tetrahedron

### reserve_tetrahedra

```cpp
public void reserve_tetrahedra(index_t nb)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/tetrahedral_solid_builder.cpp#81
```

 Reserve storage for new tetrahedra without creating them.

**nb** [in] Number of tetrahedra to reserve

### copy

```cpp
public void copy(const TetrahedralSolid<dimension> & tetrahedral_solid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/tetrahedral_solid_builder.cpp#110
```

### TetrahedralSolidBuilder

```cpp
protected void TetrahedralSolidBuilder<dimension>(TetrahedralSolid<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/tetrahedral_solid_builder.cpp#39
```



# class TetrahedralSolidBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/tetrahedral_solid_builder.cpp#121
```

```cpp
Inherits from SolidMeshBuilder<3U>
```



