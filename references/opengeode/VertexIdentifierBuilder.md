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

# class VertexIdentifierBuilder


 Class managing modification of VertexIdentifier



## Functions

### VertexIdentifierBuilder

```cpp
public void VertexIdentifierBuilder(VertexIdentifier & vertex_identifier)
```


### register_mesh_component

```cpp
public void register_mesh_component(const MeshComponent & component)
```


 Add a component in the VertexIdentifier

### unregister_mesh_component

```cpp
public void unregister_mesh_component(const MeshComponent & component)
```


 Remove a component from the VertexIdentifier and delete corresponding information (i.e. the attribute on component mesh).

### create_unique_vertex

```cpp
public index_t create_unique_vertex()
```


 Create an empty unique vertex.

**return** Index of the created unique vertex.

### create_unique_vertices

```cpp
public index_t create_unique_vertices(index_t nb)
```


 Create several empty unique vertices

**return** Index of the first created unique vertex

### set_unique_vertex

```cpp
public void set_unique_vertex(ComponentMeshVertex component_vertex_id, index_t unique_vertex_id)
```


 Identify a component vertex to an existing unique vertex index.

**component_vertex_id** [in] Index of the vertex in the component.

**unique_vertex_id** [in] Unique vertex index.

### unset_unique_vertex

```cpp
public void unset_unique_vertex(const ComponentMeshVertex & component_vertex_id, index_t unique_vertex_id)
```


 Remove a component vertex to its unique vertex index.

**component_vertex_id** [in] Index of the vertex in the component.

**unique_vertex_id** [in] Unique vertex index.

### update_unique_vertices

```cpp
public void update_unique_vertices(const ComponentID & component_id, Span old2new)
```


 Remove a component vertex to its unique vertex index.

**component_id** [in] Component unique index used to filter returned vertices.

**old2new** [in] Mapping between mesh component old vertex indices to new ones. Deleted vertices new index is NO_ID.

### load_unique_vertices

```cpp
public void load_unique_vertices(basic_string_view directory)
```


 Load the VertexIdentifier from a file.

**directory** [in] Folder containing the file that stores VertexIdentifier information.

### delete_isolated_vertices

```cpp
public vector delete_isolated_vertices()
```


 Delete all unique vertices not associated with any component



