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

# class GridScalarFunctionExpliciter2D


## Functions

### GridScalarFunctionExpliciter2D

```cpp
public void GridScalarFunctionExpliciter2D(const Grid2D & grid, basic_string_view scalar_function_name)
```


### ~GridScalarFunctionExpliciter2D

```cpp
public void ~GridScalarFunctionExpliciter2D()
```


### add_scalar_isovalues

```cpp
public void add_scalar_isovalues(Span scalar_function_values)
```


### add_one_scalar_isovalue

```cpp
public void add_one_scalar_isovalue(double isovalue)
```


### build_section

```cpp
public Section build_section()
```




