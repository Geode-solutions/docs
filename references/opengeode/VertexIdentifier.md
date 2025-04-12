<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# class VertexIdentifier


 This class identifies groups of geometric component vertices as unique vertices. This is a only topological information.



## Functions

### VertexIdentifier

```cpp
public void VertexIdentifier()
```


### ~VertexIdentifier

```cpp
public void ~VertexIdentifier()
```


### nb_unique_vertices

```cpp
public index_t nb_unique_vertices()
```


### is_unique_vertex_isolated

```cpp
public bool is_unique_vertex_isolated(index_t unique_vertex_id)
```


### component_mesh_vertices

```cpp
public const std::vector<ComponentMeshVertex> & component_mesh_vertices(index_t unique_vertex_id)
```


 Return the component vertices identified with an unique vertex.

**unique_vertex_id** [in] Indice of the unique vertex.

### unique_vertex

```cpp
public index_t unique_vertex(const ComponentMeshVertex & component_vertex)
```


 Return the unique vertex index of a given component vertex.

**component_vertex** [in] Vertex index in a geometric component.

### has_component_mesh_vertices

```cpp
public bool has_component_mesh_vertices(index_t unique_vertex_id, const ComponentType & type)
```


 Return true if given unique vertex has at least one mesh component vertex of given component type

### has_component_mesh_vertices

```cpp
public bool has_component_mesh_vertices(index_t unique_vertex_id, const uuid & component_id)
```


 Return true if given unique vertex has at least one mesh component vertex of given component

### save_unique_vertices

```cpp
public void save_unique_vertices(basic_string_view directory)
```


 Save the VertexIdentifier into a file.

**directory** [in] Folder in which create the file.

### register_mesh_component

```cpp
public void register_mesh_component(const MeshComponent & component, PassKey )
```


 Add a component in the VertexIdentifier

### unregister_mesh_component

```cpp
public void unregister_mesh_component(const MeshComponent & component, PassKey )
```


 Remove a component from the VertexIdentifier and delete corresponding information (i.e. the attribute on component mesh).

### create_unique_vertex

```cpp
public index_t create_unique_vertex(PassKey )
```


 Create an empty unique vertex.

**return** Index of the created unique vertex.

### create_unique_vertices

```cpp
public index_t create_unique_vertices(index_t nb, PassKey )
```


 Create several empty unique vertices

**return** Index of the first created unique vertex

### set_unique_vertex

```cpp
public void set_unique_vertex(ComponentMeshVertex component_vertex_id, index_t unique_vertex_id, PassKey )
```


 Identify a component vertex to an existing unique vertex index.

**component_vertex_id** [in] Index of the vertex in the component.

**unique_vertex_id** [in] Unique vertex index.

### unset_unique_vertex

```cpp
public void unset_unique_vertex(const ComponentMeshVertex & component_vertex_id, index_t unique_vertex_id, PassKey )
```


 Remove a component vertex to its unique vertex index.

**component_vertex_id** [in] Index of the vertex in the component.

**unique_vertex_id** [in] Unique vertex index.

### update_unique_vertices

```cpp
public void update_unique_vertices(const ComponentID & component_id, absl::Span<const index_t> old2new, PassKey )
```


 Remove a component vertex to its unique vertex index.

**component_id** [in] Component unique index used to filter returned vertices.

**old2new** [in] Mapping between mesh component old vertex indices to new ones. Deleted vertices new index is NO_ID.

### load_unique_vertices

```cpp
public void load_unique_vertices(basic_string_view directory, PassKey )
```


 Load the VertexIdentifier from a file.

**directory** [in] Folder containing the file that stores VertexIdentifier information.

### delete_isolated_vertices

```cpp
public vector delete_isolated_vertices(PassKey )
```


 Delete all unique vertices not associated with any component

### VertexIdentifier

```cpp
protected void VertexIdentifier(VertexIdentifier && other)
```


### operator=

```cpp
protected VertexIdentifier & operator=(VertexIdentifier && other)
```




