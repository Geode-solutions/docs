# class TetrahedralSolidBuilder


```cpp
Inherits from SolidMeshBuilder<dimension>
```



## Functions

### create

```cpp
public std::unique_ptr<TetrahedralSolidBuilder<dimension> > create(TetrahedralSolid<dimension> & mesh)
```


### create_tetrahedron

```cpp
public index_t create_tetrahedron(const std::array<index_t, 4> & vertices)
```


 Create a new tetrahedron from four vertices.

**vertices** [in] The four vertices defining the tetrahedron to create

**return** the index of the created tetrahedron

### create_tetrahedra

```cpp
public index_t create_tetrahedra(index_t nb)
```


 Create new tetrahedra.

**nb** [in] Number of tetrahedra to create

**return** the index of the first created tetrahedron

### reserve_tetrahedra

```cpp
public void reserve_tetrahedra(index_t nb)
```


 Reserve storage for new tetrahedra without creating them.

**nb** [in] Number of tetrahedra to reserve

### copy

```cpp
public void copy(const TetrahedralSolid<dimension> & tetrahedral_solid)
```


### TetrahedralSolidBuilder

```cpp
protected void TetrahedralSolidBuilder<dimension>(TetrahedralSolid<dimension> & mesh)
```




# class TetrahedralSolidBuilder


```cpp
Inherits from SolidMeshBuilder<3U>
```



