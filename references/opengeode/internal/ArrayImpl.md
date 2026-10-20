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

# class ArrayImpl


## Functions

### cell_index

```cpp
public index_t cell_index(const CellArray<dimension> & array, const CellIndices & index)
```


### cell_indices

```cpp
public CellIndices cell_indices(const CellArray<dimension> & array, index_t index)
```


### vertex_strides

```cpp
protected static const std::array<index_t, dimension> & vertex_strides(const CellArray<dimension> & array)
```


### flat_index

```cpp
protected static index_t flat_index(const std::array<index_t, dimension> & strides, const CellIndices & index)
```


### multi_index

```cpp
protected static CellIndices multi_index(const std::array<index_t, dimension> & strides, index_t index)
```




