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

# class GridBuilder


# class GridBuilder


# class GridBuilder


## Functions

### GridBuilder

```cpp
public void GridBuilder<dimension>(Grid<dimension> & grid)
```


### GridBuilder

```cpp
public void GridBuilder<dimension>(GridBuilder<dimension> && )
```


### set_grid_origin

```cpp
public void set_grid_origin(Point<dimension> origin)
```


### set_grid_dimensions

```cpp
public void set_grid_dimensions(std::array<index_t, dimension> cells_number, std::array<double, dimension> cells_length)
```


### set_grid_directions

```cpp
public void set_grid_directions(std::array<Vector<dimension>, dimension> directions)
```


### copy

```cpp
public void copy(const Grid<dimension> & grid)
```




