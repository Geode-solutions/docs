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

# class LightRegularGrid


```cpp
Inherits from Grid<dimension>, Identifier
```



## Records

Impl



## Functions

### LightRegularGrid

```cpp
public void LightRegularGrid<dimension>(Point<dimension> origin, std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length)
```


### LightRegularGrid

```cpp
public void LightRegularGrid<dimension>(LightRegularGrid<dimension> && other)
```


### ~LightRegularGrid

```cpp
public void ~LightRegularGrid<dimension>()
```


### vertex_index

```cpp
public index_t vertex_index(const VertexIndices & index)
```

### vertex_indices

```cpp
public VertexIndices vertex_indices(index_t index)
```


### cell_index

```cpp
public index_t cell_index(const CellIndices & index)
```

### cell_indices

```cpp
public CellIndices cell_indices(index_t index)
```


### cell_attribute_manager

```cpp
public AttributeManager & cell_attribute_manager()
```


### grid_vertex_attribute_manager

```cpp
public AttributeManager & grid_vertex_attribute_manager()
```


### vertex_index

```cpp
public index_t vertex_index(const VertexIndices & index)
```


### cell_index

```cpp
public index_t cell_index(const CellIndices & index)
```




# class LightRegularGrid

# class LightRegularGrid

