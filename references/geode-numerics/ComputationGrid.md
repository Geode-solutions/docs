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

# class ComputationGrid


```cpp
Inherits from LightRegularGrid<dimension>
```



## Functions

### ComputationGrid

```cpp
public void ComputationGrid<>(Point<dimension> origin, std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length)
```


### ComputationGrid

```cpp
public void ComputationGrid<>(ComputationGrid<dimension> && other)
```


### ComputationGrid

```cpp
public void ComputationGrid<>(LightRegularGrid<dimension> && other)
```


### ~ComputationGrid

```cpp
public void ~ComputationGrid<>()
```


### set_inactive_cells

```cpp
public void set_inactive_cells(const absl::flat_hash_set<CellIndices> & cells_list)
```

### inactivate_cells_outside_voi

```cpp
public void inactivate_cells_outside_voi(const absl::flat_hash_set<CellIndices> & rasterized_voi)
```

### remove_computation_node

```cpp
public void remove_computation_node(const VertexIndices & node_indices)
```

### is_cell_active

```cpp
public bool is_cell_active(const CellIndices & cell)
```

### nb_active_cells

```cpp
public index_t nb_active_cells()
```


### nb_computation_nodes

```cpp
public index_t nb_computation_nodes()
```


### value_node_from_grid_vertex_indices

```cpp
public optional value_node_from_grid_vertex_indices(const VertexIndices & vertex_indices)
```

### computation_node_from_grid_vertex_indices

```cpp
public optional computation_node_from_grid_vertex_indices(const VertexIndices & vertex_indices)
```

### grid_vertex_indices_from_value_node

```cpp
public const VertexIndices & grid_vertex_indices_from_value_node(index_t value_node)
```


### grid_vertex_indices_from_computation_node

```cpp
public const VertexIndices & grid_vertex_indices_from_computation_node(index_t computation_node)
```


### set_node_values_attribute_name

```cpp
public void set_node_values_attribute_name(basic_string_view name)
```


### node_values_attribute_name

```cpp
public basic_string_view node_values_attribute_name()
```


### nb_value_nodes

```cpp
public index_t nb_value_nodes()
```


### set_node_value

```cpp
public void set_node_value(index_t value_node_id, double value)
```


### get_node_value

```cpp
public double get_node_value(index_t value_node_id)
```


### isovalue_goes_through_cell

```cpp
public bool isovalue_goes_through_cell(const CellIndices & cell_id, double isovalue)
```

### nb_border_derivatives

```cpp
public index_t nb_border_derivatives()
```


### border_value_nodes_derivatives

```cpp
public const absl::flat_hash_map<index_t, std::vector<index_t> > & border_value_nodes_derivatives()
```


### node_values_are_set

```cpp
public bool node_values_are_set()
```


### remove_all_value_nodes_but_computation_nodes

```cpp
protected void remove_all_value_nodes_but_computation_nodes()
```


### set_inactive_cells

```cpp
public void set_inactive_cells(const absl::flat_hash_set<CellIndices> & cells_list)
```


### inactivate_cells_outside_voi

```cpp
public void inactivate_cells_outside_voi(const absl::flat_hash_set<CellIndices> & rasterized_voi)
```


### remove_computation_node

```cpp
public void remove_computation_node(const VertexIndices & node_indices)
```


### is_cell_active

```cpp
public bool is_cell_active(const CellIndices & cell)
```


### value_node_from_grid_vertex_indices

```cpp
public optional value_node_from_grid_vertex_indices(const VertexIndices & vertex_indices)
```


### computation_node_from_grid_vertex_indices

```cpp
public optional computation_node_from_grid_vertex_indices(const VertexIndices & vertex_indices)
```


### isovalue_goes_through_cell

```cpp
public bool isovalue_goes_through_cell(const CellIndices & cell_id, double isovalue)
```




# class ComputationGrid


```cpp
Inherits from LightRegularGrid<2U>
```



# class ComputationGrid


```cpp
Inherits from LightRegularGrid<3U>
```



