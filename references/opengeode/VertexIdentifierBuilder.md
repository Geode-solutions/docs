# class VertexIdentifierBuilder

```cpp
Defined at ../../include/geode/model/mixin/builder/vertex_identifier_builder.h#36
```

 Class managing modification of VertexIdentifier



## Functions

### VertexIdentifierBuilder

```cpp
public void VertexIdentifierBuilder(VertexIdentifier & vertex_identifier)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/vertex_identifier_builder.cpp#28
```

### register_mesh_component

```cpp
public void register_mesh_component(const MeshComponent & component)
```

```cpp
Defined at ../../include/geode/model/mixin/builder/vertex_identifier_builder.h#45
```

 Add a component in the VertexIdentifier

### unregister_mesh_component

```cpp
public void unregister_mesh_component(const MeshComponent & component)
```

```cpp
Defined at ../../include/geode/model/mixin/builder/vertex_identifier_builder.h#55
```

 Remove a component from the VertexIdentifier and delete corresponding information (i.e. the attribute on component mesh).

### create_unique_vertex

```cpp
public index_t create_unique_vertex()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/vertex_identifier_builder.cpp#34
```

 Create an empty unique vertex.

**return** Index of the created unique vertex.

### create_unique_vertices

```cpp
public index_t create_unique_vertices(index_t nb)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/vertex_identifier_builder.cpp#39
```

 Create several empty unique vertices

**return** Index of the first created unique vertex

### set_unique_vertex

```cpp
public void set_unique_vertex(ComponentMeshVertex component_vertex_id, index_t unique_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/vertex_identifier_builder.cpp#44
```

 Identify a component vertex to an existing unique vertex index.

**component_vertex_id** [in] Index of the vertex in the component.

**unique_vertex_id** [in] Unique vertex index.

### unset_unique_vertex

```cpp
public void unset_unique_vertex(const ComponentMeshVertex & component_vertex_id, index_t unique_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/vertex_identifier_builder.cpp#51
```

 Remove a component vertex to its unique vertex index.

**component_vertex_id** [in] Index of the vertex in the component.

**unique_vertex_id** [in] Unique vertex index.

### update_unique_vertices

```cpp
public void update_unique_vertices(const ComponentID & component_id, absl::Span<const index_t> old2new)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/vertex_identifier_builder.cpp#59
```

 Remove a component vertex to its unique vertex index.

**component_id** [in] Component unique index used to filter returned vertices.

**old2new** [in] Mapping between mesh component old vertex indices to new ones. Deleted vertices new index is NO_ID.

### load_unique_vertices

```cpp
public void load_unique_vertices(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/vertex_identifier_builder.cpp#65
```

 Load the VertexIdentifier from a file.

**directory** [in] Folder containing the file that stores VertexIdentifier information.

### delete_isolated_vertices

```cpp
public std::vector<index_t> delete_isolated_vertices()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/builder/vertex_identifier_builder.cpp#71
```

 Delete all unique vertices not associated with any component



