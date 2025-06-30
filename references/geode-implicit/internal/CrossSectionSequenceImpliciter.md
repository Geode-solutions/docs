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

# class CrossSectionSequenceImpliciter


## Functions

### CrossSectionSequenceImpliciter

```cpp
public void CrossSectionSequenceImpliciter(const CrossSection & structural_model, const std::vector<uuid> & sequence_horizons)
```


### CrossSectionSequenceImpliciter

```cpp
public void CrossSectionSequenceImpliciter(CrossSectionSequenceImpliciter && other)
```


### ~CrossSectionSequenceImpliciter

```cpp
public void ~CrossSectionSequenceImpliciter()
```


### add_horizon_data_point_in_surface

```cpp
public void add_horizon_data_point_in_surface(const uuid & horizon_id, const Surface2D & surface, const Point2D & point, double weight)
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const uuid & horizon_id, double value)
```


### compute_implicit_in_surfaces

```cpp
public vector compute_implicit_in_surfaces(const ImplicitationParameters & computation_parameters)
```




