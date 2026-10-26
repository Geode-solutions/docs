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

# class UniformInitialCondition


```cpp
Inherits from InitialCondition
```



## Functions

### UniformInitialCondition

```cpp
public void UniformInitialCondition()
```


### UniformInitialCondition

```cpp
public void UniformInitialCondition(std::vector<uuid> regions, double pressure, std::optional<double> temperature, std::vector<double> composition)
```


 Empty regions means every region without another initial condition. pressure in Pa, temperature in K, composition as global fractions in the fluid component order.

### type_name

```cpp
public std::string_view type_name()
```


### type_name_static

```cpp
public static std::string_view type_name_static()
```


### pressure

```cpp
public double pressure()
```


 Pa

### temperature

```cpp
public const std::optional<double> & temperature()
```


 K

### composition

```cpp
public absl::Span<const double> composition()
```


 Global fractions, in the fluid component order



