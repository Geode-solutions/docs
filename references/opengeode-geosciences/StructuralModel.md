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

# class StructuralModel


 A Structural Model is a Boundary Representation composed of Faults and Horizons (as Surfaces) and FaultBlocks and StratigraphicUnits (as Blocks).



```cpp
Inherits from BRep, Faults3D, Horizons3D, FaultBlocks3D, StratigraphicUnits3D
```



## Records

HorizonItemRange

FaultItemRange

FaultBlockItemRange

StratigraphicUnitItemRange



## Functions

### StructuralModel

```cpp
public void StructuralModel()
```


### StructuralModel

```cpp
public void StructuralModel(StructuralModel && )
```


### StructuralModel

```cpp
public void StructuralModel(BRep && brep)
```


### native_extension_static

```cpp
public string_view native_extension_static()
```


### native_extension

```cpp
public string_view native_extension()
```


### horizon_items

```cpp
public HorizonItemRange horizon_items(const Horizon3D & horizon)
```


### fault_items

```cpp
public FaultItemRange fault_items(const Fault3D & fault)
```


### fault_block_items

```cpp
public FaultBlockItemRange fault_block_items(const FaultBlock3D & fault_block)
```


### stratigraphic_unit_items

```cpp
public StratigraphicUnitItemRange stratigraphic_unit_items(const StratigraphicUnit3D & stratigraphic_unit)
```




