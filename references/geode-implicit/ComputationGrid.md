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



## Members

```cpp
public static const auto dim

```



## Functions

### ComputationGrid

```cpp
public void ComputationGrid<dimension>(const ComputationGrid<dimension> & )
```


### operator=

```cpp
public ComputationGrid<dimension> & operator=(const ComputationGrid<dimension> & )
```


### ComputationGrid

```cpp
public void ComputationGrid<dimension>(Point<dimension> origin, std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length)
```


### ComputationGrid

```cpp
public void ComputationGrid<dimension>(LightRegularGrid<dimension> && light_grid)
```


### ComputationGrid

```cpp
public void ComputationGrid<dimension>(ComputationGrid<dimension> && other)
```


### operator=

```cpp
public ComputationGrid<dimension> & operator=(ComputationGrid<dimension> && other)
```


### ~ComputationGrid

```cpp
public void ~ComputationGrid<dimension>()
```


### set_inactive_cells

```cpp
public void set_inactive_cells(const absl::flat_hash_set<CellIndices> & cells_list)
```


### inactivate_cells_outside_voi

```cpp
public void inactivate_cells_outside_voi(const absl::flat_hash_set<CellIndices> & rasterized_voi)
```


### remove_non_manifolds_on_grid_active_borders

```cpp
public void remove_non_manifolds_on_grid_active_borders(const absl::flat_hash_set<CellIndices> & rasterized_voi, const absl::flat_hash_set<CellIndices> & cells_to_check)
```


### recompute_larger_wavelength_derivatives

```cpp
public void recompute_larger_wavelength_derivatives(const std::array<bool, dimension> & large_scale_on_axis)
```


### remove_computation_node

```cpp
public void remove_computation_node(const VertexIndices & node_indices)
```


### set_node_values_attribute_name

```cpp
public void set_node_values_attribute_name(std::string_view name)
```


### set_node_value

```cpp
public void set_node_value(index_t value_node_id, double value)
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


### active_cells_around

```cpp
public std::vector<CellIndices> active_cells_around(const Point<dimension> & position)
```


### value_node_from_grid_vertex_indices

```cpp
public std::optional<index_t> value_node_from_grid_vertex_indices(const VertexIndices & vertex_indices)
```


### computation_node_from_grid_vertex_indices

```cpp
public std::optional<index_t> computation_node_from_grid_vertex_indices(const VertexIndices & vertex_indices)
```


### grid_vertex_indices_from_value_node

```cpp
public const VertexIndices & grid_vertex_indices_from_value_node(index_t value_node)
```


### grid_vertex_indices_from_computation_node

```cpp
public const VertexIndices & grid_vertex_indices_from_computation_node(index_t computation_node)
```


### node_values_attribute_id

```cpp
public const uuid & node_values_attribute_id()
```


### nb_value_nodes

```cpp
public index_t nb_value_nodes()
```


### get_node_value

```cpp
public std::optional<double> get_node_value(index_t value_node_id)
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
public const absl::linked_hash_map<index_t, std::vector<local_index_t>> & border_value_nodes_derivatives()
```


### nb_large_scale_derivatives

```cpp
public index_t nb_large_scale_derivatives()
```


### value_nodes_larger_scales_derivatives

```cpp
public const absl::linked_hash_map<index_t, std::vector<local_index_t>> & value_nodes_larger_scales_derivatives()
```


### remove_all_value_nodes_but_computation_nodes

```cpp
protected void remove_all_value_nodes_but_computation_nodes()
```




# class ComputationGrid


```cpp
Inherits from LightRegularGrid<3U>
```



## Members

```cpp
public static const auto dim

```



# class ComputationGrid


```cpp
Inherits from LightRegularGrid<2U>
```



## Members

```cpp
public static const auto dim

```



