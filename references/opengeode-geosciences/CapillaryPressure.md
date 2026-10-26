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

# class CapillaryPressure


 Capillary pressure law. Leaf classes must never be renamed: their type name is written in saved files.



## Functions

### CapillaryPressure

```cpp
protected void CapillaryPressure(std::vector<PHASE> phases)
```


### phases

```cpp
public absl::Span<const PHASE> phases()
```


 Order gives the phase index of every per-phase vector

### ~CapillaryPressure

```cpp
public void ~CapillaryPressure()
```


### type_name

```cpp
public std::string_view type_name()
```

### CapillaryPressure

```cpp
protected void CapillaryPressure()
```


### CapillaryPressure

```cpp
protected void CapillaryPressure(const CapillaryPressure & )
```


### CapillaryPressure

```cpp
protected void CapillaryPressure(CapillaryPressure && )
```


### operator=

```cpp
protected CapillaryPressure & operator=(const CapillaryPressure & )
```


### operator=

```cpp
protected CapillaryPressure & operator=(CapillaryPressure && )
```


### serialize

```cpp
protected void serialize(Archive & archive)
```




