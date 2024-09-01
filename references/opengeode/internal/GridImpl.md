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

# class GridImpl


```cpp
Inherits from ArrayImpl<dimension>
```



## Functions

### vertex_index

```cpp
public index_t vertex_index(const Grid<dimension> & grid, const VertexIndices & index)
```


### vertex_indices

```cpp
public VertexIndices vertex_indices(const Grid<dimension> & grid, index_t index)
```


### do_update_origin

```cpp
protected void do_update_origin(RegularGrid<dimension> & grid, const Point<dimension> & origin)
```

### do_update_origin_and_directions

```cpp
protected void do_update_origin_and_directions(RegularGrid<dimension> & grid, const Point<dimension> & origin, const std::array<Vector<dimension>, dimension> & directions)
```



