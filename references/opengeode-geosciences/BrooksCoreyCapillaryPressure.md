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

# class BrooksCoreyCapillaryPressure


 Pc = entry_pressure * Se^(-1/lambda)



```cpp
Inherits from CapillaryPressure
```



## Functions

### BrooksCoreyCapillaryPressure

```cpp
public void BrooksCoreyCapillaryPressure()
```


### BrooksCoreyCapillaryPressure

```cpp
public void BrooksCoreyCapillaryPressure(std::vector<PHASE> phases, std::vector<double> residual_saturations, std::vector<double> entry_pressures, std::vector<double> pore_size_distribution_indices)
```


 One value per phase in each vector, in the phase order. entry_pressures in Pa, pore_size_distribution_indices is lambda.

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

### entry_pressures

```cpp
public absl::Span<const double> entry_pressures()
```


 Pa

### pore_size_distribution_indices

```cpp
public absl::Span<const double> pore_size_distribution_indices()
```


 lambda



