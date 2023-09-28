# class VertexSetBuilder

```cpp
Defined at ../../include/geode/mesh/builder/vertex_set_builder.h#46
```

 Interface class to represent the builder of a VertexSet



```cpp
Inherits from IdentifierBuilder
```



## Functions

### VertexSetBuilder

```cpp
public void VertexSetBuilder(const VertexSetBuilder & )
```

```cpp
Defined at ../../include/geode/mesh/builder/vertex_set_builder.h#48
```

### operator=

```cpp
public VertexSetBuilder & operator=(const VertexSetBuilder & )
```

```cpp
Defined at ../../include/geode/mesh/builder/vertex_set_builder.h#48
```

### VertexSetBuilder

```cpp
public void VertexSetBuilder(VertexSetBuilder && )
```

```cpp
Defined at ../../include/geode/mesh/builder/vertex_set_builder.h#48
```

### operator=

```cpp
public VertexSetBuilder & operator=(VertexSetBuilder && )
```

```cpp
Defined at ../../include/geode/mesh/builder/vertex_set_builder.h#48
```

### ~VertexSetBuilder

```cpp
public void ~VertexSetBuilder()
```

```cpp
Defined at ../../include/geode/mesh/builder/vertex_set_builder.h#51
```

### create

```cpp
public std::unique_ptr<VertexSetBuilder> create(VertexSet & mesh)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/vertex_set_builder.cpp#38
```

 Create the builder associated with a VertexSet.

**mesh** [in] The VertexSet to build/modify

### create_vertex

```cpp
public index_t create_vertex()
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/vertex_set_builder.cpp#56
```

 Create a new vertex.

**return** the index of the created vertex

### create_vertices

```cpp
public index_t create_vertices(index_t nb)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/vertex_set_builder.cpp#64
```

 Create a set of vertices.

**nb** [in] Number of vertices to create.

**return** the index of the first created vertex

### delete_vertices

```cpp
public std::vector<index_t> delete_vertices(const std::vector<bool> & to_delete)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/vertex_set_builder.cpp#73
```

 Delete a set of vertices.

**to_delete** [in] Vector of size vertex_set_.nb_vertices(). If to_delete[i] is true the vertex of index i is deleted, else it is kept.

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID

### permute_vertices

```cpp
public std::vector<index_t> permute_vertices(absl::Span<const index_t> permutation)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/vertex_set_builder.cpp#86
```

 Permute vertices to match the given order.

**permutation** [in] Vector of size vertex_set_.nb_vertices(). Each value corresponds to the destination position.

**return**  the mapping between old vertex indices to new ones.

### VertexSetBuilder

```cpp
protected void VertexSetBuilder(VertexSet & vertex_set)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/vertex_set_builder.cpp#33
```

### copy

```cpp
protected void copy(const VertexSet & vertex_set)
```

```cpp
Defined at /github/workspace/src/geode/mesh/builder/vertex_set_builder.cpp#45
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



