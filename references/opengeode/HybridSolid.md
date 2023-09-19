# class HybridSolid


```cpp
Inherits from SolidMesh<dimension>
```



## Functions

### HybridSolid

```cpp
public void HybridSolid<>(const HybridSolid<> & )
```


### operator=

```cpp
public HybridSolid<> & operator=(const HybridSolid<> & )
```


### create

```cpp
public std::unique_ptr<HybridSolid<dimension> > create()
```


 Create a new HybridSolid using default data structure.

### create

```cpp
public std::unique_ptr<HybridSolid<dimension> > create(const MeshImpl & impl)
```


 Create a new HybridSolid using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<HybridSolid<dimension> > clone()
```


### polyhedron_type

```cpp
public Type polyhedron_type(index_t polyhedron_id)
```

### HybridSolid

```cpp
protected void HybridSolid<>()
```


### HybridSolid

```cpp
protected void HybridSolid<>(HybridSolid<> && other)
```


### operator=

```cpp
protected HybridSolid<> & operator=(HybridSolid<> && other)
```




## Enums

| enum class Type |

--

| UNKNOWN |
| TETRAHEDRON |
| HEXAHEDRON |
| PRISM |
| PYRAMID |





# class HybridSolid


```cpp
Inherits from SolidMesh<3U>
```



