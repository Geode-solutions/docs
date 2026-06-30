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

# class StructuralModelGeologyInspector


 Class for inspecting the geology of a StructuralModel model corners



## Functions

### StructuralModelGeologyInspector

```cpp
public void StructuralModelGeologyInspector(const StructuralModelGeologyInspector & )
```


### operator=

```cpp
public StructuralModelGeologyInspector & operator=(const StructuralModelGeologyInspector & )
```


### StructuralModelGeologyInspector

```cpp
public void StructuralModelGeologyInspector(const StructuralModel & model)
```


### ~StructuralModelGeologyInspector

```cpp
public void ~StructuralModelGeologyInspector()
```


### structural_model_geology_is_valid

```cpp
public bool structural_model_geology_is_valid()
```


 Checks if the model is geologically valid

### geometrical_components_are_linked_to_geology

```cpp
public bool geometrical_components_are_linked_to_geology()
```


### geological_components_are_linked_to_geometry

```cpp
public bool geological_components_are_linked_to_geometry()
```


### horizons_are_valid

```cpp
public bool horizons_are_valid()
```


### inspect_structural_model_geology

```cpp
public StructuralModelGeologyInspectionResult inspect_structural_model_geology()
```




