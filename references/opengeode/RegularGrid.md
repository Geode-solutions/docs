# class RegularGrid


```cpp
Inherits from SurfaceMesh<2>, Grid<2>
```



## Functions

### create

```cpp
public std::unique_ptr<RegularGrid2D> create()
```


 Create a new RegularGrid using default data structure.

### create

```cpp
public std::unique_ptr<RegularGrid2D> create(const MeshImpl & impl)
```


 Create a new RegularGrid using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### cell_attribute_manager

```cpp
public AttributeManager & cell_attribute_manager()
```


### grid_vertex_attribute_manager

```cpp
public AttributeManager & grid_vertex_attribute_manager()
```


### clone

```cpp
public std::unique_ptr<RegularGrid2D> clone()
```


### RegularGrid

```cpp
protected void RegularGrid()
```


### RegularGrid

```cpp
protected void RegularGrid(RegularGrid<2> && other)
```


### operator=

```cpp
protected RegularGrid<2> & operator=(RegularGrid<2> && other)
```




# class RegularGrid


```cpp
Inherits from SolidMesh<3>, Grid<3>
```



## Functions

### create

```cpp
public std::unique_ptr<RegularGrid3D> create()
```


 Create a new RegularGrid using default data structure.

### create

```cpp
public std::unique_ptr<RegularGrid3D> create(const MeshImpl & impl)
```


 Create a new RegularGrid using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### cell_attribute_manager

```cpp
public AttributeManager & cell_attribute_manager()
```


### grid_vertex_attribute_manager

```cpp
public AttributeManager & grid_vertex_attribute_manager()
```


### clone

```cpp
public std::unique_ptr<RegularGrid3D> clone()
```


### RegularGrid

```cpp
protected void RegularGrid()
```


### RegularGrid

```cpp
protected void RegularGrid(RegularGrid<3> && other)
```


### operator=

```cpp
protected RegularGrid<3> & operator=(RegularGrid<3> && other)
```




# class RegularGrid

