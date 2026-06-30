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

# class StructuralModelInspector


 Class for inspecting a StructuralModel**extends** 



```cpp
Inherits from AddInspectors<StructuralModel, BRepInspector, StructuralModelGeologyInspector>
```



## Functions

### StructuralModelInspector

```cpp
public void StructuralModelInspector(const StructuralModel & model)
```


### inspect_structural_model

```cpp
public StructuralModelInspectionResult inspect_structural_model()
```


### StructuralModelInspector

```cpp
public void StructuralModelInspector(const StructuralModelInspector & )
```


### operator=

```cpp
public StructuralModelInspector & operator=(const StructuralModelInspector & )
```




