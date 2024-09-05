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

# class BackgroundBRepModifier


```cpp
Inherits from BRepGeometricModifier
```



## Functions

### BackgroundBRepModifier

```cpp
public void BackgroundBRepModifier(const BackgroundBRep & background_brep, BackgroundBRepBuilder & builder)
```


### ~BackgroundBRepModifier

```cpp
public void ~BackgroundBRepModifier()
```


### solid_modifier

```cpp
public BackgroundSolidModifier & solid_modifier(const Block3D & block)
```


### modifiable_solid

```cpp
public ModifiableObject modifiable_solid(const Block3D & block)
```




