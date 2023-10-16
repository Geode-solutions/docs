# class VertexSet


 Interface class to represent set of vertices.



```cpp
Inherits from Identifier
```



## Functions

### VertexSet

```cpp
public void VertexSet(const VertexSet & )
```


### operator=

```cpp
public VertexSet & operator=(const VertexSet & )
```


### create

```cpp
public std::unique_ptr<VertexSet> create()
```


 Create a new VertexSet

### create

```cpp
public std::unique_ptr<VertexSet> create(const MeshImpl & impl)
```


 Create a new VertexSet using a specified data structure.

**impl** [in] Data structure implementation

### type_name_static

```cpp
public NamedType type_name_static()
```


### clone

```cpp
public std::unique_ptr<VertexSet> clone()
```


### ~VertexSet

```cpp
public void ~VertexSet()
```


### native_extension

```cpp
public string_view native_extension()
```

### nb_vertices

```cpp
public index_t nb_vertices()
```


### vertex_attribute_manager

```cpp
public AttributeManager & vertex_attribute_manager()
```


 Access to the attribute manager. Attributes are associated with vertices.

### impl_name

```cpp
public NamedType impl_name()
```

### type_name

```cpp
public NamedType type_name()
```

### VertexSet

```cpp
protected void VertexSet()
```


### VertexSet

```cpp
protected void VertexSet(VertexSet && other)
```


### operator=

```cpp
protected VertexSet & operator=(VertexSet && other)
```




