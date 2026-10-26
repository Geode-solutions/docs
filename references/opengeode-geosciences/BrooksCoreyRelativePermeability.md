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

# class BrooksCoreyRelativePermeability


```cpp
Inherits from RelativePermeability
```



## Functions

### BrooksCoreyRelativePermeability

```cpp
public void BrooksCoreyRelativePermeability()
```


### BrooksCoreyRelativePermeability

```cpp
public void BrooksCoreyRelativePermeability(std::vector<PHASE> phases, std::vector<double> residual_saturations, std::vector<double> exponents, std::vector<double> max_values)
```


 One value per phase in each vector, in the phase order

### type_name

```cpp
public std::string_view type_name()
```


### type_name_static

```cpp
public static std::string_view type_name_static()
```


### residual_saturations

```cpp
public absl::Span<const double> residual_saturations()
```


 One value per phase

### exponents

```cpp
public absl::Span<const double> exponents()
```


### max_values

```cpp
public absl::Span<const double> max_values()
```




