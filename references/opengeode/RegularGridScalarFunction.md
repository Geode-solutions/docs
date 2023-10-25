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

# class RegularGridScalarFunction

# class RegularGridScalarFunction

# class RegularGridScalarFunction


## Records

Impl



## Functions

### RegularGridScalarFunction

```cpp
public void RegularGridScalarFunction<dimension>(RegularGridScalarFunction<dimension> && other)
```


### ~RegularGridScalarFunction

```cpp
public void ~RegularGridScalarFunction<dimension>()
```


### create

```cpp
public RegularGridScalarFunction create(const Grid<dimension> & grid, string_view function_name, double value)
```


 Create a new object function from a RegularGrid, a name, and a value. Throws an exception if an attribute with the same name exists.

### find

```cpp
public RegularGridScalarFunction find(const Grid<dimension> & grid, string_view function_name)
```


 Finds an object function that already exists in the given RegularGrid, from its given name. Throws an exception if no attribute with the same name exists.

### set_value

```cpp
public void set_value(const typename Grid<dimension>::VertexIndices & vertex_index, double value)
```


### set_value

```cpp
public void set_value(index_t vertex_index, double value)
```


### value

```cpp
public double value(const typename Grid<dimension>::VertexIndices & vertex_index)
```


### value

```cpp
public double value(index_t vertex_index)
```


### value

```cpp
public double value(const Point<dimension> & point, const typename Grid<dimension>::CellIndices & grid_cell_indices)
```




