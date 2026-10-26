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

# class SinglePhaseFluid


```cpp
Inherits from FluidModel
```



## Functions

### SinglePhaseFluid

```cpp
public void SinglePhaseFluid()
```


### SinglePhaseFluid

```cpp
public void SinglePhaseFluid(std::vector<PHASE> phases, std::vector<FluidComponent> components, double reference_density, double reference_viscosity, double compressibility, double viscosibility, double reference_pressure, std::optional<FluidThermalProperties> thermal)
```


 Units: reference_density in kg/m3, reference_viscosity in Pa.s, compressibility and viscosibility in 1/Pa, reference_pressure in Pa

### type_name

```cpp
public std::string_view type_name()
```


### type_name_static

```cpp
public static std::string_view type_name_static()
```


### reference_density

```cpp
public double reference_density()
```


 kg/m3

### reference_viscosity

```cpp
public double reference_viscosity()
```


 Pa.s

### compressibility

```cpp
public double compressibility()
```


 1/Pa

### viscosibility

```cpp
public double viscosibility()
```


 1/Pa

### reference_pressure

```cpp
public double reference_pressure()
```


 Pa

### thermal

```cpp
public const std::optional<FluidThermalProperties> & thermal()
```




