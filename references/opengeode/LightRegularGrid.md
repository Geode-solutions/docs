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



## Functions

### LightRegularGrid

```cpp
public void LightRegularGrid<dimension>(Point<dimension> origin, std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length)
```


### LightRegularGrid

```cpp
public void LightRegularGrid<dimension>(Point<dimension> origin, std::array<index_t, dimension> cells_number, std::array<Vector<dimension>, dimension> directions)
```


### LightRegularGrid

```cpp
public void LightRegularGrid<dimension>(LightRegularGrid<dimension> && other)
```


### ~LightRegularGrid

```cpp
public void ~LightRegularGrid<dimension>()
```


### native_extension_static

```cpp
public basic_string_view native_extension_static()
```


### native_extension

```cpp
public basic_string_view native_extension()
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


### point

```cpp
public Point<dimension> point(index_t vertex_id)
```


### vertices_around_vertex

```cpp
public VerticesAroundVertex vertices_around_vertex(index_t vertex_id)
```


### cell_attribute_manager

```cpp
public AttributeManager & cell_attribute_manager()
```


### grid_vertex_attribute_manager

```cpp
public AttributeManager & grid_vertex_attribute_manager()
```




# class LightRegularGrid


```cpp
Inherits from Grid<2U>, Identifier
```



# class LightRegularGrid


```cpp
Inherits from Grid<3U>, Identifier
```



