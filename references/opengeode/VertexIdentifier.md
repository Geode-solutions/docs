# class VertexIdentifier

```cpp
Defined at ../../include/geode/model/mixin/core/vertex_identifier.h#54
```

 This class identifies groups of geometric component vertices as unique vertices. This is a only topological information.



## Functions

### VertexIdentifier

```cpp
public void VertexIdentifier()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#458
```

### ~VertexIdentifier

```cpp
public void ~VertexIdentifier()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#470
```

### nb_unique_vertices

```cpp
public index_t nb_unique_vertices()
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#472
```

### is_unique_vertex_isolated

```cpp
public bool is_unique_vertex_isolated(index_t unique_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#477
```

### component_mesh_vertices

```cpp
public const std::vector<ComponentMeshVertex> & component_mesh_vertices(index_t unique_vertex_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#483
```

 Return the component vertices identified with an unique vertex.

**unique_vertex_id** [in] Indice of the unique vertex.

### component_mesh_vertices

```cpp
public std::vector<ComponentMeshVertex> component_mesh_vertices(index_t unique_vertex_id, const ComponentType & type)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#490
```

 Return the component vertices identified with an unique vertex only for vertices belonging to component of the specified type.

**unique_vertex_id** [in] Indice of the unique vertex.

**type** [in] Type of components used to filter returned vertices.

### component_mesh_vertices

```cpp
public std::vector<index_t> component_mesh_vertices(index_t unique_vertex_id, const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#497
```

 Return the component vertices identified with an unique vertex only for vertices belonging to one specified component.

**unique_vertex_id** [in] Indice of the unique vertex.

**component_id** [in] Component unique index used to filter returned vertices.

### unique_vertex

```cpp
public index_t unique_vertex(const ComponentMeshVertex & component_vertex)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#503
```

 Return the unique vertex index of a given component vertex.

**component_vertex** [in] Vertex index in a geometric component.

### has_component_mesh_vertices

```cpp
public bool has_component_mesh_vertices(index_t unique_vertex_id, const ComponentType & type)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#510
```

 Return true if given unique vertex has at least one mesh component vertex of given component type

### has_component_mesh_vertices

```cpp
public bool has_component_mesh_vertices(index_t unique_vertex_id, const uuid & component_id)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#516
```

 Return true if given unique vertex has at least one mesh component vertex of given component

### save_unique_vertices

```cpp
public void save_unique_vertices(string_view directory)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#572
```

 Save the VertexIdentifier into a file.

**directory** [in] Folder in which create the file.

### register_mesh_component

```cpp
public void register_mesh_component(const MeshComponent & component, BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#524
```

 Add a component in the VertexIdentifier

### unregister_mesh_component

```cpp
public void unregister_mesh_component(const MeshComponent & component, BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#531
```

 Remove a component from the VertexIdentifier and delete corresponding information (i.e. the attribute on component mesh).

### create_unique_vertex

```cpp
public index_t create_unique_vertex(BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#537
```

 Create an empty unique vertex.

**return** Index of the created unique vertex.

### create_unique_vertices

```cpp
public index_t create_unique_vertices(index_t nb, BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#542
```

 Create several empty unique vertices

**return** Index of the first created unique vertex

### set_unique_vertex

```cpp
public void set_unique_vertex(ComponentMeshVertex component_vertex_id, index_t unique_vertex_id, BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#547
```

 Identify a component vertex to an existing unique vertex index.

**component_vertex_id** [in] Index of the vertex in the component.

**unique_vertex_id** [in] Unique vertex index.

### unset_unique_vertex

```cpp
public void unset_unique_vertex(const ComponentMeshVertex & component_vertex_id, index_t unique_vertex_id, BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#556
```

 Remove a component vertex to its unique vertex index.

**component_vertex_id** [in] Index of the vertex in the component.

**unique_vertex_id** [in] Unique vertex index.

### update_unique_vertices

```cpp
public void update_unique_vertices(const ComponentID & component_id, absl::Span<const index_t> old2new, BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#564
```

 Remove a component vertex to its unique vertex index.

**component_id** [in] Component unique index used to filter returned vertices.

**old2new** [in] Mapping between mesh component old vertex indices to new ones. Deleted vertices new index is NO_ID.

### load_unique_vertices

```cpp
public void load_unique_vertices(string_view directory, BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#578
```

 Load the VertexIdentifier from a file.

**directory** [in] Folder containing the file that stores VertexIdentifier information.

### delete_isolated_vertices

```cpp
public std::vector<index_t> delete_isolated_vertices(BuilderKey )
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#584
```

 Delete all unique vertices not associated with any component

### VertexIdentifier

```cpp
protected void VertexIdentifier(VertexIdentifier && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#459
```

### operator=

```cpp
protected VertexIdentifier & operator=(VertexIdentifier && other)
```

```cpp
Defined at /github/workspace/src/geode/model/mixin/core/vertex_identifier.cpp#464
```



