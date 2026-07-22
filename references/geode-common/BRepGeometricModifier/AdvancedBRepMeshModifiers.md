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

# class AdvancedBRepMeshModifiers


```cpp
Inherits from detail::AdvancedModelMeshModifiers<BRep>
```



## Functions

### AdvancedBRepMeshModifiers

```cpp
public void AdvancedBRepMeshModifiers(const BRep & model, BRepBuilder & builder, BRepGeometricModifier & brep_modifier, BRepGeometricModifierKey )
```


### block_modifier

```cpp
public TetrahedralSolidModifier & block_modifier(const Block3D & block)
```


### reset_block_modifier

```cpp
public void reset_block_modifier(const Block3D & block)
```


### modifiable_solid

```cpp
public ModifiableTetrahedralSolid modifiable_solid(const Block3D & block)
```




