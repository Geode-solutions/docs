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

# class CrossSection


 A Cross Section is a Section composed of Faults and Horizons (as Lines) and FaultBlocks and StratigraphicUnits (as Surfaces).



```cpp
Inherits from Section, Faults2D, Horizons2D, FaultBlocks2D, StratigraphicUnits2D
```



## Members

```cpp
public static const index_t dim

```



## Records

FaultBlockItemRange

FaultItemRange

HorizonItemRange

StratigraphicUnitItemRange



## Functions

### horizon_items

```cpp
public HorizonItemRange horizon_items(const Horizon2D & horizon)
```


### CrossSection

```cpp
public void CrossSection()
```


### CrossSection

```cpp
public void CrossSection(CrossSection && )
```


### native_extension_static

```cpp
public static std::string_view native_extension_static()
```


### native_extension

```cpp
public std::string_view native_extension()
```


### CrossSection

```cpp
public void CrossSection(Section && section)
```


### CrossSection

```cpp
public void CrossSection(const CrossSection & initial_model, Section && section, const ModelGenericMapping & initial_to_section_mappings)
```


### clone

```cpp
public CrossSection clone()
```


### component

```cpp
public const Component2D & component(const uuid & id)
```


### fault_items

```cpp
public FaultItemRange fault_items(const Fault2D & fault)
```


### fault_block_items

```cpp
public FaultBlockItemRange fault_block_items(const FaultBlock2D & fault_block)
```


### stratigraphic_unit_items

```cpp
public StratigraphicUnitItemRange stratigraphic_unit_items(const StratigraphicUnit2D & stratigraphic_unit)
```




