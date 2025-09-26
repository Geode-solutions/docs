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

# class CutSolidGrid


```cpp
Inherits from CutGrid3D
```



## Functions

### CutSolidGrid

```cpp
public void CutSolidGrid(Point origin, array cells_number, array cells_length)
```


### CutSolidGrid

```cpp
public void CutSolidGrid(ComputationGrid3D && other)
```


### CutSolidGrid

```cpp
public void CutSolidGrid(CutSolidGrid && other)
```


### ~CutSolidGrid

```cpp
public void ~CutSolidGrid()
```


### try_add_discontinuity

```cpp
public bool try_add_discontinuity(const TriangulatedSurface3D & surface)
```


### inactivate_grid_outside_domain

```cpp
public void inactivate_grid_outside_domain()
```


### compute_grid_nodes_indexation

```cpp
public void compute_grid_nodes_indexation()
```


### cell_is_duplicated

```cpp
public bool cell_is_duplicated(const CellIndices & cell_indices)
```


### nb_cell_duplicates

```cpp
public index_t nb_cell_duplicates(const CellIndices & cell_indices)
```


### is_cell_duplicate_active

```cpp
public bool is_cell_duplicate_active(const CellIndices & cell_indices, index_t cell_duplicate_index)
```


### value_node_in_cut_grid

```cpp
public optional value_node_in_cut_grid(const CellIndices & cell_id, local_index_t cell_node_id, index_t cell_duplicate_id)
```


### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, local_index_t cell_node_id)
```


### cell_duplicate_index

```cpp
public InlinedVector cell_duplicate_index(const CellIndices & cell, const Point3D & position)
```


### discontinuity_facet_duplicate

```cpp
public optional discontinuity_facet_duplicate(const CellIndices & cell_indices, const uuid & discontinuity_id, index_t discontinuity_facet, const Vector3D & normal_towards_duplicate)
```


### discontinuity_vertex_duplicate

```cpp
public optional discontinuity_vertex_duplicate(const CellIndices & cell_indices, const uuid & discontinuity_id, index_t discontinuity_vertex, index_t discontinuity_facet, const Vector3D & normal_towards_duplicate)
```


### output_grid_cells

```cpp
public void output_grid_cells(basic_string_view folder_name)
```




