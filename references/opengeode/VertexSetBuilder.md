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


### ~VertexSetBuilder

```cpp
public void ~VertexSetBuilder()
```


### create

```cpp
public unique_ptr create(VertexSet & mesh)
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
public vector delete_vertices(const std::vector<bool> & to_delete)
```


 Delete a set of vertices.

**to_delete** [in] Vector of size vertex_set_.nb_vertices(). If to_delete[i] is true the vertex of index i is deleted, else it is kept.

**return** the mapping between old vertex indices to new ones. Deleted vertices new index is NO_ID

### permute_vertices

```cpp
public vector permute_vertices(Span permutation)
```


 Permute vertices to match the given order.

**permutation** [in] Vector of size vertex_set_.nb_vertices(). Each value corresponds to the destination position.

**return**  the mapping between old vertex indices to new ones.

### copy

```cpp
public void copy(const VertexSet & vertex_set, VertexSetKey key)
```


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



