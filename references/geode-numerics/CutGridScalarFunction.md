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

# class CutGridScalarFunction

# class CutGridScalarFunction


## Functions

### CutGridScalarFunction

```cpp
public void CutGridScalarFunction<dimension>(const CutGrid<dimension> & grid)
```


### CutGridScalarFunction

```cpp
public void CutGridScalarFunction<dimension>(CutGridScalarFunction<dimension> && other)
```


### ~CutGridScalarFunction

```cpp
public void ~CutGridScalarFunction<dimension>()
```


### value

```cpp
public std::optional<double> value(const VertexIndices & vertex_indices)
```


### value

```cpp
public std::optional<double> value(const Point<dimension> & point, const CellIndices & cell_indices, index_t cell_duplicate)
```


### gradient_value

```cpp
public std::optional<Vector<dimension> > gradient_value(const VertexIndices & vertex_indices)
```


### gradient_value

```cpp
public std::optional<Vector<dimension> > gradient_value(const Point<dimension> & point, const CellIndices & cell_indices)
```


### gradient_value

```cpp
public std::optional<Vector<dimension> > gradient_value(const Point<dimension> & point, const CellIndices & cell_indices, index_t cell_duplicate)
```




# class CutGridScalarFunction

