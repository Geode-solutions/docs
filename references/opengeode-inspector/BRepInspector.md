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

# class BRepInspector


 Class for inspecting a BRep model**extends** 



```cpp
Inherits from AddInspectors<BRep, BRepMeshesInspector, BRepTopologyInspector>
```



## Functions

### BRepInspector

```cpp
public void BRepInspector(const BRepInspector & )
```


### operator=

```cpp
public BRepInspector & operator=(const BRepInspector & )
```


### BRepInspector

```cpp
public void BRepInspector(const BRep & brep)
```


### inspect_brep

```cpp
public BRepInspectionResult inspect_brep()
```




