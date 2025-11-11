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

# class CutGrid


```cpp
Inherits from ComputationGrid<3U>
```



# class CutGrid


```cpp
Inherits from ComputationGrid<dimension>
```



## Functions

### ~CutGrid

```cpp
public void ~CutGrid<>()
```


### nb_value_nodes

```cpp
public index_t nb_value_nodes()
```


### set_nb_ghost_nodes

```cpp
public void set_nb_ghost_nodes(index_t nb_ghost_nodes)
```


### set_node_value

```cpp
public void set_node_value(index_t value_node_id, double value)
```


### get_node_value

```cpp
public double get_node_value(index_t value_node_id)
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
public optional value_node_in_cut_grid(const CellIndices & cell_indices, local_index_t cell_node_id, index_t cell_duplicate_index)
```

### cell_duplicate_index

```cpp
public index_t cell_duplicate_index(const CellIndices & index, local_index_t cell_node_id)
```

### cell_duplicate_index

```cpp
public InlinedVector cell_duplicate_index(const CellIndices & index, const Point<dimension> & position)
```

### grid_vertex_indices_from_ghost_node

```cpp
public VertexIndices grid_vertex_indices_from_ghost_node(index_t ghost_node_id)
```

### ghost_node_cell_duplicate_id

```cpp
public optional ghost_node_cell_duplicate_id(index_t ghost_node_id, const CellIndices & cell_indices)
```

### isovalue_goes_through_cell_duplicate

```cpp
public bool isovalue_goes_through_cell_duplicate(const CellIndices & cell_id, index_t cell_duplicate_index, double isovalue)
```


### isovalue_goes_through_cell

```cpp
public bool isovalue_goes_through_cell(const CellIndices & cell_id, double isovalue)
```


### compute_ghost_nodes_derivatives

```cpp
public void compute_ghost_nodes_derivatives()
```


### ghost_nodes_derivatives

```cpp
public const absl::flat_hash_map<index_t, std::vector<index_t> > & ghost_nodes_derivatives()
```


### value_node_surrounding_ghost_node_id

```cpp
public optional value_node_surrounding_ghost_node_id(index_t ghost_node_id, const std::array<int, dimension> & search_direction, local_index_t surrounding_node)
```


### CutGrid

```cpp
protected void CutGrid<>(Point<dimension> origin, std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length)
```


### CutGrid

```cpp
protected void CutGrid<>(CutGrid<dimension> && other)
```


### CutGrid

```cpp
protected void CutGrid<>(ComputationGrid<dimension> && other)
```




# class CutGrid


```cpp
Inherits from ComputationGrid<2U>
```



