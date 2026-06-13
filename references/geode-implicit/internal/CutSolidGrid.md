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
public void CutSolidGrid(const CutSolidGrid & )
```


### operator=

```cpp
public CutSolidGrid & operator=(const CutSolidGrid & )
```


### CutSolidGrid

```cpp
public void CutSolidGrid(Point3D origin, std::array<index_t, 3> cells_number, std::array<double, 3> cells_length)
```


### CutSolidGrid

```cpp
public void CutSolidGrid(ComputationGrid3D && computation_grid)
```


### CutSolidGrid

```cpp
public void CutSolidGrid(CutSolidGrid && other)
```


### operator=

```cpp
public CutSolidGrid & operator=(CutSolidGrid && other)
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
public absl::optional<index_t> value_node_in_cut_grid(const CellIndices & cell_indices, local_index_t cell_node_id, index_t cell_duplicate_id)
```


### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, local_index_t cell_node_id)
```


### cell_duplicate_index

```cpp
public absl::InlinedVector<index_t, 1> cell_duplicate_index(const CellIndices & cell, const Point3D & position)
```


### grid_vertex_indices_from_ghost_node

```cpp
public VertexIndices grid_vertex_indices_from_ghost_node(index_t ghost_node_id)
```


### ghost_node_cell_duplicate_id

```cpp
public std::optional<index_t> ghost_node_cell_duplicate_id(index_t ghost_node_id, const CellIndices & cell_indices)
```


### discontinuity_facet_duplicate

```cpp
public absl::optional<index_t> discontinuity_facet_duplicate(const CellIndices & cell_indices, const uuid & discontinuity_id, index_t discontinuity_facet, const Vector3D & normal_towards_duplicate)
```


### discontinuity_vertex_duplicate

```cpp
public absl::optional<index_t> discontinuity_vertex_duplicate(const CellIndices & cell_indices, const uuid & discontinuity_id, index_t discontinuity_vertex, index_t discontinuity_facet, const Vector3D & normal_towards_duplicate)
```


### output_grid_cells

```cpp
public void output_grid_cells(std::string_view folder_name)
```




