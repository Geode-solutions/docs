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

# class StructuralModelBuilder


 Class managing modifications of a StructuralModel



```cpp
Inherits from BRepBuilder, FaultsBuilder3D, HorizonsBuilder3D, FaultBlocksBuilder3D, StratigraphicUnitsBuilder3D
```



## Functions

### StructuralModelBuilder

```cpp
public void StructuralModelBuilder(const StructuralModelBuilder & )
```


### operator=

```cpp
public StructuralModelBuilder & operator=(const StructuralModelBuilder & )
```


### StructuralModelBuilder

```cpp
public void StructuralModelBuilder(StructuralModelBuilder && )
```


### operator=

```cpp
public StructuralModelBuilder & operator=(StructuralModelBuilder && )
```


### StructuralModelBuilder

```cpp
public void StructuralModelBuilder(StructuralModel & structural_model)
```


### copy

```cpp
public ModelMapping copy(const StructuralModel & structural_model)
```


### copy_geological_components

```cpp
public void copy_geological_components(ModelCopyMapping & mapping, const StructuralModel & structural_model)
```


### add_fault

```cpp
public const uuid & add_fault()
```


### add_fault

```cpp
public const uuid & add_fault(typename Fault3D::FAULT_TYPE type)
```


### add_fault

```cpp
public void add_fault(uuid fault_id)
```


### add_fault

```cpp
public void add_fault(uuid fault_id, typename Fault3D::FAULT_TYPE type)
```


### add_surface_in_fault

```cpp
public index_t add_surface_in_fault(const Surface3D & surface, const Fault3D & fault)
```


### remove_fault

```cpp
public void remove_fault(const Fault3D & fault)
```


### add_horizon

```cpp
public const uuid & add_horizon()
```


### add_horizon

```cpp
public const uuid & add_horizon(typename Horizon3D::HORIZON_TYPE type)
```


### add_horizon

```cpp
public void add_horizon(uuid horizon_id)
```


### add_horizon

```cpp
public void add_horizon(uuid horizon_id, typename Horizon3D::HORIZON_TYPE type)
```


### add_surface_in_horizon

```cpp
public index_t add_surface_in_horizon(const Surface3D & surface, const Horizon3D & horizon)
```


### remove_horizon

```cpp
public void remove_horizon(const Horizon3D & horizon)
```


### add_fault_block

```cpp
public const uuid & add_fault_block()
```


### add_fault_block

```cpp
public void add_fault_block(uuid fault_block_id)
```


### add_block_in_fault_block

```cpp
public index_t add_block_in_fault_block(const Block3D & block, const FaultBlock3D & fault_block)
```


### remove_fault_block

```cpp
public void remove_fault_block(const FaultBlock3D & fault_block)
```


### add_stratigraphic_unit

```cpp
public const uuid & add_stratigraphic_unit()
```


### add_stratigraphic_unit

```cpp
public void add_stratigraphic_unit(uuid stratigraphic_unit_id)
```


### add_block_in_stratigraphic_unit

```cpp
public index_t add_block_in_stratigraphic_unit(const Block3D & block, const StratigraphicUnit3D & stratigraphic_unit)
```


### remove_stratigraphic_unit

```cpp
public void remove_stratigraphic_unit(const StratigraphicUnit3D & stratigraphic_unit)
```


### copy_geological_components

```cpp
public void copy_geological_components(int & mapping, const StructuralModel & structural_model)
```

### add_fault

```cpp
public const uuid & add_fault(int type)
```

### add_fault

```cpp
public void add_fault(uuid fault_id, int type)
```

### add_horizon

```cpp
public const uuid & add_horizon(int type)
```

### add_horizon

```cpp
public void add_horizon(uuid horizon_id, int type)
```



