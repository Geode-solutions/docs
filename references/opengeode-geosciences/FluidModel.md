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

# class FluidModel


 Fluid description shared by every simulator. Leaf classes must never be renamed: their type name is written in saved files.



## Functions

### FluidModel

```cpp
protected void FluidModel(std::vector<PHASE> phases, std::vector<FluidComponent> components)
```


### phases

```cpp
public absl::Span<const PHASE> phases()
```


 Order gives the phase index of every per-phase vector

### components

```cpp
public absl::Span<const FluidComponent> components()
```


 Order gives the component index of every composition vector

### ~FluidModel

```cpp
public void ~FluidModel()
```


### type_name

```cpp
public std::string_view type_name()
```

### FluidModel

```cpp
protected void FluidModel()
```


### FluidModel

```cpp
protected void FluidModel(const FluidModel & )
```


### FluidModel

```cpp
protected void FluidModel(FluidModel && )
```


### operator=

```cpp
protected FluidModel & operator=(const FluidModel & )
```


### operator=

```cpp
protected FluidModel & operator=(FluidModel && )
```


### serialize

```cpp
protected void serialize(Archive & archive)
```




