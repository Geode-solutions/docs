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

# class ImplicitStructuralModelBuilder


 Class managing modifications of a ImplicitStructuralModel



```cpp
Inherits from StructuralModelBuilder
```



## Functions

### ImplicitStructuralModelBuilder

```cpp
public void ImplicitStructuralModelBuilder(ImplicitStructuralModel & implicit_model)
```


### copy

```cpp
public ModelMapping copy(const ImplicitStructuralModel & implicit_model)
```


### copy_implicit_information

```cpp
public void copy_implicit_information(ModelCopyMapping & mapping, const ImplicitStructuralModel & other_model)
```


### reinitialize_implicit_query_trees

```cpp
public void reinitialize_implicit_query_trees()
```


### instantiate_implicit_attribute_on_blocks

```cpp
public void instantiate_implicit_attribute_on_blocks()
```


### set_implicit_value

```cpp
public void set_implicit_value(const Block3D & block, index_t vertex_id, double value)
```


### set_horizons_stack

```cpp
public void set_horizons_stack(HorizonsStack3D && stack)
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const Horizon3D & horizon, double isovalue)
```


### horizons_stack_builder

```cpp
public HorizonsStackBuilder horizons_stack_builder()
```




