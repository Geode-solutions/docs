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

# class CutSurfaceGrid


```cpp
Inherits from CutGrid2D
```



## Functions

### CutSurfaceGrid

```cpp
public void CutSurfaceGrid(Point origin, array cells_number, array cells_length)
```


### CutSurfaceGrid

```cpp
public void CutSurfaceGrid(ComputationGrid2D && other)
```


### CutSurfaceGrid

```cpp
public void CutSurfaceGrid(CutSurfaceGrid && other)
```


### ~CutSurfaceGrid

```cpp
public void ~CutSurfaceGrid()
```


### add_discontinuity

```cpp
public void add_discontinuity(const EdgedCurve2D & curve)
```


### inactivate_grid_outside_domain

```cpp
public void inactivate_grid_outside_domain()
```


### compute_grid_nodes_indexation

```cpp
public void compute_grid_nodes_indexation()
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
public InlinedVector cell_duplicate_index(const CellIndices & cell, const Point2D & position)
```


### discontinuity_vertex_duplicate

```cpp
public optional discontinuity_vertex_duplicate(const CellIndices & cell, const uuid & discontinuity_id, const geode::index_t discontinuity_vertex, const geode::index_t discontinuity_edge, bool edge_towards_vertex)
```




