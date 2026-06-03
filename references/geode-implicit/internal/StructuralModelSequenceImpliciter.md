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
public void StructuralModelSequenceImpliciter(const StructuralModelSequenceImpliciter & )
```


### operator=

```cpp
public StructuralModelSequenceImpliciter & operator=(const StructuralModelSequenceImpliciter & )
```


### StructuralModelSequenceImpliciter

```cpp
public void StructuralModelSequenceImpliciter(ImplicitStructuralModel & structural_model, const std::vector<uuid> & sequence_horizons)
```


### StructuralModelSequenceImpliciter

```cpp
public void StructuralModelSequenceImpliciter(StructuralModelSequenceImpliciter && other)
```


### operator=

```cpp
public StructuralModelSequenceImpliciter & operator=(StructuralModelSequenceImpliciter && other)
```


### ~StructuralModelSequenceImpliciter

```cpp
public void ~StructuralModelSequenceImpliciter()
```


### add_horizon_data_points_in_block

```cpp
public void add_horizon_data_points_in_block(const uuid & horizon_id, const Block3D & block, const PointSet3D & points, const ReadOnlyAttribute<double> & weight_attribute, const std::vector<bool> & data_to_account)
```


### add_gradient_data_in_block

```cpp
public void add_gradient_data_in_block(const Block3D & block, const PointSet3D & gradient_data, const ReadOnlyAttribute<Vector3D> & gradient_attribute, const ReadOnlyAttribute<double> & weight_attribute, const std::vector<bool> & data_to_account)
```


### add_tangential_data_in_block

```cpp
public void add_tangential_data_in_block(const Block3D & block, const PointSet3D & tangential_data, const ReadOnlyAttribute<Vector3D> & tangents_attribute, const ReadOnlyAttribute<double> & weight_attribute, const std::vector<bool> & data_to_account)
```


### add_orthogonal_vectors_data_in_block

```cpp
public void add_orthogonal_vectors_data_in_block(const Block3D & block, const PointSet3D & direction_data, const ReadOnlyAttribute<Vector3D> & direction_attribute, const ReadOnlyAttribute<double> & weight_attribute, const std::vector<bool> & data_to_account)
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const uuid & horizon_id, double value)
```


### compute_implicit_in_blocks

```cpp
public vector compute_implicit_in_blocks(const ImplicitationParameters & computation_parameters, bool compute_first_thickness_guess)
```




