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

# class DeadOilFluid


```cpp
Inherits from FluidModel
```



## Functions

### DeadOilFluid

```cpp
public void DeadOilFluid()
```


### DeadOilFluid

```cpp
public void DeadOilFluid(std::vector<PHASE> phases, std::vector<FluidComponent> components, std::vector<double> surface_densities, std::vector<HydrocarbonPvtTable> hydrocarbon_pvt, std::optional<WaterPvt> water_pvt)
```


 surface_densities in kg/m3, one per phase. One hydrocarbon PVT table per oil/gas phase. water_pvt is required if and only if water is a phase.

### type_name

```cpp
public std::string_view type_name()
```


### type_name_static

```cpp
public static std::string_view type_name_static()
```


### surface_densities

```cpp
public absl::Span<const double> surface_densities()
```


 kg/m3, one per phase

### hydrocarbon_pvt

```cpp
public absl::Span<const HydrocarbonPvtTable> hydrocarbon_pvt()
```


 One per oil/gas phase

### water_pvt

```cpp
public const std::optional<WaterPvt> & water_pvt()
```


 Defined if and only if water is a phase



