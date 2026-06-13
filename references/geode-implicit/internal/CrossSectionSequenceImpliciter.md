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
public void CrossSectionSequenceImpliciter(const CrossSectionSequenceImpliciter & )
```


### operator=

```cpp
public CrossSectionSequenceImpliciter & operator=(const CrossSectionSequenceImpliciter & )
```


### CrossSectionSequenceImpliciter

```cpp
public void CrossSectionSequenceImpliciter(const CrossSection & cross_section, const std::vector<uuid> & sequence_horizons)
```


### CrossSectionSequenceImpliciter

```cpp
public void CrossSectionSequenceImpliciter(CrossSectionSequenceImpliciter && other)
```


### operator=

```cpp
public CrossSectionSequenceImpliciter & operator=(CrossSectionSequenceImpliciter && other)
```


### ~CrossSectionSequenceImpliciter

```cpp
public void ~CrossSectionSequenceImpliciter()
```


### add_horizon_data_points_in_surface

```cpp
public void add_horizon_data_points_in_surface(const uuid & horizon_id, const Surface2D & surface, const PointSet2D & points, const ReadOnlyAttribute<double> & weight_attribute, const std::vector<bool> & data_to_account)
```


### add_gradient_data_in_surface

```cpp
public void add_gradient_data_in_surface(const Surface2D & surface, const PointSet2D & gradient_data, const ReadOnlyAttribute<Vector2D> & gradient_attribute, const ReadOnlyAttribute<double> & weight_attribute, const std::vector<bool> & data_to_account)
```


### add_tangential_data_in_surface

```cpp
public void add_tangential_data_in_surface(const Surface2D & surface, const PointSet2D & tangential_data, const ReadOnlyAttribute<Vector2D> & tangents_attribute, const ReadOnlyAttribute<double> & weight_attribute, const std::vector<bool> & data_to_account)
```


### add_orthogonal_vectors_data_in_surface

```cpp
public void add_orthogonal_vectors_data_in_surface(const Surface2D & surface, const PointSet2D & direction_data, const ReadOnlyAttribute<Vector2D> & direction_attribute, const ReadOnlyAttribute<double> & weight_attribute, const std::vector<bool> & data_to_account)
```


### set_horizon_implicit_value

```cpp
public void set_horizon_implicit_value(const uuid & horizon_id, double value)
```


### compute_implicit_in_surfaces

```cpp
public std::vector<SurfaceImplicitInfo> compute_implicit_in_surfaces(const ImplicitationParameters & computation_parameters)
```




