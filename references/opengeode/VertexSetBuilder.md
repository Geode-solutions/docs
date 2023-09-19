# class VertexSetBuilder


 Interface class to represent the builder of a VertexSet



```cpp
Inherits from IdentifierBuilder
```



## Functions

### VertexSetBuilder

```cpp
public void VertexSetBuilder(const VertexSetBuilder & )
```


### operator=

```cpp
public VertexSetBuilder & operator=(const VertexSetBuilder & )
```


### VertexSetBuilder

```cpp
public void VertexSetBuilder(VertexSetBuilder && )
```


### operator=

```cpp
public VertexSetBuilder & operator=(VertexSetBuilder && )
```


### ~VertexSetBuilder

```cpp
public void ~VertexSetBuilder()
```


### create

```cpp
public std::unique_ptr<VertexSetBuilder> create(VertexSet & mesh)
```


 Create the builder associated with a VertexSet.

**mesh** [in] The VertexSet to build/modify

### create_vertex

```cpp
public index_t create_vertex()
```


 Create a new vertex.

**return** the index of the created vertex

### create_vertices

```cpp
public index_t create_vertices(index_t nb)
```


 Create a set of vertices.

**nb** [in] Number of vertices to create.

**return** the index of the first created vertex

### delete_vertices

```cpp
public std::vector<index_t> delete_vertices(const std::vector<_Bool> & to_delete)
```


 Delete a set of vertices.

**to_delete** [in] Vector of size vertex_set_.nb_vertices(). If to_delete[i] is true the vertex of index i is deleted, else it is kept.

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID

### permute_vertices

```cpp
public std::vector<index_t> permute_vertices(absl::Span<const index_t> permutation)
```


 Permute vertices to match the given order.

**permutation** [in] Vector of size vertex_set_.nb_vertices(). Each value corresponds to the destination position.

**return**  the mapping between old vertex indices to new ones.

### VertexSetBuilder

```cpp
protected void VertexSetBuilder(VertexSet & vertex_set)
```


### copy

```cpp
protected void copy(const VertexSet & vertex_set)
```


### do_create_vertex

```cpp
protected void do_create_vertex()
```

### delete_vertices

```cpp
public int delete_vertices(const int & to_delete)
```

 Delete a set of vertices.

**to_delete** [in] Vector of size vertex_set_.nb_vertices(). If to_delete[i] is true the vertex of index i is deleted, else it is kept.

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID



