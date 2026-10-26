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

# class Co2BrineFluid


 CO2-brine fluid computed from correlations. Thermal behavior is part of the correlation: writers select the thermal variant when the problem is thermal.



```cpp
Inherits from FluidModel
```



## Functions

### Co2BrineFluid

```cpp
public void Co2BrineFluid()
```


### Co2BrineFluid

```cpp
public void Co2BrineFluid(std::vector<PHASE> phases, std::vector<FluidComponent> components, CO2_BRINE_CORRELATION correlation, double salinity, ValidityRange pressure_range, ValidityRange temperature_range, std::vector<double> ezrokhi_density_coefficients, std::vector<double> ezrokhi_viscosity_coefficients)
```


 salinity in mol/kg, pressure_range in Pa, temperature_range in K

### type_name

```cpp
public std::string_view type_name()
```


### type_name_static

```cpp
public static std::string_view type_name_static()
```


### correlation

```cpp
public CO2_BRINE_CORRELATION correlation()
```


### salinity

```cpp
public double salinity()
```


 mol/kg

### pressure_range

```cpp
public const ValidityRange & pressure_range()
```


 Pa

### temperature_range

```cpp
public const ValidityRange & temperature_range()
```


 K

### ezrokhi_density_coefficients

```cpp
public absl::Span<const double> ezrokhi_density_coefficients()
```


### ezrokhi_viscosity_coefficients

```cpp
public absl::Span<const double> ezrokhi_viscosity_coefficients()
```




