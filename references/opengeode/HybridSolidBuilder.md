# class HybridSolidBuilder

```cpp
Defined at ../../include/geode/mesh/builder/hybrid_solid_builder.h#40
```

```cpp
Inherits from SolidMeshBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<HybridSolidBuilder<dimension> > create(HybridSolid<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/hybrid_solid_builder.cpp#46
```

### create_tetrahedron

```cpp
public index_t create_tetrahedron(const std::array<index_t, 4> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/hybrid_solid_builder.cpp#93
```

 Create a new tetrahedron from four vertices.

**vertices** [in] The four vertices defining the tetrahedron to create

**return** the index of the created tetrahedron

### create_hexahedron

```cpp
public index_t create_hexahedron(const std::array<index_t, 8> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/hybrid_solid_builder.cpp#104
```

 Create a new hexahedron from four vertices.

**vertices** [in] The eight vertices defining the hexahedron to create

**return** the index of the created hexahedron

### create_prism

```cpp
public index_t create_prism(const std::array<index_t, 6> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/hybrid_solid_builder.cpp#115
```

 Create a new prism from four vertices.

**vertices** [in] The six vertices defining the prism to create

**return** the index of the created prism

### create_pyramid

```cpp
public index_t create_pyramid(const std::array<index_t, 5> & vertices)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/hybrid_solid_builder.cpp#126
```

 Create a new pyramid from four vertices.

**vertices** [in] The five vertices defining the pyramid to create

**return** the index of the created pyramid

### copy

```cpp
public void copy(const HybridSolid<dimension> & hybrid_solid)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/hybrid_solid_builder.cpp#138
```

### HybridSolidBuilder

```cpp
protected void HybridSolidBuilder<dimension>(HybridSolid<dimension> & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/hybrid_solid_builder.cpp#39
```



# class HybridSolidBuilder

```cpp
Defined at /github/workspace/src/geode/mesh/builder/hybrid_solid_builder.cpp#149
```

```cpp
Inherits from SolidMeshBuilder<3U>
```



