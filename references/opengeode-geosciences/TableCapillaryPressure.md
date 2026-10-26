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

# class TableCapillaryPressure


```cpp
Inherits from CapillaryPressure
```



## Functions

### TableCapillaryPressure

```cpp
public void TableCapillaryPressure()
```


### TableCapillaryPressure

```cpp
public void TableCapillaryPressure(std::vector<PHASE> phases, std::vector<TwoPhaseCapillaryPressureTable> tables)
```


### type_name

```cpp
public std::string_view type_name()
```


### type_name_static

```cpp
public static std::string_view type_name_static()
```


### tables

```cpp
public absl::Span<const TwoPhaseCapillaryPressureTable> tables()
```




