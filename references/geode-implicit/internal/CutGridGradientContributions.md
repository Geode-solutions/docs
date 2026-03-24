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

# class CutGridGradientContributions


# class CutGridGradientContributions


## Functions

### CutGridGradientContributions

```cpp
public void CutGridGradientContributions<dimension>(const CutGridGradientContributions<dimension> & )
```


### operator=

```cpp
public CutGridGradientContributions<dimension> & operator=(const CutGridGradientContributions<dimension> & )
```


### CutGridGradientContributions

```cpp
public void CutGridGradientContributions<dimension>(const CutGrid<dimension> & grid)
```


### CutGridGradientContributions

```cpp
public void CutGridGradientContributions<dimension>(CutGridGradientContributions<dimension> && other)
```


### operator=

```cpp
public CutGridGradientContributions<dimension> & operator=(CutGridGradientContributions<dimension> && other)
```


### ~CutGridGradientContributions

```cpp
public void ~CutGridGradientContributions<dimension>()
```


### gradient_contributions

```cpp
public std::optional<NodeContributions> gradient_contributions(const VertexIndices & vertex_indices)
```


### gradient_contributions

```cpp
public std::optional<NodeContributions> gradient_contributions(const Point<dimension> & point, const CellIndices & cell_indices)
```


### gradient_contributions

```cpp
public std::optional<NodeContributions> gradient_contributions(const Point<dimension> & point, const CellIndices & cell_indices, index_t cell_duplicate)
```




# class CutGridGradientContributions


