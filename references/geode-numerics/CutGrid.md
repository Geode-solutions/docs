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

# class CutGrid


```cpp
Inherits from ComputationGrid<dimension>
```



## Records

Impl



## Functions

### ~CutGrid

```cpp
public void ~CutGrid<>()
```


### nb_value_nodes

```cpp
public index_t nb_value_nodes()
```


### set_nb_additional_value_nodes

```cpp
public void set_nb_additional_value_nodes(index_t nb_additional_value_nodes)
```


### set_node_value

```cpp
public void set_node_value(index_t value_node_id, double value)
```


### get_node_value

```cpp
public double get_node_value(index_t value_node_id)
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

