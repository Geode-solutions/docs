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

# class StructuralModelSequenceImpliciter


## Functions

### StructuralModelSequenceImpliciter

```cpp
public void StructuralModelSequenceImpliciter(StructuralModel & structural_model, const HorizonsStack3D & horizons_stack, const std::vector<uuid> & sequence_horizons)
```


### StructuralModelSequenceImpliciter

```cpp
public void StructuralModelSequenceImpliciter(StructuralModelSequenceImpliciter && other)
```


### ~StructuralModelSequenceImpliciter

```cpp
public void ~StructuralModelSequenceImpliciter()
```


### add_horizon_data_point_in_block

```cpp
public void add_horizon_data_point_in_block(const uuid & horizon_id, const Block3D & block, const Point3D & point, double weight)
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const uuid & horizon_id, double value)
```


### compute_implicit_in_blocks

```cpp
public vector compute_implicit_in_blocks(const ImplicitationParameters & computation_parameters)
```




