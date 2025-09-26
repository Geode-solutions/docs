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

# class DuplicatedCell3D


## Functions

### DuplicatedCell3D

```cpp
public void DuplicatedCell3D(const Grid3D & grid, const Grid3D::CellIndices & cell_indices)
```


### DuplicatedCell3D

```cpp
public void DuplicatedCell3D(DuplicatedCell3D && other)
```


### operator=

```cpp
public DuplicatedCell3D & operator=(DuplicatedCell3D && other)
```


### ~DuplicatedCell3D

```cpp
public void ~DuplicatedCell3D()
```


### insert_surface_triangles_in_cell

```cpp
public bool insert_surface_triangles_in_cell(const TriangulatedSurface3D & mesh, Span triangles_ids)
```


### paint_connected_blocks

```cpp
public void paint_connected_blocks()
```


### cell_duplicate_mesh

```cpp
public unique_ptr cell_duplicate_mesh(index_t duplicate_id)
```


### nb_cell_duplicates

```cpp
public local_index_t nb_cell_duplicates()
```


### node_is_on_duplicate_and_discontinuity

```cpp
public bool node_is_on_duplicate_and_discontinuity(local_index_t cell_node, index_t cell_duplicate_id)
```


### cell_duplicate_is_active

```cpp
public bool cell_duplicate_is_active(index_t cell_duplicate)
```


### set_node_duplicate_as_inactive

```cpp
public void set_node_duplicate_as_inactive(local_index_t cell_node)
```


### inactivate_duplicates_not_linked_to_nodes

```cpp
public void inactivate_duplicates_not_linked_to_nodes()
```


### cell_is_active

```cpp
public bool cell_is_active()
```


### duplicate_value_node_index

```cpp
public index_t duplicate_value_node_index(index_t cell_duplicate_id, local_index_t cell_node)
```


### set_duplicate_value_node_index

```cpp
public void set_duplicate_value_node_index(index_t cell_duplicate_id, local_index_t cell_node, index_t value_node_id)
```


### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(local_index_t cell_node)
```


### create_cell_duplicate_on_node

```cpp
public void create_cell_duplicate_on_node(local_index_t cell_node)
```


### set_node_on_discontinuity_final_duplicate

```cpp
public void set_node_on_discontinuity_final_duplicate(local_index_t cell_node, index_t final_duplicate_id)
```


### cell_node_edge_duplicate

```cpp
public optional cell_node_edge_duplicate(local_index_t cell_node, local_index_t cell_edge)
```


### cell_duplicate_index

```cpp
public InlinedVector cell_duplicate_index(const Point3D & position)
```


### discontinuity_facet_duplicate

```cpp
public optional discontinuity_facet_duplicate(const uuid & discontinuity_id, index_t discontinuity_facet, const Vector3D & normal_towards_duplicate)
```


### discontinuity_vertex_duplicate

```cpp
public optional discontinuity_vertex_duplicate(const uuid & discontinuity_id, index_t discontinuity_vertex, index_t discontinuity_facet, const Vector3D & normal_towards_duplicate)
```


### copy

```cpp
public void copy(const DuplicatedCell3D & other)
```




